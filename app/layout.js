import "./globals.css";
import { Montserrat } from "next/font/google";
import { SessionProvider } from "next-auth/react";
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <SessionProvider>{children}</SessionProvider>
      </body>
    </html>
  );
}
