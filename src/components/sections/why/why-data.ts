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
    title: "Permissonless",
    description:
      "lorem ipsum dolor sit amet",
    icon: "/why/permissonless.svg",
  },
  {
    id: 4,
    title: "Protocol",
    description:
      "lorem ipsum dolor sit amet",
    icon: "/why/protocol.svg",
  },
];
