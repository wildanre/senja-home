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
  // Dither stays visible at all times, left page will naturally cover it
  // Using absolute positioning within full viewport to avoid any flex/flow issues

  return (
    <div
      className="absolute top-0 bottom-0 hidden lg:block pointer-events-none"
      style={{
        left: '50%',
        right: '0',
        zIndex: 1,
        opacity: 1,
        visibility: 'visible'
      }}
    >
      <Dither {...desktopDitherConfig} />
    </div>
  );
}
