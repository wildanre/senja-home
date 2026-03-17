"use client";

import { useEffect, useState } from "react";

interface RotatingTextTypeProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export default function RotatingTextType({ 
  texts, 
  className = "",
  typingSpeed = 50,
  deletingSpeed = 30,
  pauseDuration = 2000
}: RotatingTextTypeProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];

    if (!isDeleting && displayedText === currentText) {
      const pauseTimeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(pauseTimeout);
    }

    if (isDeleting && displayedText === "") {
      const nextTimeout = setTimeout(() => {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 0);
      return () => clearTimeout(nextTimeout);
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentTextIndex, deletingSpeed, displayedText, isDeleting, pauseDuration, texts, typingSpeed]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse ml-1">|</span>
    </span>
  );
}
