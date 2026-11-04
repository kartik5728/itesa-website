import { EventCard } from "./EventCard";
import { UPCOMING_EVENTS } from "./data";

// Server component: no client state needed.
export const UpcomingEventsSection = () => {
  const [featured, ...compact] = UPCOMING_EVENTS;

  if (!featured) return null;

  return (
    <section
      aria-labelledby="upcoming-events-heading"
      className="bg-[#2B0A4D] px-8 py-15 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <header className="mb-8 max-w-xl sm:mb-12">
          <h2
            id="upcoming-events-heading"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Upcoming events
          </h2>
          <p className="mt-3 text-base text-white/75 sm:text-lg">
            Mark your calendar for what&rsquo;s happening next.
          </p>
        </header>

        {/* Bento: 1 big card on top, 2 small cards below */}
        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2">
          <div className="md:col-span-2">
            <EventCard event={featured} featured />
          </div>
          {compact.slice(0, 2).map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};