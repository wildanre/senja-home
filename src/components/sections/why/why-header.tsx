import { motion } from "motion/react";

export const WhyHeader = () => {
  return (
    <div className="mb-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
      {/* Left: Title */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-hero text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-normal text-[#e7b67c] leading-tight relative"
        style={{ top: '40px' }}
      >
        What cross-chain lending has always needed but never had
      </motion.h2>

      {/* Right: Paragraphs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="space-y-6 relative"
        style={{ top: '60px' }}
      >
        <p className="text-[#f2cba1]/80 text-base md:text-lg leading-relaxed">
          Lending protocols today are constrained by fragmented liquidity, isolated collateral, and slow, complex cross-chain flows.
        </p>
        <p className="text-[#f2cba1]/80 text-base md:text-lg leading-relaxed">
          Senja is purpose-built for permissionless cross-chain borrowing, powered by LayerZero, so users can tap into isolated pools, trade collateral freely, and unlock greater capital efficiency without being limited by chain boundaries.
        </p>
      </motion.div>
    </div>
  );
};
