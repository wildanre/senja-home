import { EmailIcon, TwitterIcon, DiscordIcon, TelegramIcon, FarcasterIcon } from "./contact-icons";

export interface ContactItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  href: string;
  target?: string;
  delay: number;
  gridPosition: string;
}

export const contactItems: ContactItem[] = [
  {
    icon: <EmailIcon />,
    title: "Email Us",
    description: "Have questions? We'd love to hear from you.",
    link: "senjalend@gmail.com",
    href: "mailto:senjalend@gmail.com",
    delay: 0,
    gridPosition: "col-start-1 row-start-1", 
  },
  {
    icon: <TwitterIcon />,
    title: "Follow Us",
    description: "Stay updated with our latest news and updates.",
    link: "@SenjaLabs",
    href: "https://x.com/SenjaLabs",
    target: "_blank",
    delay: 0.2,
    gridPosition: "col-start-4 row-start-1", 
  },
  {
    icon: <DiscordIcon />,
    title: "Join Discord",
    description: "Connect with our community and get support.",
    link: "discord.gg/senja",
    href: "https://discord.gg/senja",
    target: "_blank",
    delay: 0.4,
    gridPosition: "col-start-3 row-start-2", 
  },
  {
    icon: <TelegramIcon />,
    title: "Join Telegram",
    description: "Get instant updates and announcements.",
    link: "t.me/senjalabs",
    href: "https://t.me/senjalabs",
    target: "_blank",
    delay: 0.6,
    gridPosition: "col-start-2 row-start-2", 
  },
  {
    icon: <FarcasterIcon />,
    title: "Follow on Farcaster",
    description: "Connect with us on Farcaster.",
    link: "warpcast.com/senjalabs",
    href: "https://warpcast.com/senjalabs",
    target: "_blank",
    delay: 0.8,
    gridPosition: "col-start-4 row-start-3", 
  },
];

