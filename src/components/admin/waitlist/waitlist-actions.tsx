"use client";

import { Download, RefreshCw } from "lucide-react";
import type { WaitlistActionsProps } from "@/types";

export default function WaitlistActions({
  onRefresh,
  userCount,
  filteredCount,
  isLoading = false,
  onExport,
}: WaitlistActionsProps) {
  return (
    <div className="mt-6 flex flex-wrap gap-4 justify-between items-center">
      <div className="flex gap-2">
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? "animate-spin" : ""}`} />
          <span>{isLoading ? "Refreshing..." : "Refresh"}</span>
        </button>

        <button
          onClick={onExport}
          disabled={!onExport || filteredCount === 0}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </div>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        Showing{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {filteredCount ?? userCount}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-gray-900 dark:text-white">
          {userCount}
        </span>{" "}
        users
      </div>
    </div>
  );
}
