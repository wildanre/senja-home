"use client";

import { motion, MotionValue } from "motion/react";
import Image from "next/image";

interface HeroLogoProps {
  logoY: MotionValue<number>;
  logoScale: MotionValue<number>;
}

export default function HeroLogo({ logoY, logoScale }: HeroLogoProps) {
  return (
    <motion.div
      className="flex justify-center mb-2 sm:mb-4 md:mb-6"
      style={{ y: logoY, scale: logoScale }}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Image
        src="/senja-logo.png"
        alt="Senja Logo"
        width={250}
        height={250}
        className="drop-shadow-2xl hover:scale-105 transition-transform duration-300 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64"
        loading="lazy"
        priority={false}
      />
    </motion.div>
  );
}

