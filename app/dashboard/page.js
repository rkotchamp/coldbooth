"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import SwitchNumberBtn from "@/app/components/SwitchNumberBtn/SwitchNumber";
import UserProfile from "@/app/components/userProfile/UserProfile";
import PanelOneIcons from "@/app/components/PanelOneIcons/PanelOneIcons";
import SettingsPane from "@/app/components/SettingsPane/SettingsPane";
import AllMessageUsers from "@/app/components/Messages/AllMesssages/AllMessageUsers";

export default function Dashboard() {
  return (
    <main className="flex">
      {/* First Panel */}
      <section className="flex h-[var(--panel-heights)] w-[var(--first-panel-width)] flex-col items-center gap-[100px] overflow-hidden border-r-[1px] border-[var(--gray-light-border-color)] bg-[var(--inside-app-bg-color)] pt-[30px]">
        <div className="flex w-full flex-col justify-between gap-[10px] bg-[var(--chat-panel-green-bg-color)]">
          <GiHamburgerMenu className="xs:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden" />
          <UserProfile />
          <SwitchNumberBtn />
        </div>
        <PanelOneIcons />
        <SettingsPane />
      </section>

      {/* Second Panel */}
      <section className="h-[var(--panel-heights)] w-[var(--second-panel-width)] border-r-[1px] border-[var(--gray-light-border-color)] bg-[var(--chat-panel-green-bg-color)]">
        <AllMessageUsers />
      </section>

      {/* Third Panel */}
      <section>
        <h1>Dashboard</h1>
      </section>
    </main>
  );
}
