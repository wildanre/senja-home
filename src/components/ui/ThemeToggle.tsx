"use client";

import { useTheme } from "@/hooks/useTheme";

interface ThemeToggleProps {
  compact?: boolean;
}

export default function ThemeToggle({ compact = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {/* Light mode icon - hidden in compact mode */}
      {!compact && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 transition-colors duration-300 ${
            theme === "light" ? "text-orange-300" : "text-gray-400"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      )}

      {/* Slider */}
      <button
        onClick={toggleTheme}
        className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none cursor-pointer ${
          theme === "dark" ? "bg-gray-300/10 hover:bg-gray-700/40" : "bg-gray-300/30 hover:bg-gray-400/40"
        }`}
        aria-label="Toggle theme"
      >
        <span
          className={`absolute top-0.5 left-0.5 w-5 h-5  rounded-full shadow-md transform transition-transform duration-300 ${
            theme === "dark" ? "translate-x-6 bg-blue-400" : "translate-x-0 bg-orange-200"
          }`}
        />
      </button>

      {/* Dark mode icon - hidden in compact mode */}
      {!compact && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className={`w-4 h-4 transition-colors duration-300 ${
            theme === "dark" ? "text-[#60a5fa]" : "text-gray-600"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      )}
    </div>
  );
}
