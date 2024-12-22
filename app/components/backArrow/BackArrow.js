"use client";
import { IoArrowBack } from "react-icons/io5";

export default function BackArrow() {
  return (
    <button className="btn btn-ghost text-xl flex items-center gap-5 justify-center ">
      <IoArrowBack />
      Back
    </button>
  );
}
