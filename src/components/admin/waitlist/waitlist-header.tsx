"use client";

import type { WaitlistHeaderProps } from "@/types";

export default function WaitlistHeader({
  userCount,
  connectedWalletCount = 0,
}: WaitlistHeaderProps) {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Waitlist Data
        </h2>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
          Search, filter, sort, and export live waitlist registrations.
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
          <span className="text-blue-800 dark:text-blue-200 font-medium">
            {userCount} users
          </span>
        </div>
        <div className="bg-emerald-100 dark:bg-emerald-900 px-4 py-2 rounded-full">
          <span className="text-emerald-800 dark:text-emerald-200 font-medium">
            {connectedWalletCount} wallets connected
          </span>
        </div>
      </div>
    </div>
  );
}
