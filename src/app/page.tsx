"use client";

import HeroNew from "@/components/sections/hero-new";
import WhatIsSenja from "@/components/sections/what-is-senja";
import PoweredBySenja from "@/components/sections/chain-orbit/powered-by-senja";
import Partner from "@/components/sections/partner";
import ContactSection from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
import Dither from "@/components/ui/dither";
import { desktopDitherConfig } from "@/components/sections/hero-new/heroNewData";
import StickyBottomText from "@/components/sections/what-is-senja/sticky-bottom-text";

export default function Home() {

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
          {/* Main scrollable container - full width */}
          <div className="h-screen w-full overflow-y-auto scrollbar-right-edge" id="main-scroll">
            <div className="flex min-h-screen flex-col lg:flex-row">
              {/* Left Side - Content: full width on mobile, 50% on desktop */}
              <div className="relative z-10 w-full lg:w-1/2 bg-black overflow-hidden">
                {/* Hero Content */}
                <section id="hero" className="min-h-screen lg:min-h-screen">
                  <HeroNew />
                </section>

                {/* What is Senja Content */}
                <section id="what-is-senja" className="min-h-screen lg:min-h-screen">
                  <WhatIsSenja />
                </section>

                {/* Powered by Senja Content */}
                <section id="powered-by-senja" className="min-h-[80vh] lg:min-h-screen">
                  <PoweredBySenja />
                </section>

                {/* Partner Section */}
                <section id="partners" className="min-h-[60vh] lg:min-h-screen flex items-center justify-center">
                  <Partner />
                </section>

                {/* Contact Section */}
                <section id="contact" className="min-h-[60vh] lg:min-h-screen">
                  <ScrollAnimationWrapper direction="down" delay={0.3}>
                    <ContactSection />
                  </ScrollAnimationWrapper>
                </section>

                {/* Footer */}
                <section id="footer">
                  <Footer />
                </section>
              </div>

              {/* Right Side - Fixed Dither */}
              <div className="hidden lg:block w-1/2" />
            </div>
          </div>

          {/* Divider - fixed at center */}
          <div
            className="pointer-events-none fixed inset-y-0 left-1/2 z-30 hidden lg:block"
            style={{ transform: 'translateX(-0.5rem)' }}
          >
            <div className="border-l border-dashed border-[#8a5a33]/70 h-full" />
          </div>

          {/* Dither on right side - fixed */}
          <div
            className="fixed top-0 right-0 z-0 hidden h-screen w-1/2 lg:block pointer-events-none"
            style={{ margin: 0, padding: 0 }}
          >
            <Dither {...desktopDitherConfig} />
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
