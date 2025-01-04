import { NextResponse } from "next/server";

export async function GET(request) {
  const VERIFY_TOKEN = process.env.VERIFY_TOKEN;

  // Debug logging for environment variable
  console.log("Environment variable check:");
  console.log("VERIFY_TOKEN length:", VERIFY_TOKEN?.length);
  console.log("VERIFY_TOKEN first 5 chars:", VERIFY_TOKEN?.substring(0, 5));

  const searchParams = request.nextUrl.searchParams;
  const mode = searchParams.get("hub.mode");
  const token = searchParams.get("hub.verify_token");
  const challenge = searchParams.get("hub.challenge");

  // Debug logging for received parameters
  console.log("Received parameters:");
  console.log("mode:", mode);
  console.log("token length:", token?.length);
  console.log("token first 5 chars:", token?.substring(0, 5));
  console.log("challenge:", challenge);

  // Debug token comparison
  console.log("Token comparison:");
  console.log("Tokens match:", token === VERIFY_TOKEN);
  console.log("Token from request:", token);
  console.log("Token from env:", VERIFY_TOKEN);

  if (mode && token === VERIFY_TOKEN) {
    console.log("✅ Verification successful");
    return new NextResponse(challenge, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } else {
    console.log("❌ Verification failed");
    console.log("Mode present:", !!mode);
    console.log("Token match:", token === VERIFY_TOKEN);
    return new NextResponse("Forbidden", {
      status: 403,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
}
