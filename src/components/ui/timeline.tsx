"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  expandedContent?: React.ReactNode;
  features?: string[];
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);

  const handleCardClick = (index: number) => {
    setActiveCardIndex(activeCardIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-900 dark:to-neutral-950 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(217,119,6,0.1),transparent_50%)]" />
        <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(45deg,transparent_49%,rgba(217,119,6,0.05)_50%,transparent_51%)] bg-[length:20px_20px]" />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10 pt-20 pb-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-senja-orange via-orange-500 to-amber-500 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600 bg-clip-text text-transparent mb-6">
              Senja Roadmap
            </h2>
            <p className="text-lg md:text-xl text-neutral-600 dark:text-blue-300 max-w-3xl mx-auto leading-relaxed">
              Journey with us as we build the future of decentralized finance on Kaia blockchain
            </p>
            <div className="mt-8 flex justify-center">
              <motion.div 
                className="w-24 h-1 bg-gradient-to-r from-senja-orange to-amber-500 dark:from-blue-500 dark:to-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 96 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto px-4 md:px-8 lg:px-10 pb-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-12 top-0 bottom-0 w-0.5 bg-gradient-to-b from-senja-orange via-orange-500 to-amber-500 dark:from-blue-400 dark:via-blue-500 dark:to-blue-600"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {data.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-2 md:left-6 top-6 md:top-8 z-20">
                    <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-senja-orange to-amber-500 dark:from-blue-500 dark:to-blue-600 rounded-full flex items-center justify-center shadow-lg relative">
                      <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full"></div>
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-8 h-8 md:w-12 md:h-12 bg-gradient-to-r from-senja-orange to-amber-500 dark:from-blue-500 dark:to-blue-600 rounded-full blur-lg opacity-30"></div>
                  </div>

                  {/* Content Card */}
                  <div className="ml-16 md:ml-24">
                    <motion.div 
                      className={`
                        relative p-6 md:p-8 rounded-2xl cursor-pointer transition-all duration-300 group
                        ${activeCardIndex === index 
                          ? 'bg-white dark:bg-blue-900/50 border border-senja-orange dark:border-blue-400 shadow-lg' 
                          : 'bg-white/90 dark:bg-blue-950/50 border border-neutral-200 dark:border-blue-800 shadow-md hover:shadow-lg'
                        }
                      `}
                      onClick={() => handleCardClick(index)}
                      whileHover={{ y: activeCardIndex === index ? 0 : -2 }}
                      whileTap={{ scale: 0.99 }}
                    >
                      {/* Quarter Badge */}
                      <div className="flex items-center justify-between mb-6">
                        <div className={`px-4 py-2 rounded-full transition-all duration-300 ${
                          activeCardIndex === index 
                            ? 'bg-senja-orange dark:bg-blue-600' 
                            : 'bg-senja-orange/90 dark:bg-blue-700'
                        }`}>
                          <span className="text-white font-bold text-lg">{item.title}</span>
                        </div>
                        
                        {/* Click indicator */}
                        <motion.div 
                          className="flex items-center gap-2 text-senja-orange dark:text-blue-400"
                          animate={{ 
                            rotate: activeCardIndex === index ? 180 : 0
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          <span className="text-sm font-medium">
                            {activeCardIndex === index ? 'Less' : 'More'}
                          </span>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Content with Animation */}
                      <AnimatePresence mode="wait">
                        {activeCardIndex === index ? (
                          <motion.div
                            key="expanded"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="text-neutral-700 dark:text-neutral-200 space-y-6"
                          >
                            {/* Original content */}
                            <div>{item.content}</div>
                            
                            {/* Expanded content */}
                            {item.expandedContent && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="border-t border-senja-orange/20 dark:border-blue-500/30 pt-6 mt-6"
                              >
                                {item.expandedContent}
                              </motion.div>
                            )}
                            
                            {/* Features list */}
                            {item.features && item.features.length > 0 && (
                              <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-6"
                              >
                                {item.features.map((feature, featureIndex) => (
                                  <motion.div
                                    key={featureIndex}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.4 + featureIndex * 0.1 }}
                                    className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-senja-orange/10 to-amber-500/10 dark:from-blue-500/20 dark:to-blue-600/20"
                                  >
                                    <div className="w-2 h-2 bg-gradient-to-r from-senja-orange to-amber-500 dark:from-blue-500 dark:to-blue-600 rounded-full flex-shrink-0" />
                                    <span className="text-sm font-medium text-neutral-700 dark:text-blue-200">
                                      {feature}
                                    </span>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </motion.div>
                        ) : (
                          <motion.div
                            key="collapsed"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="text-neutral-700 dark:text-neutral-200"
                          >
                            {item.content}
                          </motion.div>
                        )}
                      </AnimatePresence>

                      {/* Glow effect when active */}
                      {activeCardIndex === index && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="absolute -inset-2 bg-gradient-to-r from-senja-orange/20 to-amber-500/20 dark:from-blue-500/20 dark:to-blue-600/20 rounded-2xl blur-xl -z-10"
                        />
                      )}
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};