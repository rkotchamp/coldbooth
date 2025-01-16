"use client";
import { createContext, useContext, useState, useEffect } from "react";

const ConversationContext = createContext();

export function ConversationContextProvider({ children }) {
  const [messages, setMessages] = useState();
  const [loading, setLoading] = useState(true);

  const fetchMessages = async () => {
    try {
      const response = await fetch(
        `/api/messages?conversationId=${process.env.NEXT_PUBLIC_MY_PERSONAL_NUMBER}`,
      );
      const data = await response.json();
      console.log(data);
      if (data.success) {
        const refinedMessages = data.messages.map((message) => ({
          type:
            message.senderId === process.env.TWILIO_PHONE ? "sent" : "received",
          text: message.content,
          time: new Date(message.createdAt).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        }));

        setMessages(refinedMessages);
      } else {
        console.error("Failed to fetch messages:", data.error);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();

    // const interval = setInterval(fetchMessages, 5000);
    // return () => clearInterval(interval);
  }, []);

  return (
    <ConversationContext.Provider
      value={{ messages, setMessages, loading, setLoading }}
    >
      {children}
    </ConversationContext.Provider>
  );
}

export default ConversationContext;
