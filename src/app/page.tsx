"use client";

import HeroNew from "@/components/sections/hero-new";
import WhatIsSenja from "@/components/sections/what-is-senja";
import PoweredBySenja from "@/components/sections/chain-orbit/powered-by-senja";
import Partner from "@/components/sections/partner";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import { ScrollAnimationWrapper } from "@/components/ui/animate";
import { AnimatedDitherBackground } from "@/components/ui/background";
import { AnimatedDivider } from "@/components/ui/layout";
import StickyBottomText from "@/components/sections/what-is-senja/sticky-bottom-text";
import { useScrollTransition } from "@/hooks/useScrollTransition";
import { motion } from "motion/react";

export default function Home() {
  const scrollProgress = useScrollTransition();

  // Smooth interpolation for left page width expansion
  // Starts expanding at 0.5 (when what-is-senja section appears)
  // Fully expanded at 0.8
  const getLeftPageWidth = () => {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="relative h-screen w-full">
        {/* Animated Dither Background - MUST be outside overflow-hidden container */}
        <AnimatedDitherBackground scrollProgress={scrollProgress} />

        {/* Animated Divider - follows left page edge */}
        <AnimatedDivider scrollProgress={scrollProgress} />

        <main className="relative h-screen w-full overflow-hidden" style={{ zIndex: 10 }}>
          <div className="h-screen w-full overflow-y-auto scrollbar-right-edge" id="main-scroll">
            <div className="flex min-h-screen flex-col lg:flex-row">
              <motion.div
                className="relative w-full bg-black overflow-hidden"
                style={{
                  width: `${leftPageWidth}%`,
                  zIndex: 2
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


                <section 
                  id="partners" 
                  className="min-h-[60vh] lg:min-h-screen flex items-center justify-center"
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
                    <Partner />
                  </motion.div>
                </section>

                <section 
                  id="contact" 
                  className="min-h-[60vh] lg:min-h-screen flex items-center justify-center"
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
                    <ScrollAnimationWrapper direction="down" delay={0.3}>
                      <ContactSection />
                    </ScrollAnimationWrapper>
                  </motion.div>
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

          {/* Sticky Bottom Text - appears in what-is-senja section */}
          <StickyBottomText />
        </main>

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
