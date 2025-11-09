"use client";

import React, { useRef } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    // target: ref
    container: ref,
    offset: ["start start", "end start"],
  });

  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (cardLength === 0) return;
    
    // Deteksi kartu aktif berdasarkan item yang paling dekat dengan trigger point
    if (ref.current && contentRef.current) {
      const container = ref.current;
      const items = contentRef.current.querySelectorAll('[data-card-index]');
      const containerRect = container.getBoundingClientRect();
      const triggerPoint = containerRect.top + 100; // Trigger point 100px dari atas
      
      let closestIndex = 0;
      let closestDistance = Infinity;
      
      items.forEach((item: Element, index: number) => {
        const rect = item.getBoundingClientRect();
        const itemTop = rect.top;
        const distance = Math.abs(itemTop - triggerPoint);
        
        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });
      
      setActiveCard(closestIndex);
    }
  });


  return (
    <div
      className="relative flex h-[35rem] justify-center space-x-10 overflow-y-auto rounded-md p-10 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-neutral-700/30 hover:scrollbar-thumb-neutral-600/50"
      ref={ref}
      style={{
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(64, 64, 64, 0.3) transparent'
      }}
    >
      <div className="div relative flex items-start px-4">
        <div className="max-w-2xl" ref={contentRef}>
          {content.map((item, index) => (
            <div 
              key={item.title + index} 
              className="my-16 first:mt-0"
              data-card-index={index}
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-kg mt-10 max-w-sm text-slate-300"
              >
                {item.description}
              </motion.p>
            </div>
          ))}
          <div className="h-[10rem]" />
        </div>
      </div>
      <div
        className={cn(
          "sticky top-10 hidden h-60 w-80 overflow-hidden rounded-md lg:block",
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </div>
  );
};

