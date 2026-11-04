"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { socialLinks } from "./about";

const icons: Record<string, React.ReactNode> = {
  instagram: (<><rect x="3.2" y="3.2" width="17.6" height="17.6" rx="5.2" /><circle cx="12" cy="12" r="4.1" /><circle cx="17.8" cy="6.4" r="1.1" fill="currentColor" stroke="none" /></>),
  discord: (<path d="M7.1 7.4A14.7 14.7 0 0 1 10 6.5l.4.8a13 13 0 0 1 3.2 0l.4-.8a14.7 14.7 0 0 1 2.9.9c1.8 2.6 2.4 5.1 2.1 7.6a12 12 0 0 1-3.6 1.8l-.8-1.3c.5-.2 1-.5 1.4-.8-2.7 1.2-5.5 1.2-8.2 0 .4.3.9.6 1.4.8l-.8 1.3a12 12 0 0 1-3.6-1.8c-.3-2.5.3-5 2.1-7.6Z" />),
  linkedin: (<path fill="currentColor" stroke="none" d="M5 8.6h3.3V19H5zM6.65 4.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8ZM10.2 8.6h3.15V10h.05a3.45 3.45 0 0 1 3.1-1.7c3.3 0 3.9 2.15 3.9 4.95V19h-3.3v-5.1c0-1.2-.02-2.75-1.68-2.75s-1.94 1.3-1.94 2.66V19h-3.3z" />),
  gmail: (<><rect x="3" y="5" width="18" height="14" rx="2.2" /><path d="m4.2 7 7.8 6 7.8-6" /></>),
};

type Props = {
  startRef: RefObject<HTMLElement | null>;
  endRef: RefObject<HTMLElement | null>;
};

/** Floats at viewport center but stays between the first and last team groups. */
export default function SocialRail({ startRef, endRef }: Props) {
  const railRef = useRef<HTMLElement>(null);
  const [state, setState] = useState({ visible: false, top: 0 });

  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const rail = railRef.current, start = startRef.current, end = endRef.current;
      if (!rail || !start || !end || window.matchMedia("(max-width: 680px)").matches) {
        return setState((s) => (s.visible ? { ...s, visible: false } : s));
      }
      const h = rail.offsetHeight, vh = window.innerHeight;
      const s = start.getBoundingClientRect(), e = end.getBoundingClientRect();
      const visible = s.top < vh - h - 12 && e.bottom > h + 12;
      const preferred = (vh - h) / 2;
      const top = Math.max(s.top, Math.min(preferred, e.bottom - h));
      setState({ visible, top: Math.max(8, top) });
    };
    const schedule = () => { if (!raf) raf = requestAnimationFrame(update); };

    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    update();
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [startRef, endRef]);

  return (
    <aside
      ref={railRef}
      aria-label="ITESA social links"
      aria-hidden={!state.visible}
      style={{ top: state.top }}
      className={`fixed right-[clamp(16px,2.5vw,38px)] z-40 flex w-[62px] flex-col items-center gap-[9px] rounded-[17px] border border-[#4d91cd]/30 bg-[#050a14]/90 px-2 py-3 shadow-[0_12px_38px_rgba(0,0,0,.28)] backdrop-blur-[14px] transition duration-200 motion-reduce:transition-none ${
        state.visible ? "visible translate-x-0 opacity-100" : "pointer-events-none invisible translate-x-2.5 opacity-0"
      }`}
    >
      {socialLinks.map((s) => (
        <a
          key={s.id}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          title={s.label}
          tabIndex={state.visible ? 0 : -1}
          className={`grid h-11 w-11 place-items-center rounded-[11px] text-[#f6f8fc] transition hover:scale-110 focus-visible:scale-110 focus-visible:outline-none ${s.hover}`}
        >
          <svg viewBox="0 0 24 24" aria-hidden className="h-[25px] w-[25px] fill-none stroke-current stroke-2 [stroke-linecap:round] [stroke-linejoin:round]">
            {icons[s.id]}
          </svg>
        </a>
      ))}
    </aside>
  );
}
