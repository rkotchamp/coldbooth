import { useState } from "react";
import UpgradeAccordion from "./UpgradeAccordion";
import YearlyPlan from "./YearlyPlan";
import MonthlyPlan from "./MonthlyPlan";

export default function UpgradeModal() {
  const [period, setPeriod] = useState("Yearly");
  return (
    <div>
      <dialog id="my_modal_5" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="mb-8 text-lg font-bold">Upgrade Plan</h3>
          {/* Toggle year and Month  */}
          <div className="">
            <button
              onClick={() => setPeriod("Yearly")}
              className={`w-[50%] border-b-2 p-3 font-medium ${period === "Yearly" ? "bg-[--active-hover-green-bg-color] text-[--primary-green-color]" : ""}`}
            >
              Yearly
            </button>
            <button
              onClick={() => setPeriod("Monthly")}
              className={`w-[50%] border-b-2 p-3 font-medium ${period === "Monthly" ? "bg-[--active-hover-green-bg-color] text-[--primary-green-color]" : ""}`}
            >
              Monthly
            </button>
          </div>

          {/* Render the prices */}
          <div>
            {period === "Yearly" && <YearlyPlan />}
            {period === "Monthly" && <MonthlyPlan />}
          </div>
        </div>
      </dialog>
    </div>
  );
}
