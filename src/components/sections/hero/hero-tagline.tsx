"use client";

import { MotionValue } from "motion/react";
import { MotionContainer } from "@/components/ui/motion";
import RotatingTextType from "@/components/ui/rotating-text-type";

interface HeroTaglineProps {
  subtitleY: MotionValue<number>;
  taglines: string[];
}

export default function HeroTagline({ subtitleY, taglines }: HeroTaglineProps) {
  return (
    <MotionContainer
      className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center px-4"
      style={{ y: subtitleY }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200 dark:text-[#d0dce6] transition-colors duration-300 text-center">
        <RotatingTextType
          texts={taglines}
          typingSpeed={50}
          deletingSpeed={30}
          pauseDuration={2500}
        />
      </h2>
    </MotionContainer>
  );
}

