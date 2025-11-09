"use client";

import { motion, MotionValue } from "motion/react";

interface HeroTitleProps {
  titleY: MotionValue<number>;
}

export default function HeroTitle({ titleY }: HeroTitleProps) {
  return (
    <motion.h1
      className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 dark:text-[#e8f0f7] tracking-tight transition-colors duration-300"
      style={{ y: titleY }}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      Senja - Permissionless DeFi Protocol
    </motion.h1>
  );
}

