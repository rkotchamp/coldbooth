"use client";

import { ActiveTabProvider } from "../context/ActiveTabContext";

export function Providers({ children }) {
  return <ActiveTabProvider>{children}</ActiveTabProvider>;
}
