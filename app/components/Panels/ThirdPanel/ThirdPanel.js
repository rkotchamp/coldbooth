"use client";
import { useContext } from "react";
import AccountSettings from "../../SettingsCompos/AccountSettings/AccountSettings";
import ChatHeader from "@/app/components/Chat/chat-header/ChatHeader";
import ChatBubble from "@/app/components/Chat/ChatBubble/ChatBubble";
import ChatFooter from "@/app/components/Chat/Chat-Footer/ChatFooter";
import ActiveTabContext from "@/app/context/ActiveTabContext";

export default function ThirdPanel() {
  const { openSettingsTab, setOpenSettingsTab } = useContext(ActiveTabContext);

  return (
    <section className="flex h-[var(--panel-heights)] w-[var(--third-panel-width)] flex-1 flex-col border-r-[1px] bg-[var(--entire-window-bg-color)]">
      {!openSettingsTab && (
        <>
          <ChatHeader />
          <div className="overflow-y-auto">
            <ChatBubble />
          </div>
          <ChatFooter />
        </>
      )}

      {openSettingsTab && <AccountSettings />}
    </section>
  );
}
