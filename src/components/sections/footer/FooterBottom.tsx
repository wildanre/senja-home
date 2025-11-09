'use client';

import { FaXTwitter } from 'react-icons/fa6';
import { SiDiscord, SiTelegram } from 'react-icons/si';

export default function FooterBottom() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="border-t border-white/10 dark:border-gray-700/30 pt-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-white/60 dark:text-[#a0aec0] text-sm">
          © {currentYear} Senja Finance. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a
            href="https://x.com/SenjaLabs"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 dark:text-[#a0aec0] hover:text-yellow-300 dark:hover:text-[#60a5fa] hover:scale-110 transition-all duration-200"
          >
            <FaXTwitter className="w-5 h-5" />
          </a>
          
          <a
            href="#discord"
            className="text-white/60 dark:text-[#a0aec0] hover:text-yellow-300 dark:hover:text-[#60a5fa] hover:scale-110 transition-all duration-200"
          >
            <SiDiscord className="w-5 h-5" />
          </a>
          
          <a
            href="#telegram"
            className="text-white/60 dark:text-[#a0aec0] hover:text-yellow-300 dark:hover:text-[#60a5fa] hover:scale-110 transition-all duration-200"
          >
            <SiTelegram className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

