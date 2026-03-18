import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { appendSetCookieHeaders, buildBackendUrl } from "@/lib/backend";

export async function POST(request: NextRequest) {
  try {
    let body;
    try {
      body = await request.json();
    } catch (_parseError) {
      return NextResponse.json(
        { success: false, error: "Invalid request body. Expected JSON." },
        { status: 400 }
      );
    }

    const { email, password } = body;

    if (!email || !password) {
      return NextResponse.json(
        { success: false, error: "Email and password are required" },
        { status: 400 }
      );
    }

    // Get CSRF cookie from request to forward to backend
    const cookieStore = await cookies();
    const csrfSecretCookie = cookieStore.get("csrf-secret");
    const csrfToken = request.headers.get("x-csrf-token");

    // Forward login request to backend with CSRF token
    const headers: HeadersInit = {
      "Content-Type": "application/json",
    };

    if (csrfToken) {
      headers["x-csrf-token"] = csrfToken;
    }

    if (csrfSecretCookie) {
      headers["Cookie"] = `csrf-secret=${csrfSecretCookie.value}`;
    }

    const response = await fetch(buildBackendUrl("/api/admin/login"), {
      method: "POST",
      headers,
      body: JSON.stringify({ email, password }),
    });

    // Handle non-OK responses
    if (!response.ok) {
      let errorMessage = "Login failed";

      // Try to parse error response
      try {
        const errorData = await response.json();
        errorMessage =
          errorData.error ||
          errorData.message ||
          `Backend returned ${response.status}`;
      } catch (_parseErr) {
        // If response is not JSON, use status text
        const statusText = response.statusText || `HTTP ${response.status}`;
        errorMessage =
          statusText === "Not Found" || response.status === 404
            ? "Backend endpoint not found. Please check your backend configuration."
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
    } catch (_parseError) {
      return NextResponse.json(
        { success: false, error: "Invalid response from backend" },
        { status: 500 }
      );
    }

    // Check if login was successful
    if (!data.success) {
      return NextResponse.json(
        { success: false, error: data.error || "Login failed" },
        { status: 401 }
      );
    }

    // Extract token from backend Set-Cookie header or from response body
    let token = data.token;
    const backendCookies = response.headers.getSetCookie();

    if (!token) {
      // Backend sends token via Set-Cookie, extract it
      const authTokenCookie = backendCookies.find((cookie) =>
        cookie.includes("authToken=")
      );

      if (authTokenCookie) {
        const match = authTokenCookie.match(/authToken=([^;]+)/);
        if (match) {
          token = match[1];
        }
      }
    }

    if (token) {
      // Set httpOnly cookie with the token from backend
      cookieStore.set("authToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: process.env.NODE_ENV === "production" ? "strict" : "lax",
        maxAge: 60 * 60 * 2,
        path: "/",
      });
    }

    const nextResponse = NextResponse.json({
      success: true,
      admin: data.admin,
    });
    appendSetCookieHeaders(response, nextResponse);
    return nextResponse;
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Network error" },
      { status: 500 }
    );
  }
}
