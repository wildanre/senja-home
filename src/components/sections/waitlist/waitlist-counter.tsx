"use client";

import { SlideIn } from "@/components/ui/motion";
import CountUp from "../../ui/count-up";

interface WaitlistCounterProps {
  count: number;
}

export default function WaitlistCounter({ count }: WaitlistCounterProps) {
  return (
    <SlideIn 
      direction="left" 
      distance={50} 
      duration={0.8} 
      amount={0.5}
      className="text-center md:text-left space-y-6"
    >
      <SlideIn direction="up" distance={20} duration={0.8} delay={0.2} amount={0.5}>
        <div className="flex items-center justify-center md:justify-start gap-2">
          <CountUp
            value={count}
            delay={0.5}
            className="text-6xl md:text-7xl font-bold text-gray-100 dark:text-gray-100"
          />
        </div>
        <p className="mt-5 text-base lg:text-xl font-semibold text-white/90 dark:text-[#d0dce6] mb-4">
          Users on Waitlist
        </p>
      </SlideIn>
    </SlideIn>
  );
}

