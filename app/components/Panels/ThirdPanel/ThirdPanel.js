"use client";
import { useContext } from "react";
import AccountSettings from "../../SettingsCompos/AccountSettings/AccountSettings";
import ChatHeader from "@/app/components/Chat/chat-header/ChatHeader";
import ChatBubble from "@/app/components/Chat/ChatBubble/ChatBubble";
import ChatFooter from "@/app/components/Chat/Chat-Footer/ChatFooter";
import ActiveTabContext from "@/app/context/ActiveTabContext";
import ItemsSettingsContext from "../../../context/ItemsSettingsActiveContext";
import Integrations from "../../SettingsCompos/Integrations/Integrations";
import PlanAndSubscription from "../../SettingsCompos/PlanAndSubs/PlanAndSubscription";
import SupportAndPolicies from "../../SettingsCompos/SupportAndPlocies/SupportAndPolices";

export default function ThirdPanel() {
  const { openSettingsTab, setOpenSettingsTab } = useContext(ActiveTabContext);
  const { activeSettings, setActiveSettings } =
    useContext(ItemsSettingsContext);

  return (
    // w-[var(--third-panel-width)]
    <section className="flex h-[var(--panel-heights)] flex-1 flex-col border-r-[1px] bg-[var(--entire-window-bg-color)]">
      {!openSettingsTab && (
        <>
          <ChatHeader />
          <div className="flex-grow overflow-y-auto">
            <ChatBubble />
          </div>
          <ChatFooter />
        </>
      )}

      {openSettingsTab && activeSettings === "Account" && <AccountSettings />}
      {openSettingsTab && activeSettings === "Integration" && <Integrations />}
      {openSettingsTab && activeSettings === "Subscription" && (
        <PlanAndSubscription />
      )}
      {openSettingsTab && activeSettings === "Policies" && (
        <SupportAndPolicies />
      )}
    </section>
  );
}
