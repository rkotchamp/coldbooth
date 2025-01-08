import AccordionSupport from "./AccordionSupport";

export default function SupportAndPolicies() {
  return (
    <div>
      <div className="w-full border-2 p-10">
        <p className="font-bold-headers">Support & Policies</p>
      </div>
      <div className="flex w-full justify-center">
        <AccordionSupport />
      </div>
    </div>
  );
}
