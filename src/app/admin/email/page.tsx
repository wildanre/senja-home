"use client";

import AdminLayout from "@/components/admin/AdminLayout";
import AdminGuard from "@/components/admin/AdminGuard";
import SendEmailForm from "@/components/admin/SendEmailForm";
import { Users } from "lucide-react";

export default function AdminEmailPage() {
  return (
    <AdminGuard>
      <AdminLayout>
        <div className="space-y-6">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900">
                <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                Send Email Broadcast
              </h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400">
              Send personalized emails to all waitlist subscribers.
            </p>
          </div>

          <SendEmailForm />
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
