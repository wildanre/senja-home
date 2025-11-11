'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

interface AuthContextType {
  isAuthenticated: boolean | null; // null = loading, boolean = determined
  checkAuth: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, setAuthState] = useState<boolean | null>(null);
  const router = useRouter();
  const pathname = usePathname();

  const checkAuth = async (): Promise<void> => {
    try {
      const authenticated = await isAuthenticated();
      setAuthState(authenticated);
    } catch (error) {
      console.error('Auth check failed:', error);
      setAuthState(false);
    }
  };

  useEffect(() => {
    if (!pathname.startsWith('/admin')) {
      setAuthState(true); // Non-admin routes don't need auth
      return;
    }

    // For admin routes, always check authentication
    const handleAdminRoute = async () => {
      try {
        const authenticated = await isAuthenticated();
        setAuthState(authenticated);
        
        // If authenticated and on login pages, redirect to dashboard
        if (authenticated && (pathname === '/admin/auth/login' || pathname === '/admin/auth')) {
          router.replace('/admin/dashboard');
          return;
        }
        
        // If not authenticated and on protected admin pages, redirect to login
        if (!authenticated && pathname.startsWith('/admin') && 
            pathname !== '/admin/auth/login' && pathname !== '/admin/auth') {
          router.replace('/admin/auth/login');
        }
      } catch (error) {
        console.error('Auth check failed:', error);
        setAuthState(false);
        if (pathname.startsWith('/admin') && 
            pathname !== '/admin/auth/login' && pathname !== '/admin/auth') {
          router.replace('/admin/auth/login');
        }
      }
    };

    handleAdminRoute();
  }, [pathname, router]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: authState, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}