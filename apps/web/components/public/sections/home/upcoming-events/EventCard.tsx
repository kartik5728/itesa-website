import Image from "next/image";
import Link from "next/link";
import type { EventTone, UpcomingEvent } from "./data";

const TONES: Record<
  EventTone,
  { card: string; shapeA: string; shapeB: string; ring: string }
> = {
  amber: {
    card: "bg-[#F5A524] text-[#2B0A4D]",
    shapeA: "bg-[#FFD27A]",
    shapeB: "bg-[#D9780A]",
    ring: "focus-visible:ring-[#2B0A4D]",
  },
  magenta: {
    card: "bg-[#D6246E] text-white",
    shapeA: "bg-[#F0609A]",
    shapeB: "bg-[#8E0F49]",
    ring: "focus-visible:ring-white",
  },
  lilac: {
    card: "bg-[#C58BEA] text-[#2B0A4D]",
    shapeA: "bg-[#E2BFF7]",
    shapeB: "bg-[#8E4CC2]",
    ring: "focus-visible:ring-[#2B0A4D]",
  },
};

interface EventCardProps {
  event: UpcomingEvent;
  featured?: boolean;
}

export const EventCard = ({ event, featured = false }: EventCardProps) => {
  const tone = TONES[event.tone];

  return (
    <article
      className={[
        "relative isolate overflow-hidden rounded-3xl",
        "flex flex-col justify-between gap-8 p-6 sm:p-8",
        featured
          ? "min-h-[22rem] md:min-h-[26rem] md:flex-row md:items-stretch lg:p-12"
          : "min-h-[18rem] md:min-h-[20rem]",
        tone.card,
      ].join(" ")}
    >
      {/* Art layer */}
      <div
        aria-hidden="true"
        className={[
          "pointer-events-none absolute -z-10",
          featured
            ? "-bottom-24 -right-16 size-80 sm:size-96 md:inset-y-0 md:right-0 md:left-auto md:size-auto md:w-1/2"
            : "-bottom-16 -right-16 size-56",
        ].join(" ")}
      >
        {event.image ? (
          <Image
            src={event.image.src}
            alt=""
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <>
            <span
              className={`absolute right-0 top-1/4 size-56 rotate-12 rounded-[2.5rem] opacity-70 ${tone.shapeA}`}
            />
            <span
              className={`absolute bottom-0 right-1/3 size-32 rounded-full opacity-60 ${tone.shapeB}`}
            />
          </>
        )}
      </div>

      {/* Text */}
      <div className={featured ? "flex flex-col justify-between gap-8 md:max-w-[50%]" : "flex flex-col gap-8"}>
        <p className="font-serif font-light leading-none">
          <time
            dateTime={event.startsAt}
            className={featured ? "text-6xl sm:text-7xl lg:text-8xl" : "text-5xl sm:text-6xl"}
          >
            {event.dateRange}
          </time>
          <sup className="ml-1 align-super text-base font-normal italic sm:text-xl">
            {event.month.toLowerCase()}
          </sup>
        </p>

        <div className="space-y-3">
          <h3
            className={[
              "font-extrabold leading-[0.95] tracking-tight",
              featured
                ? "text-4xl sm:text-5xl lg:text-6xl"
                : "text-3xl sm:text-4xl",
            ].join(" ")}
          >
            <Link
              href={event.href}
              className={`rounded-sm outline-none after:absolute after:inset-0 after:content-[''] focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent ${tone.ring}`}
            >
              {event.title}
            </Link>
          </h3>

          {event.localTitle && (
            <p className="text-lg font-medium opacity-90 sm:text-xl">
              {event.localTitle}
            </p>
          )}

          <p className="max-w-md text-sm leading-relaxed opacity-90 sm:text-base">
            {event.description}
          </p>

          <dl className="space-y-0.5 pt-1 text-sm font-medium">
            <div>
              <dt className="sr-only">Time</dt>
              <dd>{event.time}</dd>
            </div>
            <div>
              <dt className="sr-only">Location</dt>
              <dd className="opacity-80">{event.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </article>
  );
};