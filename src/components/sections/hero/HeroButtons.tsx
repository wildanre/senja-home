"use client";

import { MotionValue } from "motion/react";
import { MotionContainer } from "@/components/ui/motion";
import Button from "@/components/ui/Button";
import type { ButtonConfig } from "./heroData";

interface HeroButtonsProps {
  buttonY: MotionValue<number>;
  buttons: ButtonConfig[];
}

export default function HeroButtons({ buttonY, buttons }: HeroButtonsProps) {
  return (
    <MotionContainer
      className="flex flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4"
      style={{ y: buttonY }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
    >
      {buttons.map((button, index) => (
        <Button
          key={index}
          href={button.href}
          variant={button.variant}
          target={button.target}
          rel={button.rel}
        >
          {button.label}
        </Button>
      ))}
    </MotionContainer>
  );
}

