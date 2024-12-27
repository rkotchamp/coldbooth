import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";

export async function POST(request) {
  const { password, token } = await request.json();

  if (!token) {
    return NextResponse.json(
      { message: "Token is missing in the request" },
      { status: 400 },
    );
  }

  const client = await clientPromise;
  const db = client.db(process.env.MONGO_DB);

  const resetRequest = await db
    .collection("password_resets")
    .findOne({ token });

  if (!resetRequest || resetRequest.expires < Date.now()) {
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 400 },
    );
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  await db
    .collection("users")
    .updateOne(
      { email: resetRequest.email },
      { $set: { passwordHash: hashedPassword } },
    );

  await db.collection("password_resets").deleteOne({ token });

  return NextResponse.json({ message: "Password has been reset successfully" });
}
