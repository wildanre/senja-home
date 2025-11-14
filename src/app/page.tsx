import HeroNew from "@/components/sections/hero-new";
import Partner from "@/components/sections/partner";
import WhatIsSenja from "@/components/sections/what-is-senja";
import HowItWorks from "@/components/sections/how-it-works";
import ContactSection from "@/components/sections/contact";
import WaitlistSection from "@/components/sections/waitlist";
import TimelineSection from "@/components/sections/timeline";
import Footer from "@/components/sections/footer";
import Metrics from "@/components/sections/metrics/metrics";
import CardNav from "@/components/ui/card-nav";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";
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
      <div className="relative snap-y snap-mandatory overflow-y-scroll scroll-smooth smooth-scroll-container">
        <main className="relative">
          <section className="snap-start snap-always  sticky top-0">
          <HeroNew />
          </section>

          <div className="relative z-10 bg-black dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
            <section className="snap-start snap-always ">
              <ScrollAnimationWrapper direction="up" delay={0.3}>
              <WhatIsSenja />
              </ScrollAnimationWrapper>
            </section>

            <section className="snap-start snap-always ">
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
          </div>

          {/* <Metrics /> */}
        </main>
      </div>
    </>
  );
}
