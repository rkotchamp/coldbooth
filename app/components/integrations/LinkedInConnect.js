// "use client";
// import { useState } from "react";
// import SubButton from "../SettingsCompos/AccountSettings/Button";

// export default function LinkedInConnect() {
//   const [isConnecting, setIsConnecting] = useState(false);
//   const [error, setError] = useState("");

//   const handleConnect = async () => {
//     setIsConnecting(true);
//     setError("");

//     try {
//       if (!process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID) {
//         throw new Error("LinkedIn Client ID is not configured");
//       }
//       if (!process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI) {
//         throw new Error("LinkedIn Redirect URI is not configured");
//       }
//       const redirectUri = process.env.NEXT_PUBLIC_LINKEDIN_REDIRECT_URI;

//       const state = `${Date.now()}_${Math.random().toString(36).substring(7)}`;
//       const params = new URLSearchParams({
//         response_type: "code",
//         client_id: process.env.NEXT_PUBLIC_LINKEDIN_CLIENT_ID,
//         redirect_uri: redirectUri,
//         state: state,
//         scope: "openid profile w_member_social email",
//       });

//       sessionStorage.setItem("linkedin_auth_state", state); // Add state for security
//       const authUrl = `https://www.linkedin.com/oauth/v2/authorization?${params.toString()}`;
//       console.log("Authorization URL:", authUrl);

//       window.location.href = authUrl;
//     } catch (error) {
//       console.error("LinkedIn connection error:", error);
//       setError(error.message || "Failed to connect to LinkedIn");
//     } finally {
//       setIsConnecting(false);
//     }
//   };

//   return (
//     <>
//       <SubButton
//         onClick={handleConnect}
//         disabled={isConnecting}
//         btnText={isConnecting ? "Connecting..." : "Connect LinkedIn"}
//       />
//       {error && <p className="mt-2 text-red-500">{error}</p>}
//     </>
//   );
// }
