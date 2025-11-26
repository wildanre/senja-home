export interface WhyFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const whyFeatures: WhyFeature[] = [
  {
    id: 1,
    title: "Crosschain Borrowing",
    description:
      "Borrow across chains with LayerZero",
    icon: "/why/crosschain-new.svg",
  },
  {
    id: 2,
    title: "Trade Collateral",
    description:
      "Trade collateral without closing position",
    icon: "/why/swap.svg",
  },
  {
    id: 3,
    title: "Permissionless",
    description:
      "Open for anyone, anywhere",
    icon: "/why/permissionless.svg",
  },
  {
    id: 4,
    title: "Isolated pool",
    description:
      "No unified liquidity, fully isolated",
    icon: "/why/isolated.svg",
  },
];
