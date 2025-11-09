'use client';

import Accordion from "../ui/Accordion";
import { motion } from "motion/react";

export default function WhatIsSenja() {
  return (
    <section id="what-is-senja" className="py-20 px-4">
      <div className="max-w-5xl mt-10 lg:mt-20 mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white dark:text-[#e8f0f7] tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          What is Senja ?
        </motion.h2>
        
        <motion.div 
          className="text-lg md:text-xl leading-relaxed text-white/90 dark:text-[#d0dce6] space-y-6 mb-12 tracking-tight"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <p>
            <strong className="text-white dark:text-white">Senja </strong> is a <strong className="text-white dark:text-white">permissionless stablecoin lending and borrowing protocol</strong> built on the Kaia ecosystem. Senja Finance also lives on the LINE Mini DApp, where users can supply collateral from multiple chains via cross-chain messaging, swap collateral seamlessly through DragonSwap, and borrow Kaia-native USDT or other stablecoins across multiple chains, with interest rates that automatically adjust based on utilization and asset risk profiles.
          </p>
          
          <p>
            Senja is supported by decentralized oracles such as the <strong className="text-white dark:text-white">Orakl Network</strong> to ensure reliable and secure price feeds for risk management.
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
            titleClassName="text-3xl md:text-4xl text-white dark:text-white font-bold"
          >
            <div className="space-y-6">
              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  1. Fragmented liquidity
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  DeFi users must manage assets across multiple isolated platforms and chains, leading to inefficient capital allocation and higher transaction costs.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  2. High barriers to entry for mainstream users
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Complex onboarding processes, steep learning curves, and unfamiliar wallet management prevent mass adoption.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  3. Systemic risks from shared liquidity pools
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Traditional lending protocols using shared pools can face cascading liquidations and cross-asset contagion, threatening the stability of the entire system.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  4. Centralized price feeds are vulnerable
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Many protocols rely on centralized oracles or limited data sources, creating single points of failure that can be exploited or manipulated.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  5. Lack of incentive alignment and buyback
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Many protocols accumulate fees without contributing back to the ecosystem or ensuring token value support.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  6. Limited flexibility in managing collateral
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Users often face high liquidation risk or inefficient capital use because they cannot easily adjust or swap their collateral within the protocol.
                </p>
              </div>
            </div>
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
            titleClassName="text-3xl md:text-4xl text-white dark:text-white font-bold"
          >
            <div className="space-y-6">
              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  1. Cross-chain Liquidity Aggregation
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Senja uses an <strong className="text-white dark:text-white">isolated pool model</strong>, where each asset and its market risk are contained. This ensures <strong className="text-white dark:text-white">safer cross-chain lending</strong> and allows new assets to be onboarded without affecting the stability of the entire system, while still leveraging <strong className="text-white dark:text-white">LayerZero interoperability</strong> for cross-chain access.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  2. Seamless User Experience via LINE Mini DApp
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Senja leverages the <strong className="text-white dark:text-white">LINE Mini DApp</strong> for authentication and wallet management. Users can <strong className="text-white dark:text-white">sign in with LINE or Gmail</strong>, lowering the entry barrier for millions of mainstream users.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  3. Isolated Pool Architecture
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Senja uses <strong className="text-white dark:text-white">decentralized oracle</strong> such as Orakl for real-time pricing. This supports <strong className="text-white dark:text-white">dynamic risk models</strong> and <strong className="text-white dark:text-white">efficient liquidations</strong>, protecting both lenders and borrowers.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  4. Decentralized Oracle Integration
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Senja integrates with decentralized oracles to ensure reliable and tamper-resistant price feeds for all supported assets.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  5. Fee & Buyback Mechanism
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Senja introduces a <strong className="text-white dark:text-white">Fee & Buyback Mechanism</strong>, where <strong className="text-white dark:text-white">95% of collected fees</strong> are <strong className="text-white dark:text-white">swapped into KAIA via DragonSwap</strong>, aligning protocol growth with Kaia&apos;s <strong className="text-white dark:text-white">long-term stability</strong>.
                </p>
              </div>

              <div className="border-l-4 border-none pl-6">
                <h4 className="text-xl md:text-2xl font-semibold mb-3 text-white dark:text-[#e8f0f7] tracking-tight">
                  6. Swap Collateral (DragonSwap Integration)
                </h4>
                <p className="text-base md:text-lg text-white/90 dark:text-[#d0dce6] tracking-tight">
                  Senja integrates <strong className="text-white dark:text-white">DragonSwap</strong> to allow <strong className="text-white dark:text-white">in-protocol collateral swaps</strong>, giving users more flexibility to manage positions, reduce liquidation risk, and optimize their capital without leaving the platform.
                </p>
              </div>
            </div>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}