export interface PartnerItem {
  name: string;
  logo: string;
  href: string;
  description: string;
}

export const partners: PartnerItem[] = [
  {
    name: "Kaia",
    logo: "/partners/kaia-logo.svg",
    href: "https://docs.kaia.io/",
    description: "End-to-end blockchain platform as the Web3 ecosystem with over 250M+ users through the LINE messenger"
  },
  {
    name: "DragonSwap",
    logo: "/partners/dragonswaplogo.png",
    href: "https://dgswap.io/",
    description: "Leading decentralized exchange on Kaia blockchain providing liquidity and trading solutions"
  },
  {
    name: "DevWeb3 Jogja",
    logo: "/partners/devweb3jogja.jpg",
    href: "https://x.com/devweb3jogja",
    description: "Web3 developer community in Yogyakarta fostering blockchain innovation and education"
  },
  {
    name: "LayerZero",
    logo: "/partners/layerzerologo.png",
    href: "https://layerzero.network/",
    description: "Omnichain interoperability protocol enabling seamless cross-chain applications"
  },
  {
    name: "Orakl Network",
    logo: "/partners/orakllogo.avif",
    href: "https://orakl.network/",
    description: "Decentralized oracle network providing secure and reliable data feeds for DeFi applications"
  }
];

