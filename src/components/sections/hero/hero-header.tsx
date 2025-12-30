import { AnimatedText } from "@/components/ui/text";
import { heroContent } from "./hero-data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { ParticleTransition } from "@/components/ui/effects/particle-transition";

export default function HeroHeader() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  const [showTransition, setShowTransition] = useState(false);

  const handleNavigate = () => {
    setIsNavigating(true);
    // Start transition
    setShowTransition(true);
  };

  return (
    <div className="space-y-8 lg:space-y-6 relative lg:min-h-72 lg:-left-36 xl:-left-40">
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
          <span className="font-elegant text-xl lg:text-2xl font-semibold italic text-senja-primary">
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

        :global(.animate-fade-in-delayed-button) {
          opacity: 0;
          animation: fade-in-up 0.6s ease-out 3.4s forwards;
        }
      `}</style>
      <AnimatedText
        text={heroContent.title}
        className="font-hero text-5xl font-normal leading-tight text-senja-primary max-w-[90%] sm:max-w-[85%] lg:max-w-none lg:absolute lg:-left-4 lg:top-36 lg:-translate-y-16 lg:text-6xl xl:-left-6"
        delay={2.6}
        stagger={0.08}
        duration={0.6}
      />

      {/* Join Waitlist Button */}
      <div
        className={`animate-fade-in-delayed-button mt-7 lg:mt-20 lg:absolute lg:-left-4 lg:top-80 xl:-left-6 transition-opacity duration-300 ${
          isNavigating ? "opacity-0" : "opacity-100"
        }`}
      >
        <Button
          variant="senja"
          size="senja-lg"
          onClick={handleNavigate}
          disabled={isNavigating}
        >
          {heroContent.buttonText}
        </Button>
      </div>

      <ParticleTransition
        trigger={showTransition}
        text="Senja"
        redirectTo="/waitlist"
      />
    </div>
  );
}
