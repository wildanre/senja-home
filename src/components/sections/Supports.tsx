"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { OrbitingCircles } from "../ui/orbiting-circles";

export default function Supports() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const outerRadius = isMobile ? 140 : 280;
  const innerRadius = isMobile ? 80 : 120;
  const iconSize = isMobile ? 35 : 60;

  return (
    <section
      id="supports"
      className="py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-4 lg:mb-12"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-100 dark:text-[#e8f0f7]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.1, type: "spring", stiffness: 80 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Supported Assets & Networks
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-100/80 dark:text-[#d0dce6] max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Multi-chain support across leading blockchains and top digital
            assets
          </motion.p>
        </motion.div>

        <motion.div 
          className="flex justify-center mb-8"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 70, damping: 20 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="relative h-[600px] w-full max-w-[700px] overflow-visible flex items-center justify-center">
            {/* Inner orbit - Assets */}
            <div className="absolute inset-0">
              <OrbitingCircles radius={innerRadius} duration={20} iconSize={iconSize}>
                <div className="flex h-16 w-16 items-center justify-center">
                  <Image
                    src="/supports/usdc.png"
                    alt="USDC"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="flex h-16 w-16 items-center justify-center">
                  <Image
                    src="/supports/tether-usdt.png"
                    alt="USDT"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="flex h-16 w-16 items-center justify-center">
                  <Image
                    src="/supports/weth.png"
                    alt="WETH"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="flex h-16 w-16 items-center justify-center">
                  <Image
                    src="/supports/wbtc.png"
                    alt="WBTC"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
                <div className="flex h-16 w-16 items-center justify-center">
                  <Image
                    src="/supports/idrxlogo.png"
                    alt="IDRX"
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                </div>
              </OrbitingCircles>
            </div>

            {/* Outer orbit - Networks */}
            <div className="absolute inset-0">
              <OrbitingCircles radius={outerRadius} duration={30} reverse iconSize={iconSize}>
                <div className="flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/supports/base.png"
                    alt="Base"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
                <div className="flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/supports/optimism-logo.svg"
                    alt="Optimism"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
                <div className="flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/supports/hyper-evm.png"
                    alt="Hyperliquid"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
                <div className="flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/supports/ethlogo.webp"
                    alt="ETH"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
                <div className="flex h-20 w-20 items-center justify-center">
                  <Image
                    src="/partners/kaia-logo.svg"
                    alt="Kaia"
                    width={56}
                    height={56}
                    className="rounded-full"
                  />
                </div>
              </OrbitingCircles>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
