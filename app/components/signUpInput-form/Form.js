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

export default function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });
  return (
    <div className="flex h-[60%] w-[80%] flex-col items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mb-[30px] flex h-[60%] w-[50%] flex-col items-center justify-center gap-[20px]"
      >
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="full-nam ">
            Full Name <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="text"
            id="full-name"
            className="h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color]"
            placeholder="Jerry quinn"
            {...register("fullName")}
          />
          {errors.fullName && (
            <p className="text-[--warning-color]">{errors.fullName.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="email">
            Email <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color]"
            placeholder="jamie@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-[--warning-color]">{errors.email.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="password">
            Password <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color]"
            placeholder="********"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-[--warning-color]">{errors.password.message}</p>
          )}
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="w-full rounded-[--small-border-radius] bg-[--cta-green-color] p-[10px] font-[--medium-font-weight] text-[--gray-white-color]"
          >
            Submit Now
          </button>
        </div>
      </form>
      <div className="flex w-full flex-col items-center justify-center gap-[10px]">
        <p>OR</p>
        <button className="flex w-[50%] items-center justify-center rounded-[--small-border-radius] bg-[--gray-review-color] p-[10px]">
          <FcGoogle /> Sign-Up with Google
        </button>
      </div>
    </div>
  );
}
