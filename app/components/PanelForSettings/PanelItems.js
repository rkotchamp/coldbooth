"use Client";

import { useContext } from "react";
import ItemsSettingsContext from "@/app/context/ItemsSettingsActiveContext";

export default function PanelItems() {
  const { activeSettings, setActiveSettings } =
    useContext(ItemsSettingsContext);

  return (
    <div className="flex w-full flex-col items-center">
      <div
        onClick={() => setActiveSettings("Account")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-5 hover:bg-[--active-hover-green-bg-color2] ${activeSettings === "Account" ? "bg-[--active-hover-green-bg-color] text-[--primary-green-color]" : ""}`}
      >
        <p>Account Settings</p>
      </div>
      <div
        onClick={() => setActiveSettings("Integration")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-5 hover:bg-[--active-hover-green-bg-color2] ${activeSettings === "Integration" ? "bg-[--active-hover-green-bg-color] text-[--primary-green-color]" : ""}`}
      >
        <p>Integrations</p>
      </div>
      <div
        onClick={() => setActiveSettings("Subscription")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-5 hover:bg-[--active-hover-green-bg-color2] ${activeSettings === "Subscription" ? "bg-[--active-hover-green-bg-color] text-[--primary-green-color]" : ""}`}
      >
        <p>Plan & Subscription</p>
      </div>

      <div
        onClick={() => setActiveSettings("Policies")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-5 hover:bg-[--active-hover-green-bg-color2] ${activeSettings === "Policies" ? "bg-[--active-hover-green-bg-color] text-[--primary-green-color]" : ""}`}
      >
        <p>Support & Policies</p>
      </div>
    </div>
  );
}
