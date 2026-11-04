export type EventTone = "amber" | "magenta" | "lilac";

export interface UpcomingEvent {
  id: string;
  title: string;
  /** Optional second-language title shown under the main one */
  localTitle?: string;
  description: string;
  /** e.g. "02–05" or "04" */
  dateRange: string;
  month: string;
  /** ISO date for the <time> element */
  startsAt: string;
  time: string;
  location: string;
  href: string;
  tone: EventTone;
  /** Optional photo. Without it, soft decorative shapes are shown. */
  image?: { src: string; alt: string };
}

// The first item renders as the large card, the next two as the small cards.
export const UPCOMING_EVENTS: UpcomingEvent[] = [
  {
    id: "culture-fair",
    title: "Culture Fair",
    localTitle: "Hội chợ văn hóa",
    description:
      "Craft stalls, live demonstrations and exclusive gifts for the first visitors through the doors.",
    dateRange: "02–05",
    month: "July",
    startsAt: "2026-07-02",
    time: "9:00 AM onwards",
    location: "Millennial Square, Level B1",
    href: "/events/culture-fair",
    tone: "amber",
  },
  {
    id: "music-fest",
    title: "Music Fest",
    localTitle: "Lễ hội âm nhạc",
    description: "An evening of live performances in the main square.",
    dateRange: "05",
    month: "July",
    startsAt: "2026-07-05",
    time: "6:00 PM – 9:00 PM",
    location: "Millennial Square",
    href: "/events/music-fest",
    tone: "lilac",
  },
  {
    id: "fashion-runway",
    title: "Fashion Runway",
    localTitle: "Tâm điểm thời trang",
    description: "Seasonal collections from our stores, on the runway.",
    dateRange: "04",
    month: "July",
    startsAt: "2026-07-04",
    time: "6:00 PM – 7:30 PM",
    location: "Main Hall, Level 1",
    href: "/events/fashion-runway",
    tone: "magenta",
  },
];