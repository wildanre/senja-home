"use client";

import AdminLayout from "@/components/admin/admin-layout";
import AdminGuard from "@/components/admin/admin-guard";
import WaitlistData from "@/components/admin/waitlist-data";
import { WaitlistPageHeader } from "@/components/admin/waitlist";

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
