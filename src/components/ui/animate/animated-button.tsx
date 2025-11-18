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

    // Set initial border opacity to 0 (text will animate separately)
    button.style.borderColor = 'rgba(231, 182, 124, 0)';
    button.style.willChange = 'border-color'; // GPU acceleration hint

    // Border should animate in sync with text
    const timeline = gsap.timeline({ delay: 0 });

    // Animate border color with fadeUp-like effect (same ease as text)
    timeline.to(button, {
      borderColor: 'rgba(231, 182, 124, 0.4)',
      duration: duration,
      ease: 'power3.out',
    });

    return () => {
      timeline.kill();
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
