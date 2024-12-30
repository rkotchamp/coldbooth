"use client";

import { useState } from "react";
import { FaSmile, FaPaperclip, FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import { useForm } from "react-hook-form";

export default function ChatFooter() {
  const { register, handleSubmit, reset, watch } = useForm();
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const message = watch("message");

  const handleTextSubmit = (data) => {
    console.log(data.message);
    reset();
    setIsTyping(true);
  };

  const handleFocus = () => {
    if (message.trim().length > 0) {
      setIsTyping(true);
    } else {
      setIsTyping(false);
    }
    setIsFocused(true);
  };

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
    <div className="w-full bg-[var(--chat-panel-green-bg-color)] p-5">
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-2">
          <FaPaperclip className="text-[30px]" />
        </div>

        <form
          className="flex w-[80%] items-center justify-center gap-5"
          onSubmit={handleSubmit(handleTextSubmit)}
        >
          <label
            htmlFor="message"
            className="flex w-[100%] items-center justify-center gap-5 rounded-full bg-[var(--gray-white-color)] py-3"
          >
            <textarea
              {...register("message")}
              className="textarea h-[32px] w-[90%] resize-none overflow-hidden rounded-full bg-transparent px-10 placeholder:text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary-green-color)]"
              placeholder="Write a message..."
              id="message"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onInput={handleInput}
              onKeyDown={handleKeyDown}
            />
            <FaSmile className="text-[30px]" />
          </label>
          {isTyping && (
            <button
              type="submit"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[var(--cta-green-color)] p-3 text-[30px] text-[var(--gray-white-color)]"
            >
              <IoSend />
            </button>
          )}
        </form>
        <div className="flex items-center gap-2">
          <FaMicrophone className="text-[30px]" />
        </div>
      </div>
    </div>
  );
}
