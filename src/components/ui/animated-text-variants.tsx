'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface AnimatedTextVariantsProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  animationType?: 'fadeUp' | 'fadeScale' | 'slideLeft' | 'fadeIn' | 'characterReveal';
  as?: 'span' | 'div' | 'p' | 'button';
}

export default function AnimatedTextVariants({
  text,
  className = '',
  delay = 0,
  stagger = 0.1,
  duration = 0.8,
  animationType = 'fadeUp',
  as: Component = 'span',
}: AnimatedTextVariantsProps) {
  const containerRef = useRef<HTMLSpanElement | HTMLDivElement | HTMLParagraphElement | HTMLButtonElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const spans: HTMLSpanElement[] = [];
    const fragment = document.createDocumentFragment();

    // Different animation types require different element structures
    if (animationType === 'characterReveal') {
      // Character by character animation
      const characters = text.split('');
      
      characters.forEach((char) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        span.style.willChange = 'transform, opacity';
        spans.push(span);
        fragment.appendChild(span);
      });
    } else {
      // Word by word animation
      const words = text.split(' ');

      words.forEach((word, index) => {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.display = 'inline-block';
        span.style.willChange = 'transform, opacity';
        spans.push(span);
        fragment.appendChild(span);

        if (index < words.length - 1) {
          const space = document.createTextNode(' ');
          fragment.appendChild(space);
        }
      });
    }

    // Clear and append in one operation
    container.innerHTML = '';
    container.appendChild(fragment);

    // Define initial states (where animation starts from)
    const fromStates: Record<string, gsap.TweenVars> = {
      fadeUp: { opacity: 0, y: 20, force3D: true },
      fadeScale: { opacity: 0, scale: 0.9, y: 15, force3D: true },
      slideLeft: { opacity: 0, x: -20, force3D: true },
      fadeIn: { opacity: 0, force3D: true },
      characterReveal: { opacity: 0, y: 15, rotationX: 60, force3D: true },
    };

    // Define to states (where animation ends)
    const toStates: Record<string, gsap.TweenVars> = {
      fadeUp: { opacity: 1, y: 0, force3D: true },
      fadeScale: { opacity: 1, scale: 1, y: 0, force3D: true },
      slideLeft: { opacity: 1, x: 0, force3D: true },
      fadeIn: { opacity: 1, force3D: true },
      characterReveal: { opacity: 1, y: 0, rotationX: 0, force3D: true },
    };

    const easeConfigs: Record<string, string> = {
      fadeUp: 'power3.out',
      fadeScale: 'back.out(1.2)',
      slideLeft: 'power2.out',
      fadeIn: 'power1.inOut',
      characterReveal: 'power2.out',
    };

    // Set initial state
    gsap.set(spans, fromStates[animationType] || fromStates.fadeUp);

    // Animate with GSAP - single timeline for better performance
    const timeline = gsap.timeline({ delay });

    timeline.to(spans, {
      ...toStates[animationType] || toStates.fadeUp,
      duration,
      stagger,
      ease: easeConfigs[animationType] || 'power3.out',
    });

    return () => {
      timeline.kill();
      gsap.killTweensOf(spans);
    };
  }, [text, delay, stagger, duration, animationType]);

  // Render based on component type with proper ref typing
  // Type assertion needed because ref types vary by element type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = containerRef as any;
  
  // Don't render text initially to avoid double render
  if (Component === 'span') {
    return <span ref={ref} className={className} />;
  }
  if (Component === 'div') {
    return <div ref={ref} className={className} />;
  }
  if (Component === 'p') {
    return <p ref={ref} className={className} />;
  }
  if (Component === 'button') {
    return <button ref={ref} className={className} />;
  }
  return <span ref={ref} className={className} />;
}
