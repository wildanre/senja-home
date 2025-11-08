'use client';

import { motion } from 'motion/react';

export default function ContactSection() {
  const contactItems = [
    {
      icon: (
        <svg 
          className="w-8 h-8 text-white dark:text-[#0066cc]" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      ),
      title: "Email Us",
      description: "Have questions? We'd love to hear from you.",
      link: "senjalend@gmail.com",
      href: "mailto:senjalend@gmail.com",
      delay: 0,
    },
    {
      icon: (
        <svg 
          className="w-8 h-8 text-white dark:text-[#0066cc]" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      title: "Follow Us",
      description: "Stay updated with our latest news and updates.",
      link: "@SenjaLabs",
      href: "https://x.com/SenjaLabs",
      target: "_blank",
      delay: 0.2,
    },
  ];

  return (
    <section id="contacts" className="relative min-h-[60vh] w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <motion.h2 
          className="text-4xl md:text-5xl font-bold text-center mb-16 text-white dark:text-[#e8f0f7]"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          Get in Touch
        </motion.h2>
        
        {/* Contact Info - Grid with Animations */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {contactItems.map((item, index) => (
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
          ))}
        </motion.div>
      </div>
    </section>
  );
}