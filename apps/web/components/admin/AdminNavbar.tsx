
"use client";

import {
  Bell,
  Grid2X2,
  Menu,
  Moon,
  Search,
  X,
} from "lucide-react";

type AdminNavbarProps = {
  onMenuClick: () => void;
  sidebarOpen: boolean;
};

export default function AdminNavbar({
  onMenuClick,
  sidebarOpen,
}: AdminNavbarProps) {
  return (
    <header className="sticky top-0 z-40 flex h-14 items-center gap-4 border-b border-gray-700 bg-gray-800 px-4 text-white">
      {/* Sidebar toggle */}
      <button
        type="button"
        onClick={onMenuClick}
        aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
        aria-expanded={sidebarOpen}
        className="rounded-lg p-2 hover:bg-gray-700"
      >
        {sidebarOpen ? (
          <X size={21} />
        ) : (
          <Menu size={21} />
        )}
      </button>

      {/* Brand */}
      <a
        href="/admin"
        className="flex shrink-0 items-center gap-2 text-xl font-bold"
      >
        <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-600">
          A
        </span>
        <span>FlowAdmin</span>
      </a>

      {/* Search */}
      <div className="ml-4 hidden max-w-md flex-1 md:flex">
        <div className="flex w-full items-center gap-2 rounded-lg border border-gray-600 bg-gray-700 px-3">
          <Search size={18} className="text-gray-400" />
          <input
            type="search"
            placeholder="Search"
            aria-label="Search dashboard"
            className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Right-side actions */}
      <div className="ml-auto flex items-center gap-2">
        <button
          aria-label="Notifications"
          className="rounded-lg p-2 hover:bg-gray-700"
        >
          <Bell size={20} />
        </button>

        <button
          aria-label="Applications"
          className="rounded-lg p-2 hover:bg-gray-700"
        >
          <Grid2X2 size={20} />
        </button>

        <button
          aria-label="Toggle theme"
          className="rounded-lg p-2 hover:bg-gray-700"
        >
          <Moon size={20} />
        </button>

        <button
          aria-label="Open profile"
          className="ml-1 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-semibold"
        >
          A
        </button>
      </div>
    </header>
  );
}
