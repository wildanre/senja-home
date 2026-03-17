import { NextRequest, NextResponse } from "next/server";
import {
  buildBackendUrl,
  createForwardHeaders,
  createProxyResponse,
} from "@/lib/backend";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(buildBackendUrl("/api/auth/status"), {
      method: "GET",
      headers: createForwardHeaders(request, {
        "Content-Type": "application/json",
      }),
      cache: "no-store",
    });

    return createProxyResponse(response);
  } catch (_error) {
    return NextResponse.json(
      { authenticated: false, error: "Failed to fetch auth status" },
      { status: 500 }
    );
  }
}
