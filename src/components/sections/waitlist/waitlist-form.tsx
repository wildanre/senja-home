"use client";

import { SlideIn, ScaleIn, FadeIn, Stagger } from "@/components/ui/motion";

export default function WaitlistForm() {
  return (
    <SlideIn direction="right" distance={50} duration={0.8} amount={0.3} className="relative">

      <FadeIn delay={0.1} duration={0.6} amount={0.3} className="bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 rounded-3xl p-8 md:p-12 shadow-md border border-white/20 dark:border-[#004488]/50 backdrop-blur-2xl ">
        {/* Form with Name and Email (Disabled for Now) */}
        <Stagger staggerDelay={0.1} delay={0.4} className="space-y-6 opacity-50 pointer-events-none">
          <div>
            <input
              type="text"
              placeholder="Enter your full name"
              className="w-full px-6 py-4 rounded-2xl border-2 border-white/30 dark:border-[#004488] bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 text-white dark:text-[#e8f0f7] text-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
              disabled
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-6 py-4 rounded-2xl border-2 border-white/30 dark:border-[#004488] bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 text-white dark:text-[#e8f0f7] text-lg focus:ring-2 focus:ring-gray-200 dark:focus:ring-cyan-400 focus:border-transparent transition-all duration-200"
              disabled
            />
          </div>

          <button
            type="submit"
            className="w-full bg-white/70 dark:bg-gray-200 text-gray-900 dark:text-gray-900 font-semibold py-2 px-6 rounded-2xl text-lg  hover:bg-gray-50 dark:hover:bg-gray-300 transition-all duration-200"
            disabled
          >
            Join Waitlist
          </button>
        </Stagger>
      </FadeIn>
    </SlideIn>
  );
}

