"use client";

import React from "react";
import { motion } from "motion/react";
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

        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 70, damping: 20 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative h-[600px] w-full max-w-[700px] overflow-visible flex items-center justify-center">
            {/* Inner orbit - Assets */}
            <OrbitingAssets radius={innerRadius} iconSize={iconSize} />

            {/* Outer orbit - Networks */}
            <OrbitingNetworks radius={outerRadius} iconSize={iconSize} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
