"use client";

import { useEffect, useState } from "react";
import AnimatedTextVariants from "@/components/ui/text/animated-text-variants";
import TypingAnimation from "@/components/ui/text/typing-animation";
import { heroContent } from "./hero-data";

export default function StickyDescription() {
  const [isChanged, setIsChanged] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("main-scroll");
      const targetSection = document.getElementById("what-is-senja");

      if (scrollContainer && targetSection) {
        const scrollTop = scrollContainer.scrollTop;
        const targetTop = targetSection.offsetTop;
        const windowHeight = window.innerHeight;

        // Change text when target section comes into view
        if (scrollTop + windowHeight / 2 >= targetTop) {
          setIsChanged(true);
        } else {
          setIsChanged(false);
        }
      }
    };

    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <div className="fixed bottom-32 left-20 xl:left-14 w-full max-w-md z-30">
      <div className="relative">
        {/* First text - with typing animation */}
        <div
          className={`transition-opacity duration-700 ${
            isChanged ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-senja-primary/80">
            <TypingAnimation
              text={heroContent.incubatedBy}
              delay={1.0}
              speed={0.06}
              showCursor={false}
              as="span"
            />
          </div>
          <AnimatedTextVariants
            text={heroContent.description}
            animationType="fadeUp"
            delay={1.2}
            stagger={0.04}
            duration={0.5}
            as="p"
            className="text-sm text-[#f2cba1]/80 sm:text-base"
          />
        </div>

        {/* Second text - fade in when changed */}
        <div
          className={`absolute top-0 left-0 transition-opacity duration-700 ${
            isChanged ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-senja-primary/80">
            <span>Cross-Chain by Design</span>
          </div>
          <p className="text-sm text-[#f2cba1]/80 sm:text-base leading-relaxed">
            Designed for seamless cross-chain lending flows, delivering speed,
            flexibility, and dependable capital efficiency.
          </p>
        </div>
      </div>
    </div>
  );
}
