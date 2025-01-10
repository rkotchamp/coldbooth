import UpgradeAccordion from "./UpgradeAccordion";
import pricesPack from "pricesPack.json";

// const yearly = [
//   {
//     plan: "Starter",
//     price: "5.33",
//     benefits: [
//       "3 Local or international Number",
//       "Send & Receive WhatsApp Messages",
//       "Facebook & Instagram Messaging",
//       "Custom SMS Sending",
//       "Unlimited international calls",
//       "Switch accounts between five numbers",
//       "Priority customer support",
//     ],
//     billed: "billed yearly as $567",
//   },
//   {
//     plan: "Pro",
//     price: "10.33",
//     benefits: [
//       "1 Local or Global Number",
//       "Send & Receive WhatsApp Messages",
//       "Facebook & Instagram Messaging",
//       "Custom SMS Sending",
//       "Unlimited Calls to One Country",
//       "Switch Accounts Between Two Numbers",
//     ],
//     billed: "billed yearly as $567",
//   },
//   {
//     plan: "Enterprise",
//     price: "15.33",
//     benefits: [
//       "1 Local or Global Number",
//       "Send & Receive WhatsApp Messages",
//       "Facebook & Instagram Messaging",
//       "Custom SMS Sending",
//       "Unlimited Calls to One Country",
//       "Switch Accounts Between Two Numbers",
//     ],
//     billed: "billed yearly as $567",
//   },
// ];

export default function YearlyPlan() {
  const { yearlyPlan } = pricesPack;
  console.log(yearlyPlan);

  return (
    <div>
      <UpgradeAccordion data={yearlyPlan} period="yearly" />
    </div>
  );
}
