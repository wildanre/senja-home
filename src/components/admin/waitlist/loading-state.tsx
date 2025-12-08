"use client";

import type { LoadingStateProps } from "@/types";

export default function LoadingState({
  message = "Loading data...",
}: LoadingStateProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <div className="flex items-center justify-center py-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600 dark:text-gray-400">{message}</span>
      </div>
    </div>
  );
}
