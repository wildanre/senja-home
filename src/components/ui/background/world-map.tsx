"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import DottedMap from "dotted-map";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const actualTheme = theme === "system" ? systemTheme : theme;
      setCurrentTheme(actualTheme || "light");
    }
  }, [theme, systemTheme, mounted]);

  const map = new DottedMap({
    height: 60,
    grid: "diagonal",
  });

  const svgMap = map.getSVG({
    radius: 0.22,
    color: currentTheme === "dark" ? "#FFFFFF" : "#FFFFFF",
    shape: "circle",
    backgroundColor: "transparent",
  });

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (start: { x: number; y: number }, end: { x: number; y: number }) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full h-full relative">
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full"
        style={{ filter: "invert(0)" }}
        dangerouslySetInnerHTML={{
          __html: svgMap,
        }}
      />
      {dots.map((dot, i) => {
        const startPoint = projectPoint(dot.start.lat, dot.start.lng);
        const endPoint = projectPoint(dot.end.lat, dot.end.lng);
        return (
          <svg
            key={`connection-${i}`}
            viewBox="0 0 800 400"
            className="w-full h-full absolute top-0 left-0 pointer-events-none"
          >
            <motion.path
              d={createCurvedPath(startPoint, endPoint)}
              fill="none"
              stroke={lineColor}
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{
                duration: 2,
                delay: i * 0.5,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={startPoint.x}
              cy={startPoint.y}
              r="2"
              fill={lineColor}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.5,
              }}
            />
            <motion.circle
              cx={endPoint.x}
              cy={endPoint.y}
              r="2"
              fill={lineColor}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: i * 0.5 + 1.5,
              }}
            />
          </svg>
        );
      })}
    </div>
  );
}
