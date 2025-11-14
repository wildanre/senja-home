"use client";

import Dither from "@/components/ui/dither";
import HeroNewHeader from "./hero-new-header";
import HeroNewContent from "./hero-new-content";
import HeroNewDescription from "./hero-new-description";
import { desktopDitherConfig, mobileDitherConfig } from "./heroNewData";

export default function HeroNew() {
  return (
    <section className="relative snap-start snap-always h-screen w-full overflow-hidden bg-black text-[#e7b67c]">
      {/* Desktop Dither Background */}
      <div className="absolute top-0 left-1/2 bottom-0 right-0 z-0 hidden h-screen w-1/2 lg:block" style={{ margin: 0, padding: 0 }}>
        <Dither {...desktopDitherConfig} />
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-1/2 z-10 hidden -translate-x-1/2 lg:block">
        <div className="absolute inset-y-0 left-[-0.5rem] border-l border-dashed border-[#8a5a33]/70" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full flex-col justify-start gap-10 pl-6 pr-6 pt-24 pb-12 sm:pl-8 sm:pr-8 lg:flex-row lg:items-start lg:gap-20 lg:pl-60 lg:pr-24 lg:pt-28 lg:pointer-events-none xl:pr-32">
        <div className="relative flex w-full flex-col items-start gap-10 lg:pointer-events-auto lg:w-1/2 lg:justify-start">
          <HeroNewHeader />
          <HeroNewContent />
          <HeroNewDescription />
        </div>

        <div className="relative z-10 mt-12 h-[360px] w-full overflow-hidden rounded-3xl border border-[#e7b67c]/15 bg-black shadow-[0_0_120px_rgba(231,182,124,0.15)] lg:hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/60 to-black/80 mix-blend-screen" />
          <Dither {...mobileDitherConfig} />
        </div>
      </div>
    </section>
  );
}

