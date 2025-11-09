'use client';

import FooterHeader from './FooterHeader';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <FooterHeader />
        <FooterLinks />
        <FooterBottom />
      </div>

      {/* Background gradient accent */}
      <div className="absolute inset-0 pointer-events-none opacity-50">
        <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-300/5 dark:bg-blue-500/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
}

