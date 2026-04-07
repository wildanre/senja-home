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
      { label: "Waitlist", href: "/waitlist", external: false },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Twitter", href: "https://x.com/SenjaLabs", external: true },
      { label: "Discord", href: "https://discord.gg/Yuf8n7rf9B", external: true },
    ],
  },
];

export const socialLinks = [
  { href: "https://x.com/SenjaLabs", icon: "twitter", label: "Twitter" },
  { href: "https://discord.gg/Yuf8n7rf9B", icon: "discord", label: "Discord" },
];

