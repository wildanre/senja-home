"use client";

import { motion } from "motion/react";
import WaitlistCounter from "./WaitlistCounter";
import WaitlistForm from "./WaitlistForm";

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className="relative  w-full overflow-hidden py-8 mb-10 px-4"
    >
      <div className="relative z-20 mt-10 lg:mt-20 mx-auto px-4 max-w-9xl">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center text-white dark:text-[#e8f0f7] mb-4 lg:mb-16 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Join the Waitlist
          </motion.h2>

          <div className="grid md:grid-cols-2 gap-4 lg:gap-12 items-center">
            <WaitlistCounter count={10472} />

            <WaitlistForm />
          </div>
        </div>

      </div>
    </section>
  );
}
