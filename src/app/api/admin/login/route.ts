import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (parseError) {
      return NextResponse.json(
        { success: false, error: 'Invalid request body. Expected JSON.' },
        { status: 400 }
      );
    }

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: 'Email and password are required' },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { success: false, error: 'Backend URL not configured. Please set BACKEND_URL environment variable.' },
        { status: 500 }
      );
    }

    const backendEndpoint = `${backendUrl}/api/admin/login`;
    
    // Get CSRF cookie from request to forward to backend
    const cookieStore = await cookies();
    const csrfSecretCookie = cookieStore.get('csrf-secret');
    const csrfToken = request.headers.get('x-csrf-token');

    // Forward login request to backend with CSRF token
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
    };
    
    if (csrfToken) {
      headers['x-csrf-token'] = csrfToken;
    }
    
    if (csrfSecretCookie) {
      headers['Cookie'] = `csrf-secret=${csrfSecretCookie.value}`;
    }

    const response = await fetch(backendEndpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({ email, password }),
    });

    // Handle non-OK responses
    if (!response.ok) {
      let errorMessage = 'Login failed';
      
      // Try to parse error response
      try {
        const errorData = await response.json();
        errorMessage = errorData.error || errorData.message || `Backend returned ${response.status}`;
      } catch (parseErr) {
        // If response is not JSON, use status text
        const statusText = response.statusText || `HTTP ${response.status}`;
        errorMessage = statusText === 'Not Found' || response.status === 404
          ? 'Backend endpoint not found. Please check your backend configuration.'
          : `Backend error: ${statusText}`;
      }

      return NextResponse.json(
        { success: false, error: errorMessage },
        { status: response.status }
      );
    }

    // Parse successful response
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      return NextResponse.json(
        { success: false, error: 'Invalid response from backend' },
        { status: 500 }
      );
    }

    // Check if login was successful
    if (!data.success) {
      return NextResponse.json(
        { success: false, error: data.error || 'Login failed' },
        { status: 401 }
      );
    }

    // Extract token from backend Set-Cookie header or from response body
    let token = data.token;
    const backendCookies = response.headers.getSetCookie();
    
    if (!token) {
      // Backend sends token via Set-Cookie, extract it
      const adminTokenCookie = backendCookies.find(cookie => cookie.includes('admin-token='));
      
      if (adminTokenCookie) {
        const match = adminTokenCookie.match(/admin-token=([^;]+)/);
        if (match) {
          token = match[1];
        }
      }
    }

    if (token) {
      // Set httpOnly cookie with the token from backend
      const cookieStore = await cookies();
      cookieStore.set('admin-token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',
        maxAge: 60 * 60 * 24 * 7, // 7 days
        path: '/',
      });
    } else {
      // Forward all cookies from backend (including session cookies)
      const nextResponse = NextResponse.json({
        success: true,
        admin: data.admin,
      });
      
      backendCookies.forEach((cookie) => {
        nextResponse.headers.append('Set-Cookie', cookie);
      });
      
      return nextResponse;
    }

    // Return success without exposing token in response
    return NextResponse.json({
      success: true,
      admin: data.admin,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Network error' },
      { status: 500 }
    );
  }
}

