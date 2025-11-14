"use client";

import { motion } from "motion/react";
import type { ContactItem } from "./contact-data";

interface ContactCardProps {
  item: ContactItem;
  index: number;
  isLastCol?: boolean;
  isLastRow?: boolean;
}

export default function ContactCard({ item, index, isLastCol, isLastRow }: ContactCardProps) {
  return (
    <motion.a
      key={index}
      href={item.href}
      target={item.target}
      rel="noopener noreferrer"
      className="group cursor-pointer"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: item.delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className={`relative h-[180px] flex flex-col items-center justify-center p-8 border-white/10 dark:border-gray-700/30 bg-transparent hover:bg-white/5 dark:hover:bg-gray-800/20 transition-all duration-300 ${!isLastCol ? 'border-r' : ''} ${!isLastRow ? 'border-b' : ''}`}>
        {/* Icon */}
        <div className="mb-4 opacity-70 group-hover:opacity-100 transition-opacity duration-300">
          {item.icon}
        </div>

        {/* Title */}
        <h3 className="text-lg font-semibold text-[#f9d5a9] dark:text-gray-100 mb-2 text-center">
          {item.title}
        </h3>

        {/* Link */}
        <div className="text-sm text-[#f9d5a9] dark:text-gray-400 dark:group-hover:text-gray-200 transition-colors duration-200 text-center">
          {item.link}
        </div>
      </div>
    </motion.a>
  );
}

