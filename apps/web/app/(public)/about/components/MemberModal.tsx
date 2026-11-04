"use client";

import { useEffect, useRef } from "react";
import type { TeamMember } from "./team";
import { getInitials } from "./about";

type Props = { member: TeamMember | null; onClose: () => void };

export default function MemberModal({ member, onClose }: Props) {
  const dialogRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  // Scroll lock, Escape to close, Tab focus trap, initial focus.
  useEffect(() => {
    if (!member) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const f = [...dialogRef.current.querySelectorAll<HTMLElement>("button:not([disabled]), a[href]")];
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKey);
    };
  }, [member, onClose]);

  if (!member) return null;

  return (
    <div
      onClick={(e) => e.target === e.currentTarget && onClose()}
      className="fixed inset-0 z-[100] flex animate-[fadeIn_.2s_ease_both] items-center justify-center bg-black/40 p-3 backdrop-blur-[10px] sm:p-7"
    >
      <section
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modalName"
        className="relative grid max-h-[calc(100dvh-24px)] w-full max-w-[520px] animate-[modalIn_.25s_ease_both] grid-cols-1 overflow-auto rounded-[14px] border border-[#2cafff]/90 bg-gradient-to-br from-[#030d19]/98 to-[#01050c]/99 p-3 shadow-[0_0_65px_rgba(0,119,255,.3),inset_0_0_30px_rgba(0,119,255,.08)] md:max-w-[980px] md:grid-cols-[.9fr_1.1fr]"
      >
        <button ref={closeRef} type="button" onClick={onClose} aria-label="Close profile" className="absolute right-5 top-5 z-10 h-8 w-8 rounded-md border border-[#3a9eff]/60 bg-[#0059b4]/15 text-[22px] leading-none text-[#eaf7ff] hover:bg-[#006eff]">×</button>

        <div className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-lg border border-[#2e97ff]/40 bg-[radial-gradient(ellipse_at_50%_40%,rgba(0,108,255,.34),rgba(3,17,34,.42)_42%,rgba(2,6,13,.48)_78%),linear-gradient(145deg,rgba(7,24,44,.65),rgba(2,6,12,.72))] md:min-h-[470px]">
          <span aria-hidden className="absolute inset-0 bg-[linear-gradient(transparent_96%,rgba(44,147,255,.13)_97%),linear-gradient(90deg,transparent_96%,rgba(44,147,255,.1)_97%)] [background-size:30px_30px]" />
          <span className="clip-silhouette relative z-10 grid h-[170px] w-[130px] place-items-center border border-[#41a5ff]/60 bg-gradient-to-br from-[#041425]/75 to-[#01050b]/95 font-display text-[clamp(38px,5vw,62px)] font-bold text-[#b8e2ff] text-glow md:aspect-[.72] md:h-auto md:w-[min(58%,230px)]">
            {getInitials(member.name)}
          </span>
          <span className="absolute bottom-[18px] left-5 font-display text-[9px] tracking-[.18em] text-[#70bfff]">ITESA / PROFILE SCAN</span>
        </div>

        <div className="flex min-w-0 flex-col justify-center px-[18px] pb-5 pt-6 md:p-[clamp(24px,4vw,42px)]">
          <p className="mb-[18px] mr-9 font-display text-[9px] uppercase tracking-[.28em] text-itesa-cyan">TEAM ITESA / MEMBER PROFILE</p>
          <h3 id="modalName" className="mb-2 mr-9 text-[clamp(25px,3vw,34px)] font-extrabold leading-[1.15]">{member.name}</h3>
          <p className="mb-[22px] text-[13px] text-itesa-cyan">{member.role}</p>

          <div className="rounded-lg border border-[#2e8feb]/40 bg-gradient-to-br from-[#05182d]/90 to-[#020912]/90 p-5">
            <p className="mb-3 font-display text-[9px] tracking-[.17em] text-[#65caff]">ABOUT MEMBER</p>
            <p className="m-0 text-[13px] leading-[1.85] text-[#b2c3da]">{member.bio}</p>
          </div>

          {(member.email || member.links?.length) && (
            <div className="mt-[18px] border-t border-[#408fdd]/20 pt-[15px]">
              {member.email && (
                <a href={`mailto:${member.email}`} className="mb-3 inline-block break-words text-xs text-[#b7dcff] hover:text-white">{member.email}</a>
              )}
              {!!member.links?.length && (
                <div className="flex flex-wrap gap-2">
                  {member.links.map((l) => (
                    <a key={l.label} href={l.url} target="_blank" rel="noopener noreferrer" className="rounded-[5px] border border-[#3389df]/35 px-[9px] py-[7px] text-[11px] text-[#78baff] hover:text-white">{l.label}</a>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
