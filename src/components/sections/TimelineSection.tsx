"use client";
import React from "react";
import { Timeline } from "../ui/timeline";
import { BACKGROUND_PATTERNS } from '@/utils/styles';

const timelineData = [
  {
    title: "Q3 2025",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-blue-200 mb-3">
            Foundation & Launch
          </h4>
          <p className="text-neutral-600 dark:text-blue-300 text-lg leading-relaxed">
            Establishing our presence on Kaia blockchain and LINE ecosystem.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-neutral-700 dark:text-blue-300">• Senja live on Kaia Mainnet</p>
          <p className="text-neutral-700 dark:text-blue-300">• LINE Mini DApp launch for seamless onboarding</p>
          <p className="text-neutral-700 dark:text-blue-300">• Collateral Swap feature released</p>
          <p className="text-neutral-700 dark:text-blue-300">• Fee & Buyback Mechanism activated (95% fees into KAIA)</p>
          <p className="text-neutral-700 dark:text-blue-300">• Isolated Pools available for safer cross-chain lending</p>
        </div>
      </div>
    ),
    features: [
      "Senja live on Kaia Mainnet",
      "LINE Mini DApp launch for seamless onboarding",
      "Collateral Swap feature released",
      "Fee & Buyback Mechanism activated (95% fees into KAIA)",
      "Isolated Pools available for safer cross-chain lending"
    ]
  },
  {
    title: "Q4 2025",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-blue-200 mb-3">
            Security & Growth
          </h4>
          <p className="text-neutral-600 dark:text-blue-300 text-lg leading-relaxed">
            Building robust security infrastructure and expanding cross-chain capabilities.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-neutral-700 dark:text-blue-300">• Full security audit to ensure protocol safety</p>
          <p className="text-neutral-700 dark:text-blue-300">• Cross-chain TVL growth initiatives with Kaia as origin chain</p>
          <p className="text-neutral-700 dark:text-blue-300">• Early ecosystem partnership programs</p>
          <p className="text-neutral-700 dark:text-blue-300">• Airdrop programs to engage community and early adopters</p>
        </div>
      </div>
    ),
    features: [
      "Full security audit to ensure protocol safety",
      "Cross-chain TVL growth initiatives with Kaia as origin chain",
      "Early ecosystem partnership programs",
      "Airdrop programs to engage community and early adopters"
    ]
  },
  {
    title: "Q1 2026",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-blue-200 mb-3">
            Platform Expansion
          </h4>
          <p className="text-neutral-600 dark:text-blue-300 text-lg leading-relaxed">
            Expanding asset support and strengthening risk management capabilities.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-neutral-700 dark:text-blue-300">• Expanded asset and chain support for collateral and borrowing</p>
          <p className="text-neutral-700 dark:text-blue-300">• Integration with additional oracles to strengthen risk management</p>
        </div>
      </div>
    ),
    features: [
      "Expanded asset and chain support for collateral and borrowing",
      "Integration with additional oracles to strengthen risk management"
    ]
  },
  {
    title: "Q2 2026",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-blue-200 mb-3">
            Enhanced User Experience
          </h4>
          <p className="text-neutral-600 dark:text-blue-300 text-lg leading-relaxed">
            Improving analytics and community engagement programs.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-neutral-700 dark:text-blue-300">• Enhanced dashboard and analytics for user portfolios</p>
          <p className="text-neutral-700 dark:text-blue-300">• Community and liquidity incentive programs</p>
        </div>
      </div>
    ),
    features: [
      "Enhanced dashboard and analytics for user portfolios",
      "Community and liquidity incentive programs"
    ]
  },
  {
    title: "Q3 2026",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-blue-200 mb-3">
            Innovation & Integration
          </h4>
          <p className="text-neutral-600 dark:text-blue-300 text-lg leading-relaxed">
            Advanced features and developer ecosystem expansion.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          <p className="text-neutral-700 dark:text-blue-300">• Mobile app upgrade for iOS and Android</p>
          <p className="text-neutral-700 dark:text-blue-300">• Developer integrations to support &quot;Money Lego&quot; composability in Kaia DeFi</p>
        </div>
      </div>
    ),
    features: [
      "Mobile app upgrade for iOS and Android",
      "Developer integrations to support \"Money Lego\" composability in Kaia DeFi"
    ]
  },
];

export default function TimelineSection() {
  return (
    <section id="roadmap" className={`relative ${BACKGROUND_PATTERNS.primary}`}>
      <Timeline data={timelineData} />
    </section>
  );
}