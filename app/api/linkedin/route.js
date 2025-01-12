// Function to fetch connections
const fetchConnections = async (accessToken) => {
  const response = await fetch(
    "https://api.linkedin.com/v2/connections?q=viewer&start=0&count=10",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    },
  );

  if (!response.ok) {
    throw new Error("Failed to fetch connections");
  }

  const data = await response.json();
  return data.elements; // Assuming 'elements' contains connection data
};

// Function to send a message
//   const sendMessage = async (recipientId, message, accessToken) => {
//     const response = await fetch("https://api.linkedin.com/v2/messages", {
//       method: "POST",
//       headers: {
//         Authorization: `Bearer ${accessToken}`,
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({
//         recipient: {
//           person: {
//             id: recipientId,
//           },
//         },
//         subject: "Hello",
//         body: message,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to send message");
//     }

//     return await response.json();
//   };
