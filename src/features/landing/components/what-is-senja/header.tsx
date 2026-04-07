"use client";

import SlideIn from "@/components/ui/motion/slide-in";

export default function WhatIsSenjaHeader() {
  return (
    <>
      <SlideIn direction="down" distance={30} duration={0.6} amount={0.5}>
        <h2 className="font-hero text-4xl sm:text-5xl md:text-4xl lg:text-6xl font-normal text-left mb-6 md:mb-8 text-senja-primary leading-tight tracking-tight max-w-[90%] sm:max-w-[85%] lg:max-w-none">
          Why design a protocol for <br></br> cross-chain borrowing?
        </h2>
      </SlideIn>

      <SlideIn direction="down" distance={20} duration={0.6} delay={0.1} amount={0.5} className="w-full max-w-lg text-sm sm:text-base md:text-base leading-relaxed text-[#f2cba1]/80 space-y-4 md:space-y-6 tracking-tight">
        <p>
          Permissionless lending and borrowing allows users to access liquidity, earn yield, and manage their assets across chains. Senja is built to support cross-chain lending, borrowing, and collateral trading, giving users complete control over their assets in a seamless and decentralized way.
        </p>
      </SlideIn>
    </>
  );
}

