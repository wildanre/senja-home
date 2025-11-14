"use client";

import AnimatedTextVariants from "@/components/ui/animated-text-variants";
import TypingAnimation from "@/components/ui/typing-animation";
import { heroContent } from "./heroNewData";

export default function HeroNewDescription() {
  return (
    <div className="mt-8 lg:mt-64 w-full max-w-md text-sm text-[#f2cba1]/80 sm:max-w-md sm:text-base lg:max-w-xl lg:px-0 lg:relative lg:-left-40 xl:-left-46">
      <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
        <TypingAnimation
          text={heroContent.incubatedBy}
          delay={1.0}
          speed={0.06}
          showCursor={false}
          as="span"
        />
      </div>
      <AnimatedTextVariants
        text={heroContent.description}
        animationType="fadeUp"
        delay={1.2}
        stagger={0.04}
        duration={0.5}
        as="p"
        className="text-sm text-[#f2cba1]/80 sm:text-base"
      />
    </div>
  );
}

