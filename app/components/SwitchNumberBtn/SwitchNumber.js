import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function SwitchNumberBtn() {
  return (
    <div className="flex w-[var(--first-panel-width)] items-center gap-5 bg-[var(--chat-panel-green-bg-color)]">
      <div className="h-[40px] w-[40px] rounded-[50px]">
        <Image
          src="/images/usFlag.png"
          alt="US Flag"
          width={40}
          height={40}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div className="flex items-start gap-2">
        <div>
          <p className="text-sm font-bold">+1 8635433222</p>
          <p className="text-sm">Switch Number</p>
        </div>
        <RiArrowDropDownLine />
        {/* <RiArrowDropUpLine /> */}
      </div>
    </div>
  );
}
