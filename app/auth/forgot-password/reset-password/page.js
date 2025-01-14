"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import BackArrow from "@/app/components/backArrow/BackArrow";
import ResetPassword from "@/app/components/forgotPassword/Reset/ResetPassword";
import SuccessPop from "@/app/components/popup/SuccessPop";

export default function ResetPasswordPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  useEffect(() => {
    const isLoggedIn = !!localStorage.getItem("token");
    const hasChangedPassword = !!localStorage.getItem("hasChangedPassword");

    if (isLoggedIn && hasChangedPassword) {
      router.replace("/");
    }
  }, [router]);

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

      setIsSuccess(true);

      localStorage.setItem("hasChangedPassword", true);
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

  const handleClose = () => {
    setIsSuccess(false);

    router.push("/dashboard");
  };

  const backFunction = () => {
    router.back();
  };

  return (
    <main className="flex h-screen flex-col items-center justify-center">
      <BackArrow onClick={backFunction} />
      <h1 className="font-bold-headers">Enter Your New Password</h1>
      <ResetPassword
        onSubmit={onSubmit}
        isLoading={isLoading}
        isError={error}
        setError={setError}
        setIsLoading={setIsLoading}
      />
      {isSuccess && (
        <SuccessPop
          isClose={isSuccess}
          setIsClose={setIsSuccess}
          pageMessageHeader="Yay!!🥳 You did it"
          pageMessage="Your password has been changed successfully"
          onClose={handleClose}
          btnText="Continue"
        />
      )}
    </main>
  );
}
