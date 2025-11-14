"use client";

import { SlideIn } from "@/components/ui/motion";
import Beams from "@/components/Beams";
import WaitlistCounter from "./waitlist-counter";
import WaitlistForm from "./waitlist-form";

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative w-full overflow-hidden min-h-screen flex"
    >
      {/* Kolom 1 - Background Hitam dengan Tagline dan Counter */}
      <div className="w-full md:w-1/2 bg-black relative py-12 md:py-20 px-4 md:px-8 flex items-center">
        <div className="max-w-2xl mx-auto w-full space-y-8 md:space-y-12">
          <SlideIn direction="left" distance={30} duration={0.7} amount={0.5}>
            <div className="space-y-4 md:space-y-6">
              <h2 className="font-hero text-4xl md:text-5xl lg:text-6xl font-normal leading-tight text-[#e7b67c]">
                Join the Waitlist
              </h2>
              <p className="text-base md:text-lg lg:text-xl text-[#f2cba1]/80 leading-relaxed max-w-lg">
                Be among the first to experience the future of decentralized finance. Join thousands of users waiting to access Senja.
              </p>
            </div>
          </SlideIn>
          
          <WaitlistCounter count={10472} />
        </div>
      </div>

      {/* Kolom 2 - Background Beams dengan Form */}
      <div className="w-full md:w-1/2 relative py-12 md:py-20 px-4 md:px-8 flex items-center">
        {/* Beams Background */}
        <div style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
          <Beams
            beamWidth={3}
            beamHeight={25}
            beamNumber={20}
            lightColor="#ff9500"
            speed={2}
            noiseIntensity={1.75}
            scale={0.2}
            rotation={30}
          />
        </div>
        
        {/* Form Content */}
        <div className="relative z-10 w-full flex items-center justify-center">
          <div className="w-full max-w-md">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}
