"use client";

import React, { useRef, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";

interface BeamConfig {
  from: React.RefObject<HTMLElement>;
  to: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

interface AnimatedBeamContainerProps {
  className?: string;
  children: ReactNode;
  beams: BeamConfig[];
}

export function AnimatedBeamContainer({
  className,
  children,
  beams,
}: AnimatedBeamContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn("relative w-full", className)}
    >
      {children}
      {beams.map((beam, idx) => (
        <AnimatedBeam
          key={idx}
          containerRef={containerRef as React.RefObject<HTMLElement>}
          fromRef={beam.from}
          toRef={beam.to}
          curvature={beam.curvature}
          reverse={beam.reverse}
          duration={beam.duration}
          delay={beam.delay}
          startXOffset={beam.startXOffset}
          startYOffset={beam.startYOffset}
          endXOffset={beam.endXOffset}
          endYOffset={beam.endYOffset}
        />
      ))}
    </div>
  );
}

