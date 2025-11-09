"use client";

import { WorldMap } from "@/components/ui/world-map";
import HeroLogo from "./HeroLogo";
import HeroTitle from "./HeroTitle";
import HeroTagline from "./HeroTagline";
import HeroButtons from "./HeroButtons";
import useHeroParallax from "./useHeroParallax";
import { taglines, heroButtons } from "./heroData";

export default function Hero() {
  const { logoY, logoScale, titleY, subtitleY, buttonY } = useHeroParallax();

  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 py-4 sm:py-8 md:py-12 lg:py-16 text-center relative overflow-hidden">
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-15">
        <WorldMap />
      </div>

      <div className="max-w-5xl mx-auto md:mt-16 space-y-4 sm:space-y-6 md:space-y-8 relative z-10 px-2 sm:px-4 flex flex-col justify-center h-full">
        {/* Logo */}
        <HeroLogo logoY={logoY} logoScale={logoScale} />

        {/* Title */}
        <HeroTitle titleY={titleY} />

        {/* Rotating Taglines with Typing Animation */}
        <HeroTagline subtitleY={subtitleY} taglines={taglines} />

        {/* Call-to-Action Buttons */}
        <HeroButtons buttonY={buttonY} buttons={heroButtons} />
      </div>
    </section>
  );
}
