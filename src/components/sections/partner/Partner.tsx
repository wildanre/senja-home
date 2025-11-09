"use client";

import React from "react";
import { ScaleIn } from "@/components/ui/motion";
import { InfiniteMovingPartners } from "@/components/ui/infinite-moving-partners";
import { partners } from "./partnerData";
import PartnerHeader from "./PartnerHeader";

export default function Partner() {
  return (
    <section id="partners" className="py-0 px-4">
      <div className="max-w-9xl mx-auto">
        <PartnerHeader />

        <ScaleIn
          initialScale={0.9}
          duration={0.8}
          delay={0.3}
          amount={0.3}
          className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden"
        >
          <InfiniteMovingPartners
            items={partners}
            direction="right"
            speed="slow"
          />
        </ScaleIn>
      </div>
    </section>
  );
}
