import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request: Request) {
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

    // Forward backend Set-Cookie headers, but do NOT duplicate csrf-secret.
    // In local dev (http://localhost), Secure cookies won't be stored by the browser.
    // For that case only, we re-set csrf-secret without Secure and skip forwarding the backend csrf-secret.
    const setCookieHeaders = response.headers.getSetCookie();
    const nextResponse = NextResponse.json(data);

    const host = request.headers.get("host") || "";
    const proto = request.headers.get("x-forwarded-proto") || "";
    const isLocalhost = host.includes("localhost") || host.startsWith("127.0.0.1");
    const isHttps = proto === "https";

    let csrfSecretValue: string | null = null;

    for (const cookieHeader of setCookieHeaders) {
      if (cookieHeader.includes("csrf-secret=")) {
        const match = cookieHeader.match(/csrf-secret=([^;]+)/);
        if (match) csrfSecretValue = match[1];

        // If we're on localhost over http, don't forward the Secure backend csrf-secret cookie.
        if (isLocalhost && !isHttps) {
          continue;
        }
      }

      nextResponse.headers.append("Set-Cookie", cookieHeader);
    }

    // Local dev compatibility: set csrf-secret in the Next.js domain so browser stores it on http://localhost.
    if (csrfSecretValue && isLocalhost && !isHttps) {
      const store = await cookies();
      store.set("csrf-secret", csrfSecretValue, {
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 86400, // 24 hours
        // NOTE: no `secure` here, so it works on http://localhost
      });
    }

    return nextResponse;
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Network error" },
      { status: 500 }
    );
  }
}
