"use client";

import Hero from "@/features/landing/components/hero";
import ScrollAnimationWrapper from "@/components/ui/animate/scroll-animation-wrapper";
import { AnimatedDitherBackground } from "@/components/ui/background/animated-dither-background";
import { AnimatedDivider } from "@/components/ui/layout/animated-divider";
import dynamic from "next/dynamic";
import StickyBottomText from "@/features/landing/components/what-is-senja/sticky-bottom-text";
import { useScrollTransition } from "@/features/landing/hooks/use-scroll-transition";

const Overview = dynamic(
  () => import("@/features/landing/components/what-is-senja"),
);
const PoweredBySenja = dynamic(
  () => import("@/features/landing/components/powered-by-senja/section"),
);
const WhySection = dynamic(() => import("@/features/landing/components/why"));
const Partners = dynamic(
  () => import("@/features/landing/components/partners"),
);
import { motion } from "motion/react";
import { useState, useEffect } from "react";
const Footer = dynamic(() => import("@/features/landing/components/footer"));

export default function Home() {
  const scrollProgress = useScrollTransition();
  const [isMobile, setIsMobile] = useState(false);
  const [showEnhancements, setShowEnhancements] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let idleCallbackId: number | undefined;
    const browserWindow = globalThis as typeof globalThis & {
      requestIdleCallback?: (
        callback: IdleRequestCallback,
        options?: IdleRequestOptions
      ) => number;
      cancelIdleCallback?: (handle: number) => void;
    };

    const enableEnhancements = () => {
      setShowEnhancements(true);
    };

    if (typeof browserWindow.requestIdleCallback === "function") {
      idleCallbackId = browserWindow.requestIdleCallback(enableEnhancements, {
        timeout: 1200,
      });
    } else {
      timeoutId = globalThis.setTimeout(enableEnhancements, 250);
    }

    return () => {
      if (
        idleCallbackId !== undefined &&
        typeof browserWindow.cancelIdleCallback === "function"
      ) {
        browserWindow.cancelIdleCallback(idleCallbackId);
      }
      if (timeoutId !== undefined) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, []);

  const getLeftPageWidth = () => {
    if (isMobile) return 100;
    if (scrollProgress < 0.5) return 50;
    if (scrollProgress >= 0.8) return 100;
    // Smooth interpolation between 0.5 and 0.8
    const progress = (scrollProgress - 0.5) / (0.8 - 0.5);
    return 50 + progress * 50;
  };

  const leftPageWidth = getLeftPageWidth();
  const rightPageWidth = 100 - leftPageWidth;

  return (
    <>
      <div className="relative h-screen w-full overflow-hidden">
        {showEnhancements && (
          <AnimatedDitherBackground
            scrollProgress={scrollProgress}
            leftPageWidth={leftPageWidth}
          />
        )}

        {!isMobile && showEnhancements && (
          <AnimatedDivider scrollProgress={scrollProgress} />
        )}

        <main
          className="relative h-screen w-full lg:overflow-hidden"
          style={{ zIndex: 10 }}
        >
          <div
            className="h-screen w-full overflow-y-auto scrollbar-right-edge"
            id="main-scroll"
          >
            <div className="flex min-h-screen flex-col lg:flex-row">
              <motion.div
                className="relative  bg-black overflow-hidden "
                style={{
                  width: isMobile
                    ? "100%"
                    : leftPageWidth >= 100
                      ? "100%"
                      : `${leftPageWidth}%`,
                  zIndex: 20,
                  isolation: "isolate",
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >
                <section id="hero" className="min-h-screen lg:min-h-screen">
                  <Hero />
                </section>

                <section
                  id="what-is-senja"
                  className="min-h-screen lg:min-h-screen"
                  style={{
                    contentVisibility: "auto",
                    containIntrinsicSize: "100vh",
                  }}
                >
                  <Overview />
                </section>

                <section
                  id="powered-by-senja"
                  className="min-h-[80vh] lg:min-h-screen flex items-center justify-center"
                  style={{
                    contentVisibility: "auto",
                    containIntrinsicSize: "100vh",
                  }}
                >
                  <div className="w-full">
                    <PoweredBySenja />
                  </div>
                </section>

                <section
                  id="why"
                  className="min-h-screen flex items-center justify-center"
                  style={{
                    contentVisibility: "auto",
                    containIntrinsicSize: "100vh",
                  }}
                >
                  <ScrollAnimationWrapper direction="up" delay={0.2}>
                    <WhySection />
                  </ScrollAnimationWrapper>
                </section>

                <section
                  id="partners"
                  className="flex items-center justify-center"
                  style={{
                    contentVisibility: "auto",
                    containIntrinsicSize: "60vh",
                  }}
                >
                  <ScrollAnimationWrapper direction="up" delay={0.2}>
                    <Partners />
                  </ScrollAnimationWrapper>
                </section>

                <section
                  id="footer"
                  className="w-full"
                  style={{
                    contentVisibility: "auto",
                    containIntrinsicSize: "40vh",
                  }}
                >
                  <Footer />
                </section>
              </motion.div>
              <div
                className="hidden lg:block relative bg-transparent"
                style={{
                  width: `${rightPageWidth}%`,
                  flexShrink: 0,
                }}
              />
            </div>
          </div>
        </main>

        {showEnhancements && <StickyBottomText />}

        <style jsx global>{`
          .scrollbar-right-edge::-webkit-scrollbar {
            width: 8px;
          }

          .scrollbar-right-edge::-webkit-scrollbar-track {
            background: transparent;
          }

          .scrollbar-right-edge::-webkit-scrollbar-thumb {
            background: rgba(231, 182, 124, 0.2);
            border-radius: 4px;
          }

          .scrollbar-right-edge::-webkit-scrollbar-thumb:hover {
            background: rgba(231, 182, 124, 0.3);
          }

          /* For Firefox */
          .scrollbar-right-edge {
            scrollbar-width: thin;
            scrollbar-color: rgba(231, 182, 124, 0.2) transparent;
          }
        `}</style>
      </div>
    </>
  );
}
