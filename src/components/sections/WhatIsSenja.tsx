'use client';

import Accordion from "../ui/Accordion";
import { BACKGROUND_PATTERNS } from '@/utils/styles';
import { motion } from "motion/react";

export default function WhatIsSenja() {
  return (
    <section id="what-is-senja" className={`py-20 px-4 ${BACKGROUND_PATTERNS.primary}`}>
      <div className="max-w-5xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-senja-brown dark:text-[#e8f0f7] tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          What is Senja ?
        </motion.h2>
        
        <motion.div 
          className="text-lg md:text-xl leading-relaxed text-senja-brown/90 dark:text-[#d0dce6] space-y-6 mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p>
            <strong className="text-senja-orange dark:text-[#60a5fa]">Senja </strong> is a <strong className="text-senja-orange dark:text-[#60a5fa]">permissionless stablecoin lending and borrowing protocol</strong> built on the Kaia ecosystem. Senja Finance also lives on the LINE Mini DApp, where users can supply collateral from multiple chains via cross-chain messaging, swap collateral seamlessly through DragonSwap, and borrow Kaia-native USDT or other stablecoins across multiple chains, with interest rates that automatically adjust based on utilization and asset risk profiles.
          </p>
          
          <p>
            Senja is supported by decentralized oracles such as the <strong className="text-senja-orange dark:text-[#60a5fa]">Orakl Network</strong> to ensure reliable and secure price feeds for risk management.
          </p>
        </motion.div>

        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Accordion 
            title="Problem" 
            titleClassName="text-3xl md:text-4xl text-senja-orange dark:text-[#60a5fa] font-bold"
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  1. Fragmented liquidity
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  DeFi users must manage assets across multiple isolated platforms and chains, leading to inefficient capital allocation and higher transaction costs.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  2. High barriers to entry for mainstream users
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Complex onboarding processes, steep learning curves, and unfamiliar wallet management prevent mass adoption.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  3. Systemic risks from shared liquidity pools
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Traditional lending protocols using shared pools can face cascading liquidations and cross-asset contagion, threatening the stability of the entire system.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  4. Centralized price feeds are vulnerable
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Many protocols rely on centralized oracles or limited data sources, creating single points of failure that can be exploited or manipulated.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  5. Lack of incentive alignment and buyback
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Many protocols accumulate fees without contributing back to the ecosystem or ensuring token value support.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  6. Limited flexibility in managing collateral
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Users often face high liquidation risk or inefficient capital use because they cannot easily adjust or swap their collateral within the protocol.
                </p>
              </motion.div>
            </motion.div>
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <Accordion 
            title="Solution" 
            titleClassName="text-3xl md:text-4xl text-senja-orange dark:text-[#60a5fa] font-bold"
          >
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  1. Cross-chain Liquidity Aggregation
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Senja uses an <strong className="text-senja-orange dark:text-[#60a5fa]">isolated pool model</strong>, where each asset and its market risk are contained. This ensures <strong className="text-senja-orange dark:text-[#60a5fa]">safer cross-chain lending</strong> and allows new assets to be onboarded without affecting the stability of the entire system, while still leveraging <strong className="text-senja-orange dark:text-[#60a5fa]">LayerZero interoperability</strong> for cross-chain access.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.05 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  2. Seamless User Experience via LINE Mini DApp
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Senja leverages the <strong className="text-senja-orange dark:text-[#60a5fa]">LINE Mini DApp</strong> for authentication and wallet management. Users can <strong className="text-senja-orange dark:text-[#60a5fa]">sign in with LINE or Gmail</strong>, lowering the entry barrier for millions of mainstream users.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  3. Isolated Pool Architecture
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Senja uses <strong className="text-senja-orange dark:text-[#60a5fa]">decentralized oracle</strong> such as Orakl for real-time pricing. This supports <strong className="text-senja-orange dark:text-[#60a5fa]">dynamic risk models</strong> and <strong className="text-senja-orange dark:text-[#60a5fa]">efficient liquidations</strong>, protecting both lenders and borrowers.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  4. Decentralized Oracle Integration
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Senja integrates with decentralized oracles to ensure reliable and tamper-resistant price feeds for all supported assets.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  5. Fee & Buyback Mechanism
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Senja introduces a <strong className="text-senja-orange dark:text-[#60a5fa]">Fee & Buyback Mechanism</strong>, where <strong className="text-senja-orange dark:text-[#60a5fa]">95% of collected fees</strong> are <strong className="text-senja-orange dark:text-[#60a5fa]">swapped into KAIA via DragonSwap</strong>, aligning protocol growth with Kaia&apos;s <strong className="text-senja-orange dark:text-[#60a5fa]">long-term stability</strong>.
                </p>
              </motion.div>

              <motion.div 
                className="border-l-4 border-none pl-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-senja-brown dark:text-[#e8f0f7] tracking-tight">
                  6. Swap Collateral (DragonSwap Integration)
                </h4>
                <p className="text-base md:text-lg text-senja-brown/80 dark:text-[#d0dce6] tracking-tight">
                  Senja integrates <strong className="text-senja-orange dark:text-[#60a5fa]">DragonSwap</strong> to allow <strong className="text-senja-orange dark:text-[#60a5fa]">in-protocol collateral swaps</strong>, giving users more flexibility to manage positions, reduce liquidation risk, and optimize their capital without leaving the platform.
                </p>
              </motion.div>
            </motion.div>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}