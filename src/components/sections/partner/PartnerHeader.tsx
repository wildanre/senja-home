"use client";

import { motion } from "motion/react";

export default function PartnerHeader() {
  return (
    <div className="text-center mb-16">
      <motion.h2
        className="text-2xl md:text-4xl font-bold mb-6 text-white dark:text-[#e8f0f7]"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
          type: "spring",
          stiffness: 100
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Partnership
      </motion.h2>
      <motion.p
        className="text-lg md:text-xl text-white/90 dark:text-[#d0dce6] max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: 0.15,
          ease: "easeOut"
        }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Working together with leading protocols and communities to build the future of DeFi
      </motion.p>
    </div>
  );
}

