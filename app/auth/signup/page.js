"use client";
import BackArrow from "@/app/components/backArrow/BackArrow";
import Form from "@/app/components/signUpInput-form/Form";

export default function Signup() {
  const onSubmit = async (data) => {
    const response = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    // console.log(response);
  };
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[]">
      <BackArrow />
      <h1 className="font-bold-headers">Sign-Up to Cold Booth</h1>
      <Form onSubmit={onSubmit} />
    </main>
  );
}
