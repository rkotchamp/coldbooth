"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackArrow from "@/app/components/backArrow/BackArrow";
import Login from "@/app/components/login/Login";

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("/api/auth/login", {
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

      localStorage.setItem("token", result.token);
      router.push("/dashboard");
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

  const backFunction = () => {
    router.back();
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <BackArrow onClick={backFunction} />
      <h1 className="font-bold-headers">Login to Cold Booth</h1>
      <Login
        onSubmit={onSubmit}
        isLoading={isLoading}
        isError={error}
        setError={setError}
        setIsLoading={setIsLoading}
      />
      <div className="flex flex-col items-center justify-center gap-2">
        <p>
          Don’t have an account?{" "}
          <Link href="/auth/signup" className="text-[--cta-green-color]">
            Sign Up
          </Link>
        </p>
        <p>
          Forgot Password?{" "}
          <Link
            href="/auth/forgot-password"
            className="text-[--cta-green-color]"
          >
            Retrieve
          </Link>
        </p>
      </div>
    </main>
  );
}
