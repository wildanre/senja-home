import { CalendarClock, UserCheck, Users } from "lucide-react";
import { formatWaitlistDate } from "@/lib/admin-waitlist";
import type { DashboardStats } from "@/types";

interface StatsCardsProps {
  stats: DashboardStats;
}

export default function StatsCards({ stats }: StatsCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900">
            <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Total Waitlist
            </h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {stats.totalUsers}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Registered subscribers
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900">
            <UserCheck className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Wallet Connected
            </h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">
              {stats.connectedWallets}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {stats.newUsersToday} joined today
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900">
            <CalendarClock className="w-6 h-6 text-amber-600 dark:text-amber-400" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Latest Signup
            </h3>
            <p className="text-lg font-bold text-amber-600 dark:text-amber-400">
              {stats.latestSignupAt
                ? formatWaitlistDate(stats.latestSignupAt)
                : "No data"}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Most recent registration
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
