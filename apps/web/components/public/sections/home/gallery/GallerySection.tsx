"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger, useGSAP);
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap/gsap";


/* -------------------------------------------------------------------------- */
/*  DATA – swap src/alt/caption for your real campus photos                   */
/*  Put images in /public/images/gallery/ (or use remote URLs and add the     */
/*  domain to `images.remotePatterns` in next.config).                        */
/*                                                                            */
/*  Desktop grid (4 cols x 4 rows) – no holes:                                */
/*      A A B C                                                               */
/*      A A D C                                                               */
/*      E F F G                                                               */
/*      E H H G                                                               */
/* -------------------------------------------------------------------------- */
type GalleryItem = {
  src: string;
  alt: string;
  caption: string;
  /** Tailwind span classes that define the bento shape */
  span: string;
};

const GALLERY_ITEMS: GalleryItem[] = [
  {
    src: "/home/gallery/sports1.png",
    alt: "Main college building at sunrise",
    caption: "Our campus",
    span: "col-span-2 row-span-2",
  },
  {
    src: "/home/gallery/lab.png",
    alt: "Students working in a lab",
    caption: "Labs",
    span: "col-span-1 row-span-1",
  },
  {
    src: "/home/gallery/event1.png",
    alt: "Graduates celebrating convocation",
    caption: "Concert",
    span: "col-span-1 row-span-2",
  },
  {
    src: "/home/gallery/event2.png",
    alt: "Annual sports day",
    caption: "Sports day",
    span: "col-span-1 row-span-1",
  },
//   {
//     src: "/images/gallery/fest.jpg",
//     alt: "Cultural fest performance on stage",
//     caption: "Cultural fest",
//     span: "col-span-1 row-span-2",
//   },
//   {
//     src: "/images/gallery/library.jpg",
//     alt: "Students reading in the library",
//     caption: "Library",
//     span: "col-span-2 row-span-1",
//   },
//   {
//     src: "/images/gallery/workshop.jpg",
//     alt: "Guest lecture and workshop",
//     caption: "Workshops",
//     span: "col-span-1 row-span-2",
//   },
//   {
//     src: "/images/gallery/hackathon.jpg",
//     alt: "Students at a hackathon",
//     caption: "Hackathon",
//     span: "col-span-2 row-span-1",
//   },
];

export const GallerySection = () => {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Only animate when the user hasn't asked for reduced motion
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        // Left column: headline, copy, button
        gsap.from("[data-gallery-text] > *", {
          y: 24,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: "top 75%", once: true },
        });

        // Bento tiles: one orchestrated reveal, staggered from the grid's start
        gsap.from("[data-gallery-tile]", {
          scale: 0.92,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
          stagger: { each: 0.08, from: "start" },
          scrollTrigger: {
            trigger: "[data-gallery-grid]",
            start: "top 80%",
            once: true,
          },
        });
      });

      return () => mm.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      aria-labelledby="gallery-heading"
      className="bg-neutral-950 py-16 text-white md:py-24"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16 lg:px-8">
        {/* ------------------------------ Left: copy ------------------------------ */}
        <div data-gallery-text className="max-w-md">
          <h2
            id="gallery-heading"
            className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Life on campus,{" "}
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              captured.
            </span>
          </h2>

          <div
            aria-hidden="true"
            className="mt-5 h-1 w-28 -rotate-2 rounded-full bg-amber-300"
          />

          <p className="mt-6 text-base leading-relaxed text-neutral-400 sm:text-lg">
            From lectures and labs to fests and convocations, see the moments
            that make our college what it is.
          </p>

          <Link
            href="/gallery"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-amber-300 px-6 py-3 text-sm font-semibold text-neutral-950 transition-colors hover:bg-amber-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-300"
          >
            View full gallery
            <svg
              viewBox="0 0 20 20"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
              aria-hidden="true"
            >
              <path d="M4 10h12M11 5l5 5-5 5" />
            </svg>
          </Link>
        </div>

        {/* ---------------------------- Right: bento grid --------------------------- */}
        <div
          data-gallery-grid
          className="grid auto-rows-[120px] grid-cols-4 grid-flow-dense gap-3 sm:auto-rows-[150px] md:auto-rows-[170px] md:gap-4"
        >
          {GALLERY_ITEMS.map((item) => (
            <figure
              key={item.src}
              data-gallery-tile
              className={`group relative overflow-hidden rounded-2xl bg-neutral-800 ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 45vw, 90vw"
                className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />

              {/* Caption slides in on hover/focus; always readable on touch via gradient */}
              <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 text-sm font-medium opacity-100 md:translate-y-2 md:opacity-0 md:transition md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                {item.caption}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;