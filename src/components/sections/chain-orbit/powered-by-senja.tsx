"use client";

import React from "react";
import { ScaleIn, SlideIn } from "@/components/ui/motion";
import OrbitingAssets from "../supports/orbiting-assets";
import OrbitingNetworks from "../supports/orbiting-networks";
import useResponsiveOrbit from "../../../hooks/useResponsiveOrbit";
import { AnimatedBeamDemo as AnimatedBeamSection } from "../supports/animated-beam-section";

export default function PoweredBySenja() {
  const { outerRadius, innerRadius, iconSize } = useResponsiveOrbit();

  return (
    <div className="relative h-full w-full bg-black text-[#e7b67c]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-full w-full relative flex-col items-center justify-center py-12">
        {/* Header Text - Centered */}
        <div className="w-full mb-12 z-10 flex justify-center">
          <SlideIn direction="down" distance={30} duration={0.6} amount={0.5}>
            <h2 id="powered-by-senja-heading" className="font-hero text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal text-center text-[#e7b67c] leading-tight tracking-tight">
              Powered by Senja
            </h2>
          </SlideIn>
        </div>

        {/* Chain Orbit Visualization with Beam */}
        <div className="flex items-center justify-center w-full gap-8 xl:gap-16 2xl:gap-24 px-4 max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
            <div className="relative h-[500px] w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[600px] xl:w-[600px] 2xl:h-[700px] 2xl:w-[700px] overflow-visible flex items-center justify-center">
              <OrbitingAssets radius={innerRadius} iconSize={iconSize} />
              <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />
            </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:hidden">
        <div className="relative flex w-full flex-col items-center justify-center gap-8 max-w-2xl mx-auto">
          {/* Header Text */}
          <div className="flex flex-col items-center text-center gap-3">
            <SlideIn direction="down" distance={30} duration={0.6} amount={0.5}>
              <h2 id="powered-by-senja-heading" className="font-hero text-3xl sm:text-4xl md:text-5xl font-normal text-[#e7b67c] leading-tight tracking-tight">
                Powered by Senja
              </h2>
            </SlideIn>
            <SlideIn direction="down" distance={20} duration={0.6} delay={0.1} amount={0.5}>
              <p className="text-sm md:text-base text-[#f2cba1]/80 max-w-md leading-relaxed">
                Unlock seamless lending, borrowing, and collateral trading across multiple chains.
              </p>
            </SlideIn>
          </div>

          {/* Chain Orbit Visualization */}
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
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
