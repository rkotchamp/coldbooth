import Payments from "./Payments";
import Subscription from "./Subscription";
import { useState } from "react";

export default function PlanAndSubscription() {
  const [currentTab, setCurrentTab] = useState("subscription");
  return (
    <div>
      <div className="w-full border-2 p-10">
        <p className="font-bold-headers">Billing & Subscription Dashboard</p>
      </div>
      <div className="flex justify-evenly">
        <button
          className={`w-[50%] ${currentTab === "subscription" ? "bg-[--active-hover-green-bg-color] text-[--primary-green-color]" : ""} p-5 font-bold`}
          onClick={() => setCurrentTab("subscription")}
        >
          Subscription
        </button>
        <button
          className={`w-[50%] ${currentTab === "payments" ? "bg-[--active-hover-green-bg-color] text-[--primary-green-color]" : ""} p-5 font-bold`}
          onClick={() => setCurrentTab("payments")}
        >
          Payments
        </button>
      </div>
      {currentTab === "payments" && <Payments />}
      {currentTab === "subscription" && <Subscription />}
    </div>
  );
}
