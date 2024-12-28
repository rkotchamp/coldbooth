import Image from "next/image";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

export default function SwitchNumberBtn() {
  return (
    <div className="flex items-center gap-5">
      <div className="h-[30px] w-[30px] rounded-[50px]">
        <Image
          src="/images/usFlag.png"
          alt="US Flag"
          width={30}
          height={30}
          className="h-full w-full rounded-full object-cover"
        />
      </div>
      <div>
        <p className="text-sm font-bold">+1 8635433222</p>
        <p className="text-sm">Switch Number</p>
      </div>
      <div>
        <RiArrowDropDownLine />
        <RiArrowDropUpLine />
      </div>
    </div>
  );
}
