"use client";

import { motion } from "motion/react";
import ContactHeader from "./ContactHeader";
import ContactCard from "./ContactCard";
import { contactItems } from "./contactData";

export default function ContactSection() {
  return (
    <section id="contacts" className="relative w-full py-20 px-4">
      <div className="max-w-6xl mt-10 lg:mt-20 mx-auto">
        {/* Section Title */}
        <ContactHeader />

        {/* Contact Info - Grid with Animations */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          {contactItems.map((item, index) => (
            <ContactCard key={index} item={item} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
