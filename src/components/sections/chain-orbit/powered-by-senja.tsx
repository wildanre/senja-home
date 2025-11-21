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
        {/* Chain Orbit Visualization with Center Text */}
        <div className="flex items-center justify-center w-full gap-8 xl:gap-16 2xl:gap-24 px-4 max-w-[1400px] 2xl:max-w-[1800px] mx-auto">
            <div className="relative h-[500px] w-[500px] lg:h-[550px] lg:w-[550px] xl:h-[600px] xl:w-[600px] 2xl:h-[700px] 2xl:w-[700px] overflow-visible flex items-center justify-center">
              <OrbitingAssets radius={innerRadius} iconSize={iconSize} />
              <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />

              {/* Center Text - Inside Orbit */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-20 pointer-events-none px-8">
                <SlideIn direction="up" distance={30} duration={0.6} amount={0.5}>
                  <h2 id="powered-by-senja-heading" className="font-hero text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-normal text-center text-[#e7b67c] leading-tight tracking-tight mb-3">
                    Powered by Senja
                  </h2>
                </SlideIn>
                <SlideIn direction="up" distance={20} duration={0.6} delay={0.1} amount={0.5}>
                  <p className="text-xs lg:text-sm xl:text-base text-[#f2cba1]/70 text-center max-w-md leading-relaxed">
                    Seamless lending and borrowing across multiple chains with cross-chain liquidity
                  </p>
                </SlideIn>
              </div>
            </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center items-center gap-8 px-4 py-16 sm:px-6 sm:py-20 lg:hidden">
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
                <SlideIn direction="up" distance={30} duration={0.6} amount={0.5}>
                  <h2 id="powered-by-senja-heading" className="font-hero text-xl sm:text-2xl md:text-3xl font-normal text-center text-[#e7b67c] leading-tight tracking-tight mb-2">
                    Powered by Senja
                  </h2>
                </SlideIn>
                <SlideIn direction="up" distance={20} duration={0.6} delay={0.1} amount={0.5}>
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
