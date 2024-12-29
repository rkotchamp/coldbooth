"use client";
import { GiHamburgerMenu } from "react-icons/gi";
import SwitchNumberBtn from "@/app/components/SwitchNumberBtn/SwitchNumber";
import UserProfile from "@/app/components/userProfile/UserProfile";
import PanelOneIcons from "@/app/components/PanelOneIcons/PanelOneIcons";
import SettingsPane from "@/app/components/SettingsPane/SettingsPane";
import AllMessageUsers from "@/app/components/Messages/AllMesssages/AllMessageUsers";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";

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
        <div className="flex flex-col items-center justify-start gap-5 px-10 py-4">
          <div className="flex w-full items-center justify-between">
            <h1 className="panelHeading-text">Chats</h1>
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn m-1 bg-[--cta-green-color] text-[--gray-white-color] hover:bg-[--cta-green-color]"
              >
                All Chats
                <RiArrowDropDownLine className="text-[30px]" />
                {/* <RiArrowDropUpLine className="text-[30px]" /> */}
              </div>
              <ul
                tabIndex={0}
                className="menu dropdown-content z-[1] w-52 rounded-box bg-[--entire-window-bg-color] p-2 shadow"
              >
                <li>
                  <a>Whatsapp</a>
                </li>
                <li>
                  <a>Telegram</a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <label
                htmlFor="search"
                className="flex items-center gap-2 rounded-[11px] border-[1px] border-[var(--gray-light-border-color)] bg-[--gray-white-color] px-3 py-3"
              >
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full max-w-xs rounded-[10px] px-2 py-1 text-[--gray-black-color] placeholder:text-[--gray-black-color] active:outline-[--cta-green-color]"
                  id="search"
                />
              </label>
            </div>
          </div>
        </div>

        <AllMessageUsers />
      </section>

      {/* Third Panel */}
      <section>
        <h1>Dashboard</h1>
      </section>
    </main>
  );
}
