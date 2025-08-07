import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Menu, X } from "lucide-react";

export default function SidebarLayout({ children, title }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        } transition-transform md:translate-x-0 md:static md:inset-0`}
      >
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <header className="bg-white shadow border-b">
          <div className="h-16 flex items-center px-6 justify-between">
            <div className="flex items-center gap-4">
              <button
                className="md:hidden text-gray-600"
                onClick={() => setOpen(!open)}
              >
                {open ? <X /> : <Menu />}
              </button>
              <h1 className="text-2xl font-semibold text-gray-700">{title}</h1>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
