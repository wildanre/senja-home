'use client';

import { motion } from "motion/react";
import { useRef } from "react";

interface MetricItemProps {
  label: string;
  value: string;
  suffix?: string;
  delay: number;
}

const MetricCard = ({ label, value, suffix, delay }: MetricItemProps) => (
  <motion.div
    className="relative group"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease: "easeOut" }}
    viewport={{ once: false, amount: 0.3 }}
  >
    <div className="relative p-8 md:p-10 rounded-2xl overflow-hidden">
      {/* Background gradient blur effect */}
      <div className="absolute inset-0 bg-linear-to-br from-yellow-300/10 via-transparent to-transparent dark:from-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Border animation on hover */}
      <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-yellow-300/30 dark:group-hover:border-blue-400/30 transition-colors duration-300" />
      
      {/* Content */}
      <div className="relative z-10">
        <motion.div
          className="mb-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-white/70 dark:text-[#a0aec0] text-sm md:text-base font-medium uppercase tracking-wider">
            {label}
          </h3>
        </motion.div>

        <motion.div
          className="mb-2"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: delay + 0.4, type: "spring", stiffness: 80 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <span className="text-3xl md:text-4xl font-bold bg-linear-to-r from-yellow-300 to-yellow-400 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
            {value}
          </span>
          {suffix && (
            <span className="text-lg md:text-2xl text-white/60 dark:text-[#cbd5e0] ml-1">
              {suffix}
            </span>
          )}
        </motion.div>

        <motion.p
          className="text-sm text-white/50 dark:text-[#a0aec0]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: delay + 0.5 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          Real-time protocol metrics
        </motion.p>
      </div>
    </div>
  </motion.div>
);

export default function Metrics() {
  const containerRef = useRef<HTMLDivElement>(null);

  const metrics = [
    {
      label: "Total Value Locked",
      value: "$45.2M",
      suffix: "TVL",
      delay: 0,
    },
    {
      label: "Active Users",
      value: "12,450",
      suffix: "Users",
      delay: 0.2,
    },
    {
      label: "Total Borrowed",
      value: "$28.7M",
      suffix: "Assets",
      delay: 0.4,
    },
  ];

  return (
    <section id="metrics" className="py-20 md:py-32 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.h2
            className="text-4xl md:text-6xl font-bold mb-6 text-white dark:text-[#e8f0f7]"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Protocol Performance
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-white/90 dark:text-[#d0dce6] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            Real-time insights into Senja&apos;s lending ecosystem growth and adoption
          </motion.p>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          {metrics.map((metric, index) => (
            <MetricCard
              key={`metric-${index}`}
              label={metric.label}
              value={metric.value}
              suffix={metric.suffix}
              delay={metric.delay}
            />
          ))}
        </motion.div>

        {/* Bottom accent line */}
        <motion.div
          className="mt-16 md:mt-20 flex justify-center"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="w-32 h-1 bg-linear-to-r from-transparent via-yellow-300 to-transparent dark:via-blue-400" />
        </motion.div>
      </div>
    </section>
  );
}
