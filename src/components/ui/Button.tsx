import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  href: string;
  variant?: "primary" | "secondary";
  children: ReactNode;
  target?: string;
  rel?: string;
}

export default function Button({ 
  href, 
  variant = "primary", 
  children,
  target,
  rel
}: ButtonProps) {
  const baseStyles = "px-4 py-2 md:px-8 md:py-4 rounded-full font-semibold text-sm md:text-base transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group";

  // Handle smooth scroll for anchor links
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    }
  };
  
  const variantStyles = {
    primary: `
      bg-gradient-to-br from-senja-orange to-[#FF5722]
      dark:from-[#3b82f6]/90 dark:to-[#1d4ed8]/80
      text-white backdrop-blur-xl 
      border-2 border-white/40 dark:border-[#60a5fa]/40
      shadow-[0_8px_32px_0_rgba(255,87,34,0.5)]
      dark:shadow-[0_8px_32px_0_rgba(74,111,165,0.4)]
      hover:shadow-[0_12px_48px_0_rgba(255,87,34,0.7)]
      dark:hover:shadow-[0_8px_40px_0_rgba(90,127,181,0.6)]
      hover:scale-105 hover:-translate-y-1
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-white/30 before:to-transparent 
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
      after:absolute after:inset-0 after:rounded-full
      after:bg-gradient-to-tr after:from-transparent after:via-white/30 after:to-transparent
      after:translate-x-[-100%] group-hover:after:translate-x-[100%] 
      after:transition-transform after:duration-700
    `,
    secondary: `
      bg-white/20 dark:bg-[#2a4165]/30
      backdrop-blur-xl 
      text-gray-100 dark:text-[#e0e6ed] 
      border-2 border-senja-orange dark:border-[#3b82f6]/50
      shadow-[0_8px_32px_0_rgba(255,112,67,0.3)]
      dark:shadow-[0_8px_32px_0_rgba(74,111,165,0.3)]
      hover:bg-white/30 hover:dark:bg-[#2a4165]/50
      hover:border-[#FF5722] dark:hover:border-[#60a5fa]
      hover:shadow-[0_12px_48px_0_rgba(255,112,67,0.5)]
      dark:hover:shadow-[0_8px_40px_0_rgba(90,127,181,0.5)]
      hover:scale-105 hover:-translate-y-1
      before:absolute before:inset-0 
      before:bg-gradient-to-br before:from-white/30 before:to-transparent 
      before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300
      after:absolute after:inset-0 after:rounded-full
      after:bg-gradient-to-tr after:from-transparent after:via-white/40 after:to-transparent
      after:translate-x-[-100%] group-hover:after:translate-x-[100%] 
      after:transition-transform after:duration-700
    `
  };

  return (
    <Link
      href={href}
      className={`${baseStyles} ${variantStyles[variant]}`}
      target={target}
      rel={rel}
      onClick={handleClick}
    >
      <span className="relative z-10">{children}</span>
    </Link>
  );
}
