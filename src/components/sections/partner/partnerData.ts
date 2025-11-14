export interface PartnerItem {
  name: string;
  logo: string;
  href: string;
}

export const partners: PartnerItem[] = [
  {
    name: "Kaia",
    logo: "/partners/kaia-logo.svg",
    href: "https://docs.kaia.io/",
  },
  {
    name: "DragonSwap",
    logo: "/partners/dragonswaplogo.png",
    href: "https://dgswap.io/",
  },
  {
    name: "LayerZero",
    logo: "/partners/layerzerologo.png",
    href: "https://layerzero.network/",
  },
  {
    name: "Orakl Network",
    logo: "/partners/orakllogo.avif",
    href: "https://orakl.network/",
  }
];
