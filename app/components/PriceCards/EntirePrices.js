"use client";

import { useState } from "react";
import PriceCard from "./PriceCrads";
import pricesPack from "pricesPack.json";

export default function EntirePrice() {
  const [periods, setPeriods] = useState("year");
  const { monthlyPlan, yearlyPlan } = pricesPack;
  console.log(pricesPack);

  return (
    <div className="flex flex-col items-center gap-5 bg-red-400">
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
              period="monthly"
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
              saveUp={plan.saveUp}
              onSubscribe={() => alert(`Subscribed to ${plan.plan} (Yearly)`)}
              period="yearly"
            />
          ))}
        </div>
      )}
    </div>
  );
}
