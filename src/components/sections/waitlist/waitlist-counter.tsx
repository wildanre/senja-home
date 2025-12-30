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
      className="space-y-2"
    >
      <SlideIn
        direction="up"
        distance={20}
        duration={0.8}
        delay={0.2}
        amount={0.5}
      >
        <div className="flex items-center gap-2">
          <CountUp
            value={count}
            delay={0.5}
            duration={2}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold bg-clip-text text-transparent bg-linear-to-b from-senja-primary to-[#b38855] leading-tight tracking-tighter"
          />
        </div>
        <p className="text-base sm:text-lg md:text-xl font-medium text-neutral-500 tracking-wide uppercase">
          People waiting for access
        </p>
      </SlideIn>
    </SlideIn>
  );
}
