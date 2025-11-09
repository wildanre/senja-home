"use client";

import { motion } from "motion/react";

export default function SupportsHeader() {
  return (
    <motion.div
      className="text-center mb-4 lg:mb-12"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.h2
        className="text-4xl md:text-5xl font-bold mb-6 text-gray-100 dark:text-[#e8f0f7]"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 80 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Supported Assets & Networks
      </motion.h2>

      <motion.p
        className="text-lg md:text-xl text-gray-100/80 dark:text-[#d0dce6] max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        Multi-chain support across leading blockchains and top digital assets
      </motion.p>
    </motion.div>
  );
}

