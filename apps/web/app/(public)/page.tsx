import { HeroSection } from "@/components/public/sections/hero";

// Server component: only composes sections.
// Add new sections below as you build them.
const PublicHomePage = () => {
  return (
    <main>
      <HeroSection />
      {/* <AboutSection /> */}
      {/* <ServicesSection /> */}
    </main>
  );
};

export default PublicHomePage;