'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import WaitlistData from '@/components/admin/WaitlistData';
import { Mail } from 'lucide-react';

export default function AdminWaitlistPage() {
  return (
    <AdminGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Waitlist Management
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              View and manage all waitlist subscribers.
            </p>
          </div>

          <WaitlistData />
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
