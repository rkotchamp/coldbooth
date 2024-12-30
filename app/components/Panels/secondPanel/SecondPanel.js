"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { FaSearch } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import AllMessageUsers from "@/app/components/Messages/AllMesssages/AllMessageUsers";

export default function SecondPanel() {
  // state to check if the user is scrolling so that shadow can be added under the search ba
  const [isScroll, setIsScroll] = useState(false);
  const searchBarRef = useRef(null);

  // function to check if the user is scrolling so that shadow can be added under the search bar
  const handleScroll = useCallback(() => {
    if (searchBarRef.current.scrollTop > 0) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  }, [isScroll]);

  useEffect(() => {
    const currentScroll = searchBarRef.current;
    if (currentScroll) {
      currentScroll.addEventListener("scroll", handleScroll);
    }
    return () => {
      if (currentScroll) {
        currentScroll.removeEventListener("scroll", handleScroll);
      }
    };
  }, [handleScroll]);

  return (
    <section className="flex h-[var(--panel-heights)] w-[var(--second-panel-width)] flex-col border-r-[1px] border-[var(--gray-light-border-color)] bg-[var(--chat-panel-green-bg-color)]">
      <div
        className={`flex flex-col items-center justify-start gap-5 px-10 py-4 ${
          isScroll ? "shadow-lg" : ""
        }`}
      >
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
              className="flex items-center justify-center gap-4 rounded-[11px] border-[1px] border-[var(--gray-light-border-color)] bg-[--gray-white-color] px-6 py-3"
            >
              <FaSearch />
              <input
                type="text"
                placeholder="Search"
                className="w-full max-w-xs rounded-[10px] px-2 py-1 text-[--gray-black-color] placeholder:text-[--gray-black-color] focus:outline-none focus:outline-2 focus:ring-2 focus:ring-[--chat-panel-green-bg-color]"
                id="search"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto" ref={searchBarRef}>
        <AllMessageUsers />
      </div>
    </section>
  );
}
