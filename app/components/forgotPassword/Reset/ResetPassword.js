"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import LoginLoading from "@/app/auth/login/loading";

const resetSchema = z
  .object({
    password: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .regex(/[A-Z]/, {
        message: "Password must contain at least one uppercase letter",
      })
      .regex(/[a-z]/, {
        message: "Password must contain at least one lowercase letter",
      }),
    confirmPassword: z.string().min(1, {
      message: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export default function ResetPasswordComponent({
  onSubmit,
  isLoading,
  isError,
  setIsLoading,
  setError,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(resetSchema) });

  const resetSubmitHandler = async (data) => {
    try {
      if (onSubmit) {
        const success = await onSubmit(data);
        if (success) {
          reset();
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <div className="flex h-[60%] w-full flex-col items-center justify-center xs:w-full sm:w-[80%] md:w-[90%] lg:w-[60%]">
      <form
        onSubmit={handleSubmit(resetSubmitHandler)}
        className="mb-[10px] flex h-[60%] w-[70%] flex-col items-center justify-center gap-[20px] xs:w-[90%] sm:w-[80%] md:w-[80%] lg:w-[50%]"
      >
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="password">
            New Password <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="password"
            id="password"
            className="h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color] xs:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[60px]"
            placeholder="********"
            {...register("password")}
          />
          {errors.password && (
            <p className="text-[--warning-color]">{errors.password.message}</p>
          )}
        </div>
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="password">
            Confirm Password <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color] xs:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[60px]"
            placeholder="********"
            {...register("confirmPassword")}
          />
          {errors.confirmPassword && (
            <p className="text-[--warning-color]">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full rounded-[--small-border-radius] bg-[--cta-green-color] p-[10px] font-[--medium-font-weight] text-[--gray-white-color]"
          >
            {isLoading ? <LoginLoading /> : "Change Now"}
          </button>
        </div>
      </form>

      {isError && <p className="text-[--warning-color]">{isError}</p>}
    </div>
  );
}
