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
    src: "/supports/usdc.png",
    alt: "USDC",
    size: 48,
  },
  {
    src: "/supports/tether-usdt.png",
    alt: "USDT",
    size: 48,
  },
  {
    src: "/supports/weth.png",
    alt: "WETH",
    size: 48,
  },
  {
    src: "/supports/wbtc.png",
    alt: "WBTC",
    size: 48,
  },
  {
    src: "/supports/idrxlogo.png",
    alt: "IDRX",
    size: 48,
  },
];

export const networks: NetworkItem[] = [
  {
    src: "/supports/base.png",
    alt: "Base",
    size: 56,
  },
  {
    src: "/supports/optimism-logo.svg",
    alt: "Optimism",
    size: 56,
  },
  {
    src: "/supports/hyper-evm.png",
    alt: "Hyperliquid",
    size: 56,
  },
  {
    src: "/supports/ethlogo.webp",
    alt: "ETH",
    size: 56,
  },
  {
    src: "/partners/kaia-logo.svg",
    alt: "Kaia",
    size: 56,
  },
];

