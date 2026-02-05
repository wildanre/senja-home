"use client";

import { useState, useEffect, useLayoutEffect } from "react";
import LoadingPage from "./loading-page";

export default function SplashHandler() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  // Use useLayoutEffect to avoid flash of loading screen
  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    // Check if user has seen splash screen in this session
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      setIsLoading(false);
      return;
    }

    // Start slide-up animation at 2.2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // Remove loading page completely at 2.9 seconds (after slide-up completes)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 2900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
    };
  }, []);

  if (!isLoading) return null;

  return <LoadingPage fadeOut={fadeOut} />;
}
