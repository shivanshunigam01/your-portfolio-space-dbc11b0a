import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { HeroTypewriterHeadline } from "@/components/HeroTypewriterHeadline";

const CV_URL =
  "https://drive.google.com/uc?export=download&id=1BIn7QQLYIkzfYVt0HlvMFQfCLTSxyfn9";

/**
 * Full-viewport hero with video background, dark overlay, and rotating full-line typewriter.
 */
const HeroSection = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background video */}
      <video
        src="/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark overlays — SaaS-style readability */}
      <div className="absolute inset-0 bg-black/55" aria-hidden />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/40 to-black/25"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30"
        aria-hidden
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center">
        <div className="container mx-auto w-full px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl animate-fade-in text-left">
            <div className="w-full min-w-0 overflow-x-auto pb-1 [-webkit-overflow-scrolling:touch] sm:overflow-visible">
              <HeroTypewriterHeadline />
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
