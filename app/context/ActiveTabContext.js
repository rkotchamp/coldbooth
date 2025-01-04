"use client";
import { createContext, useContext, useState } from "react";

const ActiveTabContext = createContext();

export function ActiveTabProvider({ children }) {
  const [openSettingsTab, setOpenSettingsTab] = useState(false);

  return (
    <ActiveTabContext.Provider value={{ openSettingsTab, setOpenSettingsTab }}>
      {children}
    </ActiveTabContext.Provider>
  );
}

export default ActiveTabContext;
