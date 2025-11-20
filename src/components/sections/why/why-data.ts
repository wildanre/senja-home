export interface WhyFeature {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const whyFeatures: WhyFeature[] = [
  {
    id: 1,
    title: "Security",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/why/security.svg",
  },
  {
    id: 2,
    title: "cross-chain Finality",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/why/swap.svg",
  },
  {
    id: 3,
    title: "high speed",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/why/speed.svg",
  },
  {
    id: 4,
    title: "low gas fees",
    description:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    icon: "/why/low-fee.svg",
  },
];
