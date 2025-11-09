"use client";

import { SlideIn } from "@/components/ui/motion";

export default function PartnerHeader() {
  return (
    <div className="text-center mb-16">
      <SlideIn direction="down" distance={40} duration={0.7} amount={0.5}>
        <h2 className="text-2xl md:text-4xl font-bold mb-6 text-white dark:text-[#e8f0f7]">
          Partnership
        </h2>
      </SlideIn>
      <SlideIn direction="up" distance={20} duration={0.6} delay={0.15} amount={0.5}>
        <p className="text-lg md:text-xl text-white/90 dark:text-[#d0dce6] max-w-3xl mx-auto">
          Working together with leading protocols and communities to build the future of DeFi
        </p>
      </SlideIn>
    </div>
  );
}

