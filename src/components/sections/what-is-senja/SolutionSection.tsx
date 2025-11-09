"use client";

import { motion } from "motion/react";
import Accordion from "@/components/ui/Accordion";
import ContentItem from "./ContentItem";
import { solutions } from "./whatIsSenjaData";

export default function SolutionSection() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <Accordion
        title="Solution"
        titleClassName="text-3xl md:text-4xl text-white dark:text-white font-bold"
      >
        <div className="space-y-6">
          {solutions.map((solution, index) => (
            <ContentItem
              key={index}
              title={solution.title}
              description={solution.description}
            />
          ))}
        </div>
      </Accordion>
    </motion.div>
  );
}

