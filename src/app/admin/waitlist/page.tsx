'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import WaitlistData from '@/components/admin/WaitlistData';
import { WaitlistPageHeader } from '@/components/admin/waitlist';

export default function AdminWaitlistPage() {
  return (
    <AdminGuard>
      <AdminLayout>
        <div className="space-y-6">
          <WaitlistPageHeader />
          <WaitlistData />
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
