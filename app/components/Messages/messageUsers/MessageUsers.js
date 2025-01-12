import { FaUser } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import { RiInstagramFill } from "react-icons/ri";
import { RiWhatsappFill } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";
import messageData from "message.json";

export default function MessageUsers() {
  const { conversations } = messageData;

  return (
    <>
      {conversations.map((mess, i) => {
        const lastMessage =
          mess.messages.length > 0
            ? mess.messages[mess.messages.length - 1]
            : null;

        return (
          <div
            className="hover:bg-[--inside-app-bg-color flex h-[70px] w-full cursor-pointer items-center justify-center gap-[22px] p-5"
            key={i}
          >
            <div className="relative flex h-[40px] w-[50px] items-center justify-center rounded-full bg-[--gray-dark-color]">
              <FaUser className="text-[15px] text-[--gray-white-color]" />
              <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[--gray-white-color]">
                {lastMessage.platForm === "facebook" && (
                  <IoLogoFacebook className="" />
                )}
                {lastMessage.platForm === "instagram" && (
                  <RiInstagramFill className="" />
                )}
                {lastMessage.platForm === "WhatsApp" && (
                  <RiWhatsappFill className="" />
                )}
                {lastMessage.platForm === "twitter" && (
                  <RiTwitterXFill className="" />
                )}
              </div>
            </div>

            {/* User Name and Message Plus time */}
            <div className="flex w-full items-center justify-between gap-5">
              <div>
                <p className="mid-bold-user-name-fonts">
                  {mess.participants.sender}
                </p>
                <p className="small-supporting-fonts">
                  {lastMessage
                    ? lastMessage.text.length > 35
                      ? `${lastMessage.text.slice(0, 35)}...`
                      : lastMessage.text
                    : "No messages yet"}
                </p>
              </div>

              <div>
                <p className="small-supporting-fonts">
                  {lastMessage ? lastMessage.time : ""}
                </p>
                {lastMessage && lastMessage.unRead && (
                  <span className="badge indicator-item badge-secondary border-none bg-[--cta-green-color]">
                    {lastMessage.unRead}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
