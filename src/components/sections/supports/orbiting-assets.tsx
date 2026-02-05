"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/effects/orbiting-circles";
import { assets } from "./supportsData";

interface OrbitingAssetsProps {
  radius: number;
  iconSize: number;
}

export default function OrbitingAssets({ radius, iconSize }: OrbitingAssetsProps) {
  return (
    <div className="absolute inset-0">
      <OrbitingCircles radius={radius} duration={20} iconSize={iconSize}>
        {assets.map((asset) => (
          <div key={asset.alt} className="group relative flex h-16 w-16 items-center justify-center">
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.size}
              height={asset.size}
              className="rounded-full transition-transform duration-200 group-hover:scale-110"
              loading="lazy"
            />
            {/* Tooltip Bubble */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-50">
              <div className="bg-white text-black px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium">
                {asset.alt}
                {/* Arrow pointing down */}
                <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-white"></div>
              </div>
            </div>
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}

