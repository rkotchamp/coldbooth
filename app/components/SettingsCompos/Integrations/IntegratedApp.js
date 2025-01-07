"use client";

import { useState } from "react";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa";
import Image from "next/image";

export default function IntegratedApp({
  appName,
  AppIcon,
  appUserAvatar,
  appUserName,
}) {
  const [isChecked, setIsChecked] = useState(false);

  const handleChecked = () => {
    setIsChecked((prevState) => !prevState);
  };

  return (
    <div className="flex w-[80%] items-start justify-between border-2 px-4 py-5">
      <div className="flex items-center justify-center gap-3">
        {<AppIcon className="text-[30px]" />}
        <p className="text-[18px] font-bold">{appName}</p>
      </div>
      {appUserAvatar && appUserName && (
        <div className="flex items-center justify-center gap-1">
          <div className="rounded-full">
            <Image
              src={appUserAvatar}
              height={30}
              width={30}
              alt="Connected user"
              className="rounded-full object-cover"
            />
          </div>
          <p>{appUserName}</p>
        </div>
      )}

      <div className="flex flex-col justify-center">
        <p className="font-bold">{isChecked ? "Connected" : "Disconnected"}</p>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChecked}
          className="toggle toggle-lg border-[--gray-light-border-color] bg-[--gray-light-border-color] checked:border-[--cta-green-color] checked:bg-[--cta-green-color] checked:text-orange-800"
        />
      </div>
    </div>
  );
}
