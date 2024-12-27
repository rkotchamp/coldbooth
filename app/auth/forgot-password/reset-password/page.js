"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackArrow from "@/app/components/backArrow/BackArrow";
import ResetPassword from "@/app/components/forgotPassword/Reset/ResetPassword";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const url = new URL(window.location.href);
  const token = url.searchParams.get("token");

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError("");

      const requestedData = {
        password: data.password,
        token: token,
      };

      const response = await fetch("/api/auth/forgot-password/reset-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestedData),
      });

      const result = await response.json();

      if (!response.ok) {
        setError(result.message);
        return false;
      }

      alert("Password reset was succesful");
      router.push("/dashboard");
      return true;
    } catch (error) {
      console.error("Error during password reset:", error);
      setError("An unexpected error occurred. Please try again.");
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
      <h1 className="font-bold-headers">Enter Your New Password</h1>
      <ResetPassword
        onSubmit={onSubmit}
        isLoading={isLoading}
        isError={error}
        setError={setError}
        setIsLoading={setIsLoading}
      />
    </main>
  );
}
