"use client";

import HeroNewHeader from "./hero-new-header";
import HeroNewContent from "./hero-new-content";
import HeroNewDescription from "./hero-new-description";
import Dither from "@/components/ui/dither";
import { mobileDitherConfig } from "./heroNewData";

export default function HeroNew() {
  return (
    <div className="relative h-full w-full bg-black text-[#e7b67c]">
      {/* Desktop Layout - Content Only */}
      <div className="hidden lg:flex h-full w-full">
        <div className="flex flex-col items-start justify-center gap-10 pl-60 pr-12 py-28">
          <HeroNewHeader />
          <HeroNewContent />
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="relative z-10 flex h-full w-full flex-col justify-start gap-10 pl-6 pr-6 pt-24 pb-12 sm:pl-8 sm:pr-8 lg:hidden">
        <div className="relative flex w-full flex-col items-start gap-10">
          <HeroNewHeader />
          <HeroNewContent />
          <HeroNewDescription />
        </div>

        <div className="relative z-10 mt-12 h-[360px] w-full overflow-hidden rounded-3xl border border-[#e7b67c]/15 bg-black shadow-[0_0_120px_rgba(231,182,124,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/60 to-black/80 mix-blend-screen" />
          <Dither {...mobileDitherConfig} />
        </div>
      </div>
    </div>
  );
}

