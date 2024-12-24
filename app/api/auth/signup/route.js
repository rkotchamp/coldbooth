import { NextResponse } from "next/server";
import { connectToDB } from "@/app/lib/mongodb";
import bcrypt from "bcryptjs";
import { signJwtToken } from "@/app/lib/jwt";

export async function POST(request) {
  try {
    console.log("API route hit");
    console.log("The request is:", request);

    const { fullName, email, password } = await request.json();
    console.log("Received data:", { fullName, email, password });

    return NextResponse.json(
      { message: "Data received successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error processing signup request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
