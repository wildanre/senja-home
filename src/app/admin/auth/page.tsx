'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminAuthPage() {
  const router = useRouter();

  useEffect(() => {
    // Just redirect to login, AuthContext will handle authentication check
    router.replace('/admin/auth/login');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">Redirecting...</p>
      </div>
    </div>
  );
}