"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";

const signUpSchema = z.object({
  fullName: z
    .string()
    .min(3, { message: "Full name must be at least 3 characters" }),
  email: z.string().email("Please enter a Valid Email"),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters" })
    .regex(/[A-Z]/, {
      message: "Password must contain at least one uppercase letter",
    })
    .regex(/[a-z]/, {
      message: "Password must contain at least one lowercase letter",
    }),
});

export default function Form() {
  return (
    <div className=" w-[80%] h-[60%] flex flex-col items-center justify-center">
      <form className="w-[50%] h-[60%] flex flex-col items-center justify-center gap-[20px] mb-[30px]">
        <div className="w-full  flex flex-col gap-3">
          <label htmlFor="full-nam ">
            Full Name <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="text"
            id="full-name"
            className="w-full border-[--gray-light-border-color] rounded-[--small-border-radius] h-[60px] border-[1px] p-[10px] text-[--text-black-color] font-medium bg-[--gray-white-color]"
            placeholder="Jerry quinn"
          />
        </div>
        <div className="w-full  flex flex-col gap-3">
          <label htmlFor="email">
            Email <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="w-full border-[--gray-light-border-color] rounded-[--small-border-radius] h-[60px] border-[1px] p-[10px] text-[--text-black-color] font-medium bg-[--gray-white-color]"
            placeholder="jamie@example.com"
          />
        </div>
        <div className="w-full  flex flex-col gap-3">
          <label htmlFor="password">
            Password <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="w-full border-[--gray-light-border-color] rounded-[--small-border-radius] border-[1px] h-[60px] p-[10px] text-[--text-black-color] font-medium bg-[--gray-white-color]"
            placeholder="********"
          />
        </div>
        <div className="w-full ">
          <button className="bg-[--cta-green-color] text-[--gray-white-color] font-[--medium-font-weight] w-full p-[10px] rounded-[--small-border-radius]">
            Submit Now
          </button>
        </div>
      </form>
      <div className="w-full flex flex-col items-center justify-center gap-[10px]">
        <p>OR</p>
        <button className="flex bg-[--gray-review-color] items-center justify-center w-[50%] p-[10px] rounded-[--small-border-radius]">
          <FcGoogle /> Sign-Up with Google
        </button>
      </div>
    </div>
  );
}
