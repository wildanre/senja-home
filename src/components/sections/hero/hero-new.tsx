"use client";

import HeroNewHeader from "./hero-new-header";
import HeroNewDescription from "./hero-new-description";
import { Dither } from "@/components/ui/background";
import { mobileDitherConfig } from "./heroNewData";

export default function HeroNew() {
  return (
    <div className="relative h-full w-full bg-black text-[#e7b67c]">
      {/* Desktop Layout - Content Only */}
      <div className="hidden lg:flex h-full w-full">
        <div className="flex flex-col items-start justify-center gap-10 pl-60 pr-12 py-28">
          <HeroNewHeader />
        </div>
      </div>

      <div className="relative z-10 flex h-screen w-full flex-col justify-between pt-20 pb-8 lg:hidden overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Dither {...mobileDitherConfig} />
        </div>
        
        <div className="absolute inset-0 z-[1] bg-black/70" />
        
        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-4 sm:px-6">
          <HeroNewHeader />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6">
          <HeroNewDescription />
        </div>
      </div>
    </div>
  );
}

