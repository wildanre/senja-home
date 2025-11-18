"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingPartners } from "@/components/ui/infinite-moving-partners";
import { partners } from "./partnerData";
import TypingAnimation from "@/components/ui/typing-animation";

export default function Partner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("main-scroll");
      const partnersSection = document.getElementById("partners");

      if (scrollContainer && partnersSection) {
        const scrollTop = scrollContainer.scrollTop;
        const partnersSectionTop = partnersSection.offsetTop;
        const windowHeight = window.innerHeight;

        // Trigger typing animation when section enters viewport
        if (scrollTop + windowHeight * 0.7 >= partnersSectionTop && !isVisible) {
          setIsVisible(true);
        }
      }
    };

    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, [isVisible]);

  return (
    <section id="partners" className="py-0 px-2 sm:px-4 overflow-hidden">
      <div className="w-full pr-2 sm:pr-8">
        {/* Integrated with text */}
        <div className="text-center mb-8">
          <div className="text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80 font-normal">
            {isVisible && (
              <TypingAnimation
                text="Integrated with"
                delay={0.1}
                speed={0.08}
                showCursor={false}
                as="span"
              />
            )}
          </div>
        </div>

        <InfiniteMovingPartners
          items={partners}
          direction="right"
          speed="slow"
        />
      </div>
    </section>
  );
}
