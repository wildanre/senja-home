"use client";

import Link from "next/link";
import { AnimatedButton } from "@/components/ui/animate";
import { AnimatedTextVariants } from "@/components/ui/text";
import { heroContent } from "./hero-data";

export default function HeroContent() {
  return (
    <div className="flex flex-wrap items-center gap-4 mt-20 lg:mt-25 lg:relative lg:-left-36 xl:-left-46">
      <Link href="/waitlist" className="lg:pointer-events-auto">
        <AnimatedButton variant="senja" className="" delay={2.6} duration={0.6}>
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
