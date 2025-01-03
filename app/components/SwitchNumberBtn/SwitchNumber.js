import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { PiPlugsConnectedFill } from "react-icons/pi";

export default function SwitchIntegrationBtn() {
  return (
    <div
      className="m-1 flex w-[var(--first-panel-width)] cursor-pointer items-center gap-5 bg-[var(--chat-panel-green-bg-color)] p-2"
      tabIndex={0}
      role="button"
    >
      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[50px] bg-[--entire-window-bg-color]">
        {/* <Image
          src="/images/usFlag.png"
          alt="US Flag"
          width={40}
          height={40}
          className="h-full w-full rounded-full object-cover"
        /> */}
        <PiPlugsConnectedFill className="text-[30px]" />
      </div>
      <div className="flex items-start gap-2">
        <div>
          <p className="text-sm font-bold">Integrated Apps</p>
          {/* <p className="text-sm">Switch Number</p> */}
        </div>
        <RiArrowDropDownLine />
        {/* <RiArrowDropUpLine /> */}
      </div>
    </div>
  );
}
