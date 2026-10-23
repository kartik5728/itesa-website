"use client";

import { useRef } from "react";
import {gsap, ScrollTrigger, SplitText} from "@/lib/gsap/gsap";
import { useGSAP } from "@gsap/react";
import styles from "./EventsHero.module.css";

gsap.registerPlugin(useGSAP);

export default function EventsHero() {
  const heroRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".events-nav", {
        y: -24,
        autoAlpha: 0,
        duration: 0.8,
      })
        .from(
          ".events-title-line",
          {
            yPercent: 110,
            autoAlpha: 0,
            duration: 1,
            stagger: 0.18,
          },
          "-=0.3"
        )
        .from(
          ".events-hero-tagline",
          {
            y: 20,
            autoAlpha: 0,
            duration: 0.6,
          },
          "-=0.45"
        );
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      className={styles.hero}
      aria-label="Events introduction"
    >
      {/* Background video */}
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

      {/* Dark color overlay */}
      <div className={styles.overlay} aria-hidden="true" />

      {/* Header */}
      {/* <header className={`${styles.nav} events-nav`}>
        <a href="/events" className={styles.logo} aria-label="360 Production House">
          <span className={styles.logoMark}>
            360<span className={styles.degree}>°</span>
          </span>

          <span className={styles.logoCaption}>
            PRODUCTION
            <br />
            HOUSE
          </span>
        </a>

        <nav className={styles.navActions} aria-label="Main navigation">
          <a href="#highlights" className={styles.hotStuff}>
            HOT STUFF
          </a>

          <button
            type="button"
            className={styles.menuButton}
            aria-label="Open menu"
          >
            MENU
          </button>
        </nav>
      </header> */}

      {/* Hero content */}
      <div className={styles.content}>
        <h1 className={styles.title}>
          <span className={styles.titleMask}>
            <span className={`${styles.purple} events-title-line`}>
              PULL PEOPLE IN.
            </span>
          </span>

          <span className={styles.titleMask}>
            <span className={`${styles.yellow} events-title-line`}>
              MAKE THEM FEEL.
            </span>
          </span>
        </h1>

        <p className={`${styles.tagline} events-hero-tagline`}>
          Experiences that stay with you.
        </p>
      </div>
    </section>
  );
}
