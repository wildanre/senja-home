"use client";

import { WhyHeader } from "./why-header";
import { WhyCard } from "./why-card";
import { whyFeatures } from "./why-data";

export const WhySection = () => {
  return (
    <section className="w-full min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <WhyHeader />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyFeatures.map((feature, index) => (
            <WhyCard key={feature.id} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
