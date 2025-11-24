"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, animate } from "motion/react";

export default function CountUp({
  value,
  direction = "up",
  delay = 0.5,
  duration = 2,
  className = "",
}: {
  value: number;
  direction?: "up" | "down";
  delay?: number;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const startValue = direction === "down" ? value : 0;
      const endValue = direction === "down" ? 0 : value;
      
      motionValue.set(startValue);
      
      setTimeout(() => {
        const controls = animate(motionValue, endValue, {
          duration: duration,
          ease: "easeOut",
        });

        return () => controls.stop();
      }, delay * 100);
    }
  }, [motionValue, isInView, delay, value, direction, duration]);

  useEffect(() => {
    const unsubscribe = motionValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Number(latest.toFixed(0))
        );
      }
    });

    return () => unsubscribe();
  }, [motionValue]);

  return <span className={className} ref={ref} />;
}

