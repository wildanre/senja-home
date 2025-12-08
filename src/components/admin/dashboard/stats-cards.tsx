import { Users, Mail, Activity } from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  emailsSent: number;
  activeUsers: number;
}

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
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Total Users</h3>
            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.totalUsers}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Waitlist subscribers</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900">
            <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Emails Sent</h3>
            <p className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.emailsSent}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">Total broadcasts</p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center">
          <div className="p-3 rounded-xl bg-purple-100 dark:bg-purple-900">
            <Activity className="w-6 h-6 text-purple-600 dark:text-purple-400" />
          </div>
          <div className="ml-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">System Status</h3>
            <p className="text-2xl font-bold text-purple-600 dark:text-purple-400">Active</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">All systems operational</p>
          </div>
        </div>
      </div>
    </div>
  );
}
