"use client";

import { useEffect, useState } from "react";
import TypingAnimation from "@/components/ui/typing-animation";
import AnimatedTextVariants from "@/components/ui/animated-text-variants";

export default function StickyBottomText() {
  const [textState, setTextState] = useState<"first" | "second" | "hidden">("first");

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("main-scroll");
      const whatIsSenjaSection = document.getElementById("what-is-senja");
      const poweredBySection = document.getElementById("powered-by-senja");

      if (scrollContainer && whatIsSenjaSection && poweredBySection) {
        const scrollTop = scrollContainer.scrollTop;
        const whatIsSenjaTop = whatIsSenjaSection.offsetTop;
        const poweredByTop = poweredBySection.offsetTop;
        const windowHeight = window.innerHeight;

        // Determine which state based on scroll position
        // Hide early when entering "Powered by Senja" section (same timing as first->second transition)
        if (scrollTop + windowHeight / 2 >= poweredByTop) {
          // Hide smoothly right when "Powered by Senja" section enters viewport
          setTextState("hidden");
        } else if (scrollTop + windowHeight / 2 >= whatIsSenjaTop) {
          // Show second text in what-is-senja section
          setTextState("second");
        } else {
          // Show first text in hero section
          setTextState("first");
        }
      }
    };

    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
      return () => scrollContainer.removeEventListener("scroll", handleScroll);
    }
  }, []);

  return (
    <>
      {/* Desktop Version */}
      <div className={`hidden lg:block fixed bottom-7 left-13 w-full max-w-md z-30 transition-all duration-1000 ease-out ${
        textState === "hidden" ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      }`}>
        <div className="relative">
          {textState !== "hidden" && (
            <>
              {/* First text - incubated by Kaia Chain */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  textState === "second" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
                  <TypingAnimation
                    text="incubated by Kaia Chain"
                    delay={0.5}
                    speed={0.06}
                    showCursor={false}
                    as="span"
                  />
                </div>
                <AnimatedTextVariants
                  text="Permissionless by design, Senja unites cross-chain lending, borrowing, and collateral trading without boundaries."
                  animationType="fadeUp"
                  delay={0.8}
                  stagger={0.02}
                  duration={0.5}
                  as="p"
                  className="text-sm text-[#f2cba1]/80 sm:text-base leading-relaxed"
                />
              </div>

              {/* Second text - Multifaceted and borderless */}
              <div
                className={`absolute top-0 left-0 transition-all duration-1000 ease-out ${
                  textState === "second" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {textState === "second" && (
                  <>
                    <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
                      <TypingAnimation
                        text="Multifaceted and borderless"
                        delay={0.2}
                        speed={0.06}
                        showCursor={false}
                        as="span"
                      />
                    </div>
                    <AnimatedTextVariants
                      text="Designed to meet the needs of modern payment processing, enhancing speed, efficiency, and reliability."
                      animationType="fadeUp"
                      delay={0.5}
                      stagger={0.02}
                      duration={0.5}
                      as="p"
                      className="text-sm text-[#f2cba1]/80 sm:text-base leading-relaxed"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Mobile Version */}
      <div className={`lg:hidden fixed bottom-6 left-4 right-4 w-auto max-w-md z-30 transition-all duration-1000 ease-out ${
        textState === "hidden" ? "opacity-0 translate-y-4 pointer-events-none" : "opacity-100 translate-y-0"
      }`}>
        <div className="relative">
          {textState !== "hidden" && (
            <>
              {/* First text - incubated by Kaia Chain */}
              <div
                className={`transition-all duration-1000 ease-out ${
                  textState === "second" ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"
                }`}
              >
                <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
                  <TypingAnimation
                    text="incubated by Kaia Chain"
                    delay={0.5}
                    speed={0.06}
                    showCursor={false}
                    as="span"
                  />
                </div>
                <AnimatedTextVariants
                  text="Permissionless by design, Senja unites cross-chain lending, borrowing, and collateral trading without boundaries."
                  animationType="fadeUp"
                  delay={0.8}
                  stagger={0.02}
                  duration={0.5}
                  as="p"
                  className="text-sm text-[#f2cba1]/80 sm:text-base leading-relaxed"
                />
              </div>

              {/* Second text - Multifaceted and borderless */}
              <div
                className={`absolute top-0 left-0 transition-all duration-1000 ease-out ${
                  textState === "second" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                }`}
              >
                {textState === "second" && (
                  <>
                    <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
                      <TypingAnimation
                        text="Multifaceted and borderless"
                        delay={0.2}
                        speed={0.06}
                        showCursor={false}
                        as="span"
                      />
                    </div>
                    <AnimatedTextVariants
                      text="Designed to meet the needs of modern payment processing, enhancing speed, efficiency, and reliability."
                      animationType="fadeUp"
                      delay={0.5}
                      stagger={0.02}
                      duration={0.5}
                      as="p"
                      className="text-sm text-[#f2cba1]/80 sm:text-base leading-relaxed"
                    />
                  </>
                )}
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
