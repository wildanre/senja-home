"use client";

import React from "react";
import { ScaleIn, SlideIn } from "@/components/ui/motion";
import Supports from "../supports";

export default function ChainOrbit() {
  return (
    <div className="relative h-full w-full bg-black text-senja-primary/70">
      {/* Desktop Layout - Content Only */}
      <div className="hidden lg:flex h-full w-full items-center justify-center">
        <ScaleIn
          initialScale={0.85}
          duration={0.8}
          delay={0.3}
          amount={0.3}
          className="flex justify-center w-full"
        >
          <div className="relative h-[600px] w-full overflow-visible flex items-center justify-center">
            <Supports />
          </div>
        </ScaleIn>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-10 flex h-full w-full flex-col justify-center items-center gap-10 pl-6 pr-6 pt-24 pb-12 sm:pl-8 sm:pr-8 lg:hidden">
        <div className="relative flex w-full flex-col items-center justify-center gap-10">
          {/* Header Text */}
          <div className="flex flex-col items-center text-center gap-4">
            <SlideIn direction="down" distance={30} duration={0.6} amount={0.5}>
              <h2 className="text-sm uppercase tracking-[0.35em] text-senja-primary/80 font-normal">
                Powered by Senja
              </h2>
            </SlideIn>
            <SlideIn direction="down" distance={20} duration={0.6} delay={0.1} amount={0.5}>
              <p className="text-sm md:text-base text-[#f2cba1]/80 max-w-md leading-relaxed">
                Unlock seamless lending, borrowing, and collateral trading across multiple chains.
              </p>
            </SlideIn>
          </div>

          <ScaleIn
            initialScale={0.85}
            duration={0.8}
            delay={0.3}
            amount={0.3}
            className="flex justify-center w-full"
          >
            <div className="relative h-[400px] w-full overflow-visible flex items-center justify-center">
              <Supports />
            </div>
          </ScaleIn>
        </div>
      </div>
    </div>
  );
}
