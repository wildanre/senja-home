"use client";

import { SlideIn } from "@/components/ui/motion";
import { Dither } from "@/components/ui/background";
import { desktopDitherConfig } from "@/components/sections/hero/hero-data";
import WaitlistCounter from "./waitlist-counter";
import WaitlistForm from "./waitlist-form";
import type { AuthStatus } from "@/lib/server-auth";

interface WaitlistSectionProps {
  initialAuth: AuthStatus;
}

export default function WaitlistSection({ initialAuth }: WaitlistSectionProps) {
  return (
    <section
      id="waitlist"
      className="relative w-full overflow-hidden min-h-screen flex flex-col lg:flex-row bg-[#050505]"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <Dither {...desktopDitherConfig} />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-black/20 to-black/80 pointer-events-none" />

      {/* Content Side - Hidden on mobile */}
      <div className="hidden lg:flex w-full lg:w-1/2 relative z-10 py-12 px-6 sm:px-12 md:px-16 items-center justify-center min-h-[40vh] lg:min-h-screen border-b lg:border-b-0 lg:border-r border-white/5">
        <div className="max-w-xl mx-auto w-full space-y-10">
          <SlideIn direction="left" distance={40} duration={0.8}>
            <div className="space-y-6">
              <h2 className="font-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white leading-[0.9]">
                Join the <br />
                <span className="text-[#e7b67c]">Revolution</span>
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-neutral-400 leading-relaxed max-w-lg font-light">
                Secure your spot in the future of decentralized finance.
                Experience permissionless lending and borrowing with Senja.
              </p>
            </div>
          </SlideIn>
        </div>
      </div>

      {/* Form Side - Full width on mobile */}
      <div className="w-full lg:w-1/2 relative z-10 py-8 lg:py-12 px-4 sm:px-6 md:px-12 lg:px-16 flex items-center justify-center min-h-screen bg-black/20 backdrop-blur-sm">
        <div className="w-full max-w-md">
          <WaitlistForm initialAuth={initialAuth} />
        </div>
      </div>
    </section>
  );
}
