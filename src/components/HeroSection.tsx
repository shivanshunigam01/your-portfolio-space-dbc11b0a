import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroTypewriterHeadline } from "@/components/HeroTypewriterHeadline";
import { HERO_VIDEO_SOURCES } from "@/data/heroVideos";
import { SITE } from "@/data/siteConfig";
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
  const videoRefs = useRef<Array<HTMLVideoElement | null>>([null, null]);
  const unlocked = useRef(false);
  const [videoReady, setVideoReady] = useState(false);
  /** Which clip (0 or 1) is currently visible and playing */
  const [activeLayer, setActiveLayer] = useState(0);

  const unlock = useCallback(() => {
    if (unlocked.current) return;
    unlocked.current = true;
    setVideoReady(true);
    onVideoReady?.();
  }, [onVideoReady]);

  const advanceClip = useCallback(() => {
    const next = activeLayer === 0 ? 1 : 0;
    const cur = videoRefs.current[activeLayer];
    const nxt = videoRefs.current[next];
    cur?.pause();
    if (nxt) {
      nxt.currentTime = 0;
      nxt.play().catch(() => {});
    }
    setActiveLayer(next);
  }, [activeLayer]);

  useEffect(() => {
    const el = videoRefs.current[0];
    if (!el) return;
    el.play().catch(() => {});
  }, []);

  useEffect(() => {
    const t = window.setTimeout(unlock, FALLBACK_MS);
    return () => window.clearTimeout(t);
  }, [unlock]);

  return (
    <section className="relative min-h-[100dvh] w-full max-w-[100vw] overflow-hidden bg-black">
      {HERO_VIDEO_SOURCES.map((src, i) => (
        <video
          key={src}
          ref={(el) => {
            videoRefs.current[i] = el;
          }}
          aria-hidden
          src={src}
          autoPlay={i === 0}
          muted
          playsInline
          preload="auto"
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ease-out",
            "scale-[1.08] sm:scale-100",
            activeLayer === i ? "z-[2] opacity-100" : "z-[1] opacity-0",
          )}
          onLoadedData={() => {
            if (i === activeLayer) {
              videoRefs.current[i]?.play().catch(() => {});
            }
          }}
          onCanPlayThrough={unlock}
          onPlaying={unlock}
          onEnded={() => {
            if (i !== activeLayer) return;
            advanceClip();
          }}
        />
      ))}

      <div
        className={cn(
          "absolute inset-0 bg-black/60 transition-opacity duration-1000 ease-out sm:bg-black/55",
          videoReady ? "opacity-100" : "opacity-0",
        )}
        aria-hidden
      />
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/40 transition-opacity duration-1000 ease-out",
          "sm:bg-gradient-to-r sm:from-black/75 sm:via-black/40 sm:to-black/25",
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
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-portfolio-primary/10 via-transparent to-portfolio-secondary/10 opacity-60"
        aria-hidden
      />

      <div
        className={cn(
          "relative z-10 flex min-h-[100dvh] items-center transition-opacity duration-1000 ease-out motion-reduce:transition-none",
          "px-4 pt-[calc(4rem+env(safe-area-inset-top,0px))] pb-10 sm:px-6 sm:pt-20 lg:px-8",
          videoReady ? "opacity-100" : "opacity-0",
        )}
      >
        <div className="container mx-auto w-full min-w-0">
          <div className="glass-panel max-w-4xl p-5 text-left sm:p-8 md:p-10">
            <div className="w-full min-w-0">
              {videoReady ? (
                <div className="animate-fade-in">
                  <HeroTypewriterHeadline />
                </div>
              ) : (
                <h1 className="text-[clamp(1.625rem,5.5vw+0.5rem,4.5rem)] font-bold leading-[1.12] tracking-tight text-transparent">
                  &nbsp;
                </h1>
              )}
            </div>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[rgba(255,255,255,0.92)] drop-shadow-md sm:mt-6 sm:text-lg md:text-xl lg:text-2xl">
              {SITE.tagline}
            </p>

            <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-10 sm:max-w-none sm:flex-row sm:items-center sm:gap-4">
              <Button
                size="lg"
                asChild
                className="btn-gradient h-12 w-full rounded-xl border-0 px-8 text-base font-semibold text-white shadow-glossy transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 sm:h-14 sm:w-auto sm:px-10"
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
                className="glossy-outline h-12 w-full rounded-xl px-8 text-base font-semibold text-white sm:h-14 sm:w-auto sm:px-10"
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
