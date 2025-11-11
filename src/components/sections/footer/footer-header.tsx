'use client';

import { FadeIn } from "@/components/ui/motion";

export default function FooterHeader() {
  return (
    <FadeIn duration={0.8} className="mb-12 pb-12 border-b border-white/10 dark:border-gray-700/30">
      <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-[#e8f0f7] mb-4">
        Senja Finance
      </h2>
      <p className="text-white/80 dark:text-[#d0dce6] text-base md:text-lg max-w-2xl">
        Permissionless stablecoin lending and borrowing protocol on Kaia blockchain
      </p>
    </FadeIn>
  );
}

