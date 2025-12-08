"use client";

import { LogOut } from "lucide-react";
import type { SidebarFooterProps } from "@/types";

export default function SidebarFooter({
  isCollapsed,
  onLogout,
}: SidebarFooterProps) {
  return (
    <div
      className={`border-t border-gray-200 dark:border-gray-700 p-4 ${
        isCollapsed ? "px-2" : ""
      }`}
    >
      {!isCollapsed && (
        <div className="flex items-center space-x-3 mb-3 p-2">
          <div className="w-8 h-8 bg-gray-200 dark:bg-gray-600 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600 dark:text-gray-300">
              A
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 dark:text-white">
              Admin User
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Administrator
            </p>
          </div>
        </div>
      )}
      <button
        onClick={onLogout}
        className={`
          w-full flex items-center space-x-3 px-3 py-2 rounded-lg
          text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-900/20
          transition-colors
          ${isCollapsed ? "justify-center px-2" : ""}
        `}
      >
        <LogOut className="w-5 h-5 flex-shrink-0" />
        {!isCollapsed && <span className="font-medium">Logout</span>}
      </button>
    </div>
  );
}
