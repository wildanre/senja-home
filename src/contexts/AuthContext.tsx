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

  const checkAuth = async () => {
    try {
      const authenticated = await isAuthenticated();
      setAuthState(authenticated);
      
      // Only redirect if we're on an admin page and not authenticated
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

  useEffect(() => {
    // Only check auth for admin routes
    if (pathname.startsWith('/admin')) {
      checkAuth();
    } else {
      setAuthState(true); // Non-admin routes don't need auth
    }
  }, [pathname]);

  return (
    <AuthContext.Provider value={{ isAuthenticated: authState, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}