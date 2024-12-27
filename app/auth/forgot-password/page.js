"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackArrow from "@/app/components/backArrow/BackArrow";
import ForgotPasswordComponent from "@/app/components/forgotPassword/ForgotPassword";

export default function ForgotPassword() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("/api/auth/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message);
        return false;
      }

      alert("Password reset email sent");

      return true;
    } catch (error) {
      setError("An unexpected error occurred");
      return false;
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <BackArrow />
      <h1 className="font-bold-headers">Retrieve Your Account</h1>
      <ForgotPasswordComponent
        onSubmit={onSubmit}
        isLoading={isLoading}
        isError={error}
        setError={setError}
        setIsLoading={setIsLoading}
      />
      <div className="flex items-center justify-center">
        <p>
          Don&apos;t have an account?{" "}
          <Link href="/auth/signup" className="text-[--cta-green-color]">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
