"use client";
import { useState } from "react";
import SubButton from "../SettingsCompos/AccountSettings/Button";

export default function LinkedInConnect() {
  const [isConnecting, setIsConnecting] = useState(false);
  const [error, setError] = useState("");

  const handleConnect = async () => {
    setIsConnecting(true);
    setError("");

    try {
      const clientId = process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID;
      // Use the NEXT_PUBLIC_BASE_URL for local development
      const redirectUri =process.env.LINKEDIN_REDIRECT_URI
      const state = Math.random().toString(36).substring(7); // Add state for security

      const scope = encodeURIComponent(
        "r_liteprofile r_emailaddress w_member_social",
      );

      const authUrl =
        `https://www.linkedin.com/oauth/v2/authorization?` +
        `response_type=code` +
        `&client_id=${clientId}` +
        `&redirect_uri=${redirectUri}` +
        `&state=${state}` +
        `&scope=${scope}`;

      // Store state in sessionStorage for verification
      sessionStorage.setItem("linkedin_auth_state", state);

      window.location.href = authUrl;
    } catch (error) {
      console.error("LinkedIn connection error:", error);
      setError("Failed to connect to LinkedIn");
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <>
      <SubButton
        onClick={handleConnect}
        disabled={isConnecting}
        btnText={isConnecting ? "Connecting..." : "Connect LinkedIn"}
      />
      {error && <p className="mt-2 text-red-500">{error}</p>}
    </>
  );
}
