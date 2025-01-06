"use Client";

import { useContext } from "react";
import ItemsSettingsContext from "@/app/context/ItemsSettingsActiveContext";

export default function PanelItems() {
  const {
    accountSettings,
    setAccountSettings,
    integrations,
    setIntegrations,
    subscription,
    setSubscription,
    security,
    setSecurity,
    support,
    setSupport,
    policies,
    setPolicies,
  } = useContext(ItemsSettingsContext);

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Account Settings</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Integrations</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Plan & Subscription</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Security</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Support & Help</p>
      </div>
      <div className="flex h-[50px] w-full cursor-pointer items-center px-10 hover:bg-[--active-hover-green-bg-color]">
        <p>Legal & Policies</p>
      </div>
    </div>
  );
}
