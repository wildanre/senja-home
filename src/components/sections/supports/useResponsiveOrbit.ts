"use client";

import { useState, useEffect } from "react";

export interface OrbitSizes {
  outerRadius: number;
  innerRadius: number;
  iconSize: number;
}

export default function useResponsiveOrbit(): OrbitSizes {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return {
    outerRadius: isMobile ? 140 : 280,
    innerRadius: isMobile ? 80 : 120,
    iconSize: isMobile ? 35 : 60,
  };
}

