"use client";
import { useContext } from "react";
import SentChat from "./Sent/SentChat";
import ReceivedChat from "./Received/ReceivedChat";
import Image from "next/image";
import ConversationContext from "@/app/context/ConversationContext";

export default function ChatBubble() {
  const { messages, setMessages, loading, setLoading } =
    useContext(ConversationContext);

  console.log(messages);

  return (
    <div className="flex flex-col gap-2 p-4 lg:p-5">
      {messages?.map((message, index) => {
        return (
          <div
            className={`flex items-end gap-2 ${
              message.type === "sent" ? "flex-row" : "flex-row-reverse"
            }`}
            key={index}
          >
            <div className="h-8 w-8 rounded-full bg-gray-200">
              <Image
                src="/images/macLou.JPG"
                alt="avatar"
                width={100}
                height={100}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                message.type === "sent"
                  ? "bg-gray-100 text-gray-800"
                  : "bg-[--cta-green-color] text-white"
              }`}
            >
              {message.text}
            </div>
            <span className="text-xs text-gray-500">{message.time}</span>
          </div>
        );
      })}
    </div>
  );
}
