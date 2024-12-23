import BackArrow from "@/app/components/backArrow/BackArrow";
import Form from "@/app/components/signUpInput-form/Form";

export default function Signup() {
  return (
    <main className="flex flex-col items-center justify-center  h-screen bg-[]">
      <BackArrow />
      <h1 className="font-bold-headers">Sign-Up to Cold Booth</h1>
      <Form />
    </main>
  );
}
