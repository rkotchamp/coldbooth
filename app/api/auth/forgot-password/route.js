import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import crypto from "crypto";
import nodemailer from "nodemailer";

export async function POST(request) {
  const { email } = await request.json();

  const client = await clientPromise;
  const db = client.db(process.env.MONGO_DB);

  const user = await db.collection("users").findOne({ email });

  if (!user) {
    return NextResponse.json({ message: "User not found" }, { status: 404 });
  }

  const token = crypto.randomBytes(32).toString("hex");

  await db.collection("password_resets").insertOne({
    email,
    token,
    expires: Date.now() + 3600000,
  });

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // Create the reset link
  const resetLink = `${process.env.NEXTAUTH_URL}/auth/forgot-password?token=${token}`;

  // Send the email
  await transporter.sendMail({
    to: email,
    subject: "Password Reset",
    html: `<p>You requested a password reset. Click the link below to reset your password:</p><p><a href="${resetLink}">Reset Password</a></p>`,
  });

  return NextResponse.json({ message: "Password reset link sent" });
}
