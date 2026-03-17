import { NextRequest, NextResponse } from "next/server";
import {
  buildBackendUrl,
  createForwardHeaders,
  createProxyResponse,
} from "@/lib/backend";

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.text();
    const response = await fetch(buildBackendUrl("/api/waitlist/connect-wallet"), {
      method: "PATCH",
      headers: createForwardHeaders(request),
      body,
    });

    return createProxyResponse(response);
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Failed to update wallet address" },
      { status: 500 }
    );
  }
}
