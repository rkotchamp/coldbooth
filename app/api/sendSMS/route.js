import { NextResponse } from "next/server";
import twilio from "twilio";

export async function POST(request) {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const accountToken = process.env.TWILIO_ACCOUNT_TOKEN;
  const twilioPhone = process.env.TWILIO_PHONE;

  if (!accountSid || !accountToken || !twilioPhone) {
    console, error("Missing Twilio Credentials");
    return NextResponse.json(
      {
        success: false,
        error: "Missing Twilio config",
      },
      { status: 500 },
    );
  }

  const client = twilio(accountSid, accountToken);

  try {
    const { to, body } = await request.json();

    if (!to || !body) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing Required fields",
        },
        { status: 400 },
      );
    }

    const messageDbResponse = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ to, body }),
      },
    );

    if (!messageDbResponse.ok) {
      throw new Error("Failed to save message to database");
    }

    console.log("sending Message:", to);
    console.log(" Message body:", body);

    const message = await client.messages.create({
      body: body,
      to: to,
      from: twilioPhone,
    });

    return NextResponse.json({ success: true, sid: message.sid });
  } catch (error) {
    console.error("Error sending Message", error);
    return NextResponse.json({ success: false, error: error.message });
  }
}
