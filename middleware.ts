import { NextRequest, NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
  // Check if the request is for admin routes
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Allow access to auth pages
    if (request.nextUrl.pathname === '/admin/auth' || 
        request.nextUrl.pathname === '/admin/auth/login') {
      return NextResponse.next()
    }

    // For JWT token-based auth, we can't verify tokens in middleware
    // because we need to make API calls to the backend
    // The auth verification will be handled on the client side
    // Just allow the request to proceed to the page, and let React handle the auth
    return NextResponse.next()
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