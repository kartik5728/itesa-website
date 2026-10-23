
"use client";

import { useState } from "react";
import AdminNavbar from "./AdminNavbar";
import AdminSidebar from "./AdminSidebar";

export default function AdminLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function closeSidebar() {
    setSidebarOpen(false);
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <AdminNavbar
        sidebarOpen={sidebarOpen}
        onMenuClick={() => setSidebarOpen((open) => !open)}
      />

      <div className="flex min-h-[calc(100vh-3.5rem)]">
        {/* Desktop sidebar */}
        <div className="sticky top-14 hidden h-[calc(100vh-3.5rem)] lg:block">
          <AdminSidebar />
        </div>

        {/* Mobile overlay */}
        {sidebarOpen && (
          <button
            aria-label="Close navigation overlay"
            onClick={closeSidebar}
            className="fixed inset-0 top-14 z-40 bg-black/60 lg:hidden"
          />
        )}

        {/* Mobile drawer */}
        <div
          className={`fixed bottom-0 left-0 top-14 z-50 w-64 transition-transform duration-200 lg:hidden ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }`}
        >
          <AdminSidebar onNavigate={closeSidebar} />
        </div>

        {/* Main page content */}
        <main className="min-w-0 flex-1 overflow-x-hidden p-4 sm:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
