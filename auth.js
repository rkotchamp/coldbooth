import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import clientPromise from "@/app/lib/mongodb";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async signIn({ user, account }) {
      if (account.provider === "google") {
        try {
          const client = await clientPromise;
          const db = client.db(process.env.MONGO_DB);

          // Check if user exists
          const existingUser = await db.collection("users").findOne({
            email: user.email,
          });

          if (!existingUser) {
            // Create new user if doesn't exist
            await db.collection("users").insertOne({
              fullName: user.name,
              email: user.email,
              imageUrl: user.image,
              googleId: user.id,
              createdAt: new Date(),
              updatedAt: new Date(),
            });
          }
          return true;
        } catch (error) {
          console.error("Error saving user:", error);
          return false;
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session?.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async jwt({ token, user, account }) {
      if (account && user) {
        token.accessToken = account.access_token;
        token.id = user.id;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/login",
    error: "/auth/error",
  },
});

export const { handlers, auth, signIn, signOut } = handler;
