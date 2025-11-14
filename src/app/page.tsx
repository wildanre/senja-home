import HeroNew from "@/components/sections/hero-new";
import WhatIsSenja from "@/components/sections/what-is-senja";
import ContactSection from "@/components/sections/contact";
import TimelineSection from "@/components/sections/timeline";
import Footer from "@/components/sections/footer";
import ScrollAnimationWrapper from "@/components/ui/scroll-animation-wrapper";

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
      
      <div className="relative snap-y snap-mandatory overflow-y-scroll scroll-smooth smooth-scroll-container">
        <main className="relative">
          <section id="hero" className="snap-start snap-always  sticky top-0">
          <HeroNew />
          </section>

          <div className="relative z-10 bg-black dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950">
            <section className="snap-start snap-always ">
              <ScrollAnimationWrapper direction="up" delay={0.3}>
              <WhatIsSenja />
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
