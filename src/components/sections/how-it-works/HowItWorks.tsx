"use client";

import Carousel from "@/components/ui/carousel";
import { SlideIn } from "@/components/ui/motion";
import { slidesData } from "./howItWorksData";
import HowItWorksHeader from "./HowItWorksHeader";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mt-10 lg:mt-20 mx-auto">
        {/* Title with Scale & Rotate Animation */}
        <HowItWorksHeader />

        {/* Carousel with Staggered Fade */}
        <SlideIn
          direction="up"
          distance={50}
          duration={0.6}
          delay={0.2}
          amount={0.3}
          className="relative overflow-hidden w-full h-full pb-20"
        >
          <Carousel slides={slidesData} />
        </SlideIn>
      </div>
    </section>
  );
}
