"use client";

import { motion } from "motion/react";
import { ReactNode, Children } from "react";

interface StaggerProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  once?: boolean;
  amount?: number;
}

export default function Stagger({
  children,
  className = "",
  delay = 0,
  staggerDelay = 0.1,
  duration = 0.6,
  once = false,
  amount = 0.3,
}: StaggerProps) {
  const childArray = Children.toArray(children);

  return (
    <div className={className}>
      {childArray.map((child, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration,
            delay: delay + index * staggerDelay,
            ease: "easeOut",
          }}
          viewport={{ once, amount }}
        >
          {child}
        </motion.div>
      ))}
    </div>
  );
}

