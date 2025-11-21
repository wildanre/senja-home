"use client";

import { motion } from "motion/react";
import Image from "next/image";

const partners = [
  { name: "Kaia Chain", logo: "/partners/kaialogofull.svg" },
  { name: "LayerZero", logo: "/partners/LayerZero_logo.svg" },
  { name: "DragonSwap", logo: "/partners/dragonswaplogo.png" },
  { name: "Orakl Network", logo: "/partners/orakllogofull.svg" },
  { name: "Chainlink", logo: "/partners/chainlinklogotg.svg" },
  { name: "Stargate", logo: "/partners/stargatelogotg.svg" },
];

export const PartnersSection = () => {
  return (
    <section className="w-full py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-hero text-3xl md:text-4xl lg:text-5xl font-normal text-[#e7b67c] text-center mb-16"
        >
          Integrated With
        </motion.h2>

        {/* Partners Grid - 3x2 with borders */}
        <div className="grid grid-cols-3">
          {partners.map((partner, index) => (
            <motion.div
              key={`${partner.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
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
                      height: "auto"
                    }}
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
