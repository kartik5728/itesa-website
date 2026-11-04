// Fixed, page-wide looping video. Put assets in /public/videos and /public/images.
export default function SiteBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-[#02060c]">
      {/* <video
        autoPlay muted loop playsInline preload="auto"
        poster="/images/portal-arena.png"
        className="absolute inset-0 h-full w-full object-cover object-[54%_center] opacity-[.38] saturate-[1.14] contrast-[1.06] sm:object-[center_45%] sm:opacity-75"
      >
        <source src="/about/videos/about-background.mp4" type="video/mp4" />
      </video> */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,6,12,.12),rgba(2,6,12,.22)_55%,rgba(2,6,12,.38)),linear-gradient(90deg,rgba(2,6,12,.2),rgba(2,6,12,.04)_52%,rgba(2,6,12,.16))]" />
    </div>
  );
}
