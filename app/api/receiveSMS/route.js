import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const contentType = request.headers.get("content-type");
    console.log("Content-Type", contentType);
    let params;
    const rawBody = await request.text();
    console.log("Raw body:", rawBody);

    if (contentType?.includes("application/json")) {
      const jsonData = JSON.parse(rawBody);
      params = new URLSearchParams();
      for (const [key, value] of Object.entries(jsonData)) {
        params.append(key, value);
      }
    } else {
      // Handle form-urlencoded data directly
      params = new URLSearchParams(rawBody);
    }

    const from = params.get("From");
    const to = params.get("To");
    const messageBody = params.get("Body");

    console.log("Received message:", {
      from,
      to,
      messageBody,
      rawBody,
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
