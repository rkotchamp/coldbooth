"use client";

import { MdSms } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { SlOptions } from "react-icons/sl";
import { FaSearch } from "react-icons/fa";

export default function ChatHeader() {
  return (
    <div className="flex items-center justify-between border-b border-[var(--gray-light-border-color)] bg-[var(--chat-panel-green-bg-color)] p-10">
      <div className="flex items-center justify-center gap-2">
        <MdSms className="text-2xl lg:text-3xl" />
        <p className="panelHeading-text">+2343343435435</p>
      </div>

      <div className="flex items-center gap-6 lg:gap-10">
        <IoCall className="text-[30px] text-[var(--cta-green-color)]" />
        <FaSearch className="text-[30px] text-[var(--cta-green-color)]" />
        <SlOptions className="text-[30px] text-[var(--cta-green-color)]" />
      </div>
    </div>
  );
}
