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
import { AnimatedBeamDemo as AnimatedBeamSection } from "@/components/sections/supports/animated-beam-section";

export default function Home() {
  const scrollProgress = useScrollTransition();

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
      
      <div className="relative h-screen w-full overflow-hidden">
        <main className="relative h-screen w-full">
          <div className="h-screen w-full overflow-y-auto scrollbar-right-edge" id="main-scroll">
            <div className="flex min-h-screen flex-col lg:flex-row">
              <motion.div 
                className="relative z-10 w-full lg:w-1/2 bg-black overflow-hidden"
                style={{
                  width: scrollProgress > 1 ? '100%' : undefined
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >

                <section id="hero" className="min-h-screen lg:min-h-screen">
                  <HeroNew />
                </section>

                <section id="what-is-senja" className="min-h-screen lg:min-h-screen">
                  <WhatIsSenja />
                </section>

                {/* Powered by Senja Content - full width, centered */}
                <section 
                  id="powered-by-senja" 
                  className="min-h-[80vh] lg:min-h-screen flex items-center justify-center"
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
                    <PoweredBySenja />
                  </motion.div>
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

              {/* Right Side - Dither/Beam area: shows dither in hero, beam in what-is-senja, collapses after */}
              <motion.div 
                className="hidden lg:block w-1/2 relative bg-black"
                style={{
                  width: scrollProgress > 1 ? '0%' : undefined
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                {/* Animated Beam for WhatIsSenja section - show when in what-is-senja section */}
                {scrollProgress >= 0.5 && scrollProgress <= 1 && (
                  <div className="absolute inset-0 h-full w-full z-20 flex items-center justify-center bg-black">
                    <AnimatedBeamSection />
                  </div>
                )}
              </motion.div>
            </div>
          </div>

          {/* Animated Divider - slides to right and fades out with dither */}
          <AnimatedDivider scrollProgress={scrollProgress} />

          {/* Animated Dither Background - slides to right and fades out during scroll */}
          <AnimatedDitherBackground scrollProgress={scrollProgress} />

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
