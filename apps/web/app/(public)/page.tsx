import { HeroSection } from "@/components/public/sections/hero";
import { UpcomingEventsSection } from "@/components/public/sections/home/upcoming-events/UpcomingEvents";
import { GallerySection } from "@/components/public/sections/home/gallery/GallerySection"
// Server component: only composes sections.
// Add new sections below as you build them.
const PublicHomePage = () => {
  return (
    <main>
      <HeroSection />
      <UpcomingEventsSection />
      <GallerySection />
      {/* <AboutSection /> */}
    </main>
  );
};

export default PublicHomePage;