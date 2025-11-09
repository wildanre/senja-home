import { EmailIcon, TwitterIcon } from "./contactIcons";

export interface ContactItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  href: string;
  target?: string;
  delay: number;
}

export const contactItems: ContactItem[] = [
  {
    icon: <EmailIcon />,
    title: "Email Us",
    description: "Have questions? We'd love to hear from you.",
    link: "senjalend@gmail.com",
    href: "mailto:senjalend@gmail.com",
    delay: 0,
  },
  {
    icon: <TwitterIcon />,
    title: "Follow Us",
    description: "Stay updated with our latest news and updates.",
    link: "@SenjaLabs",
    href: "https://x.com/SenjaLabs",
    target: "_blank",
    delay: 0.2,
  },
];

