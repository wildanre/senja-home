"use client";

import { useEffect } from "react";
import { useMotionValue, useTransform, MotionValue } from "motion/react";

interface DitherAnimationResult {
  x: MotionValue<string>;
  opacity: MotionValue<number>;
}

/**
 * Custom hook for dither background animation
 * Handles smooth transition of dither element during scroll
 * - Slides to the right and fades out when scrollProgress > 0.5
 * - Uses ease out for smooth natural exit
 */
export function useDitherAnimation(scrollProgress: number): DitherAnimationResult {
  // Motion values for position and opacity
  const xValue = useMotionValue(0);
  const opacityValue = useMotionValue(1);
  
  // Transform position value to percentage string
  const xPercent = useTransform(xValue, (value) => `${value}%`);
  
  // Update animation based on scroll progress
  useEffect(() => {
    // Keep dither visible and in place at all times
    // Let the black left page naturally cover it as it expands (z-index layering)
    xValue.set(0);
    opacityValue.set(1);
  }, [scrollProgress, xValue, opacityValue]);
  
  return {
    x: xPercent,
    opacity: opacityValue
  };
}
