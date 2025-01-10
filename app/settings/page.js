"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function SettingsPage() {
  const [status, setStatus] = useState("loading");
  const [session, setSession] = useState(null);
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      // Verify the checkout session
      fetch("/api/verify-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ sessionId }),
      })
        .then((res) => res.json())
        .then((data) => {
          setSession(data);
          setStatus("success");
        })
        .catch((err) => {
          console.error("Error:", err);
          setStatus("error");
        });
    }
  }, [sessionId]);

  if (!sessionId) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Invalid Session</h1>
          <p className="text-gray-600">No checkout session found.</p>
        </div>
      </div>
    );
  }

  if (status === "loading") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold">Processing...</h1>
          <p className="text-gray-600">
            Please wait while we verify your payment.
          </p>
        </div>
      </div>
    );
  }

  if (status === "error") {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-2xl font-bold text-red-600">
            Payment Error
          </h1>
          <p className="text-gray-600">
            There was an error processing your payment.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mb-4 text-green-500">
          <svg
            className="mx-auto h-16 w-16"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-2xl font-bold">Payment Successful!</h1>
        <p className="mb-4 text-gray-600">
          Thank you for your subscription. Your account has been updated.
        </p>
        <button
          onClick={() => (window.location.href = "/")}
          className="rounded-lg bg-[--cta-green-color] px-6 py-2 text-white"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
}
