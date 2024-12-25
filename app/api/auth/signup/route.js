import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";
import { signJwtToken } from "@/app/lib/jwt";

export async function POST(request) {
  try {
    const { fullName, email, password } = await request.json();

    const client = await clientPromise;
    const db = client.db(process.env.MONGODB_DB);

    const existingUser = await db.collection("users").findOne({ email });

    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists, do you want to login?" },
        { status: 400 },
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const newUser = {
      fullName,
      email,
      passwordHash: hashedPassword,
      googleId: null,
      imageUrl: null,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection("users").insertOne(newUser);

    if (!result.acknowledged) {
      throw new Error("Failed to insert user");
    }

    const token = await signJwtToken({
      userId: result.insertedId.toString(),
      email: newUser.email,
    });

    const response = NextResponse.json(
      { message: "User created successfully" },
      { status: 201 },
    );

    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 30 * 24 * 60 * 60,
      sameSite: "lax",
    });

    return response;
  } catch (error) {
    console.error("Error processing signup request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
