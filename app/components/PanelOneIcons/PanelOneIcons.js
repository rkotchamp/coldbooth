import { IoCall } from "react-icons/io5";
import { IoMdChatboxes } from "react-icons/io";
import { MdOutlineDialpad } from "react-icons/md";
import { FaUser } from "react-icons/fa6";

export default function PanelOneIcons() {
  return (
    <div className="flex flex-grow flex-col gap-[50px]">
      {/* <div className="flex h-[var(--iconsActive-height)] w-[var(--iconsActive-width)] items-center rounded-[3px] p-2">
        <IoCall className="text-[30px]" />
      </div> */}
      <div className="flex h-[var(--iconsActive-height)] w-[var(--iconsActive-width)] items-center rounded-[3px] bg-[var(--active-hover-green-bg-color)] p-2">
        <span className="indicator">
          <IoMdChatboxes className="text-[30px]" />
          <span className="badge indicator-item badge-secondary border-none bg-[--cta-green-color]">
            10
          </span>
        </span>
      </div>

      <div className="flex h-[var(--iconsActive-height)] w-[var(--iconsActive-width)] items-center rounded-[3px] p-2">
        <FaUser className="text-[30px]" />
      </div>
      <div className="flex h-[var(--iconsActive-height)] w-[var(--iconsActive-width)] items-center rounded-[3px] p-2">
        <MdOutlineDialpad className="text-[30px]" />
      </div>
    </div>
  );
}
