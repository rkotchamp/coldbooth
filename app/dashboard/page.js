"use client";
import { useState } from "react";
import { Menu } from "lucide-react";

import FirstPanel from "@/app/components/Panels/FirstPanel/FirstPanel";
import SecondPanel from "@/app/components/Panels/secondPanel/SecondPanel";
import ThirdPanel from "@/app/components/Panels/ThirdPanel/ThirdPanel";

export default function Dashboard() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isChatListOpen, setIsChatListOpen] = useState(false);
  return (
    <main className="flex h-screen w-full overflow-hidden">
      {(isMobileMenuOpen || isChatListOpen) && (
        <div
          className="fixed inset-0 z-20 bg-black bg-opacity-50 lg:hidden"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setIsChatListOpen(false);
          }}
        />
      )}

      {/* First Panel - Navigation */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-64 transform bg-white transition-transform lg:relative lg:translate-x-0 ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <FirstPanel onClose={() => setIsMobileMenuOpen(false)} />
      </div>

      {/* Second Panel - Chat List */}
      <div
        className={`fixed inset-y-0 left-0 z-30 w-96 transform bg-white transition-transform lg:relative lg:translate-x-0 ${
          isChatListOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }`}
      >
        <SecondPanel onClose={() => setIsChatListOpen(false)} />
      </div>

      <div className="flex-1 bg-gray-50">
        {/* Mobile Header */}
        <div className="flex items-center gap-4 border-b p-4 lg:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="text-gray-600"
          >
            <Menu className="h-6 w-6" />
          </button>
          <button
            onClick={() => setIsChatListOpen(true)}
            className="text-gray-600"
          >
            Chats
          </button>
        </div>

        <ThirdPanel />
      </div>
    </main>
  );
}
