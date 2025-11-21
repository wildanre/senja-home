import { NextRequest, NextResponse } from 'next/server'

export async function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  
  // Handle waitlist subdomain
  if (hostname.startsWith('waitlist.')) {
    if (request.nextUrl.pathname.startsWith('/waitlist')) {
      return NextResponse.next()
    }
    
    if (request.nextUrl.pathname === '/' || request.nextUrl.pathname === '') {
      return NextResponse.rewrite(new URL('/waitlist', request.url))
    }
  }

  // Admin route protection
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to auth pages without authentication
    if (request.nextUrl.pathname === '/admin/auth' || 
        request.nextUrl.pathname === '/admin/auth/login') {
      return NextResponse.next()
    }
    
    // Verify authentication with backend by forwarding cookies
    try {
      const backendUrl = process.env.BACKEND_URL || 'http://localhost:8000'
      
      // Get all cookies to forward to backend
      const cookieHeader = request.headers.get('cookie') || ''
      
      const verifyResponse = await fetch(`${backendUrl}/api/admin/verify`, {
        method: 'GET',
        headers: {
          'Cookie': cookieHeader,
          'Content-Type': 'application/json',
        },
      })
      
      if (!verifyResponse.ok) {
        // Not authenticated, redirect to login
        const loginUrl = new URL('/admin/auth/login', request.url)
        loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
      }
      
      const data = await verifyResponse.json()
      if (!data.success) {
        // Authentication failed, redirect to login
        const loginUrl = new URL('/admin/auth/login', request.url)
        loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
        return NextResponse.redirect(loginUrl)
      }
      
      // Authenticated, allow access
      return NextResponse.next()
    } catch (error) {
      // On error, redirect to login for safety
      const loginUrl = new URL('/admin/auth/login', request.url)
      loginUrl.searchParams.set('redirect', request.nextUrl.pathname)
      return NextResponse.redirect(loginUrl)
    }
  }

  return NextResponse.next()
}

// Configure which paths the middleware should run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder files
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.webp$|.*\\.avif$).*)',
  ],
}