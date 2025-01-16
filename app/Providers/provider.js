"use client";
import { ItemsSettingsContextProvider } from "../context/ItemsSettingsActiveContext";
import { ActiveTabProvider } from "../context/ActiveTabContext";
import { ConversationContextProvider } from "../context/ConversationContext";

export function Providers({ children }) {
  return (
    <ActiveTabProvider>
      <ConversationContextProvider>
        <ItemsSettingsContextProvider>{children}</ItemsSettingsContextProvider>
      </ConversationContextProvider>
    </ActiveTabProvider>
  );
}
