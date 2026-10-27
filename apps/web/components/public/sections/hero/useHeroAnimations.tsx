import { RefObject } from "react";
import { gsap, useGSAP } from "@/lib/gsap/gsap";

/**
 * All hero animations live here. Add / remove effects without
 * touching the markup. Everything is scoped to `scope`, so
 * selectors like [data-hero="title"] can't leak to other sections.
 */
export default function useHeroAnimations(scope: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Full motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Intro timeline
        const intro = gsap.timeline({ defaults: { ease: "power3.out" } });

        intro
          .from('[data-hero="video-wrapper"]', { opacity: 0, duration: 1.2 })
          .from('[data-hero="title"]', { y: 60, opacity: 0, duration: 1 }, "-=0.6")
          .from('[data-hero="subtitle"]', { y: 30, opacity: 0, duration: 0.8 }, "-=0.6")
          .from('[data-hero="cta"]', { y: 20, opacity: 0, duration: 0.6 }, "-=0.4");

        // 👉 Future: scroll effects go here, e.g.
        // gsap.to('[data-hero="video"]', {
        //   yPercent: 15,
        //   ease: "none",
        //   scrollTrigger: { trigger: scope.current, start: "top top", end: "bottom top", scrub: true },
        // });
      });

      // Reduced motion: no animation, content simply visible
      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero]", { clearProps: "all" });
      });
    },
    { scope } // auto-cleanup on unmount
  );
}