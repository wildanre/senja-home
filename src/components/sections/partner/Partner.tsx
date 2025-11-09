"use client";

import React from "react";
import { motion } from "motion/react";
import { InfiniteMovingPartners } from "@/components/ui/infinite-moving-partners";
import { partners } from "./partnerData";
import PartnerHeader from "./PartnerHeader";

export default function Partner() {
  return (
    <section id="partners" className="py-20 px-4">
      <div className="max-w-9xl mx-auto">
        <PartnerHeader />

        <motion.div
          className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: "easeOut",
            type: "spring",
            stiffness: 80
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <InfiniteMovingPartners
            items={partners}
            direction="right"
            speed="slow"
          />
        </motion.div>
      </div>
    </section>
  );
}
