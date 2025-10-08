"use client";

import React from "react";
import { InfiniteMovingPartners } from "../ui/infinite-moving-partners";
import { BACKGROUND_PATTERNS } from '@/utils/styles';

export default function Partner() {
  const partners = [
    {
      name: "Kaia",
      logo: "/partners/kaia-logo.svg",
      href: "https://docs.kaia.io/",
      description: "End-to-end blockchain platform as the Web3 ecosystem with over 250M+ users through the LINE messenger"
    },
    {
      name: "DragonSwap",
      logo: "/partners/dragonswaplogo.png", 
      href: "https://dgswap.io/",
      description: "Leading decentralized exchange on Kaia blockchain providing liquidity and trading solutions"
    },
    {
      name: "DevWeb3 Jogja",
      logo: "/partners/devweb3jogja.jpg",
      href: "https://x.com/devweb3jogja",
      description: "Web3 developer community in Yogyakarta fostering blockchain innovation and education"
    },
    {
      name: "LayerZero",
      logo: "/partners/layerzerologo.png",
      href: "https://layerzero.network/",
      description: "Omnichain interoperability protocol enabling seamless cross-chain applications"
    },
    {
      name: "Orakl Network",
      logo: "/partners/orakllogo.avif",
      href: "https://orakl.network/",
      description: "Decentralized oracle network providing secure and reliable data feeds for DeFi applications"
    }
  ];

  return (
    <section id="partners" className={`py-20 px-4 ${BACKGROUND_PATTERNS.primary}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-senja-brown dark:text-[#e8f0f7]">
            Partnership
          </h2>
          <p className="text-lg md:text-xl text-senja-brown/80 dark:text-[#d0dce6] max-w-3xl mx-auto">
            Working together with leading protocols and communities to build the future of DeFi
          </p>
        </div>
        
        <div className="rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
          <InfiniteMovingPartners
            items={partners}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
