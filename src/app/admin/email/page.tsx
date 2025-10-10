'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';
import AdminLayout from '@/components/admin/AdminLayout';
import SendEmailForm from '@/components/admin/SendEmailForm';

export default function AdminEmailPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    const authenticated = await isAuthenticated();
    if (!authenticated) {
      router.push('/admin/auth/login');
      return;
    }
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Page Header */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                📧 Email Broadcast
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Send custom emails with attractive themes to all waitlist users
              </p>
            </div>
            <div className="flex space-x-3">
              <button
                onClick={() => router.push('/admin/waitlist')}
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors flex items-center"
              >
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                View Waitlist
              </button>
            </div>
          </div>
        </div>

        {/* Email Form Component */}
        <SendEmailForm />

        {/* Tips & Guidelines */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-yellow-800 dark:text-yellow-200 mb-3">
            💡 Tips for Effective Emails
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-yellow-700 dark:text-yellow-300">
            <div>
              <h4 className="font-medium mb-2">Subject Line:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Create clear and engaging subject lines</li>
                <li>Avoid spam words like "FREE" or "URGENT"</li>
                <li>Maximum 50 characters for mobile</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium mb-2">Content:</h4>
              <ul className="space-y-1 list-disc list-inside">
                <li>Use personal and friendly language</li>
                <li>Include clear call-to-action</li>
                <li>Use URL to direct to website</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}