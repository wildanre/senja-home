"use client";

import React from "react";
import { ScaleIn, SlideIn } from "@/components/ui/motion";
import OrbitingAssets from "../supports/orbiting-assets";
import OrbitingNetworks from "../supports/orbiting-networks";
import useResponsiveOrbit from "../supports/useResponsiveOrbit";
import { AnimatedBeamDemo as AnimatedBeamSection } from "../supports/animated-beam-section";

export default function PoweredBySenja() {
  const { outerRadius, innerRadius, iconSize } = useResponsiveOrbit();

  return (
    <div className="relative h-full w-full bg-black text-[#e7b67c]">
      {/* Desktop Layout */}
      <div className="hidden lg:flex h-full w-full relative flex-col items-center justify-center">
        {/* Header Text - Centered */}
        <div className="w-full mb-16 z-10 flex justify-center">
          <SlideIn direction="down" distance={30} duration={0.6} amount={0.5}>
            <h2 className="font-hero text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-normal text-center text-[#e7b67c] leading-tight tracking-tight">
              Powered by Senja
            </h2>
          </SlideIn>
        </div>

        {/* Chain Orbit Visualization with Beam */}
        <div className="flex items-center justify-start w-full gap-16 px-8">
          {/* Chain Orbit */}
          <ScaleIn
            initialScale={0.85}
            duration={0.8}
            delay={0.3}
            amount={0.3}
            className="flex-shrink-0"
          >
            <div className="relative h-[600px] w-[600px] overflow-visible flex items-center justify-center">
              <OrbitingAssets radius={innerRadius} iconSize={iconSize} />
              <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />
            </div>
          </ScaleIn>

          {/* Animated Beam - right side of orbit */}
          <ScaleIn
            initialScale={0.85}
            duration={0.8}
            delay={0.5}
            amount={0.3}
            className="flex-shrink-0"
          >
            <div style={{ width: '500px', height: '500px', minWidth: '500px', minHeight: '500px' }} className="flex items-center justify-center">
              <AnimatedBeamSection />
            </div>
          </ScaleIn>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center items-center gap-10 pl-6 pr-6 pt-24 pb-12 sm:pl-8 sm:pr-8 lg:hidden">
        <div className="relative flex w-full flex-col items-center justify-center gap-10">
          {/* Header Text */}
          <div className="flex flex-col items-center text-center gap-4">
            <SlideIn direction="down" distance={30} duration={0.6} amount={0.5}>
              <h2 className="text-sm uppercase tracking-[0.35em] text-[#e7b67c]/80 font-normal">
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
            <div className="relative h-[400px] w-full max-w-[500px] overflow-visible flex items-center justify-center mx-auto">
              <OrbitingAssets radius={innerRadius} iconSize={iconSize} />
              <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
