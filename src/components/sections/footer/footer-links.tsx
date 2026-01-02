'use client';

import Link from 'next/link';
import { Stagger } from "@/components/ui/motion";
import { footerSections } from './footerData';

export default function FooterLinks() {
  return (
    <Stagger staggerDelay={0.1} delay={0.2} className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 lg:gap-10 mb-8 md:mb-12">
      {footerSections.map((section, index) => (
        <div key={index}>
          <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-senja-primary dark:text-[#e8f0f7] mb-3 md:mb-4 flex items-center gap-2">
            {section.title}
          </h3>
          
          <ul className="space-y-2 md:space-y-3">
            {section.links.map((link, linkIndex) => (
              <li
                key={linkIndex}
                className="hover:translate-x-1 transition-transform duration-200"
              >
                {link.external ? (
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm md:text-base text-senja-primary transition-colors duration-200 flex items-center gap-2"
                  >
                    {link.label}
                    <span className="text-xs">↗</span>
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className="text-sm md:text-base text-senja-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Stagger>
  );
}

