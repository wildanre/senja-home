"use client";

import { ParticleTransition } from "@/components/ui/effects/particle-transition";
import { useState, useEffect } from "react";

export function WaitlistIntro() {
  const [showIntro, setShowIntro] = useState(true);

  const handleComplete = () => {
    setShowIntro(false);
  };

  // If intro is finished, return null to unmount the heavy canvas/listeners
  if (!showIntro) return null;

  return (
    <ParticleTransition
      trigger={true}
      text="Senja"
      onComplete={handleComplete}
    />
  );
}
