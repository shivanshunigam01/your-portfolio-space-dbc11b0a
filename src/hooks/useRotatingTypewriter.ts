import { useEffect, useState } from "react";

export const DEFAULT_HERO_PHRASES = [
  "Hi, I'm Shivanshu",
  "Hi, I'm a Full Stack Developer",
  "Hi, I build WhatsApp Business Automations",
  "Hi, I deploy on AWS & DevOps",
  "Hi, I grow startups with tech & visibility",
] as const;

/** Shorter lines so the hero headline fits narrow viewports without horizontal scrolling */
export const MOBILE_HERO_PHRASES = [
  "Hi, I'm Shivanshu",
  "Full Stack Developer",
  "WhatsApp Automations",
  "AWS & DevOps",
  "Tech for Every Business",
] as const;

export type RotatingTypewriterOptions = {
  phrases?: readonly string[];
  /** ms between each character while typing */
  typeDelay?: number;
  /** ms between each character while deleting (typically faster than typing) */
  deleteDelay?: number;
  /** ms to wait after a phrase is fully typed */
  pauseAfterComplete?: number;
};

const DEFAULT_TYPE_MS = 95;
const DEFAULT_DELETE_MS = 58;
const DEFAULT_PAUSE_MS = 1500;

/**
 * Drives a rotating typewriter: each phrase is typed out in full, then deleted before the next.
 */
export function useRotatingTypewriter(options: RotatingTypewriterOptions = {}) {
  const {
    phrases = DEFAULT_HERO_PHRASES,
    typeDelay = DEFAULT_TYPE_MS,
    deleteDelay = DEFAULT_DELETE_MS,
    pauseAfterComplete = DEFAULT_PAUSE_MS,
  } = options;

  const [dynamicText, setDynamicText] = useState("");

  const phrasesKey = phrases.join("\u0000");

  useEffect(() => {
    const list = [...phrases];
    if (list.length === 0) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setDynamicText(list[0] ?? "");
      return;
    }

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    const schedule = (fn: () => void, delay: number) => {
      if (timeoutId !== undefined) clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, delay);
    };

    let phraseIndex = 0;
    let text = "";
    let phase: "typing" | "pause" | "deleting" = "typing";

    const run = () => {
      if (cancelled) return;
      const phrase = list[phraseIndex] ?? "";

      if (phase === "typing") {
        if (text.length < phrase.length) {
          text = phrase.slice(0, text.length + 1);
          setDynamicText(text);
          schedule(run, typeDelay);
        } else {
          phase = "pause";
          schedule(() => {
            if (cancelled) return;
            phase = "deleting";
            run();
          }, pauseAfterComplete);
        }
        return;
      }

      if (phase === "deleting") {
        if (text.length > 0) {
          text = text.slice(0, -1);
          setDynamicText(text);
          schedule(run, deleteDelay);
        } else {
          phraseIndex = (phraseIndex + 1) % list.length;
          phase = "typing";
          schedule(run, typeDelay);
        }
      }
    };

    schedule(run, 0);

    return () => {
      cancelled = true;
      if (timeoutId !== undefined) clearTimeout(timeoutId);
    };
  }, [phrasesKey, typeDelay, deleteDelay, pauseAfterComplete]);

  return { dynamicText };
}
