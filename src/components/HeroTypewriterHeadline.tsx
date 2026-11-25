import { useEffect, useState } from "react";
import {
  DEFAULT_HERO_PHRASES,
  MOBILE_HERO_PHRASES,
  useRotatingTypewriter,
} from "@/hooks/useRotatingTypewriter";

const NARROW_QUERY = "(max-width: 639px)";

/**
 * Full-line rotating typewriter headline with blinking cursor.
 */
export function HeroTypewriterHeadline() {
  const [phrases, setPhrases] =
    useState<readonly string[]>(DEFAULT_HERO_PHRASES);

  useEffect(() => {
    const mql = window.matchMedia(NARROW_QUERY);
    const sync = () =>
      setPhrases(mql.matches ? MOBILE_HERO_PHRASES : DEFAULT_HERO_PHRASES);
    sync();
    mql.addEventListener("change", sync);
    return () => mql.removeEventListener("change", sync);
  }, []);

  const { dynamicText } = useRotatingTypewriter({ phrases });

  return (
    <h1 className="text-[clamp(1.625rem,5.5vw+0.5rem,4.5rem)] font-bold leading-[1.12] tracking-tight text-[#FFFFFF] max-sm:whitespace-normal sm:whitespace-nowrap drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
      <span className="text-[#FFFFFF]">
        {dynamicText}
        <span
          className="inline-block translate-y-[-0.06em] pl-0.5 font-light text-[#FFFFFF] animate-hero-cursor select-none"
          aria-hidden
        >
          |
        </span>
      </span>
    </h1>
  );
}