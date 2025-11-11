"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

type Direction = "up" | "down" | "left" | "right";

interface SlideInProps {
  children: ReactNode;
  direction?: Direction;
  className?: string;
  delay?: number;
  duration?: number;
  distance?: number;
  once?: boolean;
  amount?: number;
}

export default function SlideIn({
  children,
  direction = "up",
  className = "",
  delay = 0,
  duration = 0.6,
  distance = 50,
  once = false,
  amount = 0.3,
}: SlideInProps) {
  const getInitialPosition = () => {
    switch (direction) {
      case "up":
        return { y: distance, opacity: 0 };
      case "down":
        return { y: -distance, opacity: 0 };
      case "left":
        return { x: distance, opacity: 0 };
      case "right":
        return { x: -distance, opacity: 0 };
    }
  };

  const getFinalPosition = () => {
    switch (direction) {
      case "up":
      case "down":
        return { y: 0, opacity: 1 };
      case "left":
      case "right":
        return { x: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      transition={{ duration, delay, ease: "easeOut" }}
      viewport={{ once, amount }}
    >
      {children}
    </motion.div>
  );
}

