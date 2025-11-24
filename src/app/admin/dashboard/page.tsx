'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import { DashboardContent } from '@/components/admin/dashboard';

export default function AdminDashboard() {
  return (
    <AdminGuard>
      <AdminLayout>
        <DashboardContent />
      </AdminLayout>
    </AdminGuard>
  );
}
