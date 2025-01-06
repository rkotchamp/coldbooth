"use client";
import { createContext, useContext, useState } from "react";

const ItemsSettingsContext = createContext();

export function ItemsSettingsContextProvider({ children }) {
  const [activeSettings, setActiveSettings] = useState("Account");

  return (
    <ItemsSettingsContext.Provider
      value={{
        activeSettings,
        setActiveSettings,
      }}
    >
      {children}
    </ItemsSettingsContext.Provider>
  );
}

export default ItemsSettingsContext;
