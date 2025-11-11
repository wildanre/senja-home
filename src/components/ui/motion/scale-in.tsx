"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  initialScale?: number;
  once?: boolean;
  amount?: number;
}

export default function ScaleIn({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  initialScale = 0.9,
  once = false,
  amount = 0.3,
}: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ scale: initialScale, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

