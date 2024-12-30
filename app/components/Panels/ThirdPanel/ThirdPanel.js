"use client";

import ChatHeader from "@/app/components/chat-header/ChatHeader";
import ChatBubble from "@/app/components/ChatBubble/ChatBubble";
export default function ThirdPanel() {
  return (
    <section className="flex h-[var(--panel-heights)] w-[var(--third-panel-width)] flex-1 flex-col border-r-[1px] bg-[var(--entire-window-bg-color)]">
      <ChatHeader />
      <div className="">
        <ChatBubble />
      </div>
    </section>
  );
}
