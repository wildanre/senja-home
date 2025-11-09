"use client";

import Image from "next/image";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { networks } from "./supportsData";

interface OrbitingNetworksProps {
  radius: number;
  iconSize: number;
}

export default function OrbitingNetworks({ radius, iconSize }: OrbitingNetworksProps) {
  return (
    <div className="absolute inset-0">
      <OrbitingCircles radius={radius} duration={30} reverse iconSize={iconSize}>
        {networks.map((network) => (
          <div key={network.alt} className="flex h-20 w-20 items-center justify-center">
            <Image
              src={network.src}
              alt={network.alt}
              width={network.size}
              height={network.size}
              className="rounded-full"
            />
          </div>
        ))}
      </OrbitingCircles>
    </div>
  );
}

