"use client";

import React from "react";
import { InfiniteMovingPartners } from "@/components/ui/infinite-moving-partners";
import { partners } from "./partnerData";

export default function Partner() {
  return (
    <section id="partners" className="py-0 px-4 overflow-hidden">
      <div className="w-full pr-8">
        <InfiniteMovingPartners
          items={partners}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
