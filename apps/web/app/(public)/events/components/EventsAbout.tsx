"use client";

import { useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/gsap/gsap";
import { useGSAP } from "@gsap/react";
import styles from "./EventsAbout.module.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Slide = {
  title: string;
  href: string;
  video: string; // plays inside the semicircle
  image: string; // full-bleed background
};

// Replace with your real assets (put them in /public/events/...)
const SLIDES: Slide[] = [
  { title: "Awards & Gala Events", href: "/events/awards-gala", video: "/events/videos/awards.mp4", image: "/events/images/awards.jpg" },
  { title: "Conference Planning", href: "/events/conference", video: "/events/videos/conference.mp4", image: "/events/images/conference.jpg" },
  { title: "Brand Activations", href: "/events/activations", video: "/events/videos/activations.mp4", image: "/events/images/activations.jpg" },
  { title: "Product Launches", href: "/events/launches", video: "/events/videos/launches.mp4", image: "/events/images/launches.jpg" },
  { title: "Incentive Trips", href: "/events/incentives", video: "/events/videos/incentives.mp4", image: "/events/images/incentives.jpg" },
  { title: "Virtual & Hybrid", href: "/events/hybrid", video: "/events/videos/events-hero-lambo.mp4", image: "/events/images/hybrid.jpg" },
];

// Slanted wipe: starts as a zero-height sliver at the bottom, ends covering everything.
const WIPE_FROM = "polygon(0% 100%, 100% 112%, 100% 112%, 0% 100%)";
const WIPE_TO = "polygon(0% -12%, 100% 0%, 100% 112%, 0% 100%)";

const STEP = 1.5; // timeline length per slide
const WIPE = 1.1; // part of each step used by the transition

const pad = (n: number) => String(n).padStart(2, "0");

export default function EventsAbout() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const bgs = gsap.utils.toArray<HTMLElement>("[data-bg]");
      const videos = gsap.utils.toArray<HTMLVideoElement>("[data-video]");
      const copies = gsap.utils.toArray<HTMLElement>("[data-copy]");
      const last = SLIDES.length - 1;

      // Initial state: slide 0 visible, the rest hidden
      gsap.set([bgs.slice(1), videos.slice(1)], { clipPath: WIPE_FROM });
      gsap.set(copies.slice(1), { autoAlpha: 0, y: 60 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${last * 100}%`, // 100vh of scroll per slide
          pin: true,
          scrub: 0.6,
          snap: {
            snapTo: "labels",
            duration: { min: 0.2, max: 0.6 },
            ease: "power2.inOut",
          },
        },
      });

      tl.addLabel("s0", 0);

      for (let i = 1; i <= last; i++) {
  const t = (i - 1) * STEP;

  // Background + semicircle video wipe in
  tl.to(
    [bgs[i], videos[i]],
    {
      clipPath: WIPE_TO,
      duration: WIPE,
      ease: "power2.inOut",
    },
    t
  );

  // Current copy leaves
  tl.to(
    copies[i - 1],
    {
      autoAlpha: 0,
      y: -60,
      duration: 0.4,
    },
    t
  );

  // Next copy arrives
  tl.to(
    copies[i],
    {
      autoAlpha: 1,
      y: 0,
      duration: 0.5,
      ease: "power2.out",
    },
    t + 0.6
  );

  tl.addLabel(`s${i}`, t + WIPE);
}

      // pad the end so the last slide holds for a moment before unpinning
      tl.to({}, { duration: 0.01 }, last * STEP);
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} id="highlights" className={styles.section}>
      {/* backgrounds (own stacking context so they stay below the circle) */}
      <div className={styles.bgLayer}>
        {SLIDES.map((s, i) => (
          <div
            key={`bg-${i}`}
            data-bg
            className={styles.bg}
            style={{ backgroundImage: `url(${s.image})`, zIndex: i + 1 }}
          />
        ))}
      </div>

      {/* semicircle: border = purple ring, videos are masked by it */}
      <div className={styles.circle} aria-hidden="true">
        <div className={styles.videoWrap}>
          {SLIDES.map((s, i) => (
            <video
              key={`video-${i}`}
              data-video
              className={styles.video}
              style={{ zIndex: i + 1 }}
              src={s.video}
              poster={s.image}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          ))}
        </div>
      </div>

      {/* text */}
      <div className={styles.copyLayer}>
        {SLIDES.map((s, i) => (
          <div key={`copy-${i}`} data-copy className={styles.copy}>
            <p className={styles.counter}>
              <b>{pad(i + 1)}</b>
              <span>/</span>
              {pad(SLIDES.length)}
            </p>
            <h2 className={styles.title}>{s.title}</h2>
            <a href={s.href} className={styles.cta}>
              <span className={styles.ctaLabel}>Learn more</span>
              <span className={styles.ctaIcon}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}