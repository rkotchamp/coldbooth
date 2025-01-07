"use client";

import { useContext } from "react";
import PanelItems from "./PanelItems";
import { IoArrowBack } from "react-icons/io5";
import { GrSettingsOption } from "react-icons/gr";
import ItemsSettingsContext from "@/app/context/ItemsSettingsActiveContext";

export default function PanelForSettings({ setOpenSettingsTab }) {
  const { activeSettings, setActiveSettings } =
    useContext(ItemsSettingsContext);

  const closeOpenedSettings = () => {
    setOpenSettingsTab(false);
    setActiveSettings("Account");
  };

  return (
    <div className="flex w-full flex-col items-center gap-14">
      <div className="w-full">
        <button
          onClick={closeOpenedSettings}
          className="panelHeading-text flex h-[50px] w-full items-center justify-center gap-2 bg-[--chat-panel-green-bg-color]"
        >
          <IoArrowBack className="panelHeading-text" />
          Back
        </button>
        <div className="flex h-[50px] w-full items-center justify-center gap-2 border-b-[1px] border-b-[--gray-light-border-color] font-medium">
          <GrSettingsOption />
          <p>Settings</p>
        </div>
      </div>
      <PanelItems />
    </div>
  );
}
