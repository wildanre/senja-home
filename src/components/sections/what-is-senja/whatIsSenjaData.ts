export interface ContentItem {
  title: string;
  description: string;
}

export const problems: ContentItem[] = [
  {
    title: "1. Fragmented liquidity",
    description: "DeFi users must manage assets across multiple isolated platforms and chains, leading to inefficient capital allocation and higher transaction costs."
  },
  {
    title: "2. High barriers to entry for mainstream users",
    description: "Complex onboarding processes, steep learning curves, and unfamiliar wallet management prevent mass adoption."
  },
  {
    title: "3. Systemic risks from shared liquidity pools",
    description: "Traditional lending protocols using shared pools can face cascading liquidations and cross-asset contagion, threatening the stability of the entire system."
  },
  {
    title: "4. Centralized price feeds are vulnerable",
    description: "Many protocols rely on centralized oracles or limited data sources, creating single points of failure that can be exploited or manipulated."
  },
  {
    title: "5. Lack of incentive alignment and buyback",
    description: "Many protocols accumulate fees without contributing back to the ecosystem or ensuring token value support."
  },
  {
    title: "6. Limited flexibility in managing collateral",
    description: "Users often face high liquidation risk or inefficient capital use because they cannot easily adjust or swap their collateral within the protocol."
  }
];

export const solutions: ContentItem[] = [
  {
    title: "1. Cross-chain Liquidity Aggregation",
    description: "Senja uses an <strong class=\"text-white dark:text-white\">isolated pool model</strong>, where each asset and its market risk are contained. This ensures <strong class=\"text-white dark:text-white\">safer cross-chain lending</strong> and allows new assets to be onboarded without affecting the stability of the entire system, while still leveraging <strong class=\"text-white dark:text-white\">LayerZero interoperability</strong> for cross-chain access."
  },
  {
    title: "2. Seamless User Experience via LINE Mini DApp",
    description: "Senja leverages the <strong class=\"text-white dark:text-white\">LINE Mini DApp</strong> for authentication and wallet management. Users can <strong class=\"text-white dark:text-white\">sign in with LINE or Gmail</strong>, lowering the entry barrier for millions of mainstream users."
  },
  {
    title: "3. Isolated Pool Architecture",
    description: "Senja uses <strong class=\"text-white dark:text-white\">decentralized oracle</strong> such as Orakl for real-time pricing. This supports <strong class=\"text-white dark:text-white\">dynamic risk models</strong> and <strong class=\"text-white dark:text-white\">efficient liquidations</strong>, protecting both lenders and borrowers."
  },
  {
    title: "4. Decentralized Oracle Integration",
    description: "Senja integrates with decentralized oracles to ensure reliable and tamper-resistant price feeds for all supported assets."
  },
  {
    title: "5. Fee & Buyback Mechanism",
    description: "Senja introduces a <strong class=\"text-white dark:text-white\">Fee & Buyback Mechanism</strong>, where <strong class=\"text-white dark:text-white\">95% of collected fees</strong> are <strong class=\"text-white dark:text-white\">swapped into KAIA via DragonSwap</strong>, aligning protocol growth with Kaia's <strong class=\"text-white dark:text-white\">long-term stability</strong>."
  },
  {
    title: "6. Swap Collateral (DragonSwap Integration)",
    description: "Senja integrates <strong class=\"text-white dark:text-white\">DragonSwap</strong> to allow <strong class=\"text-white dark:text-white\">in-protocol collateral swaps</strong>, giving users more flexibility to manage positions, reduce liquidation risk, and optimize their capital without leaving the platform."
  }
];

