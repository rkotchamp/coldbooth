import { FaUser } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io5";
import messageData from "message.json";

export default function MessageUsers() {
  const { conversations } = messageData;
  console.log(conversations);
  return (
    <>
      {conversations.map((mess, i) => {
        const lastMessage =
          mess.messages.length > 0
            ? mess.messages[mess.messages.length - 1]
            : null;
        return (
          <div
            className="flex h-[70px] w-full cursor-pointer items-center justify-center gap-[22px] p-10 hover:bg-[--inside-app-bg-color]"
            key={i}
          >
            <div className="relative flex h-[50px] w-[50px] items-center justify-center rounded-[50px] bg-[--gray-dark-color]">
              <FaUser className="text-[20px] text-[--gray-white-color]" />
              <div className="absolute bottom-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-[--gray-white-color]">
                <IoLogoFacebook className="" />
              </div>
            </div>

            {/* User Name and Message Plus time */}
            <div className="flex items-center justify-between gap-5">
              <div>
                <p className="mid-bold-user-name-fonts">
                  {mess.participants.sender}
                </p>
                <p className="small-supporting-fonts">
                  {lastMessage ? lastMessage.text : "No messages yet"}
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
