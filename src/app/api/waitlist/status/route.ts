import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:3001";

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("connect.sid");

    if (!sessionCookie) {
      return NextResponse.json({ isOnWaitlist: false }, { status: 200 });
    }

    // Forward request to backend to check waitlist status
    const response = await fetch(`${BACKEND_URL}/api/waitlist/status`, {
      method: "GET",
      headers: {
        Cookie: `connect.sid=${sessionCookie.value}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ isOnWaitlist: false }, { status: 200 });
      }
      throw new Error("Failed to fetch waitlist status");
    }

    const data = await response.json();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching waitlist status:", error);
    return NextResponse.json({ isOnWaitlist: false }, { status: 200 });
  }
}
