import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { timelineData } from "./timelineData";
import { formatTimelineForStickyScroll } from "./timelineUtils";
import TimelineHeader from "./TimelineHeader";

export default function TimelineSection() {
  const stickyScrollContent = formatTimelineForStickyScroll(timelineData);

  return (
    <section id="roadmap" className="relative py-20 px-4">
      <div className="max-w-7xl mt-10 lg:mt-20 mx-auto">
        <TimelineHeader />
        <StickyScroll content={stickyScrollContent} />
      </div>
    </section>
  );
}