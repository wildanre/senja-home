import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { buildBackendUrl, createProxyResponse } from "@/lib/backend";

export async function GET(_request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("connect.sid");

    if (!sessionCookie) {
      return NextResponse.json({ isOnWaitlist: false }, { status: 200 });
    }

    const response = await fetch(buildBackendUrl("/api/waitlist/status"), {
      method: "GET",
      headers: {
        Cookie: `connect.sid=${sessionCookie.value}`,
      },
    });

    if (!response.ok) {
      if (response.status === 404) {
        return NextResponse.json({ isOnWaitlist: false }, { status: 200 });
      }
      return createProxyResponse(response);
    }

    return createProxyResponse(response);
  } catch (error) {
    console.error("Error fetching waitlist status:", error);
    return NextResponse.json({ isOnWaitlist: false }, { status: 200 });
  }
}
