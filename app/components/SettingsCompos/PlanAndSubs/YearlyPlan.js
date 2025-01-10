import UpgradeAccordion from "./UpgradeAccordion";
import pricesPack from "pricesPack.json";

export default function YearlyPlan() {
  const { yearlyPlan } = pricesPack;

  return (
    <div>
      <UpgradeAccordion data={yearlyPlan} period="yearly" />
    </div>
  );
}
