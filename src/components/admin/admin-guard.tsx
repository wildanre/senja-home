"use client";

import { useAuth } from "@/contexts/auth-context";
import { ReactNode } from "react";
import { LoadingSpinner } from "@/components/ui/loading";

interface AdminGuardProps {
  children: ReactNode;
}

export default function AdminGuard({ children }: AdminGuardProps) {
  const { isAuthenticated } = useAuth();

  // Show loading while determining auth state
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
        <LoadingSpinner message="Checking authentication..." />
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
