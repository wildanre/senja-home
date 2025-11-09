"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export default function FadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  once = false,
  amount = 0.3,
}: FadeInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

