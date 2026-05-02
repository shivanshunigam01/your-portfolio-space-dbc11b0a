import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroTypewriterHeadline } from "@/components/HeroTypewriterHeadline";
import { cn } from "@/lib/utils";

const CV_URL =
  "https://drive.google.com/uc?export=download&id=14GSpMlwrVeJwUTsOtCt60HLvgSkqAYJj";

const FALLBACK_MS = 12_000;

type HeroSectionProps = {
  /** Fires once the hero video can play; use to reveal content below the fold */
  onVideoReady?: () => void;
};

/**
 * Full-viewport hero with video background. Video loads first; overlays and copy
 * fade in after the file is ready to play (with a timeout fallback).
 */
const HeroSection = ({ onVideoReady }: HeroSectionProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const unlocked = useRef(false);
  const [videoReady, setVideoReady] = useState(false);

  const unlock = useCallback(() => {
    if (unlocked.current) return;
    unlocked.current = true;
    setVideoReady(true);
    onVideoReady?.();
  }, [onVideoReady]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    el.play().catch(() => {});
  }, []);

  useEffect(() => {
    const t = window.setTimeout(unlock, FALLBACK_MS);
    return () => window.clearTimeout(t);
  }, [unlock]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      <video
        ref={videoRef}
        aria-hidden
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
        onLoadedData={() => videoRef.current?.play().catch(() => {})}
        onCanPlayThrough={unlock}
        onPlaying={unlock}
      />

      <div
        className={cn(
          "absolute inset-0 bg-black/55 transition-opacity duration-1000 ease-out",
          videoReady ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/25 transition-opacity duration-1000 ease-out",
          videoReady ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30 transition-opacity duration-1000 ease-out",
          videoReady ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />

      <div
        className={cn(
          "relative z-10 flex min-h-screen items-center transition-opacity duration-1000 ease-out motion-reduce:transition-none",
          videoReady ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl text-left">
            <div className="w-full min-w-0 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] sm:overflow-visible">
              {videoReady ? (
                <div className="animate-fade-in">
                  <HeroTypewriterHeadline />
                </div>
              ) : (
                <h1 className="whitespace-nowrap text-4xl font-bold leading-[1.15] tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
                  &nbsp;
                </h1>
              )}
            </div>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[rgba(255,255,255,0.92)] drop-shadow-md sm:text-xl md:text-2xl">
              Building scalable web applications designed for performance, growth, and real-world usage.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button
                size="lg"
                asChild
                className="btn-gradient h-12 rounded-xl px-8 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:brightness-110 sm:h-14 sm:px-10"
              >
                <Link to="/contact">
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-12 rounded-xl border-white/40 bg-white/10 px-8 text-base font-semibold text-white backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 sm:h-14 sm:px-10"
              >
                <a href={CV_URL} download target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
