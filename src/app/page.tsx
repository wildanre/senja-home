import Hero from "@/components/sections/Hero";
import WhatIsSenja from "@/components/sections/WhatIsSenja";
import HowItWorks from "@/components/sections/HowItWorks";
import { ThemeToggle } from "@/components/ui";

export default function Home() {
  return (
    <main className="relative">
      <ThemeToggle />
      <Hero />
      <WhatIsSenja />
      <HowItWorks />
    </main>
  );
}
