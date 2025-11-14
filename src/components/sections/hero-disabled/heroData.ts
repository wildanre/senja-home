export const taglines = [
  "Senja Finance - Permissionless Lending and Borrowing",
  "Trade Your Collateral on Senja Finance",
  "Crosschain with LayerZero Integrated for Secure and Faster Transactions"
];

export interface ButtonConfig {
  href: string;
  variant: "primary" | "secondary";
  label: string;
  target?: string;
  rel?: string;
}

export const heroButtons: ButtonConfig[] = [
  {
    href: "#what-is-senja",
    variant: "primary",
    label: "Get Started"
  },
  {
    href: "https://senja.gitbook.io/senja-docs",
    variant: "secondary",
    label: "View Docs",
    target: "_blank",
    rel: "noopener noreferrer"
  }
];

