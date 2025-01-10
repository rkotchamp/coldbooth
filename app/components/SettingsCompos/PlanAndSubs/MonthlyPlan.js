import UpgradeAccordion from "./UpgradeAccordion";
import pricesPack from "pricesPack.json";

// const monthly = [
//   {
//     plan: "Starter",
//     price: "5.33",
//     benefits: [
//       "4 Local or international Number",
//       "Send & Receive WhatsApp Messages",
//       "Facebook & Instagram Messaging",
//       "Custom SMS Sending",
//     ],
//   },
//   {
//     plan: "Pro",
//     price: "13.33",
//     benefits: [
//       "1 Local or Global Number",
//       "Send & Receive WhatsApp Messages",
//       "Facebook & Instagram Messaging",
//       "Custom SMS Sending",
//       "Unlimited Calls to One Country",
//       "Switch Accounts Between Two Numbers",
//     ],
//   },
//   {
//     plan: "Enterprise",
//     price: "14.33",
//     benefits: [
//       "1 Local or Global Number",
//       "Send & Receive WhatsApp Messages",
//       "Facebook & Instagram Messaging",
//       "Custom SMS Sending",
//       "Unlimited Calls to One Country",
//     ],
//   },
// ];

export default function MonthlyPlan() {
  const { monthlyPlan } = pricesPack;
  console.log(monthlyPlan);
  return (
    <div>
      <UpgradeAccordion data={monthlyPlan} period="monthly" />
    </div>
  );
}
