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
    <motion.div 
      className="mb-8 bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex items-center justify-between p-6 text-left transition-all duration-300 hover:bg-gradient-to-r hover:from-white/10 hover:to-transparent dark:hover:from-gray-900/20 dark:hover:to-transparent ${titleClassName}`}
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="font-bold text-xl">{title}</span>
        <motion.div
          animate={{ 
            rotate: isOpen ? 180 : 0,
            scale: isOpen ? 1.1 : 1
          }}
          transition={{ 
            duration: 0.3, 
            ease: "easeInOut",
            scale: { duration: 0.2 }
          }}
          className="flex-shrink-0 ml-4"
        >
          <div className="relative">
            <motion.div
              className="w-10 h-10 bg-transparent flex items-center justify-center rounded-full"
            >
              <svg 
                className="w-6 h-6 text-yellow-300 dark:text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </div>
        </motion.div>
      </motion.button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0, y: -20 }}
            animate={{ height: "auto", opacity: 1, y: 0 }}
            exit={{ height: 0, opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.4, 
              ease: "easeInOut",
              opacity: { duration: 0.3 },
              y: { duration: 0.3 }
            }}
            className="overflow-hidden"
          >
            <motion.div 
              className={`p-6 pt-2 bg-gradient-to-b from-transparent to-white/5 dark:to-gray-900/20 ${contentClassName}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.3 }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}