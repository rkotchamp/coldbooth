import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/mongodb";
import bcrypt from "bcryptjs";
import { signJwtToken } from "@/lib/jwt";

export async function POST(request) {
  try {
    // Debug incoming request
    const body = await request.json();
    console.log("Received request body:", body);

    const { fullName, email, password } = await request.json();

    const { db } = await connectToDatabase();
    const users = db.collection("users");

    const existingUser = await users.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    const now = new Date();
    const hashedPassword = await bcrypt.hash(password, 12);
    const newUser = await users.insertOne({
      fullName,
      email: email.toLowerCase(),
      passwordHash: hashedPassword,
      googleId: null,
      createdAt: now,
      updatedAt: now,
    });

    console.log(newUser);

    const token = signJwtToken({
      email: email.toLowerCase(),
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        user: {
          email: email.toLowerCase(),
          fullName,
          createdAt: now,
          updatedAt: now,
        },
      },
      {
        status: 201,
        headers: {
          "Set-Cookie": `token=${token}; HttpOnly; Secure; SameSite=Strict; Path=/`,
        },
      },
    );
  } catch (error) {
    console.error("Sign up error", error);
    return NextResponse.json(
      { error: "Failed to create user" },
      { status: 500 },
    );
  }
}
