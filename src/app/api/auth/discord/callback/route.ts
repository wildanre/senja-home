import { NextRequest, NextResponse } from "next/server";
import {
  buildBackendUrl,
  appendSetCookieHeaders,
} from "@/lib/backend";

export async function GET(request: NextRequest) {
  const frontendUrl = request.nextUrl.origin;
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(`${frontendUrl}/waitlist?auth=failed`);
  }

  try {
    // Forward cookies from browser so the backend session store can associate them
    const cookieHeader = request.headers.get("cookie");
    const headers: Record<string, string> = {
      "Content-Type": "application/json",
    };
    if (cookieHeader) {
      headers["Cookie"] = cookieHeader;
    }

    // Exchange code via backend (server-to-server)
    const response = await fetch(
      buildBackendUrl("/api/auth/discord/exchange"),
      {
        method: "POST",
        headers,
        body: JSON.stringify({ code }),
      }
    );

    const data = await response.json();

    if (!data.success) {
      return NextResponse.redirect(`${frontendUrl}/waitlist?auth=failed`);
    }

    // Redirect to frontend and forward session cookies from backend
    const redirectResponse = NextResponse.redirect(
      `${frontendUrl}/waitlist?auth=success`
    );
    appendSetCookieHeaders(response, redirectResponse);

    return redirectResponse;
  } catch (error) {
    console.error("Discord callback error:", error);
    return NextResponse.redirect(`${frontendUrl}/waitlist?auth=failed`);
  }
}
