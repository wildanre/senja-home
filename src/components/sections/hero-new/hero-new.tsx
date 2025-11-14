"use client";

import Dither from "@/components/ui/ditcher";
import HeroNewHeader from "./hero-new-header";
import HeroNewContent from "./hero-new-content";
import HeroNewDescription from "./hero-new-description";
import { desktopDitherConfig, mobileDitherConfig } from "./heroNewData";

export default function HeroNew() {
  return (
    <section className="relative snap-start snap-always min-h-screen overflow-hidden bg-black text-[#e7b67c]">
      {/* Desktop Dither Background */}
      <div className="absolute inset-y-0 right-0 z-0 hidden h-full w-full lg:block lg:w-1/2">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 z-0 bg-black" />
          <div className="relative z-10 h-full w-full">
            <Dither {...desktopDitherConfig} />
          </div>
        </div>
      </div>

      {/* Divider Line */}
      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <div className="absolute inset-y-0 left-[-0.5rem] border-l border-dashed border-[#8a5a33]/70" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-start gap-10 px-6 pt-24 pb-12 lg:flex-row lg:items-start lg:gap-20 lg:px-12 lg:pr-24 lg:pt-28 lg:pointer-events-none xl:pr-32">
        <div className="relative flex w-full flex-col items-start gap-10 -ml-6 lg:pointer-events-auto lg:w-1/2 lg:max-w-lg lg:justify-start lg:-ml-12 xl:-ml-16">
          <HeroNewHeader />
          <HeroNewContent />
          <HeroNewDescription />
        </div>

        {/* Mobile Dither */}
        <div className="relative z-10 mt-12 h-[360px] w-full overflow-hidden rounded-3xl border border-[#e7b67c]/15 bg-black shadow-[0_0_120px_rgba(231,182,124,0.15)] lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/60 to-black/80 mix-blend-screen" />
          <Dither {...mobileDitherConfig} />
        </div>
      </div>
    </section>
  );
}

