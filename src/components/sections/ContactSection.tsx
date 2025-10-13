import { BACKGROUND_PATTERNS } from '@/utils/styles';

export default function ContactSection() {
  return (
    <section id="contacts" className={`relative min-h-[60vh] w-full py-20 px-4 ${BACKGROUND_PATTERNS.hero}`}>
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white dark:text-[#e8f0f7]">
          Get in Touch
        </h2>
        
        {/* Contact Info - Simple Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Email Contact */}
          <div className="bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-[#004488]/50 text-center">
            <div className="mb-6">
              <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-white dark:text-[#0066cc]" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-100 dark:text-[#e8f0f7] mb-2">
                Email Us
              </h3>
              <p className="text-gray-100 dark:text-[#d0dce6] mb-4">
                Have questions? We&#39;d love to hear from you.
              </p>
              <a 
                href="mailto:senjalend@gmail.com" 
                className="text-lg font-semibold text-orange-200 dark:text-[#0066cc] hover:text-amber-600 dark:hover:text-[#0088ff] transition-colors duration-200"
              >
                senjalend@gmail.com
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-gradient-to-r from-white/5 to-transparent dark:from-gray-900/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-[#004488]/50 text-center">
            <div className="mb-6">
              <div className="rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg 
                  className="w-8 h-8 text-white dark:text-[#0066cc]" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-100 dark:text-[#e8f0f7] mb-2">
                Follow Us
              </h3>
              <p className="text-gray-100 dark:text-[#d0dce6] mb-4">
                Stay updated with our latest news and updates.
              </p>
              <a 
                href="https://x.com/SenjaLabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-lg font-semibold text-orange-200 dark:text-[#0066cc] hover:text-amber-600 dark:hover:text-[#0088ff] transition-colors duration-200"
              >
                @SenjaLabs
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}