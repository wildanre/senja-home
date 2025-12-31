"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { partnersData } from "./partners-data";

const PartnerCard = ({
  partner,
  index,
  total,
}: {
  partner: (typeof partnersData)[0];
  index: number;
  total: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.3 });

  const content = (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex items-center justify-center p-8 md:p-12 border-senja-primary/15",
        "min-h-[120px] md:min-h-[160px] group",
        // Right border: if NOT the last item in the row (3 items per row)
        (index + 1) % 3 !== 0 && "border-r",
        // Bottom border: if NOT in the last row
        // Last row starts at index: total - (total % 3 || 3)
        index < total - (total % 3 || 3) && "border-b"
      )}
    >
      {partner.logo && (
        <div className="relative w-full h-16 flex items-center justify-center">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={150}
            height={60}
            className="object-contain grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100 
                       transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
            style={{
              maxWidth: partner.name === "DragonSwap" ? "140%" : "100%",
              height: "auto",
            }}
          />
        </div>
      )}
    </motion.div>
  );

  // If partner has href, wrap in link
  if (partner.href) {
    return (
      <a
        href={partner.href}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer"
      >
        {content}
      </a>
    );
  }

  return content;
};

export default function Partners() {
  const headerRef = useRef(null);
  const isHeaderInView = useInView(headerRef, { amount: 0.3 });

  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          ref={headerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
          }
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-hero text-3xl md:text-4xl lg:text-5xl font-normal text-senja-primary text-center mb-16"
        >
          Integrated With
        </motion.h2>

        {/* Partners Grid - 3x3 with inner borders only */}
        <div className="grid grid-cols-3">
          {partnersData.map((partner, index) => (
            <PartnerCard
              key={`${partner.name}-${index}`}
              partner={partner}
              index={index}
              total={partnersData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
