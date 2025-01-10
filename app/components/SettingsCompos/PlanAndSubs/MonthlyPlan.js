import UpgradeAccordion from "./UpgradeAccordion";
import pricesPack from "pricesPack.json";

export default function MonthlyPlan() {
  const { monthlyPlan } = pricesPack;

  return (
    <div>
      <UpgradeAccordion data={monthlyPlan} period="monthly" />
    </div>
  );
}
