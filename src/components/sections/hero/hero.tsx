"use client";

import dynamic from "next/dynamic";
import HeroHeader from "./hero-header";
import HeroDescription from "./hero-description";
import { mobileDitherConfig } from "./hero-data";

const Dither = dynamic(() => import("@/components/ui/background/dither"), {
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-black" />,
});

export default function Hero() {
  return (
    <div className="relative h-full w-full bg-black text-senja-primary">
      {/* Desktop Layout - Content Only */}
      <div className="hidden lg:flex h-full w-full">
        <div className="flex flex-col items-start justify-center gap-10 pl-60 pr-12 py-28">
          <HeroHeader />
        </div>
      </div>

      <div className="relative z-10 flex h-screen w-full flex-col justify-between pt-20 pb-8 lg:hidden overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Dither {...mobileDitherConfig} />
        </div>

        <div className="absolute inset-0 z-1 bg-black/70" />

        <div className="relative z-10 flex w-full flex-col items-start gap-10 px-4 sm:px-6">
          <HeroHeader />
        </div>

        <div className="relative z-10 w-full px-4 sm:px-6">
          <HeroDescription />
        </div>
      </div>
    </div>
  );
}
