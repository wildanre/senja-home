import { NextRequest, NextResponse } from "next/server";
import {
  buildBackendUrl,
  createForwardHeaders,
  createProxyResponse,
} from "@/lib/backend";

export async function GET(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get("cookie");

    if (!cookieHeader) {
      return NextResponse.json({ isOnWaitlist: false }, { status: 200 });
    }

    const response = await fetch(buildBackendUrl("/api/waitlist/status"), {
      method: "GET",
      headers: createForwardHeaders(request),
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
