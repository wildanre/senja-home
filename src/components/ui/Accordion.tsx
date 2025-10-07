'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  titleClassName?: string;
  contentClassName?: string;
}

export default function Accordion({ 
  title, 
  children, 
  defaultOpen = false,
  titleClassName = "",
  contentClassName = ""
}: AccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="mb-8 border border-senja-orange/20 dark:border-[#60a5fa]/20 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-4 text-left transition-all duration-200 hover:bg-senja-orange/5 dark:hover:bg-[#60a5fa]/5 ${titleClassName}`}
      >
        <span className="font-semibold text-lg">{title}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 ml-4"
        >
          <svg 
            className="w-6 h-6 text-senja-orange dark:text-[#60a5fa]" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className={`p-4 pt-0 ${contentClassName}`}>
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}