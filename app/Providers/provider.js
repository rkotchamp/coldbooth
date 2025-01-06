"use client";
import { ItemsSettingsContextProvider } from "../context/ItemsSettingsActiveContext";
import { ActiveTabProvider } from "../context/ActiveTabContext";

export function Providers({ children }) {
  return (
    <ActiveTabProvider>
      <ItemsSettingsContextProvider>{children}</ItemsSettingsContextProvider>
    </ActiveTabProvider>
  );
}
