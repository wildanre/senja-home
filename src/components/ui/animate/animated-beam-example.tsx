"use client";

import React, { useRef } from "react";
import { AnimatedBeamContainer } from "./animated-beam-container";
import { cn } from "@/lib/utils";

/**
 * Example usage of AnimatedBeam component
 * 
 * This example shows how to connect multiple nodes with animated beams
 */
export function AnimatedBeamExample() {
  const node1Ref = useRef<HTMLDivElement>(null);
  const node2Ref = useRef<HTMLDivElement>(null);
  const node3Ref = useRef<HTMLDivElement>(null);
  const node4Ref = useRef<HTMLDivElement>(null);

  return (
    <AnimatedBeamContainer
      className="min-h-screen p-8"
      beams={[
        {
          from: node1Ref as React.RefObject<HTMLElement>,
          to: node2Ref as React.RefObject<HTMLElement>,
          curvature: 0.3,
          duration: 3,
        },
        {
          from: node2Ref as React.RefObject<HTMLElement>,
          to: node3Ref as React.RefObject<HTMLElement>,
          curvature: -0.2,
          duration: 3,
          delay: 0.5,
        },
        {
          from: node3Ref as React.RefObject<HTMLElement>,
          to: node4Ref as React.RefObject<HTMLElement>,
          curvature: 0.3,
          duration: 3,
          delay: 1,
        },
      ]}
    >
      <div className="flex flex-col items-center justify-center gap-8">
        {/* Node 1 */}
        <div
          ref={node1Ref}
          className={cn(
            "relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 bg-black p-4",
            "border-[#e7b67c]"
          )}
        >
          <div className="text-[#e7b67c] text-2xl">1</div>
        </div>

        {/* Node 2 */}
        <div
          ref={node2Ref}
          className={cn(
            "relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 bg-black p-4",
            "border-[#e7b67c]"
          )}
        >
          <div className="text-[#e7b67c] text-2xl">2</div>
        </div>

        {/* Node 3 */}
        <div
          ref={node3Ref}
          className={cn(
            "relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 bg-black p-4",
            "border-[#e7b67c]"
          )}
        >
          <div className="text-[#e7b67c] text-2xl">3</div>
        </div>

        {/* Node 4 */}
        <div
          ref={node4Ref}
          className={cn(
            "relative z-10 flex h-24 w-24 items-center justify-center rounded-full border-2 bg-black p-4",
            "border-[#e7b67c]"
          )}
        >
          <div className="text-[#e7b67c] text-2xl">4</div>
        </div>
      </div>
    </AnimatedBeamContainer>
  );
}

