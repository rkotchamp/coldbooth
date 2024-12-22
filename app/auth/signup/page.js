import BackArrow from "@/app/components/backArrow/BackArrow";
import Form from "@/app/components/signUpInput-form/Form";

export default function Signup() {
  return (
    <main className="flex flex-col items-center justify-center bg-red-400 h-screen">
      <BackArrow />
      <h1 className="font-[--medium-font-weight] text-[--large-font-size]">
        Sign-Up to Cold Booth
      </h1>
      <Form />
    </main>
  );
}
