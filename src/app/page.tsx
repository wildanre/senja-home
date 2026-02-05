"use client";

import Hero from "@/components/sections/hero/hero";
import ScrollAnimationWrapper from "@/components/ui/animate/scroll-animation-wrapper";
import { AnimatedDitherBackground } from "@/components/ui/background/animated-dither-background";
import { AnimatedDivider } from "@/components/ui/layout/animated-divider";
import StickyBottomText from "@/components/sections/overview/sticky-bottom-text";
import LoadingPage from "@/components/ui/loading/loading-page";
import { useScrollTransition } from "@/hooks/useScrollTransition";
import dynamic from "next/dynamic";

const Overview = dynamic(
  () => import("@/components/sections/overview/what-is-senja"),
);
const PoweredBySenja = dynamic(
  () => import("@/components/sections/chain-orbit/powered-by-senja"),
);
const WhySection = dynamic(() =>
  import("@/components/sections/why/why-section").then((mod) => mod.WhySection),
);
const Partners = dynamic(
  () => import("@/components/sections/partners/partners"),
);
const Footer = dynamic(() => import("@/components/sections/footer"));
import { motion } from "motion/react";
import { useState, useEffect, useLayoutEffect } from "react";

export default function Home() {
  const scrollProgress = useScrollTransition();
  const [isMobile, setIsMobile] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const useIsomorphicLayoutEffect =
    typeof window !== "undefined" ? useLayoutEffect : useEffect;

  useIsomorphicLayoutEffect(() => {
    const hasSeenSplash = sessionStorage.getItem("hasSeenSplash");

    if (hasSeenSplash) {
      setIsLoading(false);
      return;
    }

    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("hasSeenSplash", "true");
    }, 2900);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(loadingTimer);
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

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Senja Finance",
    description:
      "Permissionless stablecoin lending and borrowing protocol built on Kaia ecosystem with cross-chain liquidity aggregation",
    url: "https://senja.finance",
    logo: "https://senja.finance/senja-logo.png",
    foundingDate: "2026",
    sameAs: ["https://senja.gitbook.io/senja-docs"],
    offers: {
      "@type": "Service",
      name: "DeFi Lending and Borrowing",
      description:
        "Cross-chain lending and borrowing protocol with isolated pools and LayerZero integration",
      provider: {
        "@type": "Organization",
        name: "Senja Finance",
      },
    },
    areaServed: "Global",
    serviceType: "DeFi Protocol",
    category: "Financial Technology",
  };

  return (
    <>
      {isLoading && <LoadingPage fadeOut={fadeOut} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative h-screen w-full overflow-hidden">
        <AnimatedDitherBackground
          scrollProgress={scrollProgress}
          leftPageWidth={leftPageWidth}
        />

        {!isMobile && <AnimatedDivider scrollProgress={scrollProgress} />}

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
                >
                  <Overview />
                </section>

                <section
                  id="powered-by-senja"
                  className="min-h-[80vh] lg:min-h-screen flex items-center justify-center"
                >
                  <div className="w-full">
                    <PoweredBySenja />
                  </div>
                </section>

                <section
                  id="why"
                  className="min-h-screen flex items-center justify-center"
                >
                  <ScrollAnimationWrapper direction="up" delay={0.2}>
                    <WhySection />
                  </ScrollAnimationWrapper>
                </section>

                <section
                  id="partners"
                  className="flex items-center justify-center"
                >
                  <ScrollAnimationWrapper direction="up" delay={0.2}>
                    <Partners />
                  </ScrollAnimationWrapper>
                </section>

                <section id="footer" className="w-full">
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

        <StickyBottomText />

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
