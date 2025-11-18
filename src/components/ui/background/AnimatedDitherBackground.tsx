"use client";

import { motion } from "motion/react";
import { Dither } from "@/components/ui/background";
import { desktopDitherConfig } from "@/components/sections/hero-new/heroNewData";
import { useDitherAnimation } from "@/hooks/useDitherAnimation";

interface AnimatedDitherBackgroundProps {
  scrollProgress: number;
}

/**
 * Animated Dither Background Component
 * Renders the dither effect with smooth scroll-based animations
 * - Slides to the right and fades out when scrolling past hero section
 * - Uses spring physics for natural movement
 */
export function AnimatedDitherBackground({ scrollProgress }: AnimatedDitherBackgroundProps) {
  const { x, opacity } = useDitherAnimation(scrollProgress);
  
  return (
    <motion.div
      className="fixed top-0 right-0 z-0 hidden h-screen w-1/2 lg:block pointer-events-none"
      style={{ 
        translateX: x,
        opacity
      }}
      transition={{
        type: "tween",
        ease: "easeOut",
        duration: 0.6
      }}
    >
      <Dither {...desktopDitherConfig} />
    </motion.div>
  );
}
