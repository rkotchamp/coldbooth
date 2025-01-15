import { NextResponse } from "next/server";

export async function POST(request) {
  console.log(request);
  try {
    const body = await request.text(); // Twilio sends data as `application/x-www-form-urlencoded`
    const params = new URLSearchParams(body);

    const from = params.get("From");
    const to = params.get("To");
    const messageBody = params.get("Body");

    console.log("Received message:", {
      from,
      to,
      messageBody,
    });

    // Process the received message as needed

    return NextResponse.json({
      success: true,
      message: "Message received",
    });
  } catch (error) {
    console.error("Error receiving message:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to process incoming message",
      },
      { status: 500 },
    );
  }
}
