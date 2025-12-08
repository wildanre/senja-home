"use client";

import AdminLayout from "@/components/admin/admin-layout";
import AdminGuard from "@/components/admin/admin-guard";
import SendEmailForm from "@/components/admin/send-email-form";
import { EmailPageHeader } from "@/components/admin/email";

export default function AdminEmailPage() {
  return (
    <AdminGuard>
      <AdminLayout>
        <div className="space-y-6">
          <EmailPageHeader />
          <SendEmailForm />
        </div>
      </AdminLayout>
    </AdminGuard>
  );
}
