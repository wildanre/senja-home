import { NextRequest, NextResponse } from "next/server";
import {
  buildBackendUrl,
  createForwardHeaders,
  createProxyResponse,
} from "@/lib/backend";

export async function POST(request: NextRequest) {
  try {
    const response = await fetch(buildBackendUrl("/api/auth/logout"), {
      method: "POST",
      headers: createForwardHeaders(request, {
        "Content-Type": "application/json",
      }),
    });

    return createProxyResponse(response);
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Failed to log out" },
      { status: 500 }
    );
  }
}
