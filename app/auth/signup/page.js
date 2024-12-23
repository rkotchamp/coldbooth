"use client";
import BackArrow from "@/app/components/backArrow/BackArrow";
import Form from "@/app/components/signUpInput-form/Form";

export default function Signup() {
  const onSubmit = async (data) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });
      const responseText = await response.text();
      if (responseText) {
        const result = JSON.parse(responseText);
        console.log("parsed result:", result);

        if (response.ok) {
          // Handle success (e.g., redirect)
          window.location.href = "/dashboard";
        } else {
          // Handle error from server
          console.error("Server error:", result.error);
        }
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[]">
      <BackArrow />
      <h1 className="font-bold-headers">Sign-Up to Cold Booth</h1>
      <Form onSubmit={onSubmit} />
    </main>
  );
}
