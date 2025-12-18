import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function GET(request: NextRequest) {
  try {
    // Proxy to backend with authentication cookies
    const response = await fetch(`${BACKEND_URL}/api/waitlist`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Forward cookies from the request to backend
        Cookie: request.headers.get("cookie") || "",
      },
      cache: "no-store", // Disable cache for fresh data
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        {
          success: false,
          error: errorData.error || "Failed to fetch waitlist",
        },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Waitlist GET error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to fetch waitlist data" },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { address, email } = body;

    if (!address || !email) {
      return NextResponse.json(
        { success: false, error: "Wallet address and email are required" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Wallet address validation (Ethereum format: 0x + 40 hex characters)
    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (!addressRegex.test(address)) {
      return NextResponse.json(
        { success: false, error: "Invalid wallet address format" },
        { status: 400 }
      );
    }

    // Forward to backend with session cookie
    const response = await fetch(`${BACKEND_URL}/api/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // Forward cookies from the request
        Cookie: request.headers.get("cookie") || "",
      },
      body: JSON.stringify({ address, email }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      return NextResponse.json(
        { success: false, error: errorData.error || "Failed to join waitlist" },
        { status: response.status }
      );
    }

    const data = await response.json();
    return NextResponse.json({ success: true, data });
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
