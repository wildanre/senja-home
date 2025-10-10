'use client';

import { useState, useEffect } from 'react';
import { getToken } from '@/lib/auth';

interface WaitlistUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export default function WaitlistData() {
  const [waitlistUsers, setWaitlistUsers] = useState<WaitlistUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadWaitlistData();
  }, []);

  const loadWaitlistData = async () => {
    try {
      const token = getToken();
      const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001'}/admin/waitlist`, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (response.ok) {
        const data = await response.json();
        setWaitlistUsers(data.users || []);
      } else {
        console.error('Failed to load waitlist data');
      }
    } catch (error) {
      console.error('Error loading waitlist:', error);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <div className="flex items-center justify-center py-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          <span className="ml-3 text-gray-600 dark:text-gray-400">Loading data...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Waitlist Data
        </h2>
        <div className="bg-blue-100 dark:bg-blue-900 px-3 py-1 rounded-full">
          <span className="text-blue-800 dark:text-blue-200 font-medium">
            {waitlistUsers.length} users
          </span>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="border-b dark:border-gray-700">
              <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">No</th>
              <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Name</th>
              <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Email</th>
              <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Registration Date</th>
            </tr>
          </thead>
          <tbody>
            {waitlistUsers.map((user, index) => (
              <tr 
                key={user.id} 
                className={`border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
                  index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-750' : 'bg-white dark:bg-gray-800'
                }`}
              >
                <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
                  {index + 1}
                </td>
                <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
                  {user.name}
                </td>
                <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
                  {user.email}
                </td>
                <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
                  {new Date(user.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        {waitlistUsers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              No users yet
            </h3>
            <p className="text-gray-500 dark:text-gray-400">
              No users have registered for the waitlist yet
            </p>
          </div>
        )}
      </div>
      
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={loadWaitlistData}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 rounded-md transition-colors flex items-center"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Refresh Data
        </button>
        
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Total: {waitlistUsers.length} registered users
        </div>
      </div>
    </div>
  );
}