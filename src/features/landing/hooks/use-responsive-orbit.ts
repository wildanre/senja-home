"use client";

import { useState, useEffect } from "react";

export interface OrbitSizes {
  outerRadius: number;
  innerRadius: number;
  iconSize: number;
}

export default function useResponsiveOrbit(): OrbitSizes {
  const [sizes, setSizes] = useState<OrbitSizes>({
    outerRadius: 380,
    innerRadius: 240,
    iconSize: 60,
  });

  useEffect(() => {
    const checkScreenSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        // Mobile small
        setSizes({
          outerRadius: 170,
          innerRadius: 110,
          iconSize: 32,
        });
      } else if (width < 768) {
        // Mobile
        setSizes({
          outerRadius: 190,
          innerRadius: 120,
          iconSize: 35,
        });
      } else if (width < 1024) {
        // Tablet
        setSizes({
          outerRadius: 250,
          innerRadius: 160,
          iconSize: 45,
        });
      } else if (width < 1280) {
        // Desktop small (lg)
        setSizes({
          outerRadius: 300,
          innerRadius: 190,
          iconSize: 50,
        });
      } else if (width < 1536) {
        // Desktop large (xl)
        setSizes({
          outerRadius: 380,
          innerRadius: 240,
          iconSize: 60,
        });
      } else {
        // Desktop extra large (2xl+)
        setSizes({
          outerRadius: 450,
          innerRadius: 280,
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

