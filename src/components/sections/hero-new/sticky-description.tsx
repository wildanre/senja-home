"use client";

import { useEffect, useState } from "react";
import AnimatedTextVariants from "@/components/ui/animated-text-variants";
import TypingAnimation from "@/components/ui/typing-animation";
import { heroContent } from "./heroNewData";

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
    <div className="fixed bottom-[8rem] left-[5rem] xl:left-[3.5rem] w-full max-w-md z-30">
      <div className="relative">
        {/* First text - with typing animation */}
        <div
          className={`transition-opacity duration-700 ${
            isChanged ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        >
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
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
          <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
            <span>Multifaceted and borderless</span>
          </div>
          <p className="text-sm text-[#f2cba1]/80 sm:text-base leading-relaxed">
            Designed to meet the needs of modern payment processing, enhancing speed, efficiency, and reliability.
          </p>
        </div>
      </div>
    </div>
  );
}
