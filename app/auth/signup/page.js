"use client";
import { useState } from "react";
import BackArrow from "@/app/components/backArrow/BackArrow";
import Form from "@/app/components/signUpInput-form/Form";
import Loading from "./loading";

export default function Signup() {
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
        console.log(result.message);
        return true;
      } else {
        setError("Signup failed" || result.error);
      }
    } catch (error) {
      console.error("Signup error:", error);
    } finally {
      setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    }
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[]">
      <BackArrow />
      <h1 className="font-bold-headers">Sign-Up to Cold Booth</h1>
      <Form onSubmit={onSubmit} isLoading={isLoading} />
    </main>
  );
}
