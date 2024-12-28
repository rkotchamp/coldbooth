"use client";
import { IoArrowBack } from "react-icons/io5";

export default function BackArrow({ onClick }) {
  return (
    <button
      className="btn btn-ghost flex items-center justify-center gap-5 text-xl"
      onClick={onClick}
    >
      <IoArrowBack />
      Back
    </button>
  );
}
