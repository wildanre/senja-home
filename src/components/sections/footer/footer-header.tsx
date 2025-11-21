'use client';

import { FadeIn } from "@/components/ui/motion";

export default function FooterHeader() {
  return (
    <FadeIn duration={0.8} className="mb-12 pb-12 border-b border-white/10 dark:border-gray-700/30">
      <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-hero text-[#e7b67c] dark:text-[#e8f0f7] mb-4">
        Senja Finance
      </h2>
    </FadeIn>
  );
}

