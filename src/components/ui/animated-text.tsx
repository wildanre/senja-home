'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
}

export default function AnimatedText({
  text,
  className = '',
  delay = 0,
  stagger = 0.1,
  duration = 0.8,
}: AnimatedTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const words = text.split(' ');
    const spans: HTMLSpanElement[] = [];

    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();

    // Create spans and add them with text nodes for spaces
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word;
      span.style.display = 'inline-block';
      span.style.willChange = 'transform, opacity'; // GPU acceleration hint
      spans.push(span);
      
      fragment.appendChild(span);
      
      // Add space as text node after each word except the last one
      if (index < words.length - 1) {
        const space = document.createTextNode(' ');
        fragment.appendChild(space);
      }
    });

    // Clear and append in one operation
    container.innerHTML = '';
    container.appendChild(fragment);

    // Set initial state and animate in one batch
    gsap.set(spans, {
      opacity: 0,
      y: 20,
      force3D: true, // Force GPU acceleration
    });

    // Create single timeline for better performance
    const timeline = gsap.timeline({ delay });

    timeline.to(spans, {
      opacity: 1,
      y: 0,
      duration,
      stagger,
      ease: 'power3.out',
      force3D: true,
    });

    return () => {
      timeline.kill();
      gsap.killTweensOf(spans);
    };
  }, [text, delay, stagger, duration]);

  return <h1 ref={containerRef} className={className} />;
}
