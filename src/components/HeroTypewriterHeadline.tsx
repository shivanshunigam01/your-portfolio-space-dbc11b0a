import { useRotatingTypewriter } from "@/hooks/useRotatingTypewriter";

/**
 * Full-line rotating typewriter headline with blinking cursor.
 */
export function HeroTypewriterHeadline() {
  const { dynamicText } = useRotatingTypewriter();

  return (
    <h1 className="whitespace-nowrap text-4xl font-bold leading-[1.15] tracking-tight text-[#FFFFFF] sm:text-5xl md:text-6xl lg:text-7xl drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
      <span className="text-[#FFFFFF]">
        {dynamicText}
        <span
          className="inline-block translate-y-[-0.06em] pl-1 font-light text-[#FFFFFF] animate-hero-cursor select-none"
          aria-hidden
        >
          |
        </span>
      </span>
    </h1>
  );
}
