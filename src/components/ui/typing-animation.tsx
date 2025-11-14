'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface TypingAnimationProps {
  text: string;
  className?: string;
  delay?: number;
  speed?: number;
  showCursor?: boolean;
  cursorChar?: string;
  as?: 'span' | 'div' | 'p';
}

export default function TypingAnimation({
  text,
  className = '',
  delay = 0,
  speed = 0.06,
  showCursor = true,
  cursorChar = '|',
  as: Component = 'span',
}: TypingAnimationProps) {
  const containerRef = useRef<HTMLSpanElement | HTMLDivElement | HTMLParagraphElement>(null);
  const cursorRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;
    const characters = text.split('');
    
    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    const charSpans: HTMLSpanElement[] = [];
    
    // Create spans for each character
    characters.forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.display = 'inline-block';
      span.style.willChange = 'opacity';
      span.style.opacity = '0';
      charSpans.push(span);
      fragment.appendChild(span);
    });

    // Clear and append in one operation
    container.innerHTML = '';
    container.appendChild(fragment);

    let timeline: gsap.core.Timeline | null = null;
    let cursorBlink: gsap.core.Tween | null = null;

    // Create cursor element if needed
    if (showCursor && cursorRef.current) {
      const cursor = cursorRef.current;
      cursor.textContent = cursorChar;
      cursor.style.display = 'inline-block';
      cursor.style.opacity = '1';
      
      // Animate cursor blinking with GSAP
      cursorBlink = gsap.to(cursor, {
        opacity: 0,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut',
      });
    }

    // Create typing animation timeline - batch all animations
    timeline = gsap.timeline({ delay });

    // Animate each character appearing - use batch for better performance
    charSpans.forEach((span, index) => {
      timeline!.to(
        span,
        {
          opacity: 1,
          duration: 0.01,
          ease: 'none',
        },
        index * speed
      );
    });

    return () => {
      if (timeline) timeline.kill();
      if (cursorBlink) cursorBlink.kill();
      gsap.killTweensOf(charSpans);
    };
  }, [text, delay, speed, showCursor, cursorChar]);

  // Render based on component type
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = containerRef as any;
  const cursorRefTyped = cursorRef as any;
  
  if (Component === 'span') {
    return (
      <span className={className}>
        <span ref={ref} />
        {showCursor && <span ref={cursorRefTyped} className="ml-0.5" />}
      </span>
    );
  }
  if (Component === 'div') {
    return (
      <div className={className}>
        <span ref={ref} />
        {showCursor && <span ref={cursorRefTyped} className="ml-0.5" />}
      </div>
    );
  }
  if (Component === 'p') {
    return (
      <p className={className}>
        <span ref={ref} />
        {showCursor && <span ref={cursorRefTyped} className="ml-0.5" />}
      </p>
    );
  }
  return (
    <span className={className}>
      <span ref={ref} />
      {showCursor && <span ref={cursorRefTyped} className="ml-0.5" />}
    </span>
  );
}
