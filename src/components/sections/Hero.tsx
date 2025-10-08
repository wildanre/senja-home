'use client';
import Button from "../ui/Button";
import RotatingTextType from "../ui/RotatingTextType";
import Image from "next/image";
import { BACKGROUND_PATTERNS } from '@/utils/styles';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const taglines = [
    "Permissionless Lending and Borrowing",
    "Trade Your Collateral",
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
    <section className={`flex flex-col items-center justify-center min-h-screen px-4 py-20 text-center ${BACKGROUND_PATTERNS.hero} relative overflow-hidden`}>
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Logo */}
        <motion.div 
          className="flex justify-center mb-6"
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
            className="drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            priority
          />
        </motion.div>

        {/* Title */}
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-senja-brown-dark dark:text-[#e8f0f7] tracking-tight transition-colors duration-300"
          style={{ y: titleY }}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          Senja
        </motion.h1>
        
        {/* Rotating Taglines with Typing Animation */}
        <motion.div 
          className="min-h-[120px] flex items-center justify-center"
          style={{ y: subtitleY }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <p className="text-2xl md:text-3xl font-semibold text-senja-brown dark:text-[#d0dce6] transition-colors duration-300">
            <RotatingTextType 
              texts={taglines}
              typingSpeed={50}
              deletingSpeed={30}
              pauseDuration={2500}
            />
          </p>
        </motion.div>

        {/* Call-to-Action Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8"
          style={{ y: buttonY }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
        >
          <Button href="https://senja-labs.vercel.app/" variant="primary" target="_blank" rel="noopener noreferrer">
            Get Started
          </Button>
          <Button href="https://senja.gitbook.io/senja-docs" variant="secondary" target="_blank" rel="noopener noreferrer">
            View Documentation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
