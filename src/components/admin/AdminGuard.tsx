'use client';

import { useAuth } from '@/contexts/auth-context';
import { ReactNode } from 'react';

interface AdminGuardProps {
  children: ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { isAuthenticated } = useAuth();

  // Show loading while determining auth state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Checking authentication...</p>
        </div>
      </div>
    );
  }

  // If not authenticated, return null (AuthProvider will handle redirect)
  if (!isAuthenticated) {
    return null;
  }

  // If authenticated, render the children
  return <>{children}</>;
}