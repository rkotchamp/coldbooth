// import { NextResponse } from "next/server";
// import twilio from "twilio";

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const accountToken = process.env.TWILIO_ACCOUNT_TOKEN;
// const twilioPhone = process.env.TWILIO_PHONE;

// const client = twilio(accountSid, accountToken);

// export async function POST(request) {
//   const { to, body } = await request.json();
//   await console.log("sending Message:", to);
//   await console.log(" Message body:", body);
//   // return NextResponse.json({ success: true, status: 200 });
//   try {
//     const message = await client.messages.create({
//       body: body,
//       to: to,
//       from: twilioPhone,
//     });

//     return NextResponse.json({ success: true, sid: message.sid });
//   } catch (error) {
//     console.error("Error sending Message", error);
//     return NextResponse.json({ success: false, error: error.message });
//   }
// }
