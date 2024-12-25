"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackArrow from "@/app/components/backArrow/BackArrow";
import Form from "@/app/components/signUpInput-form/Form";

export default function Signup() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = async (data) => {
    try {
      setIsLoading(true);
      setError("");

      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        router.push("/auth/login");
        return true;
      } else {
        setError(result.message);
        return false;
      }
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
      <h1 className="font-bold-headers">Sign-Up to Cold Booth</h1>
      <Form onSubmit={onSubmit} isLoading={isLoading} isError={error} />
      <div className="flex items-center justify-center gap-2">
        <p>Already have an account?</p>
        <Link href="/auth/login" className="text-[--cta-green-color]">
          Login
        </Link>
      </div>
    </main>
  );
}
