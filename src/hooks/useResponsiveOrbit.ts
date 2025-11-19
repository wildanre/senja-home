"use client";

import { useState, useEffect } from "react";

export interface OrbitSizes {
  outerRadius: number;
  innerRadius: number;
  iconSize: number;
}

export default function useResponsiveOrbit(): OrbitSizes {
  const [sizes, setSizes] = useState<OrbitSizes>({
    outerRadius: 280,
    innerRadius: 120,
    iconSize: 60,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;
      
      if (width < 640) {
        // Mobile small
        setSizes({
          outerRadius: 120,
          innerRadius: 70,
          iconSize: 32,
        });
      } else if (width < 768) {
        // Mobile
        setSizes({
          outerRadius: 140,
          innerRadius: 80,
          iconSize: 35,
        });
      } else if (width < 1024) {
        // Tablet
        setSizes({
          outerRadius: 180,
          innerRadius: 100,
          iconSize: 45,
        });
      } else if (width < 1280) {
        // Desktop small (lg)
        setSizes({
          outerRadius: 220,
          innerRadius: 110,
          iconSize: 50,
        });
      } else if (width < 1536) {
        // Desktop large (xl)
        setSizes({
          outerRadius: 280,
          innerRadius: 120,
          iconSize: 60,
        });
      } else {
        // Desktop extra large (2xl+)
        setSizes({
          outerRadius: 340,
          innerRadius: 150,
          iconSize: 70,
        });
      }
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return sizes;
}

