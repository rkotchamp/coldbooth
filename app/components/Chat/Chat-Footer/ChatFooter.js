"use client";

import { useState } from "react";
import { FaSmile, FaPaperclip, FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useForm } from "react-hook-form";
import MediaPopUp from "./MediaPopUp.js";

export default function ChatFooter() {
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      message: "",
    },
  });
  const [isTyping, setIsTyping] = useState(false);
  const [spinnerLoading, setSpinnerLoading] = useState(false);
  const [showMediaMenu, setShowMediaMenu] = useState(false);
  const [messaging, setMessaging] = useState("");

  const message = watch("message");

  // Meant for setting up Twilio in the sendSMS route

  // const phoneNumber = process.env.MY_PERSONAL_NUMBER;
  // const handleTextSubmit = async (data) => {
  //   setSpinnerLoading(true);

  //   try {
  //     const response = await fetch("/api/sendSMS", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ to: phoneNumber, body: data }),
  //     });

  //     const responseData = await response.json();
  //     if (response.ok) {
  //       console.log("Message sent", responseData);
  //     } else {
  //       throw new Error(responseData.error);
  //     }
  //     console.log("The data itself:", data);
  //   } catch (error) {
  //   } finally {
  //     setTimeout(() => {
  //       setSpinnerLoading(false);
  //       setIsTyping(false);
  //     }, 300);
  //     reset();
  //   }
  // };

  const handleFocus = () => {
    // setIsFocused(true);
    if (message.trim().length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  const handleSubmitMessage = async (data) => {};

  const handleBlur = () => {
    if (message.trim().length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  const handleInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue.trim().length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(handleTextSubmit)();
    }
  };

  return (
    <div className="border-t border-[var(--gray-light-border-color)] bg-[var(--chat-panel-green-bg-color)] p-4">
      <div className="flex items-center gap-4">
        {/* clipper and pop up menu */}
        <div className="relative">
          <button
            onClick={() => setShowMediaMenu(!showMediaMenu)}
            className="text-gray-600 hover:text-gray-800"
          >
            <FaPaperclip className="text-xl lg:text-2xl" />
          </button>

          {showMediaMenu && (
            <div className="absolute bottom-full left-0 mb-2 w-48 rounded-lg bg-white p-2 shadow-lg">
              <ul className="space-y-2">
                <li className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 hover:bg-gray-100">
                  <span className="text-lg">📷</span> Images & Videos
                </li>
                <li className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 hover:bg-gray-100">
                  <span className="text-lg">📁</span> Files
                </li>
                <li className="flex cursor-pointer items-center gap-2 rounded px-3 py-2 hover:bg-gray-100">
                  <span className="text-lg">📸</span> Camera
                </li>
              </ul>
            </div>
          )}
        </div>

        <form
          className="flex w-[80%] items-center justify-center gap-5"
          onSubmit={handleSubmit(handleSubmitMessage)}
        >
          <div className="flex w-[100%] items-center gap-2 rounded-full bg-[var(--gray-white-color)] px-4 py-2">
            <textarea
              {...register("message")}
              className="resize-none overflow-hidden rounded-full bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--cta-green-color)]"
              placeholder="Write a message..."
              id="message"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
            />
            <button type="button" className="text-gray-600 hover:text-gray-800">
              <FaSmile className="text-xl lg:text-[30px]" />
            </button>
          </div>
          {isTyping && (
            <button
              type="submit"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--cta-green-color)]"
            >
              <IoSend className="text-lg" />
            </button>
          )}
        </form>
        <button className="text-gray-600 hover:text-gray-800">
          <FaMicrophone className="text-xl lg:text-2xl" />
        </button>
      </div>
    </div>
  );
}
