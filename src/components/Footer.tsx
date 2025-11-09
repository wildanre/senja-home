'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { SiDiscord, SiTelegram } from 'react-icons/si';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "https://senja.gitbook.io/senja-docs", external: true },
        { label: "Terms of Use", href: "#terms", external: false },
        { label: "Privacy Policy", href: "#privacy", external: false },
      ],
      delay: 0,
    },
    {
      title: "Data & Analytics",
      links: [
        { label: "Dune", href: "https://dune.com/", external: true },
      ],
      delay: 0.1,
    },
    {
      title: "Community",
      links: [
        { label: "Twitter", href: "https://x.com/SenjaLabs", external: true },
        { label: "Discord", href: "#discord", external: true },
        { label: "Farcaster", href: "#farcaster", external: true },
        { label: "Telegram", href: "#telegram", external: true },
      ],
      delay: 0.2,
    },
    {
      title: "Contact",
      links: [
        { label: "Email", href: "mailto:senjalend@gmail.com", external: false },
        { label: "Telegram", href: "#telegram", external: true },
      ],
      delay: 0.3,
    },
  ];

  return (
    <footer className="relative py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Top Section - Logo and Description */}
        <motion.div
          className="mb-12 pb-12 border-b border-white/10 dark:border-gray-700/30"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-white dark:text-[#e8f0f7] mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 80 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Senja Finance
          </motion.h2>
          <motion.p
            className="text-white/80 dark:text-[#d0dce6] text-base md:text-lg max-w-2xl"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Permissionless stablecoin lending and borrowing protocol on Kaia blockchain
          </motion.p>
        </motion.div>

        {/* Footer Links Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {footerSections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: section.delay,
                ease: "easeOut",
              }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.h3
                className="text-lg md:text-xl font-bold text-white dark:text-[#e8f0f7] mb-4 flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: section.delay + 0.1 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {section.title}
              </motion.h3>
              
              <motion.ul
                className="space-y-3"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: section.delay + 0.2 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                {section.links.map((link, linkIndex) => (
                  <motion.li
                    key={linkIndex}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: section.delay + 0.2 + linkIndex * 0.05,
                    }}
                    viewport={{ once: false, amount: 0.5 }}
                    whileHover={{ x: 5 }}
                  >
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 dark:text-[#d0dce6] hover:text-yellow-300 dark:hover:text-[#60a5fa] transition-colors duration-200 flex items-center gap-2"
                      >
                        {link.label}
                        <span className="text-xs">↗</span>
                      </a>
                    ) : (
                      <Link
                        href={link.href}
                        className="text-white/80 dark:text-[#d0dce6] hover:text-yellow-300 dark:hover:text-[#60a5fa] transition-colors duration-200"
                      >
                        {link.label}
                      </Link>
                    )}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section - Copyright and Divider */}
        <motion.div
          className="border-t border-white/10 dark:border-gray-700/30 pt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
          style={{ originX: 0 }}
        >
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <p className="text-white/60 dark:text-[#a0aec0] text-sm">
              © {currentYear} Senja Finance. All rights reserved.
            </p>
            
            <motion.div
              className="flex gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              <motion.a
                href="https://x.com/SenjaLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 dark:text-[#a0aec0] hover:text-yellow-300 dark:hover:text-[#60a5fa] transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <FaXTwitter className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#discord"
                className="text-white/60 dark:text-[#a0aec0] hover:text-yellow-300 dark:hover:text-[#60a5fa] transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <SiDiscord className="w-5 h-5" />
              </motion.a>
              
              <motion.a
                href="#telegram"
                className="text-white/60 dark:text-[#a0aec0] hover:text-yellow-300 dark:hover:text-[#60a5fa] transition-colors duration-200"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <SiTelegram className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background gradient accent */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}
