"use client";
import { createContext, useContext, useState } from "react";

const ItemsSettingsContext = createContext();

export function ItemsSettingsContextProvider({ children }) {
  const [accountSettings, setAccountSettings] = useState("Account");
  const [integrations, setIntegrations] = useState("Integration");
  const [subscription, setSubscription] = useState("Subscription");
  const [security, setSecurity] = useState("Security");
  const [support, setSupport] = useState("Support");
  const [policies, setPolicies] = useState("Policies");

  return (
    <ItemsSettingsContext.Provider
      value={{
        accountSettings,
        setAccountSettings,
        integrations,
        setIntegrations,
        subscription,
        setSubscription,
        security,
        setSecurity,
        support,
        setSupport,
        policies,
        setPolicies,
      }}
    >
      {children}
    </ItemsSettingsContext.Provider>
  );
}

export default ItemsSettingsContext;
