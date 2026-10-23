
"use client";

import { useRef } from "react";
import {gsap, ScrollTrigger}from "@/lib/gsap/gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function EventsAbout() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      gsap.from(".about-content", {
        y: 70,
        autoAlpha: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="highlights"
      style={{
        minHeight: "100vh",
        padding: "100px 5vw",
        background: "#fff044",
        color: "#190822",
      }}
    >
      <div className="about-content">
        <p>MORE THAN AN EVENT</p>
        <h2>
          We create moments
          <br />
          people remember.
        </h2>
      </div>
    </section>
  );
}
