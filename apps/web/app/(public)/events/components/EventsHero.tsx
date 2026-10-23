"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap/gsap";
// import { useGSAP } from "@gsap/react";
import styles from "./EventsHero.module.css";

// Splits text into per-letter spans (no SplitText plugin needed)
function Chars({ text }: { text: string }) {
  return (
    <>
      {text.split("").map((ch, i) => (
        <span key={i} className={`${styles.char} char`}>
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </>
  );
}

const TOP_OFFSET = 120;    // space under nav when stack reaches the top (px)
const BOTTOM_OFFSET = 64;  // must match `bottom` in .stack / .company CSS

export default function EventsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const thinkingRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);

  useGSAP(
  () => {
    const hero = heroRef.current!;
    const stack = stackRef.current!;
    const thinking = thinkingRef.current!;
    const company = companyRef.current!;
    const chars = thinking.querySelectorAll(".char");

    const mm = gsap.matchMedia();

    mm.add(
      {
        motion: "(prefers-reduced-motion: no-preference)",
        reduce: "(prefers-reduced-motion: reduce)",
      },
      (ctx) => {
        if (ctx.conditions?.reduce) return; // CSS shows everything statically

        gsap.set(chars, { yPercent: 120 });
        gsap.set(company, { autoAlpha: 0 });

        const tl = gsap.timeline({
          defaults: { ease: "none" },
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: () => `+=${window.innerHeight * 3}`,
            pin: true,
            scrub: 0.5,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        // 1) Stack starts shifted down so only lines 1-2 show at the bottom,
        //    then travels up to the top. Runs the whole first 2 units.
        tl.fromTo(
          stack,
          { y: () => thinking.offsetHeight },
          {
            y: () =>
              -(hero.offsetHeight - stack.offsetHeight - BOTTOM_OFFSET - TOP_OFFSET),
            duration: 2,
          },
          0
        );

        // 2) Letters of lines 3-4 rise out of their masks WHILE the stack moves
        tl.to(
          chars,
          {
            yPercent: 0,
            duration: 0.6,
            stagger: { each: 0.05 },
            ease: "power3.out",
          },
          0.3
        );

        // 3) Company statement rises in near the end
        tl.fromTo(
          company,
          { y: () => hero.offsetHeight * 0.5, autoAlpha: 0 },
          { y: 0, autoAlpha: 1, duration: 1.2 },
          1.2
        );
      }
    );

    return () => mm.revert();
  },
  { scope: heroRef }
);
  return (
    <section ref={heroRef} className={styles.hero} aria-label="360 Production House events">
      <video
        className={styles.video}
        autoPlay muted loop playsInline preload="metadata"
        poster="/images/events-poster.jpg"
        aria-hidden="true"
      >
        <source src="/videos/events-hero-lambo.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />

      <div ref={stackRef} className={styles.stack}>
        <h1 className={styles.headline}>
          <span className={styles.purple}>PULL PEOPLE IN.</span>
          <span className={styles.yellow}>MAKE THEM FEEL.</span>
        </h1>

        {/* Revealed on scroll */}
        <div ref={thinkingRef} className={styles.headline} aria-label="Leave them thinking.">
          <span className={`${styles.light} ${styles.mask}`} aria-hidden="true">
            <Chars text="LEAVE THEM" />
          </span>
          <span className={`${styles.light} ${styles.mask}`} aria-hidden="true">
            <Chars text="THINKING." />
          </span>
        </div>
      </div>

      <div ref={companyRef} className={styles.company}>
        <h2 className={styles.companyHeadline}>
          THE TOP EVENT<br />COMPANY IN<br />INDIA.
        </h2>
      </div>
    </section>
  );
}