"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SidebarHeaderProps } from "@/types";
import ThemeToggle from "../../ui/layout/theme-toggle";

export default function SidebarHeader({
  isCollapsed,
  onToggleCollapse,
}: SidebarHeaderProps) {
  return (
    <div
      className={`p-4 border-b border-gray-200 dark:border-gray-700 ${
        isCollapsed ? "px-2" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        {!isCollapsed && (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">S</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                SenjaLabs
              </h1>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                Admin Panel
              </p>
            </div>
          </div>
        )}
        <button
          onClick={onToggleCollapse}
          className="hidden lg:flex p-1.5 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-gray-600 dark:text-gray-400" />
          )}
        </button>
      </div>

      {/* Theme toggle below logo - both expanded and collapsed */}
      <div
        className={`mt-3 ${
          isCollapsed ? "flex justify-center" : "flex justify-start pl-10"
        }`}
      >
        <div className={isCollapsed ? "scale-75" : ""}>
          <ThemeToggle compact={isCollapsed} />
        </div>
      </div>
    </div>
  );
}
