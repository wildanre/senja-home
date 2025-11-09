"use client";

import { SlideIn } from "@/components/ui/motion";
import WaitlistCounter from "./WaitlistCounter";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative  w-full overflow-hidden py-8 mb-10 px-4"
    >
      <div className="relative z-20 mt-10 lg:mt-20 mx-auto px-4 max-w-9xl">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <SlideIn direction="down" distance={30} duration={0.7} amount={0.5}>
            <h2 className="text-4xl md:text-5xl font-bold text-center text-white dark:text-[#e8f0f7] mb-4 lg:mb-16 leading-tight">
              Join the Waitlist
            </h2>
          </SlideIn>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-12 items-center">
            <WaitlistCounter count={10472} />

            <WaitlistForm />
          </div>
        </div>

      </div>
    </section>
  );
}
