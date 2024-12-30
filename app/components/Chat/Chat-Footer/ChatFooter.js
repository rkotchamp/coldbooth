import { FaSmile, FaPaperclip, FaMicrophone } from "react-icons/fa";

export default function ChatFooter() {
  return (
    <div className="w-full bg-[var(--chat-panel-green-bg-color)] p-5">
      <div className="flex items-center justify-center gap-10">
        <div className="flex items-center gap-2">
          <FaPaperclip className="text-[30px]" />
        </div>
        <label
          htmlFor="message"
          className="flex w-[80%] items-center justify-center gap-5 rounded-full bg-[var(--gray-white-color)] py-3"
        >
          <textarea
            className="textarea h-[32px] w-[90%] resize-none overflow-hidden rounded-full bg-transparent px-10 placeholder:text-left focus:outline-none focus:ring-2 focus:ring-[var(--primary-green-color)]"
            placeholder="Write a message..."
            id="message"
          />
          <FaSmile className="text-[30px]" />
        </label>
        <div className="flex items-center gap-2">
          <FaMicrophone className="text-[30px]" />
        </div>
      </div>
    </div>
  );
}
