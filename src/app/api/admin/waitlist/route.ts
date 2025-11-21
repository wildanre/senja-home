import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin-token')?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { success: false, error: 'Backend URL not configured' },
        { status: 500 }
      );
    }

    // Forward request to backend
    const response = await fetch(`${backendUrl}/api/admin/waitlist`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (response.ok) {
      return NextResponse.json(data);
    }

    // If unauthorized, clear the cookie
    if (response.status === 401 || response.status === 403) {
      cookieStore.delete('admin-token');
    }

    return NextResponse.json(
      { success: false, error: data.error || 'Failed to fetch waitlist' },
      { status: response.status }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Network error' },
      { status: 500 }
    );
  }
}

