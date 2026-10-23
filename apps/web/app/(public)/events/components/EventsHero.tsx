"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap/gsap";
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

const TOP_OFFSET = 120;   // space under nav when the stack reaches the top (px)
const BOTTOM_OFFSET = 64; // must match `bottom` in .stack CSS
const GAP = 50;          // space between "THINKING." and "THE TOP EVENT..." (px)

export default function EventsHero() {
  const heroRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const thinkingRef = useRef<HTMLDivElement>(null);
  const companyRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useGSAP(
    () => {
      const hero = heroRef.current!;
      const stack = stackRef.current!;
      const thinking = thinkingRef.current!;
      const company = companyRef.current!;
      const paragraph = paragraphRef.current!;
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
          gsap.set(paragraph, { autoAlpha: 0, y: 40 });

          const tl = gsap.timeline({
            defaults: { ease: "none" },
            scrollTrigger: {
              trigger: hero,
              start: "top top",
              end: () => `+=${window.innerHeight * 4}`,
              pin: true,
              scrub: 0.5,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          // y where the stack sits at the end of phase 1 (top edge at TOP_OFFSET)
          const stackYAtTop = () =>
            -(hero.offsetHeight - stack.offsetHeight - BOTTOM_OFFSET - TOP_OFFSET);

          // ---------- PHASE 1 (0 -> 2): stack travels up, letters rise ----------
          tl.fromTo(
            stack,
            { y: () => thinking.offsetHeight },
            { y: () => stackYAtTop(), duration: 2 },
            0
          );

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

         // ---------- PHASE 2 (2 -> 4): stack + company move up TOGETHER ----------
        // Company starts GAP px below the stack and ends bottom-aligned.
        // Both travel the same distance, so the gap stays constant.
        const companyStartY = () => TOP_OFFSET + stack.offsetHeight + GAP;
        const companyEndY = () =>
          Math.max(TOP_OFFSET, hero.offsetHeight - company.offsetHeight - BOTTOM_OFFSET);
        const delta = () => Math.max(0, companyStartY() - companyEndY());

        tl.to(stack, { y: () => stackYAtTop() - delta(), duration: 2 }, 2);

        tl.fromTo(
          company,
          { y: () => companyStartY(), autoAlpha: 0 },
          { y: () => companyEndY(), autoAlpha: 1, duration: 2 },
          2
        );

        tl.to(
          paragraph,
          { autoAlpha: 1, y: 0, duration: 0.8, ease: "power2.out" },
          3.2
        );
        }
      );

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      return () => mm.revert();
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-label="360 Production House events"
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
        <source src="/events/videos/events-hero-lambo.mp4" type="video/mp4" />
      </video>
      <div className={styles.overlay} aria-hidden="true" />

      <div ref={stackRef} className={styles.stack}>
        <h1 className={styles.headline}>
          <span className={styles.purple}>PULL PEOPLE IN.</span>
          <span className={styles.yellow}>MAKE THEM FEEL.</span>
        </h1>

        {/* Revealed on scroll */}
        <div
          ref={thinkingRef}
          className={styles.headline}
          aria-label="Leave them thinking."
        >
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
          BEST
          <br />
          EVENTS.
          <br />
        </h2>
        <p ref={paragraphRef} className={styles.companyText}>
          We go beyond creating gatherings to crafting living stories that pull
          people in, make them feel and leave them thinking.
        </p>
      </div>
    </section>
  );
}