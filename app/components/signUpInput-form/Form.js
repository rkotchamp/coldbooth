"use client";

export default function Form() {
  return (
    <form>
      <div>
        <label htmlFor="name">
          Full Name<span className="text-[--warning-color]">*</span>
        </label>
        <input
          type="text"
          id="full-name"
          className="w-full border-[--gray-light-border-color] rounded-[--small-border-radius] border-[1px] p-[10px] text-[--text-black-color] font-medium"
        />
      </div>
    </form>
  );
}
