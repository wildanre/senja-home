import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";

  // Handle waitlist subdomain
  if (hostname.startsWith("waitlist.")) {
    if (request.nextUrl.pathname.startsWith("/waitlist")) {
      return NextResponse.next();
    }

    if (request.nextUrl.pathname === "/" || request.nextUrl.pathname === "") {
      return NextResponse.rewrite(new URL("/waitlist", request.url));
    }
  }

  return NextResponse.next();
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
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$|.*\\.jpg$|.*\\.jpeg$|.*\\.gif$|.*\\.svg$|.*\\.webp$|.*\\.avif$).*)",
  ],
};
