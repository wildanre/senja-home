import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const backendUrl = process.env.BACKEND_URL;

    // Forward logout to backend to clear backend session
    if (backendUrl) {
      const cookieHeader = request.headers.get("cookie");
      try {
        await fetch(`${backendUrl}/api/admin/logout`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Cookie: cookieHeader || "",
          },
        });
      } catch (_error) {
        // Continue even if backend logout fails
      }
    }

    // Clear the httpOnly cookies
    cookieStore.delete("authToken");
    cookieStore.delete("csrf-secret");

    return NextResponse.json({ success: true });
  } catch (_error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
