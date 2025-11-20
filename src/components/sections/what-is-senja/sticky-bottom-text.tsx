"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { TypingAnimation, AnimatedTextVariants } from "@/components/ui/text";

export default function StickyBottomText() {
  const [textState, setTextState] = useState<"first" | "second">("first");
  const [hideOpacity, setHideOpacity] = useState(1);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    console.log("[StickyBottomText] mounted");
    const scrollContainer = document.getElementById("main-scroll");
    if (!scrollContainer) {
      console.warn("[StickyBottomText] #main-scroll not found");
      return;
    }

    const whatIsSenjaSection = document.getElementById("what-is-senja");
    if (!whatIsSenjaSection) {
      console.warn("[StickyBottomText] #what-is-senja not found");
    }

    const poweredByHeading = document.getElementById("powered-by-senja-heading");
    if (!poweredByHeading) {
      console.warn("[StickyBottomText] #powered-by-senja-heading not found — will keep text visible");
    }

    const handleScroll = () => {
      const scrollTop = scrollContainer.scrollTop;
      const windowHeight = window.innerHeight;
      const mobileNow = window.innerWidth < 1024;

      if (mobileNow) {
        const heroSection = document.getElementById("hero");
        const poweredBySection = document.getElementById("powered-by-senja");
        
        if (whatIsSenjaSection) {
          const whatIsSenjaTop = whatIsSenjaSection.offsetTop;
          const whatIsSenjaBottom = whatIsSenjaTop + whatIsSenjaSection.offsetHeight;

          if (scrollTop < whatIsSenjaTop - windowHeight * 0.3) {
            setTextState("first");
            setHideOpacity(1);
          } else if (scrollTop < whatIsSenjaBottom - windowHeight * 0.3) {
            setTextState("second");
            setHideOpacity(1);
          } else {
            setHideOpacity(0);
          }
        } else {
          setTextState("first");
          setHideOpacity(1);
        }
      } else {
        if (!poweredByHeading) {
          setHideOpacity(1);
        } else {
          const headingRect = poweredByHeading.getBoundingClientRect();
            const poweredByHeadingTop = scrollTop + headingRect.top;
            const fadeStartPoint = poweredByHeadingTop - windowHeight;
            const fadeEndPoint = poweredByHeadingTop - windowHeight * 0.7;
            if (scrollTop >= fadeEndPoint) {
              setHideOpacity(0);
            } else if (scrollTop >= fadeStartPoint) {
              const fadeProgress = (scrollTop - fadeStartPoint) / (fadeEndPoint - fadeStartPoint);
              setHideOpacity(1 - fadeProgress);
            } else {
              setHideOpacity(1);
            }
        }
        if (whatIsSenjaSection) {
          const whatIsSenjaTop = whatIsSenjaSection.offsetTop;
          if (scrollTop + windowHeight / 2 >= whatIsSenjaTop) {
            setTextState("second");
          } else {
            setTextState("first");
          }
        }
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <>
      <div
        className="hidden lg:block fixed bottom-7 left-13 w-full max-w-md transition-all duration-300 ease-out"
        style={{
          opacity: hideOpacity,
          transform: `translateY(${(1 - hideOpacity) * 16}px)`,
          pointerEvents: hideOpacity === 0 ? 'none' : 'auto',
          zIndex: 50
        }}
      >
        <div className="relative">
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

      {mounted && isMobile && createPortal(
        <div
          className="fixed bottom-4 left-4 right-4 w-auto max-w-xl transition-opacity duration-300"
          style={{
            opacity: hideOpacity,
            zIndex: 2000,
            pointerEvents: hideOpacity === 0 ? 'none' : 'auto'
          }}
        >
          {hideOpacity > 0 && (
            <div className="relative">
              <div
                className={`transition-all duration-700 ease-out ${
                  textState === "second" ? "opacity-0 absolute inset-0" : "opacity-100 relative"
                }`}
              >
                <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-[#e7b67c]/80">
                  <TypingAnimation
                    text="incubated by Kaia Chain"
                    delay={0.2}
                    speed={0.06}
                    showCursor={false}
                    as="span"
                  />
                </div>
                <AnimatedTextVariants
                  text="Permissionless by design, Senja unites cross-chain lending, borrowing, and collateral trading without boundaries."
                  animationType="fadeUp"
                  delay={0.4}
                  stagger={0.02}
                  duration={0.5}
                  as="p"
                  className="text-[11px] leading-relaxed text-[#f2cba1]/85"
                />
              </div>

              {/* Second text - Cross-Chain by Design */}
              <div
                className={`transition-all duration-700 ease-out ${
                  textState === "second" ? "opacity-100 relative" : "opacity-0 absolute inset-0"
                }`}
              >
                {textState === "second" && (
                  <>
                    <div className="mb-2 text-[10px] uppercase tracking-[0.35em] text-[#e7b67c]/80">
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
                      delay={0.4}
                      stagger={0.02}
                      duration={0.5}
                      as="p"
                      className="text-[11px] leading-relaxed text-[#f2cba1]/85"
                    />
                  </>
                )}
              </div>
            </div>
          )}
        </div>,
        document.body
      )}
    </>
  );
}
