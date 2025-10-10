// Admin authentication utilities for JWT-based backend

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

export async function isAuthenticated(): Promise<boolean> {
  const token = getToken();
  console.log('🔍 Checking auth, token exists:', !!token);
  
  if (!token) return false;
  
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
      return data.success;
    }
    
    console.log('❌ Auth verification failed');
    return false;
  } catch (error) {
    console.error('🚨 Auth verification error:', error);
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
}