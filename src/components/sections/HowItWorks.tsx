'use client';

import Carousel from "../ui/carousel";
import { motion } from "motion/react";

interface SlideData {
  title: string;
  description: string;
  src: string;
}

// Data slides untuk How It Works
const createSlideData = (): SlideData[] => [
  {
    title: "Supply Liquidity",
    description: `
      <div class="space-y-4 md:space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Connect Wallet</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Users connect their wallet on the Senja LINE Mini App.</p>
        </div>
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Provide Liquidity</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Users provide liquidity to earn yields from lending activities.</p>
        </div>
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Earn Rewards</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed"><strong class="text-white dark:text-[#e8f0f7]">Lending Yields:</strong> Earn from borrower interest payments</p>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed"><strong class="text-white dark:text-[#e8f0f7]">Liquidity Mining:</strong> Additional rewards from protocol incentives</p>
        </div>
      </div>
    `,
    src: "/how/supply-liquidity.png",
  },
  {
    title: "Supply Collateral",
    description: `
      <div class="space-y-3 md:space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Connect Wallet</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Users connect their wallet on the Senja LINE Mini App.</p>
        </div>
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Supply Collateral</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Users supply collateral to secure their borrowing position.</p>
        </div>
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Select Chain and Token</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed"><strong class="text-white dark:text-[#e8f0f7]">Kaia Network:</strong> Token directly deposited into Senja's pool, user position created</p>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed"><strong class="text-white dark:text-[#e8f0f7]">Other Chains:</strong> Token burned and minted into Kaia via LayerZero, then deposited into Senja's pool</p>
        </div>
      </div>
    `,
    src: "/how/supply-collateral.png",
  },
  {
    title: "Borrow Assets",
    description: `
      <div class="space-y-3 md:space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Connect & Initiate</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Users connect wallet and initiate borrow process.</p>
        </div>
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Pool & Collateral Check</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">System checks pool availability and collateral value.</p>
        </div>
        <div class="mb-1 md:mb-3">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Cross-Chain Support</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed"><strong class="text-white dark:text-[#e8f0f7]">Kaia:</strong> Direct loan disbursement</p>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed"><strong class="text-white dark:text-[#e8f0f7]">Other Chains:</strong> Token locked on Kaia, minted via LayerZero</p>
        </div>
      </div>
    `,
    src: "/how/borrow.png",
  },
  {
    title: "Repay Loan",
    description: `
      <div class="space-y-2 md:space-y-3 text-white/90 dark:text-[#d0dce6]">
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-base mb-1 text-white dark:text-[#e8f0f7]">Same Chain & Token</h4>
          <p class="text-sm md:text-sm leading-snug">Direct repayment into Senja's Pool.</p>
        </div>
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-base mb-1 text-white dark:text-[#e8f0f7]">Same Chain & Other Token</h4>
          <p class="text-sm md:text-sm leading-snug">Token swapped via DragonSwap before deposit.</p>
        </div>
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-base mb-1 text-white dark:text-[#e8f0f7]">Cross-Chain Repayment</h4>
          <p class="text-sm md:text-sm leading-snug">Integration with Stargate and LayerZero OFT for seamless cross-chain repayment.</p>
        </div>
      </div>
    `,
    src: "/how/repay.png",
  },
  {
    title: "Collateral Swap",
    description: `
      <div class="space-y-3 md:space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Position Management</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Users can swap collateral without closing their position.</p>
        </div>
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Direct Swap</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Tokens swapped via DragonSwap while maintaining user position.</p>
        </div>
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Seamless Experience</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">No need to close and reopen positions, saving time and gas fees.</p>
        </div>
      </div>
    `,
    src: "/how/swap.png",
  },
  {
    title: "Token Buybacks",
    description: `
      <div class="space-y-3 md:space-y-4 text-white/90 dark:text-[#d0dce6]">
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Fee Collection</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Fees collected in Senja tokens stored in Assistance Fund.</p>
        </div>
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Automatic Swap</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed"><span class="font-semibold">95% of fee tokens</span> automatically swapped to <span class="font-semibold">KAIA via DragonSwap</span>.</p>
        </div>
        <div class="mb-1 md:mb-2">
          <h4 class="font-semibold text-base md:text-lg mb-1 md:mb-2 text-white dark:text-[#e8f0f7]">Ecosystem Growth</h4>
          <p class="text-sm md:text-base leading-snug md:leading-relaxed">Swapped KAIA supports price stability and ecosystem development.</p>
        </div>
      </div>
    `,
    src: "/how/buy-back.png",
  },
];

export default function HowItWorks() {
  const slideData = createSlideData();

  return (
    <section id="how-it-works" className="py-20 px-4">
      <div className="max-w-7xl mt-10 lg:mt-20 mx-auto">
        {/* Title with Scale & Rotate Animation */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-100 dark:text-[#e8f0f7]"
          initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: "easeOut",
            rotateY: { duration: 0.8 }
          }}
          viewport={{ once: false, amount: 0.5 }}
          style={{ perspective: "1000px" }}
        >
          How It Works
        </motion.h2>

        {/* Carousel with Staggered Fade */}
        <motion.div 
          className="relative overflow-hidden w-full h-full pb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 0.2,
            ease: "easeOut"
          }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Carousel slides={slideData} />
        </motion.div>
      </div>
    </section>
  );
}
