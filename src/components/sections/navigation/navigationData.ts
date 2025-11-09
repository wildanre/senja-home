export interface NavLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export interface NavItem {
  label: string;
  bgColor: string;
  textColor: string;
  links: NavLink[];
}

export const navigationItems: NavItem[] = [
  {
    label: "Explore",
    bgColor: "bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20",
    textColor: "#FFFFFF",
    links: [
      {
        label: "What is Senja",
        href: "#what-is-senja",
        ariaLabel: "Learn about Senja platform",
      },
      {
        label: "How It Works",
        href: "#how-it-works",
        ariaLabel: "See how Senja works",
      },
      {
        label: "Roadmap",
        href: "#roadmap",
        ariaLabel: "View our development roadmap",
      },
    ],
  },
  {
    label: "Connect",
    bgColor: "bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20",
    textColor: "#FFFFFF",
    links: [
      {
        label: "Our Partners",
        href: "#partners",
        ariaLabel: "View our partners",
      },
      {
        label: "Supported Assets",
        href: "#supports",
        ariaLabel: "View supported assets and networks",
      },
      {
        label: "Contact Us",
        href: "#contacts",
        ariaLabel: "Get in touch with us",
      },
    ],
  },
  {
    label: "Join",
    bgColor: "bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20",
    textColor: "#FFFFFF",
    links: [
      {
        label: "Join Waitlist",
        href: "#waitlist",
        ariaLabel: "Join our waitlist",
      },
      {
        label: "Get Started",
        href: "#get-started",
        ariaLabel: "Start using Senja",
      },
    ],
  },
];

