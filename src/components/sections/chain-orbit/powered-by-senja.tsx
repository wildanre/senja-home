"use client";

import React, { useState, useEffect } from "react";
import { ScaleIn, SlideIn } from "@/components/ui/motion";
import OrbitingAssets from "../supports/orbiting-assets";
import OrbitingNetworks from "../supports/orbiting-networks";
import useResponsiveOrbit from "../../../hooks/useResponsiveOrbit";

export default function PoweredBySenja() {
  const { outerRadius, innerRadius, iconSize } = useResponsiveOrbit();
  const [scrollOpacity, setScrollOpacity] = useState(1);
  const [scrollScale, setScrollScale] = useState(1);

  useEffect(() => {
    const scrollContainer = document.getElementById("main-scroll");
    if (!scrollContainer) return;

    const handleScroll = () => {
      const poweredBySenjaSection = document.getElementById("powered-by-senja");
      if (!poweredBySenjaSection) return;

      const rect = poweredBySenjaSection.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const sectionTop = rect.top;
      const sectionBottom = rect.bottom;
      const sectionMiddle = (sectionTop + sectionBottom) / 2;

      // Zoom in effect: starts small when entering, grows as scrolling
      const zoomStartPoint = windowHeight; // When section just enters viewport
      const zoomEndPoint = windowHeight / 2; // When section reaches middle

      // Fade out effect: starts when passing middle, completes at top
      const fadeStartPoint = windowHeight / 2;
      const fadeEndPoint = 0;

      // Calculate zoom (0.7 to 1.0)
      if (sectionMiddle >= zoomStartPoint) {
        setScrollScale(0.7); // Start small (zoomed out)
      } else if (sectionMiddle > zoomEndPoint) {
        const zoomProgress =
          1 - (sectionMiddle - zoomEndPoint) / (zoomStartPoint - zoomEndPoint);
        setScrollScale(0.7 + zoomProgress * 0.3); // Zoom from 0.7 to 1.0
      } else {
        setScrollScale(1.0); // Fully zoomed in
      }

      // Calculate fade (stays at 1.0 while zooming, then fades)
      if (sectionMiddle <= fadeEndPoint) {
        setScrollOpacity(0);
      } else if (sectionMiddle <= fadeStartPoint) {
        const fadeProgress = 1 - sectionMiddle / fadeStartPoint;
        setScrollOpacity(1 - fadeProgress);
      } else {
        setScrollOpacity(1);
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-full w-full bg-black text-[#e7b67c]">
      {/* Desktop Layout */}
      <div
        className="hidden lg:flex h-full w-full relative flex-col items-center justify-center py-12 transition-all duration-700 ease-out"
        style={{
          opacity: scrollOpacity,
          transform: `scale(${scrollScale})`,
        }}
      >
        {/* Chain Orbit Visualization with Center Text */}
        <div className="flex items-center justify-center w-full gap-8 xl:gap-16 2xl:gap-24 px-4 max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
          <div className="relative h-[500px] w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[600px] xl:w-[600px] 2xl:h-[700px] 2xl:w-[700px] overflow-visible flex items-center justify-center">
            <OrbitingAssets radius={innerRadius} iconSize={iconSize} />
            <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />

            {/* Center Text - Inside Orbit */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-8">
              <SlideIn direction="up" distance={30} duration={0.6} amount={0.5}>
                <h2
                  id="powered-by-senja-heading"
                  className="font-hero text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-center text-[#e7b67c] leading-tight tracking-tight mb-3"
                >
                  Powered by Senja
                </h2>
              </SlideIn>
              <SlideIn
                direction="up"
                distance={20}
                duration={0.6}
                delay={0.1}
                amount={0.5}
              >
                <p className="text-xs lg:text-sm xl:text-base text-[#f2cba1]/70 text-center max-w-md leading-relaxed">
                  Seamless lending and borrowing across multiple chains with
                  cross-chain liquidity
                </p>
              </SlideIn>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div
        className="relative z-10 flex h-full w-full flex-col justify-center items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:hidden transition-all duration-700 ease-out"
        style={{
          opacity: scrollOpacity,
          transform: `scale(${scrollScale})`,
        }}
      >
        <div className="relative flex w-full flex-col items-center justify-center gap-8 max-w-2xl mx-auto">
          {/* Chain Orbit Visualization with Center Text */}
          <ScaleIn
            initialScale={0.85}
            duration={0.8}
            delay={0.3}
            amount={0.3}
            className="flex justify-center w-full"
          >
            <div className="relative h-[350px] sm:h-[400px] md:h-[450px] w-full max-w-[500px] overflow-visible flex items-center justify-center">
              <OrbitingAssets radius={innerRadius} iconSize={iconSize} />
              <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />

              {/* Center Text - Inside Orbit */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-6">
                <SlideIn
                  direction="up"
                  distance={30}
                  duration={0.6}
                  amount={0.5}
                >
                  <h2
                    id="powered-by-senja-heading"
                    className="font-hero text-xl sm:text-2xl md:text-3xl font-normal text-center text-[#e7b67c] leading-tight tracking-tight mb-2"
                  >
                    Powered by Senja
                  </h2>
                </SlideIn>
                <SlideIn
                  direction="up"
                  distance={20}
                  duration={0.6}
                  delay={0.1}
                  amount={0.5}
                >
                  <p className="text-[10px] sm:text-xs md:text-sm text-[#f2cba1]/70 text-center max-w-xs leading-relaxed">
                    Seamless lending and borrowing across multiple chains
                  </p>
                </SlideIn>
              </div>
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
