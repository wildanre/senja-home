"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface WhyCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
  className?: string;
}

export const WhyCard = ({
  title,
  description,
  icon,
  index = 0,
  className,
}: WhyCardProps) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.2 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 50, scale: 0.95 }
      }
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: "easeOut",
      }}
      className={cn(
        "group relative flex flex-col justify-between",
        "border border-senja-primary/20 rounded-2xl p-8 md:p-10",
        "h-full min-h-[320px] bg-black/40",
        "hover:border-senja-primary/50 transition-colors duration-300",
        className
      )}
    >
      {/* Content */}
      <div className="space-y-6">
        <h3 className="font-hero text-3xl font-normal text-senja-primary">
          {title}
        </h3>
        <p
          className="text-senja-primary/70 leading-relaxed text-base md:text-lg"
          style={{ fontFamily: "'PP Neue Montreal', sans-serif" }}
        >
          {description}
        </p>
      </div>

      {/* Icon at bottom */}
      <div className="mt-10 pt-6 border-t border-senja-primary/10 flex justify-start opacity-60 group-hover:opacity-100 transition-opacity">
        <Image
          src={icon}
          alt={title}
          width={200}
          height={200}
          className="w-64  object-contain"
        />
      </div>
    </motion.div>
  );
};
