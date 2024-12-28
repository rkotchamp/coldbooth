"use client";

import { GiHamburgerMenu } from "react-icons/gi";
import SwitchNumberBtn from "@/app/components/SwitchNumberBtn/SwitchNumber";
import UserProfile from "@/app/components/userProfile/UserProfile";
import PanelOneIcons from "@/app/components/PanelOneIcons/PanelOneIcons";

export default function Dashboard() {
  return (
    <main className="flex">
      <section className="flex h-[var(--panel-heights)] w-[var(--first-panel-width)] flex-col items-center bg-[var(--inside-app-bg-color)]">
        <div className="flex w-full flex-col justify-between gap-[10px] bg-[var(--chat-panel-green-bg-color)]">
          <GiHamburgerMenu className="xs:block sm:block md:hidden lg:hidden xl:hidden 2xl:hidden" />
          <UserProfile />
          <SwitchNumberBtn />
        </div>
        <PanelOneIcons />
      </section>
      <section>
        <h1>Dashboard</h1>
      </section>
      <section>
        <h1>Dashboard</h1>
      </section>
    </main>
  );
}
