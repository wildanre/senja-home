import { NextRequest, NextResponse } from "next/server";
import {
  buildBackendUrl,
  createForwardHeaders,
  createProxyResponse,
} from "@/lib/backend";

export async function GET(request: NextRequest) {
  try {
    const cookieHeader = request.headers.get("cookie");

    if (!cookieHeader || !cookieHeader.includes("authToken=")) {
      return NextResponse.json(
        { success: false, error: "Unauthorized" },
        { status: 401 }
      );
    }

    const response = await fetch(
      buildBackendUrl(`/api/admin/waitlist${request.nextUrl.search}`),
      {
        method: "GET",
        headers: createForwardHeaders(request, {
          "Content-Type": "application/json",
        }),
        cache: "no-store",
      }
    );

    const nextResponse = createProxyResponse(response);
    if (response.status === 401 || response.status === 403) {
      nextResponse.cookies.delete("authToken");
    }
    return nextResponse;
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Network error" },
      { status: 500 }
    );
  }
}
