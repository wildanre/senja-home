"use client";

import { useScroll, useTransform } from "motion/react";

export default function useHeroParallax() {
  const { scrollY } = useScroll();

  // Parallax transforms
  const logoY = useTransform(scrollY, [0, 800], [0, -200]);
  const logoScale = useTransform(scrollY, [0, 800], [1, 0.8]);
  const titleY = useTransform(scrollY, [0, 800], [0, -150]);
  const subtitleY = useTransform(scrollY, [0, 800], [0, -100]);
  const buttonY = useTransform(scrollY, [0, 800], [0, -50]);
  
  const opacity = useTransform(scrollY, [0, 400, 600], [1, 0.5, 0]);
  
  const scale = useTransform(scrollY, [0, 600], [1, 0.85]);

  return {
    logoY,
    logoScale,
    titleY,
    subtitleY,
    buttonY,
    opacity,
    scale
  };
}

