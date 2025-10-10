export interface AdminCredentials {
  email: string;
  password: string;
}

export interface AdminUser {
  id: string;
  email: string;
}

export function getToken(): string | null {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('admin-token');
}

export function setToken(token: string): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('admin-token', token);
}

export function removeToken(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem('admin-token');
}

// Cache for auth verification to avoid repeated calls
let authCache: { result: boolean; timestamp: number } | null = null;
const AUTH_CACHE_DURATION = 60000; // 60 seconds - increased duration
const SHORT_CACHE_DURATION = 10000; // 10 seconds for failed attempts

export async function isAuthenticated(): Promise<boolean> {
  const token = getToken();
  console.log('🔍 Checking auth, token exists:', !!token);
  
  if (!token) {
    console.log('❌ No token found');
    return false;
  }
  
  // Check memory cache first
  if (authCache) {
    const age = Date.now() - authCache.timestamp;
    const maxAge = authCache.result ? AUTH_CACHE_DURATION : SHORT_CACHE_DURATION;
    
    if (age < maxAge) {
      console.log('✨ Using memory cached auth result:', authCache.result, `(age: ${Math.round(age/1000)}s)`);
      return authCache.result;
    }
  }
  
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
    console.log('🔄 Verifying token with:', `${backendUrl}/admin/verify`);
    
    // Verify token with backend
    const response = await fetch(`${backendUrl}/admin/verify`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });
    
    console.log('📡 Verify response status:', response.status);
    
    if (response.ok) {
      const data = await response.json();
      console.log('📡 Verify response data:', data);
      console.log('✅ Auth verification:', data.success);
      
      // Cache the result in memory only
      authCache = {
        result: data.success,
        timestamp: Date.now()
      };
      
      return data.success;
    }
    
    console.log('❌ Auth verification failed');
    
    // Cache negative result for shorter duration
    authCache = {
      result: false,
      timestamp: Date.now()
    };
    
    return false;
  } catch (error) {
    console.error('🚨 Auth verification error:', error);
    
    // Don't cache network errors, return previous cached result if available
    if (authCache && authCache.result) {
      console.log('🔄 Network error, using last known good state');
      return authCache.result;
    }
    
    // Cache negative result only if no previous good state
    authCache = {
      result: false,
      timestamp: Date.now()
    };
    
    return false;
  }
}

export async function loginAdmin(email: string, password: string): Promise<{ success: boolean; error?: string; token?: string; admin?: AdminUser }> {
  try {
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:3001';
    console.log('🔄 Attempting login to:', `${backendUrl}/admin/login`);
    
    const response = await fetch(`${backendUrl}/admin/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });
    
    console.log('📡 Response status:', response.status);
    const data = await response.json();
    console.log('📡 Response data:', data);
    
    if (data.success && data.token) {
      setToken(data.token);
      // Clear cache to force fresh auth check
      authCache = null;
      console.log('✅ Login successful, token saved');
      return { success: true, token: data.token, admin: data.admin };
    }
    
    console.log('❌ Login failed:', data.error);
    return { success: false, error: data.error || 'Login failed' };
  } catch (error) {
    console.error('🚨 Login error:', error);
    return { success: false, error: 'Network error' };
  }
}

export function logoutAdmin(): void {
  removeToken();
  // Clear memory cache
  authCache = null;
}

export function clearAuthCache(): void {
  authCache = null;
}

export function getAuthCacheStatus(): { cached: boolean; age?: number; result?: boolean } {
  if (!authCache) return { cached: false };
  return {
    cached: true,
    age: Date.now() - authCache.timestamp,
    result: authCache.result
  };
}