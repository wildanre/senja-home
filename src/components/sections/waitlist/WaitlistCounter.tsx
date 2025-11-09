"use client";

import { motion } from "motion/react";
import CountUp from "../../ui/count-up";

interface WaitlistCounterProps {
  count: number;
}

export default function WaitlistCounter({ count }: WaitlistCounterProps) {
  return (
    <motion.div
      className="text-center md:text-left space-y-6"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="flex items-center justify-center md:justify-start gap-2">
          <CountUp
            value={count}
            delay={0.5}
            className="text-6xl md:text-7xl font-bold text-gray-100 dark:text-gray-100"
          />
        </div>
        <p className="mt-5 text-base lg:text-xl font-semibold text-white/90 dark:text-[#d0dce6] mb-4">
          Users on Waitlist
        </p>
      </motion.div>
    </motion.div>
  );
}

