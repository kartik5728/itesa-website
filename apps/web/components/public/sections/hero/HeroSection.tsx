"use client";

import { useRef } from "react";
import HeroBackgroundVideo from "./HeroBackgroundVideo";
import HeroContent from "./HeroContent";
import useHeroAnimations  from "./useHeroAnimations";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useHeroAnimations(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative isolate h-screen w-full overflow-hidden"
    >
      <HeroBackgroundVideo
        poster="/videos/hero-poster.jpg"
        sources={[
          // { src: "/videos/hero.webm", type: "video/webm" },
          { src: "/hero/hero_video.mp4", type: "video/mp4" },
        ]}
        overlayOpacity={0.4}
      />

      <HeroContent
        title="Your Headline Goes Here"
        subtitle="A short supporting line that explains what you do."
        ctaLabel="Get Started"
        ctaHref="#contact"
      />
    </section>
  );
};

export default HeroSection;