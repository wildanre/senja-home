export interface FooterLink {
  label: string;
  href: string;
  external: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export const footerSections: FooterSection[] = [
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "https://senja.gitbook.io/senja-docs", external: true },
      { label: "Terms of Use", href: "#terms", external: false },
      { label: "Privacy Policy", href: "#privacy", external: false },
    ],
  },
  {
    title: "Data & Analytics",
    links: [
      { label: "Dune", href: "https://dune.com/", external: true },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Twitter", href: "https://x.com/SenjaLabs", external: true },
      { label: "Discord", href: "#discord", external: true },
      { label: "Farcaster", href: "#farcaster", external: true },
      { label: "Telegram", href: "#telegram", external: true },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "Email", href: "mailto:senjalend@gmail.com", external: false },
    ],
  },
];

export const socialLinks = [
  { href: "https://x.com/SenjaLabs", icon: "twitter", label: "Twitter" },
  { href: "#discord", icon: "discord", label: "Discord" },
  { href: "#telegram", icon: "telegram", label: "Telegram" },
];

