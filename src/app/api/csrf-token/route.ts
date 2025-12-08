import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(_request: Request) {
  try {
    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { success: false, error: "Backend URL not configured" },
        { status: 500 }
      );
    }

    // Get CSRF token from backend
    const response = await fetch(`${backendUrl}/api/csrf-token`, {
      method: "GET",
    });

    if (!response.ok) {
      return NextResponse.json(
        { success: false, error: "Failed to get CSRF token from backend" },
        { status: response.status }
      );
    }

    const data = await response.json();

    // Get the CSRF cookie from backend response
    const setCookieHeaders = response.headers.getSetCookie();
    const nextResponse = NextResponse.json(data);

    // Parse and re-set the csrf-secret cookie with proper settings for localhost
    setCookieHeaders.forEach((cookieHeader) => {
      if (cookieHeader.includes("csrf-secret=")) {
        // Extract cookie value
        const match = cookieHeader.match(/csrf-secret=([^;]+)/);
        if (match) {
          const csrfValue = match[1];

          // Set cookie with settings that work for localhost
          const cookieStore = cookies();
          cookieStore.then((store) => {
            store.set("csrf-secret", csrfValue, {
              httpOnly: true,
              sameSite: "lax",
              path: "/",
              maxAge: 86400, // 24 hours
            });
          });
        }
      }
      // Also forward original cookie
      nextResponse.headers.append("Set-Cookie", cookieHeader);
    });

    return nextResponse;
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Network error" },
      { status: 500 }
    );
  }
}
