"use client";

import { MotionContainer } from "@/components/ui/motion";

export default function HowItWorksHeader() {
  return (
    <MotionContainer
      as="h2"
      className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-100 dark:text-[#e8f0f7]"
      initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
      whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        rotateY: { duration: 0.8 }
      }}
      viewport={{ once: false, amount: 0.5 }}
      style={{ perspective: "1000px" }}
    >
      How It Works
    </MotionContainer>
  );
}

