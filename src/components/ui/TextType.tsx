"use client";

import { useEffect, useState } from "react";

interface TextTypeProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export default function TextType({ 
  text, 
  className = "", 
  speed = 50,
  delay = 0 
}: TextTypeProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    // Wait for delay before starting
    const delayTimeout = setTimeout(() => {
      setIsStarted(true);
    }, delay);

    return () => clearTimeout(delayTimeout);
  }, [delay]);

  useEffect(() => {
    if (!isStarted) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed, isStarted]);

  return (
    <span className={className}>
      {displayedText}
      {currentIndex < text.length && (
        <span className="animate-pulse">|</span>
      )}
    </span>
  );
}
