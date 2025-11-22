export interface AssetItem {
  src: string;
  alt: string;
  size: number;
}

export interface NetworkItem {
  src: string;
  alt: string;
  size: number;
}

export const assets: AssetItem[] = [
  {
    src: "/supports/optimismlogo.png",
    alt: "Optimism",
    size: 48,
  },
  {
    src: "/supports/ethereum.svg",
    alt: "Ethereum",
    size: 48,
  },
  {
    src: "/supports/bnbchainlogo.png",
    alt: "BNB",
    size: 48,
  },
  {
    src: "/supports/mantlelogo.svg",
    alt: "Mantle",
    size: 48,
  },
  {
    src: "/supports/megaethlogo.png",
    alt: "MegaETH",
    size: 48,
  },
];

export const networks: NetworkItem[] = [
  {
    src: "/supports/base.svg",
    alt: "Base",
    size: 56,
  },
  {
    src: "/supports/unichain.svg",
    alt: "Unichain",
    size: 56,
  },
  {
    src: "/supports/hyperevm.svg",
    alt: "Hyperliquid",
    size: 56,
  },
  {
    src: "/supports/arbitrum.svg",
    alt: "Arbitrum",
    size: 56,
  },
  {
    src: "/partners/kaia-logo.svg",
    alt: "Kaia",
    size: 56,
  },
];

