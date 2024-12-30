import SentChat from "./Sent/SentChat";
import ReceivedChat from "./Received/ReceivedChat";
export default function ChatBubble() {
  return (
    <div>
      <ReceivedChat />
      <SentChat />
    </div>
  );
}
