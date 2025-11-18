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
    if (scrollProgress <= 0.5) {
      // In hero section - dither visible and in place
      xValue.set(0);
      opacityValue.set(1);
    } else {
      // Transitioning out of hero section
      // Calculate progress from 0 to 1 over the transition range
      const transitionProgress = Math.min((scrollProgress - 0.5) / 0.5, 1);
      
      // Apply ease out curve for smooth deceleration
      // Using cubic ease out: 1 - (1 - x)^3
      const easeOut = 1 - Math.pow(1 - transitionProgress, 3);
      
      // Slide to the right (0 to 120%)
      const targetX = easeOut * 120;
      
      // Fade out with same ease out curve
      const targetOpacity = Math.max(0, 1 - easeOut);
      
      // Debug log
      console.log('Dither Animation:', { scrollProgress, transitionProgress, easeOut, targetX, targetOpacity });
      
      xValue.set(targetX);
      opacityValue.set(targetOpacity);
    }
  }, [scrollProgress, xValue, opacityValue]);
  
  return {
    x: xPercent,
    opacity: opacityValue
  };
}
