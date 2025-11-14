"use client";

import AnimatedText from "@/components/ui/animated-text";
import { heroContent } from "./heroNewData";
import Image from "next/image";

export default function HeroNewHeader() {
  return (
    <div className="space-y-6 lg:relative lg:min-h-[18rem] lg:-left-36 xl:-left-40">
      <div className="mb-10 hidden lg:absolute lg:-top-28 lg:-left-8 lg:block">
        <div className="w-15">
          <Image
            src={heroContent.logoImage}
            alt={heroContent.logoAlt}
            className="w-full rounded-3xl"
            loading="lazy"
            width={250}
            height={250}
          />
        </div>
      </div>
      <div className="mb-6 hidden lg:absolute lg:-top-24 lg:-right-25 lg:block">
        <span className="font-elegant text-2xl font-semibold italic text-[#e7b67c]">
          {heroContent.brandName}
        </span>
      </div>
      <AnimatedText
        text={heroContent.title}
        className="font-hero text-4xl font-normal leading-tight text-[#e7b67c] sm:text-5xl lg:absolute lg:-left-4 lg:top-36 lg:-translate-y-16 lg:text-6xl xl:-left-6"
        delay={0.3}
        stagger={0.08}
        duration={0.6}
      />
    </div>
  );
}

