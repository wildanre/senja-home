import { NextRequest, NextResponse } from "next/server";
import {
  buildBackendUrl,
  createForwardHeaders,
  createProxyResponse,
} from "@/lib/backend";

export async function GET(request: NextRequest) {
  try {
    const response = await fetch(buildBackendUrl("/api/waitlist"), {
      method: "GET",
      headers: createForwardHeaders(request, {
        "Content-Type": "application/json",
      }),
      cache: "no-store",
    });

    return createProxyResponse(response);
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
    const body = await request.text();
    const response = await fetch(buildBackendUrl("/api/waitlist"), {
      method: "POST",
      headers: createForwardHeaders(request),
      body,
    });

    return createProxyResponse(response);
  } catch (_error) {
    return NextResponse.json(
      { success: false, error: "Failed to process request" },
      { status: 500 }
    );
  }
}
