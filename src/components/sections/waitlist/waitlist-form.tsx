"use client";

export default function WaitlistForm() {
  return (
    <div className="space-y-4 opacity-50 pointer-events-none">
      <input
        type="text"
        placeholder="Enter your full name"
        className="w-full px-4 py-3 rounded-lg border border-white/20 dark:border-gray-700 bg-white/5 dark:bg-gray-900/30 text-white dark:text-gray-200 text-base"
        disabled
      />

      <input
        type="email"
        placeholder="Enter your email address"
        className="w-full px-4 py-3 rounded-lg border border-white/20 dark:border-gray-700 bg-white/5 dark:bg-gray-900/30 text-white dark:text-gray-200 text-base"
        disabled
      />

      <button
        type="submit"
        className="w-full bg-white/20 dark:bg-gray-700 text-white dark:text-gray-200 font-medium py-3 px-6 rounded-lg text-base"
        disabled
      >
        Join Waitlist
      </button>
    </div>
  );
}

