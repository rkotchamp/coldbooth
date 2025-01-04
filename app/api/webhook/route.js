import { NextResponse } from "next/server";

export async function GET(request) {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  if (mode && token === VERIFY_TOKEN) {
    console.log("✅ Verification successful");
    return new NextResponse(challenge, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } else {
    console.log("Token match:", token === VERIFY_TOKEN);
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
