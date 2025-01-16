import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";

export async function POST(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB);

    // Extract message data
    const { to, body } = await request.json();

    if (!to || !body) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 },
      );
    }

    // Create message document
    const message = {
      conversationId: to, // Using 'to' number as conversationId for now
      senderId: process.env.TWILIO_PHONE, // Your Twilio number
      receiverId: to,
      platformName: "SMS",
      content: body,
      type: "text",
      status: "sent",
      createdAt: new Date(),
    };

    // Insert message into database
    const result = await db.collection("messages").insertOne(message);

    // Update or create conversation
    await db.collection("conversations").updateOne(
      { userId: process.env.TWILIO_PHONE, contactId: to },
      {
        $set: {
          lastMessage: body,
          lastMessageTime: new Date(),
          platformName: "SMS",
          updatedAt: new Date(),
        },
        $setOnInsert: {
          createdAt: new Date(),
        },
      },
      { upsert: true },
    );

    return NextResponse.json({
      success: true,
      messageId: result.insertedId,
      message,
    });
  } catch (error) {
    console.error("Error saving message:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}

export async function GET(request) {
  try {
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB); // Replace with your actual database name

    const { searchParams } = new URL(request.url);

    let conversationId = searchParams.get("conversationId");

    conversationId = conversationId?.trim();
    if (!conversationId.startsWith("+")) {
      conversationId = "+" + conversationId;
    }

    if (!conversationId) {
      return NextResponse.json(
        { success: false, error: "Missing conversationId" },
        { status: 400 },
      );
    }

    const messages = await db
      .collection("messages")
      .find({ conversationId })
      .sort({ createdAt: 1 })
      .toArray();

    return NextResponse.json({ success: true, messages });
  } catch (error) {
    console.error("Error fetching messages:", error);
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 500 },
    );
  }
}
