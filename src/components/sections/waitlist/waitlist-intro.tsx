"use client";

import { ParticleTransition } from "@/components/ui/effects/particle-transition";
import { useState, useEffect, useLayoutEffect } from "react";

export function WaitlistIntro() {
  const [showIntro, setShowIntro] = useState(true);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const hasSeen = sessionStorage.getItem("hasSeenWaitlistIntro");
    if (hasSeen) {
      setShowIntro(false);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("hasSeenWaitlistIntro", "true");
    setShowIntro(false);
  };

  if (!showIntro) return null;

  return (
    <ParticleTransition
      trigger={true}
      text="Senja"
      onComplete={handleComplete}
    />
  );
}
