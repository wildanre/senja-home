"use client";

import React from "react";
import { ScaleIn } from "@/components/ui/motion";
import SupportsHeader from "./SupportsHeader";
import OrbitingAssets from "./OrbitingAssets";
import OrbitingNetworks from "./OrbitingNetworks";
import useResponsiveOrbit from "./useResponsiveOrbit";

export default function Supports() {
  const { outerRadius, innerRadius, iconSize } = useResponsiveOrbit();

  return (
    <section id="supports" className="py-20 px-4">
      <div className="max-w-7xl mt-10 lg:mt-20 mx-auto">
        <SupportsHeader />

        <ScaleIn initialScale={0.85} duration={0.8} delay={0.3} amount={0.3} className="flex justify-center mb-8">
          <div className="relative h-[600px] w-full max-w-[700px] overflow-visible flex items-center justify-center">
            {/* Inner orbit - Assets */}
            <OrbitingAssets radius={innerRadius} iconSize={iconSize} />

            {/* Outer orbit - Networks */}
            <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />
          </div>
        </ScaleIn>
      </div>
    </section>
  );
}
