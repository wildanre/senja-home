"use client";

import { SlideIn } from "@/components/ui/motion";
import Accordion from "@/components/ui/Accordion";
import ContentItem from "./ContentItem";
import { solutions } from "./whatIsSenjaData";

export default function SolutionSection() {
  return (
    <SlideIn direction="right" distance={40} duration={0.6} delay={0.3} amount={0.5}>
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
    </SlideIn>
  );
}

