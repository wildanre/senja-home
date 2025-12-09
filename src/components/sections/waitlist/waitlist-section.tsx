"use client";

import { SlideIn } from "@/components/ui/motion";
import { Dither } from "@/components/ui/background";
import { AnimatedDivider } from "@/components/ui/layout";
import { desktopDitherConfig } from "@/components/sections/hero/hero-data";
import WaitlistCounter from "./waitlist-counter";
import WaitlistForm from "./waitlist-form";

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative w-full overflow-hidden min-h-screen flex flex-col lg:flex-row"
    >
      {/* Animated Divider - fixed at 50% */}
      <AnimatedDivider scrollProgress={0.5} />

      {/* Kolom 1 - Background Hitam dengan Tagline dan Counter */}
      <div className="w-full lg:w-1/2 bg-black relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 flex items-center min-h-[50vh] lg:min-h-screen">
        <div className="max-w-2xl mx-auto w-full space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          <SlideIn direction="left" distance={30} duration={0.7} amount={0.5}>
            <div className="space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="font-hero text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-[#e7b67c]">
                Join the Waitlist
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#f2cba1]/80 leading-relaxed max-w-lg">
                Be among the first to experience the future of decentralized
                finance. Join thousands of users waiting to access Senja.
              </p>
            </div>
          </SlideIn>

          <WaitlistCounter count={10472} />
        </div>
      </div>

      <div className="w-full lg:w-1/2 relative py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 flex items-center min-h-[50vh] lg:min-h-screen">
        <div
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 0,
          }}
        >
          <Dither {...desktopDitherConfig} />
        </div>

        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="w-full max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
