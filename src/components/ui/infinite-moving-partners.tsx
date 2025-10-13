"use client";

import { cn } from "@/lib/utils";
import React, { use, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export const InfiniteMovingPartners = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    name: string;
    logo: string;
    href: string;
    description: string;
  }[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(true);
  
  const getDirection = React.useCallback(() => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  }, [direction]);

  const getSpeed = React.useCallback(() => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      }
    }
  }, [speed]);
  
  const addAnimation = React.useCallback(() => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
    }
  }, [getDirection, getSpeed]);

  useEffect(() => {
    addAnimation();
  }, [addAnimation]);
  
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-4 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="relative w-[280px] max-w-full shrink-0 rounded-2xl border border-zinc-200/50 bg-white/80 dark:border-zinc-700/50 dark:bg-gray-900/80 backdrop-blur-sm px-6 py-8 md:w-[320px] hover:scale-105 transition-transform duration-300"
            key={`${item.name}-${idx}`}
          >
            <Link 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center space-y-4"
            >
              <div className="flex justify-center items-center h-16">
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={120}
                  height={64}
                  className={cn(
                    "max-h-16 w-auto object-contain filter",
                    item.name === "LayerZero" 
                      ? "dark:brightness-0 dark:invert" 
                      : "dark:brightness-110"
                  )}
                />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-senja-brown dark:text-[#e8f0f7]">
                  {item.name}
                </h3>
                <p className="text-sm text-senja-brown/70 dark:text-[#d0dce6] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};