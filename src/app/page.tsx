import Hero from "@/components/sections/hero";
import Partner from "@/components/sections/partner";
import Supports from "@/components/sections/supports";
import WhatIsSenja from "@/components/sections/what-is-senja";
import HowItWorks from "@/components/sections/how-it-works";
import ContactSection from "@/components/sections/contact";
import WaitlistSection from "@/components/sections/waitlist";
import TimelineSection from "@/components/sections/timeline";
import Footer from "@/components/sections/footer";
import Metrics from "@/components/sections/metrics/Metrics";
import CardNav from "@/components/ui/CardNav";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import { navigationItems } from "@/components/sections/navigation";

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
      <div className="fixed top-0 left-0 right-0 z-[999]">
        <CardNav items={navigationItems} />
      </div>
      <div className="relative snap-y snap-mandatory h-screen overflow-y-scroll scroll-smooth">
        <main className="relative">
          <section className="snap-start snap-always min-h-screen">
            <Hero />
          </section>

          <section className="snap-start snap-always min-h-screen">
            <ScrollAnimationWrapper direction="up" delay={0.3}>
              <WaitlistSection />
              <Partner />
            </ScrollAnimationWrapper>
          </section>

          <section className="snap-start snap-always min-h-screen">
            <Supports />
          </section>
          
          <section className="snap-start snap-always">
            <WhatIsSenja />
          </section>

          <section className="snap-start snap-always min-h-screen">
            <ScrollAnimationWrapper direction="up" delay={0.2}>
              <HowItWorks />
            </ScrollAnimationWrapper>
          </section>
          <section className="snap-start snap-always min-h-screen">
            <TimelineSection />
          </section>

          <section className="snap-start">
            <ScrollAnimationWrapper direction="down" delay={0.3}>
              <ContactSection />
            </ScrollAnimationWrapper>
          </section>

          <section className="snap-end">
            <Footer />
          </section>

          {/* <Metrics /> */}
        </main>
      </div>
    </>
  );
}
