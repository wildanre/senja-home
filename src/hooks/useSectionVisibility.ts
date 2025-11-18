"use client";

import { useEffect, useState } from "react";

/**
 * Hook to detect if a specific section is visible in viewport
 * Returns true when the section is in view
 */
export function useSectionVisibility(sectionId: string) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkVisibility = () => {
      const section = document.getElementById(sectionId);
      const scrollContainer = document.getElementById("main-scroll");
      
      if (!section || !scrollContainer) {
        setIsVisible(false);
        return;
      }

      const containerRect = scrollContainer.getBoundingClientRect();
      const sectionRect = section.getBoundingClientRect();
      
      // Check if section is in viewport
      const sectionTop = sectionRect.top - containerRect.top + scrollContainer.scrollTop;
      const sectionBottom = sectionTop + sectionRect.height;
      const viewportTop = scrollContainer.scrollTop;
      const viewportBottom = scrollContainer.scrollTop + containerRect.height;
      
      // Section is visible if it overlaps with viewport
      const isInView = sectionTop < viewportBottom && sectionBottom > viewportTop;
      
      setIsVisible(isInView);
    };

    const scrollContainer = document.getElementById("main-scroll");
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkVisibility, { passive: true });
      checkVisibility(); // Initial check
      
      // Also check on resize
      window.addEventListener("resize", checkVisibility);
      
      return () => {
        scrollContainer.removeEventListener("scroll", checkVisibility);
        window.removeEventListener("resize", checkVisibility);
      };
    }
  }, [sectionId]);

  return isVisible;
}

