"use client";

import { SlideIn } from "@/components/ui/motion";
import CountUp from "@/components/ui/data-display/count-up";

interface WaitlistCounterProps {
  count: number;
}

export default function WaitlistCounter({ count }: WaitlistCounterProps) {
  return (
    <SlideIn 
      direction="left" 
      distance={30} 
      duration={0.6} 
      amount={0.5}
      className="text-center lg:text-left space-y-4 sm:space-y-5 md:space-y-6"
    >
      <SlideIn direction="up" distance={20} duration={0.8} delay={0.2} amount={0.5}>
        <div className="flex items-center justify-center lg:justify-start gap-2">
          <CountUp
            value={count}
            delay={0.5}
            duration={2}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-100 dark:text-gray-100"
          />
        </div>
        <p className="mt-3 sm:mt-4 md:mt-5 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white/90 dark:text-[#d0dce6] mb-2 sm:mb-3 md:mb-4">
          Users on Waitlist
        </p>
      </SlideIn>
    </SlideIn>
  );
}

