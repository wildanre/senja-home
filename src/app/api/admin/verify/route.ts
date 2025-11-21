import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    
    // Get all cookies to forward to backend
    const cookieHeader = request.headers.get('cookie');

    if (!cookieHeader || !cookieHeader.includes('authToken=')) {
      return NextResponse.json(
        { success: false },
        { status: 200 }
      );
    }

    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { success: false, error: 'Backend URL not configured' },
        { status: 500 }
      );
    }

    // Verify by forwarding cookies to backend (backend expects authToken cookie)
    const response = await fetch(`${backendUrl}/api/admin/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': cookieHeader,
      },
    });

    // Handle non-OK responses
    if (!response.ok) {
      // If verification fails, clear the invalid cookie
      if (response.status === 401 || response.status === 403) {
        cookieStore.delete('authToken');
        
        return NextResponse.json(
          { success: false },
          { status: 200 }
        );
      }

      return NextResponse.json(
        { success: false },
        { status: response.status }
      );
    }

    // Parse successful response
    let data;
    try {
      data = await response.json();
    } catch (parseError) {
      return NextResponse.json(
        { success: false },
        { status: 500 }
      );
    }

    if (data.success) {
      return NextResponse.json({ 
        success: true,
        admin: data.admin 
      });
    }

    // If backend says success: false, clear cookie and return unauthenticated
    cookieStore.delete('authToken');
    return NextResponse.json(
      { success: false },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false },
      { status: 500 }
    );
  }
}

