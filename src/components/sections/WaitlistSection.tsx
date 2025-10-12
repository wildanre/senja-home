"use client";

import { BACKGROUND_PATTERNS } from '@/utils/styles';

export default function WaitlistSection() {
  return (
    <section
      id="waitlist"
      className={`relative min-h-[80vh] w-full overflow-hidden py-20 px-4 ${BACKGROUND_PATTERNS.primary}`}
    >

      <div className="relative z-20 flex items-center justify-center min-h-[60vh] max-w-6xl mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          {/* Section Title - Consistent with theme */}
          <div className="mb-12">
            <h2 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-[#e8f0f7] mb-6 leading-tight">
              Join the Future
            </h2>
            <h3 className="text-2xl md:text-3xl font-semibold text-senja-orange dark:text-[#d0dce6] mb-8">
              Coming Soon
            </h3>
          </div>

          {/* Waitlist Card - Theme consistent */}
          <div className="bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20 dark:border-[#004488]/50 max-w-xl mx-auto">
            <p className="text-xl text-gray-700 dark:text-[#d0dce6] mb-8 leading-relaxed">
              Be the first to experience Senja when we launch. Join our waitlist
              for exclusive early access.
            </p>

            {/* Form with Name and Email (Disabled for Now) */}
            <div className="space-y-6 opacity-50 pointer-events-none">
              <div>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-[#004488] bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 text-gray-900 dark:text-[#e8f0f7] text-lg focus:ring-2 focus:ring-senja-orange dark:focus:ring-[#0066cc] focus:border-transparent transition-all duration-200"
                  disabled
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 rounded-2xl border-2 border-gray-200 dark:border-[#004488] bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 text-gray-900 dark:text-[#e8f0f7] text-lg focus:ring-2 focus:ring-senja-orange dark:focus:ring-[#0066cc] focus:border-transparent transition-all duration-200"
                  disabled
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-senja-orange to-amber-500 dark:from-[#004488] dark:to-[#0066cc] text-white font-bold py-4 px-8 rounded-2xl text-lg shadow-lg hover:shadow-xl transition-all duration-200"
                disabled
              >
                Join Waitlist
              </button>
            </div>

            <p className="text-sm text-gray-500 dark:text-[#d0dce6]/70 mt-6">
              We&apos;re preparing something incredible. Stay tuned for updates!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
