"use client";

import { motion } from "motion/react";

export default function WaitlistForm() {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* Overlay Coming Soon */}
      <motion.div
        className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: false, amount: 0.5 }}
      >
        <motion.span
          className="text-gray-200/80 dark:text-gray-200 text-3xl md:text-4xl font-semibold "
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.6,
            delay: 0.6,
            type: "spring",
            stiffness: 100,
          }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Coming Soon
        </motion.span>
      </motion.div>

      {/* Card Content */}
      <motion.div
        className="bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20 dark:border-[#004488]/50 backdrop-blur-2xl filter blur-sm opacity-70"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        {/* Form with Name and Email (Disabled for Now) */}
        <motion.div
          className="space-y-6 opacity-50 pointer-events-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-6 py-4 rounded-2xl border-2 border-white/30 dark:border-[#004488] bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 text-white dark:text-[#e8f0f7] text-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
              disabled
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-2xl border-2 border-white/30 dark:border-[#004488] bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 text-white dark:text-[#e8f0f7] text-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
              disabled
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-white/70 dark:bg-gray-200 text-gray-900 dark:text-gray-900 font-semibold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-300 transition-all duration-200"
            disabled
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
            whileHover={{ scale: 1.02 }}
          >
            Join Waitlist
          </motion.button>
        </motion.div>

        <motion.p
          className="text-sm text-gray-500 dark:text-[#d0dce6]/70 mt-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          We&apos;re preparing something incredible. Stay tuned for updates!
        </motion.p>
      </motion.div>
    </motion.div>
  );
}

