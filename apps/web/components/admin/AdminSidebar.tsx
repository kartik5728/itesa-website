
"use client";

import { useState } from "react";
import {
  ChartPie,
  ChevronDown,
  ChevronRight,
  ClipboardList,
  Headphones,
  LockKeyhole,
  Mail,
  Phone,
  Settings,
  ShoppingBag,
  Users,
  Video,
  CircleAlert,
  FolderKanban,
} from "lucide-react";

type AdminSidebarProps = {
  onNavigate?: () => void;
};

const menuItems = [
  {
    title: "Dashboards",
    icon: ChartPie,
    children: ["Overview", "Analytics"],
  },
  {
    title: "Pages",
    icon: ClipboardList,
    children: ["Projects", "Pricing"],
  },
  {
    title: "E-commerce",
    icon: ShoppingBag,
    children: ["Products", "Orders"],
  },
  {
    title: "Users",
    icon: Users,
    children: ["All Users", "Settings", "Profile", "Activity"],
  },
  {
    title: "Support",
    icon: Headphones,
    children: ["Tickets"],
  },
  {
    title: "Projects",
    icon: FolderKanban,
    children: ["All Projects"],
  },
  {
    title: "Mailing",
    icon: Mail,
    children: ["Inbox"],
  },
  {
    title: "Video Call",
    icon: Video,
    children: ["Meetings"],
  },
  {
    title: "Audio Call",
    icon: Phone,
    children: ["Calls"],
  },
  {
    title: "Authentication",
    icon: LockKeyhole,
    children: ["Login", "Register"],
  },
  {
    title: "Status Pages",
    icon: CircleAlert,
    children: ["System Status"],
  },
];

export default function AdminSidebar({
  onNavigate,
}: AdminSidebarProps) {
  const [expanded, setExpanded] = useState<string[]>(["Users"]);
  const [active, setActive] = useState("All Users");

  function toggleSection(title: string) {
    setExpanded((current) =>
      current.includes(title)
        ? current.filter((item) => item !== title)
        : [...current, title]
    );
  }

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col overflow-y-auto border-r border-gray-700 bg-gray-800 px-3 py-4 text-white">
      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expanded.includes(item.title);

          return (
            <div key={item.title}>
              <button
                onClick={() => toggleSection(item.title)}
                aria-expanded={isExpanded}
                className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm font-medium hover:bg-gray-700"
              >
                <Icon size={19} className="shrink-0 text-gray-400" />

                <span className="flex-1">{item.title}</span>

                {isExpanded ? (
                  <ChevronDown size={17} />
                ) : (
                  <ChevronRight size={17} />
                )}
              </button>

              {isExpanded && (
                <div className="ml-6 space-y-1 py-1">
                  {item.children.map((child) => (
                    <button
                      key={child}
                      onClick={() => {
                        setActive(child);
                        onNavigate?.();
                      }}
                      className={`w-full rounded-lg px-3 py-2.5 text-left text-sm ${
                        active === child
                          ? "bg-gray-700 font-semibold text-white"
                          : "text-gray-300 hover:bg-gray-700"
                      }`}
                    >
                      {child}
                    </button>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="mt-5 border-t border-gray-700 pt-4">
        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-gray-700">
          <Settings size={19} />
          Unlock Code
        </button>

        <button className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm hover:bg-gray-700">
          <ClipboardList size={19} />
          Docs
        </button>
      </div>
    </aside>
  );
}
