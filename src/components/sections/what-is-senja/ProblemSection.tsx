"use client";

import { motion } from "motion/react";
import Accordion from "@/components/ui/Accordion";
import ContentItem from "./ContentItem";
import { problems } from "./whatIsSenjaData";

export default function ProblemSection() {
  return (
    <motion.div
      className="mb-12"
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <Accordion
        title="Problem"
        titleClassName="text-3xl md:text-4xl text-white dark:text-white font-bold"
      >
        <div className="space-y-6">
          {problems.map((problem, index) => (
            <ContentItem
              key={index}
              title={problem.title}
              description={problem.description}
            />
          ))}
        </div>
      </Accordion>
    </motion.div>
  );
}

