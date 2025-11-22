import Link from 'next/link';
import { Users, Mail } from 'lucide-react';

export default function QuickActions() {
  return (
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
  );
}
