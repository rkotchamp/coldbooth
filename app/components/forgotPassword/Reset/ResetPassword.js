"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import LoginLoading from "@/app/auth/login/loading";

const signUpSchema = z.object({
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

export default function Login({
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
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const loginSubmitHandler = async (data) => {
    try {
      if (onSubmit) {
        const success = await onSubmit(data);
        if (success) {
          reset();
        }
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      setIsLoading(true);
      const result = await signIn("google", {
        callbackUrl: "/dashboard",
        redirect: true,
      });
      if (result?.error) {
        setError("Google sign-in error:", result.error);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);
      setError("An unexpected error occurred");
    }
  };

  return (
    <div className="flex h-[60%] w-full flex-col items-center justify-center xs:w-full sm:w-[80%] md:w-[90%] lg:w-[60%]">
      <form
        onSubmit={handleSubmit(loginSubmitHandler)}
        className="mb-[10px] flex h-[60%] w-[70%] flex-col items-center justify-center gap-[20px] xs:w-[90%] sm:w-[80%] md:w-[80%] lg:w-[50%]"
      >
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="password">
            Password <span className="text-[--warning-color]">*</span>
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
            id="password"
            className="h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color] xs:h-[50px] sm:h-[55px] md:h-[60px] lg:h-[60px]"
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
            {isLoading ? <LoginLoading /> : "Submit Now"}
          </button>
        </div>
      </form>

      {isError && <p className="text-[--warning-color]">{isError}</p>}
    </div>
  );
}
