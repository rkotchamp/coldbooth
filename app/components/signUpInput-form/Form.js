"use client";
import { FcGoogle } from "react-icons/fc";

export default function Form() {
  return (
    <div className="bg-green-200  ">
      <form>
        <div>
          <label htmlFor="full-name">
            Full Name <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="text"
            id="full-name"
            className="w-full border-[--gray-light-border-color] rounded-[--small-border-radius] border-[1px] p-[10px] text-[--text-black-color] font-medium"
            placeholder="Jerry Quinns"
          />
        </div>
        <div>
          <label htmlFor="email">
            Email <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-[--gray-light-border-color] rounded-[--small-border-radius] border-[1px] p-[10px] text-[--text-black-color] font-medium"
            placeholder="jamie@example.com"
          />
        </div>
        <div>
          <label htmlFor="password">
            Password <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-[--gray-light-border-color] rounded-[--small-border-radius] border-[1px] p-[10px] text-[--text-black-color] font-medium"
            placeholder="********"
          />
        </div>
        <div>
          <button className="bg-[--cta-green-color] text-[--gray-white-color] font-[--medium-font-weight]">
            Submit Now
          </button>
        </div>
      </form>
      <div>
        <p>OR</p>
        <button className="flex bg-[--gray-review-color] items-center justify-center">
          <FcGoogle /> Sign-Up with Google
        </button>
      </div>
    </div>
  );
}
