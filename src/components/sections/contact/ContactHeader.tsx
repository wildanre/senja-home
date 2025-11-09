"use client";

import { SlideIn } from "@/components/ui/motion";

export default function ContactHeader() {
  return (
    <SlideIn direction="down" distance={30} duration={0.8} amount={0.5}>
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white dark:text-[#e8f0f7]">
        Get in Touch
      </h2>
    </SlideIn>
  );
}

