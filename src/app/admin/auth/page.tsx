'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

export default function AdminAuthPage() {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkAuthAndRedirect = async () => {
      try {
        const authenticated = await isAuthenticated();
        if (authenticated) {
          console.log('🔄 User already authenticated, redirecting to dashboard...');
          router.replace('/admin/dashboard');
        } else {
          console.log('🔄 User not authenticated, redirecting to login...');
          router.replace('/admin/auth/login');
        }
      } catch (error) {
        console.log('🔍 Auth check failed, redirecting to login...');
        router.replace('/admin/auth/login');
      } finally {
        setIsChecking(false);
      }
    };

    checkAuthAndRedirect();
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600 dark:text-gray-400">
          {isChecking ? 'Checking authentication...' : 'Redirecting...'}
        </p>
      </div>
    </div>
  );
}