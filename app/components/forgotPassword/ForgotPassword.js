"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { signIn } from "next-auth/react";
import LoginLoading from "@/app/auth/login/loading";

const forgotPasswordSchema = z.object({
  email: z.string().email("Please enter a Valid Email"),
});

export default function ForgotPasswordComponent({
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
  } = useForm({ resolver: zodResolver(forgotPasswordSchema) });

  const forgotPasswordSubmitHandler = async (data) => {
    try {
      if (onSubmit) {
        const success = await onSubmit(data);
        if (success) {
          reset();
        }
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="flex h-[30%] w-full flex-col items-center justify-center xs:w-full sm:w-[80%] md:w-[90%] lg:w-[60%]">
      <form
        onSubmit={handleSubmit(forgotPasswordSubmitHandler)}
        className="mb-[0px] flex h-[60%] w-[70%] flex-col items-center justify-center gap-[20px] xs:w-[90%] sm:w-[80%] md:w-[80%] lg:w-[50%]"
      >
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="email">
            Email <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="email"
            id="email"
            className="h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color] xs:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[60px]"
            placeholder="jamie@example.com"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-[--warning-color]">{errors.email.message}</p>
          )}
        </div>

        <div className="w-full">
          <button
            type="submit"
            className="w-full rounded-[--small-border-radius] bg-[--cta-green-color] p-[10px] font-[--medium-font-weight] text-[--gray-white-color]"
          >
            {isLoading ? <LoginLoading /> : "Retrieve Now"}
          </button>
        </div>
      </form>

      {isError && <p className="text-[--warning-color]">{isError}</p>}
    </div>
  );
}
