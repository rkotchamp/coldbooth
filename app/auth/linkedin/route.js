// // TODO: The LinkedIn setUp will be done later when needed

// import { NextResponse } from "next/server";
// import clientPromise from "@/app/lib/mongodb";
// import { cookies, headers } from "next/headers";
// import jwt from "jsonwebtoken";
// import { object } from "zod";

// export async function GET(request) {
//   console.log("The callback started");
//   // Console logging for debugging
//   const requestLog = {
//     url: request.url,
//     method: request.method,
//     headers: object.fromEntries(request.headers),
//   };
//   console.log("incoming request details:", requestLog);

//   try {
//     console.log("Log request details", request);
//     const searchParams = request.nextUrl.searchParams;
//     const code = searchParams.get("code");
//     const state = searchParams.get("state");
//     const error = searchParams.get("error");
//     const error_description = searchParams.get("error_description");

//     console.log("OAuth parameters received:", {
//       code,
//       state,
//       error,
//       error_description,
//     });

//     const storedState = cookies().get("linkedin_auth_state")?.value;
//     if (!storedState || storedState !== state) {
//       console.error("State mismatch:", { storedState, receivedState: state });
//       return NextResponse.redirect(
//         new URL("/login?error=invalid_state", request.url),
//       );
//     }

//     const cookieStore = cookies();
//     const token = cookieStore.get("token");
//     console.log("token from cookies", token);

//     if (!token?.value) {
//       console.error("No authentication token found");
//       return NextResponse.redirect(
//         new URL("/login?error=authentication_required", request.url),
//       );
//     }

//     if (error) {
//       console.error("LinkedIn OAuth error:", error, error_description);
//       return NextResponse.redirect(
//         new URL(
//           `/settings?error=${encodeURIComponent(error_description)}`,
//           request.url,
//         ),
//       );
//     }

//     if (!code || !state) {
//       throw new Error("Missing required OAuth parameters");
//     }

//     console.log("Exchanging code for token...");
//     const tokenResponse = await fetch(
//       "https://www.linkedin.com/oauth/v2/accessToken",
//       {
//         method: "POST",
//         headers: {
//           // TODO:edit here
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//         body: new URLSearchParams({
//           grant_type: "authorization_code",
//           code: code,
//           redirect_uri: process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI,
//           client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
//           client_secret: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_SECRET,
//         }),
//       },
//     );
//     const tokenRaw = await tokenResponse.text();
//     console, log("token raw", tokenRaw);
//     if (!tokenResponse.ok) {
//       const errorData = await tokenResponse.json();
//       console.error("Token exchange failed:", errorData);
//       throw new Error(`Token exchange failed: ${errorData.error_description}`);
//     }
//     const tokenData = await tokenResponse.json();
//     console.log("LinkedIn token received:", {
//       access_token: tokenData.access_token ? "Present" : "Missing",
//       expires_in: tokenData.expires_in,
//     });

//     console.log("Fetching LinkedIn profile...");
//     const profileResponse = await fetch("https://api.linkedin.com/v2/me", {
//       headers: {
//         Authorization: `Bearer ${tokenData.access_token}`,
//       },
//     });

//     if (!profileResponse.ok) {
//       const profileError = await profileResponse.json();
//       console.error("Profile fetch failed:", profileError);
//       throw new Error("Failed to fetch LinkedIn profile");
//     }
//     const profileData = await profileResponse.json();
//     console.log("LinkedIn profile fetched:", {
//       id: profileData.id,
//       hasData: Object.keys(profileData).length > 0,
//     });

//     console.log("Fetching LinkedIn email...");
//     const emailResponse = await fetch(
//       "https://api.linkedin.com/v2/emailAddress?q=members&projection=(elements*(handle~))",
//       {
//         headers: {
//           Authorization: `Bearer ${tokenData.access_token}`,
//         },
//       },
//     );

//     if (!emailResponse.ok) {
//       throw new Error("Failed to fetch LinkedIn email");
//     }
//     const emailData = await emailResponse.json();
//     const linkedInEmail = emailData.elements[0]["handle~"].emailAddress;
//     console.log("linkedIn email Data", linkedInEmail);
//     try {
//       const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
//       const userId = decodedToken.userId;
//       console.log("User ID retrieved from token:", userId);

//       const client = await clientPromise;
//       const db = client.db(process.env.MONGO_DB);
//       const usersCollection = db.collection("users");

//       const platformData = {
//         platformName: "LinkedIn",
//         platformId: profileData.id,
//         linkedInEmail,
//         accessToken: tokenData.access_token,
//         integrationStatus: "connected",
//         connectedAt: new Date(),
//         profile: {
//           ...profileData,
//           email: linkedInEmail,
//         },
//       };

//       console.log("db infor", platformData);
//       const result = await usersCollection.updateOne(
//         { _id: userId },
//         {
//           $set: { updatedAt: new Date() },
//           $addToSet: { platforms: platformData },
//         },
//       );

//       console.log("Database update result:", {
//         matchedCount: result.matchedCount,
//         modifiedCount: result.modifiedCount,
//       });

//       if (!result.matchedCount) {
//         throw new Error("User not found or update failed");
//       }
//       return NextResponse.redirect(
//         new URL("/settings?status=linkedin_connected", request.url),
//       );
//     } catch (jwtError) {
//       console.error("JWT verification failed:", jwtError);
//       return NextResponse.redirect(
//         new URL("/login?error=invalid_token", request.url),
//       );
//     }

//     // TODO: Store the tokens and profile data in your database
//   } catch (error) {
//     console.error("LinkedIn callback error:", error);
//     // Log detailed error information
//     console.error({
//       message: error.message,
//       stack: error.stack,
//       cause: error.cause,
//     });
//     // Determine if it's a specific error that needs special handling
//     if (error.message.includes("Token exchange failed")) {
//       return NextResponse.redirect(
//         new URL("/settings?error=linkedin_token_exchange_failed", request.url),
//       );
//     }

//     return NextResponse.redirect(
//       new URL(
//         `/settings?error=${encodeURIComponent(error.message)}`,
//         request.url,
//       ),
//     );
//   }
// }

// export async function POST(request) {
//   try {
//     const { recipientId, message } = await request.json();
//     console.log(message, recipientId);
//     return NextResponse.json({ success: true });
//   } catch (error) {
//     return NextResponse.json(
//       { error: "Failed to send message" },
//       { status: 500 },
//     );
//   }
// }
