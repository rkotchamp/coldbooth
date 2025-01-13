import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { recpientId, message } = await request.json();
    console.log(message, recpientId);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 },
    );
  }
}
