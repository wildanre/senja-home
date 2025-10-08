import { BACKGROUND_PATTERNS } from "@/utils/styles";

export default function ContactAndWaitlist() {
  return (
    <section
      id="contacts"
      className={`py-20 px-4 ${BACKGROUND_PATTERNS.primary}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-senja-brown dark:text-[#e8f0f7]">
          Contacts
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Card */}
          <div className="bg-gradient-to-br from-white via-orange-50/50 to-amber-50/30 dark:from-slate-800 dark:via-blue-900/50 dark:to-indigo-900/30 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-orange-100/50 dark:border-blue-800/50 backdrop-blur-sm hover:scale-[1.02] group relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-200/20 to-amber-200/20 dark:from-blue-400/10 dark:to-indigo-400/10 rounded-full blur-3xl -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

            <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent mb-6 relative z-10">
              Follow Us
            </h3>

            <div className="flex items-center space-x-4 relative z-10">
              <a 
                href="https://x.com/SenjaLabs" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex-shrink-0 bg-gradient-to-br from-orange-500 to-amber-500 dark:from-blue-500 dark:to-indigo-500 rounded-xl p-3 shadow-lg group-hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.80l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800 dark:text-slate-200 mb-1">
                  X (Twitter)
                </h3>
              </div>
            </div>
          </div>

          {/* Join Waitlist Card */}
          <div
            id="waitlist"
            className="bg-gradient-to-br from-white via-blue-50/50 to-indigo-50/30 dark:from-slate-800 dark:via-indigo-900/50 dark:to-purple-900/30 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-blue-100/50 dark:border-indigo-800/50 backdrop-blur-sm hover:scale-[1.02] group relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-blue-200/20 to-indigo-200/20 dark:from-indigo-400/10 dark:to-purple-400/10 rounded-full blur-3xl translate-y-16 -translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>

            {/* Form Content (Blurred) */}
            <div className="p-8 filter blur-xl relative z-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-slate-200 mb-6">
                Join Waitlist
              </h2>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-slate-300 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    disabled
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-slate-600 bg-gray-100 dark:bg-slate-600 text-gray-500 dark:text-slate-400 cursor-not-allowed transition-colors duration-200"
                    placeholder="Enter your email"
                  />
                </div>
                <button
                  type="submit"
                  disabled
                  className="w-full bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-400 font-semibold py-3 px-6 rounded-xl cursor-not-allowed transition-all duration-200 shadow-lg"
                >
                  Join Waitlist
                </button>
              </form>
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
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
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
