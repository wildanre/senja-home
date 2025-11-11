"use client";

import { motion, MotionProps } from "motion/react";
import { ReactNode } from "react";

interface MotionContainerProps extends Omit<MotionProps, "children"> {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
}

export default function MotionContainer({
  children,
  className = "",
  as = "div",
  ...motionProps
}: MotionContainerProps) {
  const Component = motion[as];

  return (
    <Component className={className} {...motionProps}>
      {children}
    </Component>
  );
}

