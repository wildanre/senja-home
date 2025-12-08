"use client";

import AdminLayout from "@/components/admin/admin-layout";
import AdminGuard from "@/components/admin/admin-guard";
import { DashboardContent } from "@/components/admin/dashboard";

export default function AdminDashboard() {
  return (
    <AdminGuard>
      <AdminLayout>
        <DashboardContent />
      </AdminLayout>
    </AdminGuard>
  );
}
