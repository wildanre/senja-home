import { BACKGROUND_PATTERNS, BORDER_PATTERNS, SHADOW_PATTERNS } from '@/utils/styles';

export default function ContactAndWaitlist() {
  return (
    <section id="contacts" className={`py-20 px-4 ${BACKGROUND_PATTERNS.primary}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-senja-brown dark:text-[#e8f0f7]">
          Contacts
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Card */}
          <div className={`${BACKGROUND_PATTERNS.card.primary} rounded-xl p-8 ${SHADOW_PATTERNS.md} transition-all duration-300 ${BORDER_PATTERNS.primary}`}>
            <h3 className="text-2xl md:text-3xl font-bold text-senja-brown dark:text-[#e8f0f7] mb-6">
              Follow Us
            </h3>
            
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 bg-senja-orange/10 dark:bg-[#60a5fa]/10 rounded-lg p-3">
                <svg 
                  className="w-8 h-8 text-senja-orange dark:text-[#60a5fa]" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-senja-brown dark:text-[#e8f0f7] mb-1">
                  X (Twitter)
                </h3>
                <a 
                  href="https://x.com/SenjaLabs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-senja-orange dark:text-[#60a5fa] hover:underline transition-colors duration-200"
                >
                  https://x.com/SenjaLabs
                </a>
              </div>
            </div>
          </div>
          
          {/* Join Waitlist Card */}
          <div id="waitlist" className={`${BACKGROUND_PATTERNS.card.primary} rounded-xl ${SHADOW_PATTERNS.md} ${BORDER_PATTERNS.primary} relative overflow-hidden`}>
            {/* Form Content (Blurred) */}
            <div className="p-8 filter blur-sm">
              <h2 className="text-2xl md:text-3xl font-bold text-senja-brown dark:text-[#e8f0f7] mb-6">
                Join Waitlist
              </h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-senja-brown dark:text-[#e8f0f7] mb-2">
                    Full Name
                  </label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-senja-brown dark:text-[#e8f0f7] focus:ring-2 focus:ring-senja-orange dark:focus:ring-[#60a5fa] focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-senja-brown dark:text-[#e8f0f7] mb-2">
                    Email Address
                  </label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-senja-brown dark:text-[#e8f0f7] focus:ring-2 focus:ring-senja-orange dark:focus:ring-[#60a5fa] focus:border-transparent"
                    placeholder="Enter your email address"
                  />
                </div>
                
                <button className="w-full bg-gradient-to-r from-senja-orange to-senja-orange/80 dark:from-[#60a5fa] dark:to-[#3b82f6] text-white font-semibold py-3 px-6 rounded-lg hover:shadow-lg transition-all duration-200">
                  Join Waitlist
                </button>
              </div>
            </div>
            
            {/* Coming Soon Overlay */}
            <div className="absolute inset-0 bg-white/90 dark:bg-gray-800/90 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-senja-orange dark:bg-[#60a5fa] rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <svg 
                    className="w-8 h-8 text-white" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-senja-brown dark:text-[#e8f0f7] mb-2">
                  Join Waitlist
                </h3>
                <h4 className="text-xl font-semibold text-senja-brown dark:text-[#e8f0f7] mb-2">
                  Coming Soon
                </h4>
                <p className="text-senja-brown/70 dark:text-[#d0dce6]">
                  We&apos;re preparing something amazing for you
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}