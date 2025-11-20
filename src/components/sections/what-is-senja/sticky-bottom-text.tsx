"use client";

import { useEffect, useState } from "react";
import { TypingAnimation, AnimatedTextVariants } from "@/components/ui/text";

export default function StickyBottomText() {
  const [textState, setTextState] = useState<"first" | "second">("first");
  const [hideOpacity, setHideOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("main-scroll");
      const whatIsSenjaSection = document.getElementById("what-is-senja");
      const poweredByHeading = document.getElementById("powered-by-senja-heading");

      if (scrollContainer && whatIsSenjaSection && poweredByHeading) {
        const scrollTop = scrollContainer.scrollTop;
        const whatIsSenjaTop = whatIsSenjaSection.offsetTop;
        const windowHeight = window.innerHeight;

        // Get the absolute position of the heading using getBoundingClientRect
        const headingRect = poweredByHeading.getBoundingClientRect();
        const poweredByHeadingTop = scrollTop + headingRect.top;

        // Calculate dynamic opacity for hiding transition
        // Start fading out when heading "Powered by Senja" is approaching viewport
        // Complete fade out when heading is visible in viewport
        const fadeStartPoint = poweredByHeadingTop - windowHeight;
        const fadeEndPoint = poweredByHeadingTop - windowHeight * 0.7;

        if (scrollTop >= fadeEndPoint) {
          // Fully hidden
          setHideOpacity(0);
        } else if (scrollTop >= fadeStartPoint) {
          // Gradual fade out based on scroll position
          const fadeProgress = (scrollTop - fadeStartPoint) / (fadeEndPoint - fadeStartPoint);
          setHideOpacity(1 - fadeProgress);
        } else {
          // Fully visible
          setHideOpacity(1);
        }

        // Determine text state based on scroll position
        if (scrollTop + windowHeight / 2 >= whatIsSenjaTop) {
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
      <div
        className="hidden lg:block fixed bottom-7 left-13 w-full max-w-md z-30 transition-all duration-300 ease-out"
        style={{
          opacity: hideOpacity,
          transform: `translateY(${(1 - hideOpacity) * 16}px)`,
          pointerEvents: hideOpacity === 0 ? 'none' : 'auto'
        }}
      >
        <div className="relative">
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

          {/* Second text - Cross-Chain by Design */}
          <div
            className={`absolute top-0 left-0 transition-all duration-1000 ease-out ${
              textState === "second" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {textState === "second" && (
              <>
                <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
                  <TypingAnimation
                    text="Cross-Chain by Design"
                    delay={0.2}
                    speed={0.06}
                    showCursor={false}
                    as="span"
                  />
                </div>
                <AnimatedTextVariants
                  text="Designed for seamless cross-chain lending flows, delivering speed, flexibility, and dependable capital efficiency."
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
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className="lg:hidden fixed bottom-6 left-4 right-4 w-auto max-w-md z-30 transition-all duration-300 ease-out"
        style={{
          opacity: hideOpacity,
          transform: `translateY(${(1 - hideOpacity) * 16}px)`,
          pointerEvents: hideOpacity === 0 ? 'none' : 'auto'
        }}
      >
        <div className="relative">
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
              className="text-sm text-[#f2cba1]/80 sm:text-base leading-relaxed -ml-2"
            />
          </div>

          {/* Second text - Cross-Chain by Design */}
          <div
            className={`absolute top-0 left-0 transition-all duration-1000 ease-out ${
              textState === "second" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
            }`}
          >
            {textState === "second" && (
              <>
                <div className="mb-4 text-xs uppercase tracking-[0.35em] text-[#e7b67c]/80">
                  <TypingAnimation
                    text="Cross-Chain by Design"
                    delay={0.2}
                    speed={0.06}
                    showCursor={false}
                    as="span"
                  />
                </div>
                <AnimatedTextVariants
                  text="Designed for seamless cross-chain lending flows, delivering speed, flexibility, and dependable capital efficiency."
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
        </div>
      </div>
    </>
  );
}
