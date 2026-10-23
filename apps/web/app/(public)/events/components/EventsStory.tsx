
"use client";

import { useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";
import { useGSAP } from "@gsap/react";
import styles from "./EventsStory.module.css";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function EventsStory() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const section = sectionRef.current;
      if (!section) return;

      const firstMessage = section.querySelector(".story-first");
      const secondMessage = section.querySelector(".story-second");
      const thirdMessage = section.querySelector(".story-third");
      const intro = section.querySelector(".story-intro");
      const company = section.querySelector(".story-company");

      // Initial state: the first two headline lines are visible.
      gsap.set([secondMessage, thirdMessage, intro, company], {
        autoAlpha: 0,
        y: 70,
      });

      const mm = gsap.matchMedia();

      mm.add(
        {
          desktop: "(min-width: 769px)",
          mobile: "(max-width: 768px)",
          reducedMotion: "(prefers-reduced-motion: reduce)",
        },
        (context) => {
          const { reducedMotion } = context.conditions as {
            desktop: boolean;
            mobile: boolean;
            reducedMotion: boolean;
          };

          // Keep a readable, unpinned layout for reduced-motion users.
          if (reducedMotion) {
            gsap.set(
              [firstMessage, secondMessage, thirdMessage, intro, company],
              {
                clearProps: "all",
              }
            );
            return;
          }

          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: "top top",
              end: () => `+=${window.innerHeight * 3.5}`,
              pin: true,
              scrub: 1,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // Phase 1: the opening headline gives way to the next line.
          tl.to(firstMessage, {
            y: -100,
            autoAlpha: 0,
            duration: 1,
            ease: "none",
          });

          tl.to(
            secondMessage,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "none",
            },
            "<"
          );

          // Phase 2: "LEAVE THEM THINKING."
          tl.to(secondMessage, {
            y: -100,
            autoAlpha: 0,
            duration: 1,
            ease: "none",
          });

          tl.to(
            thirdMessage,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "none",
            },
            "<"
          );

          // Phase 3: introductory paragraph appears over the same video.
          tl.to(thirdMessage, {
            y: -60,
            autoAlpha: 0.25,
            duration: 0.7,
            ease: "none",
          });

          tl.to(
            intro,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "none",
            },
            "<"
          );

          // Phase 4: final company statement.
          tl.to(intro, {
            y: -35,
            autoAlpha: 0,
            duration: 0.7,
            ease: "none",
          });

          tl.to(
            company,
            {
              y: 0,
              autoAlpha: 1,
              duration: 1,
              ease: "none",
            },
            "<"
          );
        }
      );

      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className={styles.story}
      aria-label="Our event philosophy"
    >
      <video
        className={styles.video}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/events-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/events-hero-lambo.mp4" type="video/mp4" />
      </video>

      <div className={styles.overlay} aria-hidden="true" />

      <header className={styles.nav}>
        <a href="/" className={styles.logo} aria-label="360 Production House">
          <span className={styles.logoNumber}>360°</span>
          <span className={styles.logoText}>
            PRODUCTION
            <br />
            HOUSE
          </span>
        </a>

        <button type="button" className={styles.menu}>
          MENU
        </button>
      </header>

      <div className={styles.storyContent}>
        <div className={styles.headline}>
          <h2 className={`${styles.message} story-first`}>
            <span className={styles.purple}>PULL PEOPLE IN.</span>
            <span className={styles.yellow}>MAKE THEM FEEL.</span>
          </h2>

          <h2 className={`${styles.message} story-second`}>
            <span className={styles.light}>MAKE THEM FEEL.</span>
          </h2>

          <h2 className={`${styles.message} story-third`}>
            <span className={styles.light}>LEAVE THEM</span>
            <span className={styles.light}>THINKING.</span>
          </h2>
        </div>

        <div className={`${styles.copy} story-intro`}>
          <p>
            We create experiences that bring people together,
            spark emotion, and turn ordinary moments into
            extraordinary memories.
          </p>
        </div>

        <div className={`${styles.company} story-company`}>
          <h2>
            THE TOP EVENT
            <br />
            COMPANY IN
            <br />
            INDIA.
          </h2>
        </div>
      </div>
    </section>
  );
}
