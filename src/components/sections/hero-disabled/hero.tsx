"use client";

import { motion } from "motion/react";
import { WorldMap } from "@/components/ui/world-map";
import HeroLogo from "./hero-logo";
import HeroTitle from "./hero-title";
import HeroTagline from "./hero-tagline";
import HeroButtons from "./hero-buttons";
import useHeroParallax from "./useHeroParallax";
import { taglines, heroButtons } from "./heroData";

export default function Hero() {
  const { logoY, logoScale, titleY, subtitleY, buttonY, opacity, scale } = useHeroParallax();

  return (
    <motion.section 
      style={{ opacity, scale }}
      className="flex flex-col items-center justify-center min-h-screen px-4 py-4 sm:py-8 md:py-12 lg:py-16 text-center relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20 dark:opacity-15">
        <WorldMap />
      </div>

      <div className="max-w-5xl mx-auto md:mt-16 space-y-4 sm:space-y-6 md:space-y-8 relative z-10 px-2 sm:px-4 flex flex-col justify-center h-full">
        <HeroLogo logoY={logoY} logoScale={logoScale} />
        <HeroTitle titleY={titleY} />
        <HeroTagline subtitleY={subtitleY} taglines={taglines} />
        <HeroButtons buttonY={buttonY} buttons={heroButtons} />
      </div>
    </motion.section>
  );
}
