"use client";

import { Dither } from "@/components/ui/background";
import { desktopDitherConfig } from "@/components/sections/hero/heroNewData";

interface AnimatedDitherBackgroundProps {
  scrollProgress: number;
  leftPageWidth: number;
}

/**
 * Animated Dither Background Component
 * Renders the dither effect with smooth scroll-based animations
 * - Clips based on left page width to allow mouse interaction
 * - Uses clip-path to hide area covered by left page
 */
export function AnimatedDitherBackground({
  scrollProgress: _scrollProgress,
  leftPageWidth,
}: AnimatedDitherBackgroundProps) {
  // Calculate clip path based on left page width
  // When left page is 50%, dither shows from 50% to 100%
  // When left page is 100%, dither is completely hidden
  const clipLeft = `${leftPageWidth}%`;

  return (
    <div
      className="absolute top-0 bottom-0 hidden lg:block"
      style={{
        left: "0",
        right: "0",
        zIndex: 15,
        opacity: 1,
        visibility: "visible",
        clipPath: `polygon(${clipLeft} 0%, 100% 0%, 100% 100%, ${clipLeft} 100%)`,
        pointerEvents: "none",
      }}
    >
      <Dither {...desktopDitherConfig} />
    </div>
  );
}
