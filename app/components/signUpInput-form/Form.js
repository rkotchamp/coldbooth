"use client";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import Loading from "@/app/auth/signup/loading";

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

export default function Form({ onSubmit, isLoading, isError }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: zodResolver(signUpSchema) });

  const submitHandler = async (data) => {
    try {
      if (onSubmit) {
        const success = await onSubmit(data);
        if (success) {
          reset();
        }
      }
    } catch (error) {
      console.error("Signup error:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", {
        callbackUrl: "/dashboard", // Redirect after successful sign in
      });
    } catch (error) {
      console.error("Google sign in error:", error);
    }
  };

  return (
    <div className="xs:w-full flex h-[60%] w-full flex-col items-center justify-center sm:w-[80%] md:w-[90%] lg:w-[60%]">
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="xs:w-[90%] mb-[50px] flex h-[60%] w-[70%] flex-col items-center justify-center gap-[20px] sm:w-[80%] md:w-[80%] lg:w-[50%]"
      >
        <div className="flex w-full flex-col gap-3">
          <label htmlFor="fullName">
            Full Name <span className="text-[--warning-color]">*</span>
          </label>
          <input
            type="text"
            id="fullName"
            className="xs:h-[50px] h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color] sm:h-[55px] md:h-[60px] lg:h-[60px]"
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
            className="xs:h-[50px] h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color] sm:h-[55px] md:h-[60px] lg:h-[60px]"
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
            className="xs:h-[50px] h-[60px] w-full rounded-[--small-border-radius] border-[1px] border-[--gray-light-border-color] bg-[--gray-white-color] p-[10px] font-medium text-[--text-black-color] sm:h-[55px] md:h-[60px] lg:h-[60px]"
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
            {isLoading ? <Loading /> : "Submit Now"}
          </button>
        </div>
      </form>

      <div className="flex w-full flex-col items-center justify-center gap-[10px]">
        <p>OR</p>
        <button
          onClick={handleGoogleSignIn}
          className="xs:w-[90%] flex w-[70%] items-center justify-center rounded-[--small-border-radius] bg-[--gray-review-color] p-[10px] sm:w-[80%] md:w-[80%] lg:w-[50%]"
        >
          <FcGoogle /> Sign-Up with Google
        </button>
      </div>
      {isError && <p className="text-[--warning-color]">{isError}</p>}
    </div>
  );
}
