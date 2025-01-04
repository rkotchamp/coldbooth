"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import UserProfile from "@/app/components/userProfile/UserProfile";
import PanelOneIcons from "@/app/components/PanelOneIcons/PanelOneIcons";
import SettingsPane from "@/app/components/SettingsPane/SettingsPane";
import SwitchIntegrationBtn from "@/app/components/SwitchNumberBtn/SwitchNumber";
import SwitchPopUp from "../../SwitchNumberBtn/SwitchPopUp";
import PanelForSettings from "../../PanelForSettings/PanelForSettings";

const phoneNumbers = [
  { id: 1, number: "+1 8635433222", flag: "/images/usFlag.JPG" },
  { id: 2, number: "+1 8635433222", flag: "/images/usFlag.JPG" },
  { id: 3, number: "+1 8635433222", flag: "/images/usFlag.JPG" },
  { id: 4, number: "+1 8635433222", flag: "/images/usFlag.JPG" },
];

export default function FirstPanel() {
  return (
    <section className="flex h-[var(--panel-heights)] w-[var(--first-panel-width)] flex-col items-center gap-[100px] overflow-hidden border-r-[1px] border-[var(--gray-light-border-color)] bg-[var(--inside-app-bg-color)] pt-[30px]">
      {/* <div className="flex w-full flex-col justify-between gap-[10px] bg-[var(--chat-panel-green-bg-color)]">
        <GiHamburgerMenu className="xs:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden" />
        <UserProfile />
        <div className="dropdown dropdown-end">
          <SwitchIntegrationBtn />
          <SwitchPopUp />
        </div>
      </div>
      <PanelOneIcons />
      <SettingsPane /> */}
      <PanelForSettings />
    </section>
  );
}
