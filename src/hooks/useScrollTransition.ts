"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect scroll transition from hero section through what-is-senja section
 * Returns a value between 0 and 1 representing the transition progress
 * 0 = at top of hero
 * 0.5 = at top of what-is-senja (after hero)
 * 1 = fully scrolled past what-is-senja section
 */
export function useScrollTransition() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("main-scroll");
      if (!scrollContainer) return;

      const scrollTop = scrollContainer.scrollTop;
      const windowHeight = window.innerHeight;
      
      // Calculate progress: 0 at top of hero, 0.5 at top of what-is-senja, 1 when fully scrolled past what-is-senja
      // Transition happens over two viewport heights (hero + what-is-senja sections)
      const rawProgress = scrollTop / (windowHeight * 2);
      const progress = Math.min(Math.max(rawProgress, 0), 1);
      
      setScrollProgress(progress);
    };

    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
      handleScroll(); // Initial call
      
      return () => {
        scrollContainer.removeEventListener("scroll", handleScroll);
      };
    }
  }, []);

  return scrollProgress;
}

