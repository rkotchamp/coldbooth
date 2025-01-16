import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/mongodb";
import { ObjectId } from "mongodb";

function parseMultiPartFormData(body) {
  const lines = body.split("\r\n");
  const result = {};
  let currentField = "";

  for (const line of lines) {
    if (line.includes("name=")) {
      currentField = line.match(/name="`(.+?)`"/)[1];
    } else if (line.startsWith("`") && line.endsWith("`")) {
      result[currentField] = line.slice(1, -1);
    }
  }
  return result;
}

// Function to find or create conversation
async function findOrCreateConversation(db, fromNumber, toNumber) {
  const conversationsCollection = db.collection("conversations");

  // Try to find existing conversation
  let conversation = await conversationsCollection.findOne({
    $or: [
      { userId: fromNumber, contactId: toNumber },
      { userId: toNumber, contactId: fromNumber },
    ],
  });

  // If no conversation exists, create a new one
  if (!conversation) {
    conversation = {
      userId: toNumber, // The Twilio number
      contactId: fromNumber, // The sender's number
      createdAt: new Date(),
      lastMessage: "",
      lastMessageTime: new Date(),
      platformName: "SMS",
      updatedAt: new Date(),
    };

    const result = await conversationsCollection.insertOne(conversation);
    conversation._id = result.insertedId;
  }

  return conversation;
}

export async function POST(request) {
  try {
    const rawBody = await request.text();

    const formData = parseMultiPartFormData(rawBody);

    const from = formData.From;
    const to = formData.To;
    const messageBody = formData.Body;

    console.log("Parsed message:", { from, to, messageBody });
    const client = await clientPromise;
    const db = client.db(process.env.MONGO_DB);

    const conversation = await findOrCreateConversation(db, from, to);

    const messagesCollection = db.collection("messages");
    const message = {
      conversationId: conversation._id,
      senderId: new ObjectId(), // Generate a new ObjectId for sender
      receiverId: new ObjectId(), // Generate a new ObjectId for receiver
      platformName: "SMS",
      content: messageBody,
      type: "text",
      status: "received",
      createdAt: new Date(),
    };

    await messagesCollection.insertOne(message);

    await db.collection("conversations").updateOne(
      { _id: conversation._id },
      {
        $set: {
          lastMessage: messageBody,
          lastMessageTime: new Date(),
          updatedAt: new Date(),
        },
      },
    );

    return new Response(
      '<?xml version="1.0" encoding="UTF-8"?>' +
        "<Response>" +
        "<Message>Message received and stored successfully.</Message>" +
        "</Response>",
      {
        status: 200,
        headers: {
          "Content-Type": "application/xml",
        },
      },
    );
  } catch (error) {
    console.error("Error receiving message:", error);
    return new Response(
      '<?xml version="1.0" encoding="UTF-8"?>' +
        "<Response>" +
        "<Message>Message received but processing failed.</Message>" +
        "</Response>",
      {
        status: 200,
        headers: {
          "Content-Type": "application/xml",
        },
      },
    );
  }
}
