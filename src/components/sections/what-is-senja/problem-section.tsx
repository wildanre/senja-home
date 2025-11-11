"use client";

import { SlideIn } from "@/components/ui/motion";
import Accordion from "@/components/ui/accordion";
import ContentItem from "./content-item";
import { problems } from "./whatIsSenjaData";

export default function ProblemSection() {
  return (
    <SlideIn direction="left" distance={40} duration={0.6} delay={0.2} amount={0.5} className="mb-12">
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
    </SlideIn>
  );
}

