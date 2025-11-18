"use client";

import { SlideIn } from "@/components/ui/motion";

export default function WhatIsSenjaHeader() {
  return (
    <>
      <SlideIn direction="down" distance={30} duration={0.6} amount={0.5}>
        <h2 className="font-hero text-4xl md:text-6xl font-normal text-left mb-8 text-[#e7b67c] leading-tight tracking-tight">
          Why design a protocol for <br></br> cross-chain borrowing?
        </h2>
      </SlideIn>

      <SlideIn direction="down" distance={20} duration={0.6} delay={0.1} amount={0.5} className="w-full max-w-lg text-sm md:text-base leading-relaxed text-[#f2cba1]/80 space-y-6 tracking-tight">
        <p>
          Permissionless lending and borrowing allows users to access liquidity, earn yield, and manage their assets across different blockchains. Senja is built to support cross-chain lending, borrowing, and collateral trading, giving users complete control over their assets in a seamless and decentralized way.
        </p>
      </SlideIn>
    </>
  );
}

