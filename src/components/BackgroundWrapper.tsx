"use client";

import { useEffect, useState } from "react";

export default function BackgroundWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check initial theme
    setIsDark(document.documentElement.classList.contains("dark"));

    // Watch for theme changes
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`min-h-screen relative ${isDark ? 'bg-midnight-gradient' : ''}`}
      style={{
        background: isDark ? undefined : "#FFF3E0",
      }}
    >
      {children}
    </div>
  );
}
