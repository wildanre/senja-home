"use client";

import React, { forwardRef, useRef, useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedBeamProps {
  className?: string;
  containerRef: React.RefObject<HTMLElement>;
  fromRef: React.RefObject<HTMLElement>;
  toRef: React.RefObject<HTMLElement>;
  curvature?: number;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

export const AnimatedBeam = forwardRef<SVGSVGElement, AnimatedBeamProps>(
  (
    {
      className,
      containerRef,
      fromRef,
      toRef,
      curvature = 0,
      reverse = false,
      duration = 3,
      delay = 0,
      startXOffset = 0,
      startYOffset = 0,
      endXOffset = 0,
      endYOffset = 0,
    },
    ref
  ) => {
    const id = React.useId();
    const pathRef = useRef<SVGPathElement>(null);
    const [pathD, setPathD] = useState("");
    const [svgDimensions, setSvgDimensions] = useState({ width: 0, height: 0, x: 0, y: 0 });

    // Calculate the path between two points
    useEffect(() => {
      const updatePath = () => {
        if (!containerRef.current || !fromRef.current || !toRef.current) {
          return;
        }

        const containerRect = containerRef.current.getBoundingClientRect();
        const fromRect = fromRef.current.getBoundingClientRect();
        const toRect = toRef.current.getBoundingClientRect();

        const startX =
          fromRect.left - containerRect.left + fromRect.width / 2 + startXOffset;
        const startY =
          fromRect.top - containerRect.top + fromRect.height / 2 + startYOffset;
        const endX =
          toRect.left - containerRect.left + toRect.width / 2 + endXOffset;
        const endY =
          toRect.top - containerRect.top + toRect.height / 2 + endYOffset;

        const midX = (startX + endX) / 2;
        const midY = (startY + endY) / 2;
        const dx = endX - startX;
        const dy = endY - startY;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Avoid division by zero
        if (distance === 0) {
          return;
        }

        // Apply curvature
        const cp1X = midX - (dy * curvature) / distance;
        const cp1Y = midY + (dx * curvature) / distance;
        const cp2X = midX + (dy * curvature) / distance;
        const cp2Y = midY - (dx * curvature) / distance;

        // Update SVG dimensions with padding
        const padding = 20;
        const minX = Math.min(startX, endX, cp1X, cp2X);
        const maxX = Math.max(startX, endX, cp1X, cp2X);
        const minY = Math.min(startY, endY, cp1Y, cp2Y);
        const maxY = Math.max(startY, endY, cp1Y, cp2Y);
        
        const svgWidth = Math.max(maxX - minX + padding * 2, 100);
        const svgHeight = Math.max(maxY - minY + padding * 2, 100);
        const svgX = minX - padding;
        const svgY = minY - padding;
        
        // Adjust path coordinates relative to SVG position
        const adjustedPath = `M ${startX - svgX},${startY - svgY} C ${cp1X - svgX},${cp1Y - svgY} ${cp2X - svgX},${cp2Y - svgY} ${endX - svgX},${endY - svgY}`;
        setPathD(adjustedPath);
        
        setSvgDimensions({ width: svgWidth, height: svgHeight, x: svgX, y: svgY });
      };

      // Initial calculation
      updatePath();

      // Update on scroll and resize
      window.addEventListener("scroll", updatePath, true);
      window.addEventListener("resize", updatePath);

      return () => {
        window.removeEventListener("scroll", updatePath, true);
        window.removeEventListener("resize", updatePath);
      };
    }, [
      containerRef,
      fromRef,
      toRef,
      curvature,
      startXOffset,
      startYOffset,
      endXOffset,
      endYOffset,
    ]);

    if (!pathD || svgDimensions.width === 0) {
      return null;
    }

    return (
      <svg
        ref={ref}
        className={cn("pointer-events-none absolute", className)}
        style={{
          left: `${svgDimensions.x}px`,
          top: `${svgDimensions.y}px`,
        }}
        width={svgDimensions.width}
        height={svgDimensions.height}
        viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d={pathD}
          stroke={`url(#stroke-${id})`}
          strokeWidth="1.5"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
          ref={pathRef}
        />
        <defs>
          <linearGradient id={`stroke-${id}`} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              stopColor="rgba(255, 255, 255, 0)"
              stopOpacity="0"
            />
            <stop
              offset="50%"
              stopColor="rgba(255, 255, 255, 0.8)"
              stopOpacity="0.8"
            />
            <stop
              offset="100%"
              stopColor="rgba(255, 255, 255, 0)"
              stopOpacity="0"
            />
          </linearGradient>
        </defs>
        <path
          id={`path-${id}`}
          d={pathD}
          fill="none"
          opacity="0"
        />
        <circle
          r="1.5"
          fill="rgba(255, 255, 255, 0.8)"
        >
          <animateMotion
            dur={`${duration}s`}
            repeatCount="indefinite"
            begin={delay}
            {...(reverse ? { keyPoints: "1;0", keyTimes: "0;1" } : {})}
          >
            <mpath href={`#path-${id}`} />
          </animateMotion>
        </circle>
      </svg>
    );
  }
);

AnimatedBeam.displayName = "AnimatedBeam";

