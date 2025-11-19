"use client";

import { motion } from "motion/react";

interface AnimatedDividerProps {
  scrollProgress: number;
}

/**
 * Animated Divider Component
 * Renders the vertical dashed border that separates content and dither
 * - Follows the edge of the expanding left page
 * - Fades out as page expands to full width
 * - Uses spring physics for smooth transitions
 */
export function AnimatedDivider({ scrollProgress }: AnimatedDividerProps) {
  // Calculate divider position - follows left page edge as it expands
  const getDividerPosition = () => {
    if (scrollProgress < 0.5) return 50; // At 50% when page is half
    if (scrollProgress >= 0.8) return 100; // At 100% when page fully expanded
    // Smooth interpolation from 50% to 100%
    const progress = (scrollProgress - 0.5) / (0.8 - 0.5);
    return 50 + (progress * 50);
  };

  // Calculate opacity - fade out as divider moves right
  const getDividerOpacity = () => {
    if (scrollProgress < 0.5) return 1; // Fully visible
    if (scrollProgress >= 0.8) return 0; // Fully hidden
    // Smooth fade from 1 to 0
    const progress = (scrollProgress - 0.5) / (0.8 - 0.5);
    return 1 - progress;
  };

  const dividerLeft = getDividerPosition();
  const dividerOpacity = getDividerOpacity();

  return (
    <motion.div
      className="pointer-events-none fixed inset-y-0 hidden lg:block"
      style={{
        left: `${dividerLeft}%`,
        opacity: dividerOpacity,
        zIndex: 15
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20
      }}
    >
      <div className="border-l border-dashed border-[#8a5a33]/70 h-full" />
    </motion.div>
  );
}
