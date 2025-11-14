"use client";

import Link from "next/link";
import AnimatedButton from "@/components/ui/animated-button";
import AnimatedTextVariants from "@/components/ui/animated-text-variants";
import { heroContent } from "./heroNewData";

export default function HeroNewContent() {
  return (
    <div className="flex flex-wrap items-center gap-4 lg:mt-25 lg:relative lg:-left-36 xl:-left-46">
      <Link href="/waitlist" className="lg:pointer-events-auto">
        <AnimatedButton
          className="rounded-full border border-dashed border-[#e7b67c]/40 px-6 py-3 text-sm font-medium text-[#e7b67c] transition hover:bg-[#e7b67c]/90 hover:text-[#120a06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#e7b67c]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#120a06]"
          delay={0.8}
          duration={0.6}
        >
          <AnimatedTextVariants
            text={heroContent.buttonText}
            animationType="fadeUp"
            delay={0}
            stagger={0.08}
            duration={0.6}
            as="span"
          />
        </AnimatedButton>
      </Link>
    </div>
  );
}

