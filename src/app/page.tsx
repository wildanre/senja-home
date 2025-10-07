import Hero from "@/components/sections/Hero";
import Partner from "@/components/sections/Partner";
import WhatIsSenja from "@/components/sections/WhatIsSenja";
import HowItWorks from "@/components/sections/HowItWorks";
import ContactAndWaitlist from "@/components/sections/ContactAndWaitlist";
import CardNav from "@/components/ui/CardNav";
import type { CardNavItem } from "@/components/ui/CardNav";

const navigationItems: CardNavItem[] = [
  {
    label: "Explore",
    bgColor: "#D97706", // senja-orange
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
      }
    ]
  },
  {
    label: "Connect",
    bgColor: "#60A5FA", // senja-blue (light mode blue)
    textColor: "#FFFFFF",
    links: [
      {
        label: "Our Partners",
        href: "#partners",
        ariaLabel: "View our partners"
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
    bgColor: "#374151", // senja-brown/gray
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
  return (
    <main className="relative">
      <CardNav 
        items={navigationItems}
      />
      <Hero />
      <WhatIsSenja />
      <HowItWorks />
      <Partner />
      <ContactAndWaitlist />
    </main>
  );
}
