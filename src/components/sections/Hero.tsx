'use client';
import Button from "../ui/Button";
import RotatingTextType from "../ui/RotatingTextType";
import Image from "next/image";
import { BACKGROUND_PATTERNS } from '@/utils/styles';
import { motion, useScroll, useTransform } from 'motion/react';
import { WorldMap } from "../ui/world-map";

export default function Hero() {
  const taglines = [
    "Senja Finance - Permissionless Lending and Borrowing",
    "Trade Your Collateral on Senja Finance",
    "Crosschain with LayerZero Integrated for Secure and Faster Transactions"
  ];

  const { scrollY } = useScroll();
  
  // Parallax transforms
  const logoY = useTransform(scrollY, [0, 800], [0, -200]);
  const logoScale = useTransform(scrollY, [0, 800], [1, 0.8]);
  const titleY = useTransform(scrollY, [0, 800], [0, -150]);
  const subtitleY = useTransform(scrollY, [0, 800], [0, -100]);
  const buttonY = useTransform(scrollY, [0, 800], [0, -50]);

  return (
    <section className={`flex flex-col items-center justify-center min-h-screen px-4 py-4 sm:py-8 md:py-12 lg:py-16 text-center ${BACKGROUND_PATTERNS.hero} relative overflow-hidden`}>
      {/* World Map Background */}
      <div className="absolute inset-0 opacity-20 dark:opacity-15">
        <WorldMap/>
      </div>
      
      <div className="max-w-5xl mx-auto md:mt-16 space-y-4 sm:space-y-6 md:space-y-8 relative z-10 px-2 sm:px-4 flex flex-col justify-center h-full">
        {/* Logo */}
        <motion.div 
          className="flex justify-center mb-2 sm:mb-4 md:mb-6"
          style={{ y: logoY, scale: logoScale }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Image
            src="/senja-logo.png"
            alt="Senja Logo"
            width={250}
            height={250}
            className="drop-shadow-2xl hover:scale-105 transition-transform duration-300 w-40 h-40 sm:w-52 sm:h-52 md:w-60 md:h-60 lg:w-64 lg:h-64"
          />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-300 dark:text-[#e8f0f7] tracking-tight transition-colors duration-300"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Senja - Permissionless DeFi Protocol
        </motion.h1>
        
        {/* Rotating Taglines with Typing Animation */}
        <motion.div 
          className="min-h-[80px] sm:min-h-[100px] md:min-h-[120px] flex items-center justify-center px-4"
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-gray-200 dark:text-[#d0dce6] transition-colors duration-300 text-center">
            <RotatingTextType 
              texts={taglines}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2500}
            />
          </h2>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div 
          className="flex flex-row gap-4 sm:gap-6 justify-center items-center pt-6 sm:pt-8 px-4"
          style={{ y: buttonY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button href="#what-is-senja" variant="primary">
            Get Started
          </Button>
          <Button href="https://senja.gitbook.io/senja-docs" variant="secondary" target="_blank" rel="noopener noreferrer">
            View Docs
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
