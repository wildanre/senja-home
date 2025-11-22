'use client';

import { useDashboardStats } from '@/hooks/useDashboardStats';
import StatsCards from './StatsCards';
import QuickActions from './QuickActions';
import { LoadingSpinner } from '@/components/ui/loading';
import { RefreshCw } from 'lucide-react';

export default function DashboardContent() {
  const { stats, isLoading, error, refetch } = useDashboardStats();

  if (isLoading) {
    return <LoadingSpinner message="Loading dashboard data..." fullScreen />;
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-red-600 dark:text-red-400 mb-4">Failed to load dashboard data</p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">{error.message}</p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your waitlist, send broadcasts, and monitor system performance.
            </p>
          </div>
          <button
            onClick={() => refetch()}
            className="flex items-center gap-2 px-4 py-2 text-sm bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading}
          >
            <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>
      </div>

      <StatsCards stats={stats} />

      <QuickActions />
    </div>
  );
}
