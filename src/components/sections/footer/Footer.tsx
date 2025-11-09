'use client';

import FooterHeader from './FooterHeader';
import FooterLinks from './FooterLinks';
import FooterBottom from './FooterBottom';

export default function Footer() {
  return (
    <footer className="relative py-16 md:py-20 px-4 overflow-hidden min-h-[600px]">
      {/* Large SENJA Background Text with Fade Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none">
        <div 
          className="text-[12rem] sm:text-[15rem] md:text-[18rem] lg:text-[22rem] xl:text-[25rem] font-black leading-none tracking-tighter select-none whitespace-nowrap"
          style={{
            color: 'rgba(200, 200, 200, 0.15)',
            maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 40%, transparent 100%)',
          }}
        >
          SENJA
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
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

