"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

export const WhyHeader = () => {
  const headerRef = useRef(null);
  const isInView = useInView(headerRef, { amount: 0.3 });

  return (
    <div ref={headerRef} className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left: Title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-hero text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-[#e7b67c] leading-tight relative"
        style={{ top: '40px' }}
      >
        What cross-chain lending has always needed but never had
      </motion.h2>

      {/* Right: Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="space-y-6 relative"
        style={{ top: '60px' }}
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          className="text-[#f2cba1]/80 text-base md:text-lg leading-relaxed"
        >
          Lending protocols today are constrained by fragmented liquidity, isolated collateral, and slow, complex cross-chain flows.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          className="text-[#f2cba1]/80 text-base md:text-lg leading-relaxed"
        >
          Senja is purpose-built for permissionless cross-chain borrowing, powered by LayerZero, so users can tap into isolated pools, trade collateral freely, and unlock greater capital efficiency without being limited by chain boundaries.
        </motion.p>
      </motion.div>
    </div>
  );
};
