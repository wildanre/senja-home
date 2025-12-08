"use client";

import type { EmailTheme } from "@/types";

interface ThemeSelectorProps {
  themes: EmailTheme[];
  selectedTheme: EmailTheme;
  onThemeSelect: (theme: EmailTheme) => void;
}

export default function ThemeSelector({
  themes,
  selectedTheme,
  onThemeSelect,
}: ThemeSelectorProps) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
        Choose Email Theme
      </label>
      <div className="grid grid-cols-3 gap-3">
        {themes.map((theme) => (
          <div
            key={theme.id}
            onClick={() => onThemeSelect(theme)}
            className={`p-3 border rounded-lg cursor-pointer transition-all ${
              selectedTheme.id === theme.id
                ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                : "border-gray-300 dark:border-gray-600 hover:border-gray-400"
            }`}
          >
            <div className={`w-full h-3 ${theme.color} rounded mb-2`}></div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              {theme.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
