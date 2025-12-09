"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import { partnersData } from "./partners-data";

const PartnerCard = ({
  partner,
  index,
}: {
  partner: (typeof partnersData)[0];
  index: number;
}) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { amount: 0.3 });

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      animate={
        isInView
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 0, y: 30, scale: 0.95 }
      }
      transition={{ delay: index * 0.08, duration: 0.6, ease: "easeOut" }}
      className="flex items-center justify-center p-8 md:p-12 border-r border-b border-[#E7B67C]/15
                 [&:nth-child(3n)]:border-r-0
                 [&:nth-last-child(-n+3)]:border-b-0
                 min-h-[120px] md:min-h-[160px]"
    >
      {partner.logo && (
        <div className="relative w-full h-16 flex items-center justify-center">
          <Image
            src={partner.logo}
            alt={partner.name}
            width={150}
            height={60}
            className="object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            style={{
              maxWidth: partner.name === "DragonSwap" ? "140%" : "100%",
              height: "auto",
            }}
          />
        </div>
      )}
    </motion.div>
  );
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
          className="font-hero text-3xl md:text-4xl lg:text-5xl font-normal text-[#e7b67c] text-center mb-16"
        >
          Integrated With
        </motion.h2>

        {/* Partners Grid - 3x2 with borders */}
        <div className="grid grid-cols-3">
          {partnersData.map((partner, index) => (
            <PartnerCard
              key={`${partner.name}-${index}`}
              partner={partner}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
