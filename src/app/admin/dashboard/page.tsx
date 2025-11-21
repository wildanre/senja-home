'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import { Users, Mail, Activity } from 'lucide-react';

export default function AdminDashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    emailsSent: 0,
    activeUsers: 0
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    try {
      setTimeout(() => {
        setStats({
          totalUsers: 1250,
          emailsSent: 45,
          activeUsers: 892
        });
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <AdminGuard>
        <AdminLayout>
          <div className="min-h-screen flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p>Loading...</p>
            </div>
          </div>
        </AdminLayout>
      </AdminGuard>
    );
  }

  return (
    <AdminGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Welcome to Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              Manage your waitlist, send broadcasts, and monitor system performance.
            </p>
          </div>

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

          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">Quick Actions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/admin/waitlist"
                className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-300 dark:hover:border-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-200 text-left group block"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors">
                    <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">View Waitlist Data</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Manage and view user list</p>
                  </div>
                </div>
              </Link>
              
              <Link
                href="/admin/email"
                className="p-6 border-2 border-gray-200 dark:border-gray-700 rounded-xl hover:border-green-300 dark:hover:border-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition-all duration-200 text-left group block"
              >
                <div className="flex items-center">
                  <div className="p-3 rounded-xl bg-green-100 dark:bg-green-900 group-hover:bg-green-200 dark:group-hover:bg-green-800 transition-colors">
                    <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-gray-900 dark:text-white">Send Email Broadcast</h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Send email to all waitlist users</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
