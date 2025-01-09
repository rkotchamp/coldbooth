import { IoMdCheckmark } from "react-icons/io";
import { loadStripe } from "@stripe/stripe-js";

export default function UpgradeAccordion({ data, period }) {
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
  );

  const handleSubscription = async (plan) => {
    try {
      const stripe = await stripePromise;

      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan,
          period,
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) throw new Error(error);
      const result = await stripe.redirectToCheckout({
        sessionId,
      });

      if (result.error) {
        throw new Error(result.error.message);
      }
    } catch (err) {
      console.error("Error:", err);
      // Error handle to user
    }
  };

  return (
    <div>
      {data.map((items, index) => {
        return (
          <div
            className="collapse collapse-arrow border border-base-300 bg-base-100"
            key={index}
          >
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              {items.plan}
              <div>
                $ {items.price}{" "}
                {items.billed && (
                  <span className="text-[12px] font-normal text-[--gray-dark-color]">
                    {items.billed}
                  </span>
                )}
              </div>
            </div>
            <div className="collapse-content text-sm">
              <ul className="flex flex-col gap-3">
                {items.benefits.map((benefit, bIndex) => {
                  return (
                    <li key={bIndex} className="flex gap-1">
                      <IoMdCheckmark />
                      {benefit}
                    </li>
                  );
                })}
              </ul>
              <div className="flex w-full justify-center py-5">
                <button
                  onClick={handleSubscription(items.plan)}
                  className="w-[50%] rounded-md bg-[--cta-green-color] p-3 font-medium text-[--gray-white-color]"
                >
                  Update Now
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
