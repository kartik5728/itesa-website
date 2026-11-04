import Link from "next/link";
import { heroStats } from "./about";

export default function AboutHero() {
  return (
    <section id="about" className="relative flex min-h-[calc(100svh+24px)] items-start overflow-hidden px-6 pb-[clamp(125px,18vh,175px)] pt-[125px] sm:min-h-[calc(100svh+42px)] sm:items-center sm:pb-[clamp(105px,13vh,160px)] lg:px-[clamp(24px,8vw,130px)]">
      <div aria-hidden className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(2,6,12,.56),rgba(2,6,12,.22)_65%,rgba(2,6,12,.12)),linear-gradient(0deg,rgba(2,6,12,.22),transparent_50%)] lg:bg-[linear-gradient(90deg,rgba(2,6,12,.48),rgba(2,6,12,.24)_32%,rgba(2,6,12,.03)_68%,rgba(2,6,12,.12))]" />

      <div className="relative z-10 max-w-[490px]">
        <p className="mb-4 font-display text-[10px] uppercase tracking-[.28em] text-itesa-cyan">
          <span className="mr-2.5 inline-block h-px w-[25px] align-middle bg-itesa-cyan shadow-[0_0_9px_#35c7ff]" />
          WHO WE ARE
        </p>
        <h1 className="mb-4 text-[68px] font-extrabold leading-[.94] tracking-[-.06em] sm:text-[clamp(55px,7vw,88px)]">
          ABOUT<br />
          <span className="bg-gradient-to-r from-[#f5f9ff] via-[#58baff] to-[#087cff] bg-clip-text text-transparent">ITESA</span>
        </h1>
        <p className="mb-4 max-w-[360px] text-xs leading-[1.6] tracking-[.035em] text-[#d6e7ff]">
          Information Technology Engineering Students Association
        </p>
        <p className="mb-6 max-w-[405px] text-[13px] leading-[1.85] text-itesa-muted">
          A Student-Driven Community Built Around Technology, Creativity And Collaboration. We Turn Curiosity Into skills, Ideas Into Projects, &amp; Students Into Future-Ready Innovators.
        </p>
        <Link href="#team" className="inline-flex items-center gap-[22px] rounded-md border border-[#299bff] bg-gradient-to-r from-[#0068f5] to-[#0b8dff] px-[18px] py-3.5 text-xs font-semibold text-white shadow-[0_0_28px_#0077ff3d] transition hover:-translate-y-0.5 hover:shadow-[0_0_32px_#0077ff75]">
          Meet the Team <span className="text-lg leading-[10px]">→</span>
        </Link>
      </div>

      <div aria-label="ITESA highlights" className="absolute inset-x-6 bottom-[70px] grid gap-[7px] sm:inset-x-auto sm:bottom-auto sm:right-[clamp(24px,7vw,112px)] sm:top-1/2 sm:w-[245px] sm:-translate-y-[35%] sm:gap-2.5">
        {heroStats.map((s) => (
          <article key={s.title} className="flex items-center gap-[15px] rounded-[9px] border border-[#2d88ff]/30 bg-gradient-to-br from-[#031122]/85 to-[#061528]/50 px-[13px] py-[11px] shadow-[inset_0_1px_rgba(255,255,255,.04)] backdrop-blur-[14px] transition hover:border-[#168bff] sm:p-4 sm:hover:-translate-x-1">
            <span className="w-7 text-center text-[25px] text-itesa-cyan [text-shadow:0_0_16px_#007bff]">{s.icon}</span>
            <div>
              <strong className="mb-[5px] block text-xs">{s.title}</strong>
              <small className="block text-[9px] text-itesa-muted sm:text-[10px]">{s.text}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
