"use client";

import { useState } from "react";
import PriceCard from "./PriceCrads";

const monthlyPlan = [
  {
    plan: "Starter",
    price: "5.33",
    benefits: [
      "4 Local or international Number",
      "Send & Receive WhatsApp Messages",
      "Facebook & Instagram Messaging",
      "Custom SMS Sending",
    ],
  },
  {
    plan: "Pro",
    price: "13.33",
    benefits: [
      "1 Local or Global Number",
      "Send & Receive WhatsApp Messages",
      "Facebook & Instagram Messaging",
      "Custom SMS Sending",
      "Unlimited Calls to One Country",
      "Switch Accounts Between Two Numbers",
    ],
    isPopular: true,
  },
  {
    plan: "Enterprise",
    price: "14.33",
    benefits: [
      "1 Local or Global Number",
      "Send & Receive WhatsApp Messages",
      "Facebook & Instagram Messaging",
      "Custom SMS Sending",
      "Unlimited Calls to One Country",
    ],
  },
];

const yearlyPlan = [
  {
    plan: "Starter",
    price: "5.33",
    benefits: [
      "3 Local or international Number",
      "Send & Receive WhatsApp Messages",
      "Facebook & Instagram Messaging",
      "Custom SMS Sending",
      "Unlimited international calls",
      "Switch accounts between five numbers",
      "Priority customer support",
    ],
    billed: "billed yearly as $567",
  },
  {
    plan: "Pro",
    price: "10.33",
    benefits: [
      "1 Local or Global Number",
      "Send & Receive WhatsApp Messages",
      "Facebook & Instagram Messaging",
      "Custom SMS Sending",
      "Unlimited Calls to One Country",
      "Switch Accounts Between Two Numbers",
    ],
    isPopular: true,
    billed: "billed yearly as $567",
  },
  {
    plan: "Enterprise",
    price: "15.33",
    benefits: [
      "1 Local or Global Number",
      "Send & Receive WhatsApp Messages",
      "Facebook & Instagram Messaging",
      "Custom SMS Sending",
      "Unlimited Calls to One Country",
      "Switch Accounts Between Two Numbers",
    ],
    billed: "billed yearly as $567",
  },
];

export default function EntirePrice() {
  const [periods, setPeriods] = useState("year");

  return (
    <div>
      {/* Render monthly plans */}

      <div className="flex w-[300px] rounded-full bg-[--gray-review-color] p-[5px]">
        <button
          className={`w-[50%] rounded-l-full ${periods === "month" ? "bg-[--cta-green-color] text-[--gray-white-color]" : "bg-[--gray-white-color]"} p-5 font-medium`}
          onClick={() => setPeriods("month")}
        >
          Monthly
        </button>
        <button
          onClick={() => setPeriods("year")}
          className={`w-[50%] rounded-r-full ${periods === "year" ? "bg-[--cta-green-color] text-[--gray-white-color]" : "bg-[--gray-white-color]"} p-5 font-medium`}
        >
          Yearly
        </button>
      </div>

      {periods === "month" && (
        <div className="flex gap-5">
          {monthlyPlan.map((plan, index) => (
            <PriceCard
              key={index}
              title={plan.plan}
              price={plan.price}
              features={plan.benefits}
              isPopular={plan.isPopular}
              onSubscribe={() => alert(`Subscribed to ${plan.plan} (Monthly)`)}
            />
          ))}
        </div>
      )}
      {periods === "year" && (
        <div className="flex gap-5">
          {yearlyPlan.map((plan, index) => (
            <PriceCard
              key={`yearly-${index}`}
              title={plan.plan}
              price={plan.price}
              features={plan.benefits}
              isPopular={plan.isPopular}
              billed={plan.billed}
              onSubscribe={() => alert(`Subscribed to ${plan.plan} (Yearly)`)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
