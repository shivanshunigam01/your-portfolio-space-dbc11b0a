/** Public Cloudinary delivery URLs (safe to commit). Override with VITE_HERO_VIDEO_* in .env if needed. */
const CLOUDINARY_HERO_1 =
  "https://res.cloudinary.com/cozu2jtr/video/upload/q_auto:good,vc_auto/twinklingz/hero-1";
const CLOUDINARY_HERO_2 =
  "https://res.cloudinary.com/cozu2jtr/video/upload/q_auto:good,vc_auto/twinklingz/hero-2";

function pick(envKey: "VITE_HERO_VIDEO_1" | "VITE_HERO_VIDEO_2", cdnUrl: string) {
  const fromEnv = import.meta.env[envKey]?.trim();
  return fromEnv || cdnUrl;
}

/** Hero background clips — always Cloudinary unless env overrides */
export const HERO_VIDEO_SOURCES = [
  pick("VITE_HERO_VIDEO_1", CLOUDINARY_HERO_1),
  pick("VITE_HERO_VIDEO_2", CLOUDINARY_HERO_2),
] as const;

export const HERO_VIDEO_PRELOAD = HERO_VIDEO_SOURCES[0];