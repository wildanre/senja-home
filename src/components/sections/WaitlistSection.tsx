'use client';

import { motion } from 'motion/react';
import { BACKGROUND_PATTERNS } from '@/utils/styles';

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className={`relative min-h-[80vh] w-full overflow-hidden py-20 px-4 ${BACKGROUND_PATTERNS.primary}`}
    >

      <div className="relative z-20 flex items-center justify-center min-h-[60vh] max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Title - Animated */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-[#e8f0f7] mb-6 leading-tight"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, type: "spring", stiffness: 80 }}
              viewport={{ once: false, amount: 0.5 }}
            >
              Join the Future
            </motion.h2>
          </motion.div>

          {/* Waitlist Card - Theme consistent */}
          <motion.div 
            className="relative max-w-xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
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
                className="text-senja-orange dark:text-[#d0dce6] text-3xl md:text-4xl font-semibold px-8 py-4 rounded-2xl backdrop-blur-sm"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6, type: "spring", stiffness: 100 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Coming Soon
              </motion.span>
            </motion.div>
            
            {/* Card Content */}
            <motion.div 
              className="bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-[#004488]/50 backdrop-blur-2xl filter blur-sm opacity-70"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <motion.p 
                className="text-xl text-gray-700 dark:text-[#d0dce6] mb-8 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: false, amount: 0.5 }}
              >
                Be the first to experience Senja when we launch. Join our waitlist
                for exclusive early access.
              </motion.p>
              
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
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-[#004488] bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 text-gray-900 dark:text-[#e8f0f7] text-lg focus:ring-2 focus:ring-senja-orange dark:focus:ring-[#0066cc] focus:border-transparent transition-all duration-200"
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
                    className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-[#004488] bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 text-gray-900 dark:text-[#e8f0f7] text-lg focus:ring-2 focus:ring-senja-orange dark:focus:ring-[#0066cc] focus:border-transparent transition-all duration-200"
                    disabled
                  />
                </motion.div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-senja-orange to-amber-500 dark:from-[#004488] dark:to-[#0066cc] text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
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
        </div>
      </div>
    </section>
  );
}
