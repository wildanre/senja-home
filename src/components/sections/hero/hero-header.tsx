"use client";

import { heroContent } from "./hero-data";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeroHeader() {
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);

  // Prefetch waitlist page for instant transition
  useEffect(() => {
    router.prefetch("/waitlist");
  }, [router]);

  const handleNavigate = () => {
    setIsNavigating(true);
    router.push("/waitlist");
  };

  return (
    <div className="space-y-8 lg:space-y-6 relative lg:min-h-72 lg:-left-36 xl:-left-40">
      <div className="flex items-center gap-3 -mt-16  lg:mb-0">
        <div className="lg:absolute lg:-top-28 lg:-left-8">
          <div className="w-16 lg:w-15">
            <Image
              src={heroContent.logoImage}
              alt={heroContent.logoAlt}
              className="w-full rounded-3xl"
              width={250}
              height={250}
              priority
              sizes="64px"
            />
          </div>
        </div>
        <div className="lg:absolute lg:-top-24 lg:-right-25">
          <span className="font-elegant text-xl lg:text-2xl font-semibold italic text-senja-primary">
            {heroContent.brandName}
          </span>
        </div>
      </div>
      <h1 className="font-hero text-5xl font-normal leading-tight text-senja-primary max-w-[90%] sm:max-w-[85%] lg:max-w-none lg:absolute lg:-left-4 lg:top-36 lg:-translate-y-16 lg:text-6xl xl:-left-6">
        {heroContent.title}
      </h1>

      <div
        className={`mt-16 lg:mt-40 lg:absolute lg:-left-4 lg:top-80 xl:-left-6 transition-opacity duration-300 ${
          isNavigating ? "opacity-0" : "opacity-100"
        }`}
      >
        <Button
          variant="senja"
          size="senja-lg"
          onClick={handleNavigate}
          disabled={isNavigating}
          className="cursor-pointer hover:cursor-pointer"
        >
          {heroContent.buttonText}
        </Button>
      </div>
    </div>
  );
}
