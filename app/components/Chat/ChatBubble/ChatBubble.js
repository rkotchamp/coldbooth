import SentChat from "./Sent/SentChat";
import ReceivedChat from "./Received/ReceivedChat";
export default function ChatBubble() {
  return (
    <div className="flex flex-col gap-2 p-5">
      <ReceivedChat />

      <p className="text-center text-sm text-[var(--gray-dark-color)]">
        Yesterday
      </p>
      <SentChat />
      <SentChat />
      <SentChat />

      <SentChat />
      <SentChat />
      <ReceivedChat />
      <ReceivedChat />
      <ReceivedChat />
      <ReceivedChat />
      <ReceivedChat />
      <ReceivedChat />
      <ReceivedChat />
    </div>
  );
}
