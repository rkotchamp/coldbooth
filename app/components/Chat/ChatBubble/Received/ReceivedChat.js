import Image from "next/image";

export default function ReceivedChat() {
  return (
    <div className="chat chat-start">
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <Image
            src="/images/macLou.JPG"
            alt="avatar"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="chat-bubble bg-[var(--primary-green-color)] text-[var(--gray-white-color)]">
        It was a pleasure to chat with you
      </div>
      <div className="chat-footer opacity-50">12:00</div>
    </div>
  );
}
