import { NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const STRIPE_PRICE_IDS = {
  yearly: {
    starter: "price_1Qf7YqGR3RTuDO76m8VyXH3K",
    pro: "price_1Qf7hEGR3RTuDO76LmaAyygh",
    enterprise: "price_1Qf7l9GR3RTuDO76rgutqFfX",
  },
  monthly: {
    starter: "price_1Qf7YqGR3RTuDO76l55UlE59",
    pro: "price_1Qf7hEGR3RTuDO760fzXdAD8",
    enterprise: "price_1Qf7l9GR3RTuDO76xIQAnxAk",
  },
};

export async function POST(req) {
  const { plan, period } = await req.json();

  try {
    const priceId = STRIPE_PRICE_IDS[period.toLowerCase()][plan.toLowerCase()];
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      mode: "subscription",
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/settings`,
      metadata: {
        plan,
        period,
      },
    });
    return NextResponse.json({ sessionId: session.id }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
