export const heroStats = [
  { icon: "⌘", title: "Community", text: "Curious Minds, One Network" },
  { icon: "◷", title: "Hands-on Learning", text: "Build Beyond The Classroom" },
  { icon: "✧", title: "Ideas to Impact", text: "Learn. Create. Share." },
];

export const socialLinks = [
  { id: "instagram", label: "Instagram", href: "https://www.instagram.com/", hover: "hover:text-[#e1306c] hover:bg-[#e1306c]/10" },
  { id: "discord", label: "Discord", href: "https://discord.com/app", hover: "hover:text-[#5865f2] hover:bg-[#5865f2]/10" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/", hover: "hover:text-[#0a66c2] hover:bg-[#0a66c2]/10" },
  { id: "gmail", label: "Gmail", href: "https://mail.google.com/", hover: "hover:text-[#ea4335] hover:bg-[#ea4335]/10" },
] as const;


const TITLES = new Set(["dr.", "mr.", "ms.", "mrs.", "prof."]);

/** "Dr. Anil Sharma" -> "AS" */
export function getInitials(name: string) {
  return name
    .split(" ")
    .filter((p) => !TITLES.has(p.toLowerCase()))
    .map((p) => p[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}
