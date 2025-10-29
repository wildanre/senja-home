
import React from "react";
import { Timeline } from "../ui/timeline";
import { BACKGROUND_PATTERNS } from '@/utils/styles';

const timelineData = [
  {
    id: "q3-2025",
    title: "Q3 2025",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-gray-200 mb-3">
            Foundation & Launch
          </h4>
          <p className="text-neutral-600 dark:text-gray-300 text-lg leading-relaxed">
            Establishing our presence on Kaia blockchain and LINE ecosystem.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          {[
            "Senja live on Kaia Mainnet",
            "LINE Mini DApp launch for seamless onboarding",
            "Collateral Swap feature released",
            "Fee & Buyback Mechanism activated (95% fees into KAIA)",
            "Isolated Pools available for safer cross-chain lending"
          ].map((item, idx) => (
            <p key={idx} className="text-neutral-700 dark:text-gray-300">• {item}</p>
          ))}
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
    id: "q4-2025",
    title: "Q4 2025",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-gray-200 mb-3">
            Security & Growth
          </h4>
          <p className="text-neutral-600 dark:text-gray-300 text-lg leading-relaxed">
            Building robust security infrastructure and expanding cross-chain capabilities.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          {[
            "Full security audit to ensure protocol safety",
            "Cross-chain TVL growth initiatives with Kaia as origin chain",
            "Early ecosystem partnership programs",
            "Airdrop programs to engage community and early adopters"
          ].map((item, idx) => (
            <p key={idx} className="text-neutral-700 dark:text-gray-300">• {item}</p>
          ))}
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
    id: "q1-2026",
    title: "Q1 2026",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-gray-200 mb-3">
            Platform Expansion
          </h4>
          <p className="text-neutral-600 dark:text-gray-300 text-lg leading-relaxed">
            Expanding asset support and strengthening risk management capabilities.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          {[
            "Expanded asset and chain support for collateral and borrowing",
            "Integration with additional oracles to strengthen risk management"
          ].map((item, idx) => (
            <p key={idx} className="text-neutral-700 dark:text-gray-300">• {item}</p>
          ))}
        </div>
      </div>
    ),
    features: [
      "Expanded asset and chain support for collateral and borrowing",
      "Integration with additional oracles to strengthen risk management"
    ]
  },
  {
    id: "q2-2026",
    title: "Q2 2026",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-gray-200 mb-3">
            Enhanced User Experience
          </h4>
          <p className="text-neutral-600 dark:text-gray-300 text-lg leading-relaxed">
            Improving analytics and community engagement programs.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          {[
            "Enhanced dashboard and analytics for user portfolios",
            "Community and liquidity incentive programs"
          ].map((item, idx) => (
            <p key={idx} className="text-neutral-700 dark:text-gray-300">• {item}</p>
          ))}
        </div>
      </div>
    ),
    features: [
      "Enhanced dashboard and analytics for user portfolios",
      "Community and liquidity incentive programs"
    ]
  },
  {
    id: "q3-2026",
    title: "Q3 2026",
    content: (
      <div className="space-y-6">
        <div className="mb-6">
          <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-gray-200 mb-3">
            Innovation & Integration
          </h4>
          <p className="text-neutral-600 dark:text-gray-300 text-lg leading-relaxed">
            Advanced features and developer ecosystem expansion.
          </p>
        </div>
      </div>
    ),
    expandedContent: (
      <div className="space-y-4">
        <div className="space-y-3">
          {[
            "Mobile app upgrade for iOS and Android",
            "Developer integrations to support \"Money Lego\" composability in Kaia DeFi"
          ].map((item, idx) => (
            <p key={idx} className="text-neutral-700 dark:text-gray-300">• {item}</p>
          ))}
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