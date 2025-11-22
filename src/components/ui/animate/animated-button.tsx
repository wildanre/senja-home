'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { gsap } from 'gsap';

interface AnimatedButtonProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
}

export default function AnimatedButton({
  children,
  className = '',
  delay = 0,
  duration = 0.5,
}: AnimatedButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!buttonRef.current) return;

    const button = buttonRef.current;

    // Set initial state - hide completely
    button.style.opacity = '0';
    button.style.transform = 'translateY(10px)';
    button.style.borderColor = 'rgba(231, 182, 124, 0)';
    button.style.willChange = 'opacity, transform, border-color'; // GPU acceleration hint

    // Border and button should animate with delay
    const timeline = gsap.timeline({ delay: delay });

    // Animate button appearance with border color
    timeline.to(button, {
      opacity: 1,
      y: 0,
      borderColor: 'rgba(231, 182, 124, 0.4)',
      duration: duration,
      ease: 'power3.out',
    });

    return () => {
      timeline.kill();
      button.style.removeProperty('opacity');
      button.style.removeProperty('transform');
      button.style.removeProperty('border-color');
      button.style.removeProperty('will-change');
    };
  }, [delay, duration]);

  return (
    <button ref={buttonRef} className={className}>
      {children}
    </button>
  );
}
