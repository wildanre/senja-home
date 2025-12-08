'use client';

import { RefreshCw, Download } from 'lucide-react';
import { WaitlistActionsProps } from './types';
import { WaitlistUser } from './types';

interface WaitlistActionsExtendedProps extends WaitlistActionsProps {
  users: WaitlistUser[];
}

export default function WaitlistActions({ 
  onRefresh, 
  userCount, 
  isLoading = false,
  users 
}: WaitlistActionsExtendedProps) {
  const handleExportCSV = () => {
    if (users.length === 0) return;

    // Create CSV content
    const headers = ['No', 'Name', 'Email', 'Registration Date'];
    const rows = users.map((user, index) => [
      index + 1,
      user.name,
      user.email,
      new Date(user.createdAt).toLocaleString(),
    ]);

    const csvContent = [
      headers.join(','),
      ...rows.map((row) => row.map((cell) => `"${cell}"`).join(',')),
    ].join('\n');

    // Create blob and download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `waitlist-${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="mt-6 flex flex-wrap gap-4 justify-between items-center">
      <div className="flex gap-2">
        <button
          onClick={onRefresh}
          disabled={isLoading}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <RefreshCw className={`w-4 h-4 ${isLoading ? 'animate-spin' : ''}`} />
          <span>{isLoading ? 'Refreshing...' : 'Refresh'}</span>
        </button>
        
        <button
          onClick={handleExportCSV}
          disabled={userCount === 0}
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg transition-colors flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Download className="w-4 h-4" />
          <span>Export CSV</span>
        </button>
      </div>
      
      <div className="text-sm text-gray-500 dark:text-gray-400">
        Total: <span className="font-semibold text-gray-900 dark:text-white">{userCount}</span> registered users
      </div>
    </div>
  );
}