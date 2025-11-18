'use client';
import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function ScrollAnimationWrapper({ 
  children, 
  delay = 0,
  duration = 0.6,
  direction = 'up',
  className = ''
}: ScrollAnimationWrapperProps) {
  const directionVariants = {
    up: { y: 50, opacity: 0 },
    down: { y: -50, opacity: 0 },
    left: { x: 50, opacity: 0 },
    right: { x: -50, opacity: 0 }
  };

  return (
    <motion.div
      className={className}
      initial={directionVariants[direction]}
      whileInView={{ 
        x: 0, 
        y: 0, 
        opacity: 1 
      }}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
      viewport={{ 
        once: true, 
        amount: 0.1 
      }}
    >
      {children}
    </motion.div>
  );
}