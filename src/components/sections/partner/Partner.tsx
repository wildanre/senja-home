"use client";

import React from "react";
import { ScaleIn } from "@/components/ui/motion";
import { InfiniteMovingPartners } from "@/components/ui/infinite-moving-partners";
import { partners } from "./partnerData";
import PartnerHeader from "./partner-header";

export default function Partner() {
  return (
    <section id="partners" className="py-0 px-4">
      <div className="max-w-9xl mx-auto">
        <InfiniteMovingPartners
          items={partners}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
