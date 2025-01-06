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
        className={`flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--chat-panel-green-bg-color] ${activeSettings === "Account" ? "bg-[--active-hover-green-bg-color]" : ""}`}
      >
        <p>Account Settings</p>
      </div>
      <div
        onClick={() => setActiveSettings("Integration")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--chat-panel-green-bg-color] ${activeSettings === "Integration" ? "bg-[--active-hover-green-bg-color]" : ""}`}
      >
        <p>Integrations</p>
      </div>
      <div
        onClick={() => setActiveSettings("Subscription")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--chat-panel-green-bg-color] ${activeSettings === "Subscription" ? "bg-[--active-hover-green-bg-color]" : ""}`}
      >
        <p>Plan & Subscription</p>
      </div>
      <div
        onClick={() => setActiveSettings("Security")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--chat-panel-green-bg-color] ${activeSettings === "Security" ? "bg-[--active-hover-green-bg-color]" : ""}`}
      >
        <p>Security</p>
      </div>
      <div
        onClick={() => setActiveSettings("Support")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--chat-panel-green-bg-color] ${activeSettings === "Support" ? "bg-[--active-hover-green-bg-color]" : ""}`}
      >
        <p>Support & Help</p>
      </div>
      <div
        onClick={() => setActiveSettings("Policies")}
        className={`flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--chat-panel-green-bg-color] ${activeSettings === "Policies" ? "bg-[--active-hover-green-bg-color]" : ""}`}
      >
        <p>Legal & Policies</p>
      </div>
    </div>
  );
}
