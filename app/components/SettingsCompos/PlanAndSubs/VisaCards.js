import { RiVisaLine } from "react-icons/ri";

export default function VisaCards() {
  return (
    <div className="flex gap-10 border-2 px-4">
      <RiVisaLine className="text-[50px]" />
      <div>
        <p>Visa***2432</p>
        <p className="text-[12px] text-[--gray-dark-color]">Expires 6/2029</p>
      </div>
      <p className="text-[12px] text-[--gray-dark-color]">Primary Card</p>
    </div>
  );
}
