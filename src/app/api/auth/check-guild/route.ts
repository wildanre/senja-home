import { NextRequest, NextResponse } from "next/server";
import {
  buildBackendUrl,
  createForwardHeaders,
  createProxyResponse,
} from "@/lib/backend";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(buildBackendUrl("/api/auth/check-guild"), {
      method: "GET",
      headers: createForwardHeaders(request, {
        "Content-Type": "application/json",
      }),
      cache: "no-store",
    });

    return createProxyResponse(response);
  } catch (_error) {
    return NextResponse.json(
      { isMember: false, error: "Failed to verify guild membership" },
      { status: 500 }
    );
  }
}
