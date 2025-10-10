'use client';

import { RefreshCw } from 'lucide-react';
import { WaitlistActionsProps } from './types';

export default function WaitlistActions({ 
  onRefresh, 
  userCount, 
  isLoading = false 
}: WaitlistActionsProps) {
  return (
    <div className="mt-6 flex justify-between items-center">
      <button
        onClick={onRefresh}
        disabled={isLoading}
        className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-lg transition-colors flex items-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
        <span>{isLoading ? 'Refreshing...' : 'Refresh Data'}</span>
      </button>
      
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Total: {userCount} registered users
      </div>
    </div>
  );
}