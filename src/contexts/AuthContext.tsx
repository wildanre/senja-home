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
      return authenticated;
    } catch (error) {
      console.error('Auth check failed:', error);
      setAuthState(false);
      return false;
    }
  };

  const handleNavigation = async (currentPath: string) => {
    console.log('🧭 Navigation to:', currentPath, 'Current auth state:', authState);
    
    if (!currentPath.startsWith('/admin')) {
      setAuthState(true); // Non-admin routes don't need auth
      return;
    }

    // For admin routes, check if we already have auth state
    if (authState !== null) {
      console.log('📋 Using cached auth state for navigation, no fetch needed');
      // Use cached state for navigation logic
      if (authState === true && (currentPath === '/admin/auth/login' || currentPath === '/admin/auth')) {
        console.log('🔄 Authenticated user on login page, redirecting to dashboard');
        router.replace('/admin/dashboard');
      } else if (authState === false && currentPath.startsWith('/admin') && 
                 currentPath !== '/admin/auth/login' && currentPath !== '/admin/auth') {
        console.log('🔄 Unauthenticated user on protected page, redirecting to login');
        router.replace('/admin/auth/login');
      }
    } else {
      console.log('🔍 First time check or need fresh verification');
      // First time or need fresh check
      const authenticated = await checkAuth();
      
      if (authenticated && (currentPath === '/admin/auth/login' || currentPath === '/admin/auth')) {
        console.log('🔄 First check: authenticated user on login page, redirecting to dashboard');
        router.replace('/admin/dashboard');
      } else if (!authenticated && currentPath.startsWith('/admin') && 
                 currentPath !== '/admin/auth/login' && currentPath !== '/admin/auth') {
        console.log('🔄 First check: unauthenticated user on protected page, redirecting to login');
        router.replace('/admin/auth/login');
      }
    }
  };

  useEffect(() => {
    handleNavigation(pathname);
  }, [pathname]); // Only depend on pathname

  // Force refresh auth state when explicitly called
  const forceCheckAuth = async (): Promise<void> => {
    await checkAuth();
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated: authState, checkAuth: forceCheckAuth }}>
      {children}
    </AuthContext.Provider>
  );
}