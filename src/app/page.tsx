"use client";

import HeroNew from "@/components/sections/hero";
import WhatIsSenja from "@/components/sections/what-is-senja";
import PoweredBySenja from "@/components/sections/chain-orbit/powered-by-senja";
import { WhySection } from "@/components/sections/why";
import { PartnersSection } from "@/components/sections/partners/partners-section";
import Footer from "@/components/sections/footer";
import { ScrollAnimationWrapper } from "@/components/ui/animate";
import { AnimatedDitherBackground } from "@/components/ui/background";
import { AnimatedDivider } from "@/components/ui/layout";
import StickyBottomText from "@/components/sections/what-is-senja/sticky-bottom-text";
import { LoadingPage } from "@/components/ui/loading";
import { useScrollTransition } from "@/hooks/useScrollTransition";
import { motion } from "motion/react";
import { useState, useEffect } from "react";

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
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    // Start slide-up animation at 2.2 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2200);

    // Remove loading page completely at 2.9 seconds (after slide-up completes)
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
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
    return 50 + (progress * 50);
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
    foundingDate: "2024",
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
      {/* Loading Page */}
      {isLoading && <LoadingPage fadeOut={fadeOut} />}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative h-screen w-full overflow-hidden">
        {/* Animated Dither Background - MUST be outside overflow-hidden container */}
        <AnimatedDitherBackground scrollProgress={scrollProgress} />

        {/* Animated Divider - follows left page edge (desktop only) */}
        {!isMobile && <AnimatedDivider scrollProgress={scrollProgress} />}

        <main className="relative h-screen w-full lg:overflow-hidden" style={{ zIndex: 10 }}>
          <div className="h-screen w-full overflow-y-auto scrollbar-right-edge" id="main-scroll">
            <div className="flex min-h-screen flex-col lg:flex-row">
              <motion.div
                className="relative w-full bg-black overflow-hidden min-h-screen"
                style={{
                  width: isMobile ? '100%' : (leftPageWidth >= 100 ? '100%' : `${leftPageWidth}%`),
                  zIndex: 2,
                  isolation: 'isolate'
                }}
                transition={{ type: "spring", stiffness: 50, damping: 20 }}
              >

                <section id="hero" className="min-h-screen lg:min-h-screen">
                  <HeroNew />
                </section>

                <section id="what-is-senja" className="min-h-screen lg:min-h-screen">
                  <WhatIsSenja />
                </section>

                {/* Powered by Senja Content - full width with orbit + beam */}
                <section
                  id="powered-by-senja"
                  className="min-h-[80vh] lg:min-h-screen flex items-center justify-center"
                >
                  <div className="w-full">
                    <PoweredBySenja />
                  </div>
                </section>

                {/* Why Section */}
                <section
                  id="why"
                  className="min-h-screen flex items-center justify-center"
                >
                  <ScrollAnimationWrapper direction="up" delay={0.2}>
                    <WhySection />
                  </ScrollAnimationWrapper>
                </section>

                {/* Partners Section */}
                <section
                  id="partners"
                  className="flex items-center justify-center"
                >
                  <ScrollAnimationWrapper direction="up" delay={0.2}>
                    <PartnersSection />
                  </ScrollAnimationWrapper>
                </section>

                {/* Footer - full width, centered */}
                <section 
                  id="footer"
                  className="flex justify-center"
                >
                  <motion.div 
                    className="w-full"
                    style={{
                      maxWidth: '1200px',
                      margin: '0 auto',
                      padding: '0 2rem'
                    }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  >
                    <Footer />
                  </motion.div>
                </section>
              </motion.div>

              {/* Right Side - Empty space that collapses */}
              <div
                className="hidden lg:block relative bg-transparent"
                style={{
                  width: `${rightPageWidth}%`,
                  flexShrink: 0
                }}
              />
            </div>
          </div>

        </main>

        {/* Sticky Bottom Text - moved outside <main> to avoid clipping */}
        <StickyBottomText />

        {/* Custom Scrollbar Styles */}
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
