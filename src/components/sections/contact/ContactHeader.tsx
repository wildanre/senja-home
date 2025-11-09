"use client";

import { motion } from "motion/react";

export default function ContactHeader() {
  return (
    <motion.h2
      className="text-4xl md:text-5xl font-bold text-center mb-16 text-white dark:text-[#e8f0f7]"
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      Get in Touch
    </motion.h2>
  );
}

