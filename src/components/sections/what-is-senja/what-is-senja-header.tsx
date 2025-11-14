"use client";

import { SlideIn } from "@/components/ui/motion";

export default function WhatIsSenjaHeader() {
  return (
    <>
      <SlideIn direction="down" distance={30} duration={0.6} amount={0.5}>
        <h2 className="font-hero text-4xl md:text-5xl font-normal text-left mb-12 text-[#e7b67c] leading-tight tracking-tight">
          What is Senja ?
        </h2>
      </SlideIn>

      <SlideIn direction="down" distance={20} duration={0.6} delay={0.1} amount={0.5} className="text-sm md:text-base leading-relaxed text-[#f2cba1]/80 space-y-6 mb-12 tracking-tight">
        <p>
          <strong className="text-[#e7b67c]">Senja </strong> is a <strong className="text-[#e7b67c]">permissionless stablecoin lending and borrowing protocol</strong> built on the Kaia ecosystem. Senja Finance also lives on the LINE Mini DApp, where users can supply collateral from multiple chains via cross-chain messaging, swap collateral seamlessly through DragonSwap, and borrow Kaia-native USDT or other stablecoins across multiple chains, with interest rates that automatically adjust based on utilization and asset risk profiles.
        </p>

        <p>
          Senja is supported by decentralized oracles such as the <strong className="text-[#e7b67c]">Orakl Network</strong> to ensure reliable and secure price feeds for risk management.
        </p>
      </SlideIn>
    </>
  );
}

