export interface PartnerItem {
  name: string;
  logo: string;
  href?: string;
}

export const partnersData: PartnerItem[] = [
  {
    name: "Kaia Chain",
    logo: "/partners/kaialogofull.svg",
    href: "https://kaia.io",
  },
  {
    name: "LayerZero",
    logo: "/partners/LayerZero_logo.svg",
    href: "https://layerzero.network",
  },
  {
    name: "DragonSwap",
    logo: "/partners/dragonswaplogo.png",
    href: "https://dgswap.io",
  },
  {
    name: "Orakl Network",
    logo: "/partners/orakllogofull.svg",
    href: "https://orakl.network",
  },
  { name: "IDRX", 
    logo: "/partners/idrxlogotg.webp", 
    href: "https://idrx.co" },
  {
    name: "Stargate",
    logo: "/partners/stargatelogotg.svg",
    href: "https://stargate.finance",
  },
];
