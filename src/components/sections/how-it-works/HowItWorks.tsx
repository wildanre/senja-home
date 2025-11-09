"use client";

import Carousel from "@/components/ui/carousel";
import { motion } from "motion/react";
import { slidesData } from "./howItWorksData";
import HowItWorksHeader from "./HowItWorksHeader";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mt-10 lg:mt-20 mx-auto">
        {/* Title with Scale & Rotate Animation */}
        <HowItWorksHeader />

        {/* Carousel with Staggered Fade */}
        <motion.div
          className="relative overflow-hidden w-full h-full pb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Carousel slides={slidesData} />
        </motion.div>
      </div>
    </section>
  );
}
