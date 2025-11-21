"use client";

import { motion } from "motion/react";
import ContactHeader from "./contact-header";
import ContactCard from "./contact-card";
import { contactItems } from "./contact-data";

export default function ContactSection() {
  const gridCells = Array.from({ length: 12 }, (_, i) => i);

  return (
    <section id="contacts" className="relative w-full py-10 lg:py-20 px-4">
      <div className="max-w-7xl mt-6 lg:mt-20 mx-auto">
        <ContactHeader />

        <motion.div
          className="grid grid-cols-4 grid-rows-3 max-w-6xl mx-auto lg:hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {gridCells.map((cellIndex) => {
            const col = (cellIndex % 4) + 1;
            const row = Math.floor(cellIndex / 4) + 1;
            const isLastCol = col === 4;
            const isLastRow = row === 3;
            const isFirstCol = col === 1;
            const isFirstRow = row === 1;
            
            const contactItem = contactItems.find((item) => {
              return item.gridPosition === `col-start-${col} row-start-${row}`;
            });

            return contactItem ? (
              <ContactCard 
                key={cellIndex} 
                item={contactItem} 
                index={cellIndex}
                isLastCol={isLastCol}
                isLastRow={isLastRow}
                isFirstCol={isFirstCol}
                isFirstRow={isFirstRow}
                mobileOnly={true}
              />
            ) : (
              <div
                key={cellIndex}
                className={`h-[100px] sm:h-[120px] border-white/5 dark:border-gray-700/20 ${!isLastCol ? 'border-r' : ''} ${!isLastRow ? 'border-b' : ''} ${!isFirstRow ? 'border-t' : ''} ${!isFirstCol ? 'border-l' : ''}`}
                style={{ borderWidth: '0.5px' }}
              />
            );
          })}
        </motion.div>

        {/* Desktop Layout - 4x3 Grid with Positioning */}
        <motion.div
          className="hidden lg:grid grid-cols-4 grid-rows-3 max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {gridCells.map((cellIndex) => {
            const col = (cellIndex % 4) + 1;
            const row = Math.floor(cellIndex / 4) + 1;
            const isLastCol = col === 4;
            const isLastRow = row === 3;
            
            const contactItem = contactItems.find((item) => {
              return item.gridPosition === `col-start-${col} row-start-${row}`;
            });

            return contactItem ? (
              <ContactCard 
                key={cellIndex} 
                item={contactItem} 
                index={cellIndex}
                isLastCol={isLastCol}
                isLastRow={isLastRow}
              />
            ) : (
              <div
                key={cellIndex}
                className={`h-[180px] border-white/10 dark:border-gray-700/30 ${!isLastCol ? 'border-r' : ''} ${!isLastRow ? 'border-b' : ''}`}
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
