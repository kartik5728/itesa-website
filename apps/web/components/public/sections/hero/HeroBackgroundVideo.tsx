import { forwardRef } from "react";

type VideoSource = { src: string; type: string };

type HeroBackgroundVideoProps = {
  sources: VideoSource[];
  poster?: string;
  /** Dark overlay opacity (0 - 1) to keep text readable */
  overlayOpacity?: number;
};

/**
 * Pure presentational component (no GSAP here).
 * The forwarded ref points to the wrapper so animations
 * (parallax, scale, blur, clip-path...) can target it from outside.
 */
const HeroBackgroundVideo = forwardRef<HTMLDivElement, HeroBackgroundVideoProps>(
  ({ sources, poster, overlayOpacity = 0.4 }, ref) => {
    return (
      <div
        ref={ref}
        data-hero="video-wrapper"
        className="absolute inset-0 -z-10 overflow-hidden"
        aria-hidden="true"
      >
        <video
          data-hero="video"
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={poster}
        >
          {sources.map((s) => (
            <source key={s.src} src={s.src} type={s.type} />
          ))}
        </video>

        <div
          data-hero="overlay"
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
      </div>
    );
  }
);

HeroBackgroundVideo.displayName = "HeroBackgroundVideo";
export default HeroBackgroundVideo;