type HeroContentProps = {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
};

/** Content layer. `data-hero` attributes are the hooks for GSAP. */
const HeroContent = ({ title, subtitle, ctaLabel, ctaHref = "#" }: HeroContentProps) => {
  return (
    <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
      <h1 data-hero="title" className="text-4xl font-bold md:text-6xl lg:text-7xl">
        {title}
      </h1>

      {subtitle && (
        <p data-hero="subtitle" className="mt-6 max-w-2xl text-lg text-white/80 md:text-xl">
          {subtitle}
        </p>
      )}

      {ctaLabel && (
        <a
          data-hero="cta"
          href={ctaHref}
          className="mt-10 rounded-full bg-white px-8 py-3 font-medium text-black transition hover:bg-white/90"
        >
          {ctaLabel}
        </a>
      )}
    </div>
  );
};

export default HeroContent;