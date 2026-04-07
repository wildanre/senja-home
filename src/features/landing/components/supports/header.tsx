"use client";

import SlideIn from "@/components/ui/motion/slide-in";
import ScaleIn from "@/components/ui/motion/scale-in";

export default function SupportsHeader() {
  return (
    <SlideIn direction="down" distance={40} duration={0.8} amount={0.5} className="text-center mb-4 lg:mb-12">
      <ScaleIn initialScale={0.9} duration={0.7} delay={0.1} amount={0.5}>
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-100 dark:text-[#e8f0f7]">
          Supported Assets & Networks
        </h2>
      </ScaleIn>

      <SlideIn direction="up" distance={20} duration={0.6} delay={0.2} amount={0.5}>
        <p className="text-lg md:text-xl text-gray-100/80 dark:text-[#d0dce6] max-w-3xl mx-auto">
          Multi-chain support across leading blockchains and top digital assets
        </p>
      </SlideIn>
    </SlideIn>
  );
}

