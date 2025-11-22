'use client';

import AdminLayout from '@/components/admin/AdminLayout';
import AdminGuard from '@/components/admin/AdminGuard';
import SendEmailForm from '@/components/admin/SendEmailForm';
import { EmailPageHeader } from '@/components/admin/email';

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
