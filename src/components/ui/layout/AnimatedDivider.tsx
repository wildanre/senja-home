"use client";

import { motion } from "motion/react";
import { useDitherAnimation } from "@/hooks/useDitherAnimation";

interface AnimatedDividerProps {
  scrollProgress: number;
}

/**
 * Animated Divider Component
 * Renders the vertical dashed border that separates content and dither
 * - Slides to the right and fades out in sync with dither background
 * - Uses spring physics for smooth transitions
 */
export function AnimatedDivider({ scrollProgress }: AnimatedDividerProps) {
  const { x, opacity } = useDitherAnimation(scrollProgress);
  
  return (
    <motion.div
      className="pointer-events-none fixed inset-y-0 left-1/2 z-30 hidden lg:block"
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
      <div className="border-l border-dashed border-[#8a5a33]/70 h-full" />
    </motion.div>
  );
}
