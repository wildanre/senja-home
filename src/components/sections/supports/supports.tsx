"use client";

import React from "react";
import ScaleIn from "@/components/ui/motion/scale-in";
import OrbitingAssets from "./orbiting-assets";
import OrbitingNetworks from "./orbiting-networks";
import useResponsiveOrbit from "../../../hooks/useResponsiveOrbit";

export default function Supports() {
  const { outerRadius, innerRadius, iconSize } = useResponsiveOrbit();

  return (
    <section id="supports" className="py-20">
      <div className="max-w-8xl mt-10 lg:mt-20 mx-auto">

        <ScaleIn initialScale={0.85} duration={0.8} delay={0.3} amount={0.3} className="flex justify-center mb-8">
          <div className="relative h-[600px] w-full max-w-[700px] overflow-visible flex items-center justify-center">
            <OrbitingAssets radius={innerRadius} iconSize={iconSize} />
            <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
