import PanelItems from "./PanelItems";
import { IoArrowBack } from "react-icons/io5";
import { GrSettingsOption } from "react-icons/gr";

export default function PanelForSettings() {
  return (
    <div className="w-full">
      <button className="panelHeading-text flex h-[50px] w-full items-center justify-center gap-2 bg-[--chat-panel-green-bg-color]">
        <IoArrowBack className="panelHeading-text" />
        Back
      </button>
      <div className="flex h-[50px] w-full items-center justify-center gap-2 border-b-[1px] border-b-[--gray-light-border-color] font-medium">
        <GrSettingsOption />
        <p>Settings</p>
      </div>
      <PanelItems />
    </div>
  );
}
