import Hero from "@/components/sections/Hero";
import Partner from "@/components/sections/Partner";
import Supports from "@/components/sections/Supports";
import WhatIsSenja from "@/components/sections/WhatIsSenja";
import HowItWorks from "@/components/sections/HowItWorks";
import ContactSection from "@/components/sections/ContactSection";
import WaitlistSection from "@/components/sections/WaitlistSection";
import TimelineSection from "@/components/sections/TimelineSection";
import Metrics from "@/components/sections/Metrics";
import Footer from "@/components/Footer";
import CardNav from "@/components/ui/CardNav";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import type { CardNavItem } from "@/components/ui/CardNav";

const navigationItems: CardNavItem[] = [
  {
    label: "Explore",
    bgColor: "bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20",
    textColor: "#FFFFFF",
    links: [
      {
        label: "What is Senja",
        href: "#what-is-senja",
        ariaLabel: "Learn about Senja platform"
      },
      {
        label: "How It Works",
        href: "#how-it-works", 
        ariaLabel: "See how Senja works"
      },
      {
        label: "Roadmap",
        href: "#roadmap",
        ariaLabel: "View our development roadmap"
      }
    ]
  },
  {
    label: "Connect",
    bgColor: "bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20",
    textColor: "#FFFFFF",
    links: [
      {
        label: "Our Partners",
        href: "#partners",
        ariaLabel: "View our partners"
      },
      {
        label: "Supported Assets",
        href: "#supports",
        ariaLabel: "View supported assets and networks"
      },
      {
        label: "Contact Us",
        href: "#contacts",
        ariaLabel: "Get in touch with us"
      }
    ]
  },
  {
    label: "Join",
    bgColor: "bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20",
    textColor: "#FFFFFF",
    links: [
      {
        label: "Join Waitlist",
        href: "#waitlist",
        ariaLabel: "Join our waitlist"
      },
      {
        label: "Get Started",
        href: "#get-started",
        ariaLabel: "Start using Senja"
      }
    ]
  }
];

export default function Home() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Senja Finance",
    "description": "Permissionless stablecoin lending and borrowing protocol built on Kaia ecosystem with cross-chain liquidity aggregation",
    "url": "https://senja.finance",
    "logo": "https://senja.finance/senja-logo.png",
    "foundingDate": "2024",
    "sameAs": [
      "https://senja.gitbook.io/senja-docs"
    ],
    "offers": {
      "@type": "Service",
      "name": "DeFi Lending and Borrowing",
      "description": "Cross-chain lending and borrowing protocol with isolated pools and LayerZero integration",
      "provider": {
        "@type": "Organization",
        "name": "Senja Finance"
      }
    },
    "areaServed": "Global",
    "serviceType": "DeFi Protocol",
    "category": "Financial Technology"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="relative">
        <CardNav 
          items={navigationItems}
        />
        <Hero />
      
      {/* <ScrollAnimationWrapper direction="up" delay={0.1}> */}
        <WhatIsSenja />
      {/* </ScrollAnimationWrapper> */}
      
      <ScrollAnimationWrapper direction="up" delay={0.2}>
        <HowItWorks />
      </ScrollAnimationWrapper>
      
      {/* <ScrollAnimationWrapper direction="left" delay={0.1}> */}
        <Partner />
      {/* </ScrollAnimationWrapper> */}
      
      {/* <ScrollAnimationWrapper direction="right" delay={0.2}> */}
        <Supports />
      {/* </ScrollAnimationWrapper> */}
      
      {/* <ScrollAnimationWrapper direction="up" delay={0.1}> */}
        <TimelineSection />
      {/* // </ScrollAnimationWrapper> */}
      
      <ScrollAnimationWrapper direction="down" delay={0.3}>
        <ContactSection />
      </ScrollAnimationWrapper>
      
      <ScrollAnimationWrapper direction="up" delay={0.3}>
        <WaitlistSection />
      </ScrollAnimationWrapper>

      <Metrics />
      </main>
      <Footer />
    </>
  );
}
