import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("admin-token")?.value;

    if (!token) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { subject, message, senderName } = body;

    if (!subject || !message) {
      return NextResponse.json(
        { success: false, error: "Subject and message are required" },
        { status: 400 }
      );
    }

    const backendUrl = process.env.BACKEND_URL;
    if (!backendUrl) {
      return NextResponse.json(
        { success: false, error: "Backend URL not configured" },
        { status: 500 }
      );
    }

    // Get CSRF token from request headers
    const csrfSecretCookie = cookieStore.get("csrf-secret");
    const csrfToken = request.headers.get("x-csrf-token");

    const headers: HeadersInit = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    };

    if (csrfToken) {
      headers["x-csrf-token"] = csrfToken;
    }

    if (csrfSecretCookie) {
      headers["Cookie"] = `csrf-secret=${csrfSecretCookie.value}`;
    }

    // Forward request to backend
    const response = await fetch(`${backendUrl}/api/admin/send-email`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        subject,
        message,
        senderName: senderName || "SenjaLabs",
      }),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      return NextResponse.json(data);
    }

    // If unauthorized, clear the cookie
    if (response.status === 401 || response.status === 403) {
      cookieStore.delete("admin-token");
    }

    return NextResponse.json(
      { success: false, error: data.error || "Failed to send email" },
      { status: response.status }
    );
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Network error" },
      { status: 500 }
    );
  }
}
