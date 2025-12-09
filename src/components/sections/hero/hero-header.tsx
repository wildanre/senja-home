"use client";

import { AnimatedText } from "@/components/ui/text";
import { heroContent } from "./hero-data";
import Image from "next/image";

export default function HeroHeader() {
  return (
    <div className="space-y-8 lg:space-y-6 relative lg:min-h-[18rem] lg:-left-36 xl:-left-40">
      {/* Logo and Brand name - Side by side on mobile */}
      <div className="flex items-center gap-3 -mt-16  lg:mb-0">
        {/* Logo */}
        <div className="lg:absolute lg:-top-28 lg:-left-8 animate-fade-in-delayed-logo">
          <div className="w-16 lg:w-15">
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
        {/* Brand name */}
        <div className="lg:absolute lg:-top-24 lg:-right-25 animate-fade-in-delayed-brand">
          <span className="font-elegant text-xl lg:text-2xl font-semibold italic text-[#e7b67c]">
            {heroContent.brandName}
          </span>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        :global(.animate-fade-in-delayed-logo) {
          opacity: 0;
          animation: fade-in-up 0.6s ease-out 2.6s forwards;
        }

        :global(.animate-fade-in-delayed-brand) {
          opacity: 0;
          animation: fade-in-up 0.6s ease-out 2.7s forwards;
        }
      `}</style>
      <AnimatedText
        text={heroContent.title}
        className="font-hero text-5xl font-normal leading-tight text-[#e7b67c] max-w-[90%] sm:max-w-[85%] lg:max-w-none lg:absolute lg:-left-4 lg:top-36 lg:-translate-y-16 lg:text-6xl xl:-left-6"
        delay={2.6}
        stagger={0.08}
        duration={0.6}
      />
    </div>
  );
}
