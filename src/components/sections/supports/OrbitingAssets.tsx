"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
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
          <div key={asset.alt} className="flex h-16 w-16 items-center justify-center">
            <Image
              src={asset.src}
              alt={asset.alt}
              width={asset.size}
              height={asset.size}
              className="rounded-full"
              loading="lazy"
            />
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}

