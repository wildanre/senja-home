export interface WhyFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const whyFeatures: WhyFeature[] = [
  {
    id: 1,
    title: "Cross-chain Borrowing",
    description:
      "Borrow across chains with LayerZero.",
    icon: "/why/swap.svg",
  },
  {
    id: 2,
    title: "Trade Collateral",
    description:
      "Trade collateral without closing position.",
    icon: "/why/security.svg",
  },
  {
    id: 3,
    title: "High speed",
    description:
      "Real-time confirmations for cross-chain borrowing.",
    icon: "/why/speed.svg",
  },
  {
    id: 4,
    title: "Low gas fees",
    description:
      "Cost-efficient cross-chain execution",
    icon: "/why/low-fee.svg",
  },
];
