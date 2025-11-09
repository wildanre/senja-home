"use client";

import { motion } from "motion/react";
import type { ContactItem } from "./contactData";

interface ContactCardProps {
  item: ContactItem;
  index: number;
}

export default function ContactCard({ item, index }: ContactCardProps) {
  return (
    <motion.a
      key={index}
      href={item.href}
      target={item.target}
      rel="noopener noreferrer"
      className="group cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: item.delay, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ y: -5 }}
    >
      <div className="relative bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-[#004488]/50 text-center overflow-hidden transition-all duration-300 h-full">
        {/* Animated background on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-300/5 via-transparent to-transparent dark:from-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Border glow effect */}
        <div className="absolute inset-0 rounded-3xl border border-transparent group-hover:border-yellow-300/20 dark:group-hover:border-blue-400/20 transition-colors duration-300" />

        <div className="relative z-10 mb-6">
          <motion.div
            className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-gradient-to-br from-yellow-300/10 to-yellow-400/5 dark:from-blue-500/10 dark:to-blue-400/5"
            initial={{ scale: 0.8, rotate: -10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: item.delay + 0.1, type: "spring", stiffness: 100 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            {item.icon}
          </motion.div>

          <motion.h3
            className="text-2xl font-bold text-gray-100 dark:text-[#e8f0f7] mb-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: item.delay + 0.2 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {item.title}
          </motion.h3>

          <motion.p
            className="text-gray-100 dark:text-[#d0dce6] mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: item.delay + 0.3 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            {item.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: item.delay + 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
            className="text-lg font-semibold text-orange-200 dark:text-[#0066cc] group-hover:text-amber-600 dark:group-hover:text-[#0088ff] transition-colors duration-200"
          >
            {item.link}
          </motion.div>
        </div>
      </div>
    </motion.a>
  );
}

