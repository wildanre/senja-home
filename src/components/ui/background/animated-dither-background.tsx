"use client";

import Dither from "@/components/ui/background/dither";
import { desktopDitherConfig } from "@/components/sections/hero/hero-data";

interface AnimatedDitherBackgroundProps {
  scrollProgress: number;
  leftPageWidth: number;
}

export function AnimatedDitherBackground({
  scrollProgress: _scrollProgress,
  leftPageWidth,
}: AnimatedDitherBackgroundProps) {
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
        willChange: "transform",
        transform: "translateZ(0)",
      }}
    >
      <Dither {...desktopDitherConfig} />
    </div>
  );
}
