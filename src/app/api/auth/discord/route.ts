import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const clientId = process.env.DISCORD_CLIENT_ID;
  const frontendUrl = request.nextUrl.origin;

  if (!clientId) {
    return NextResponse.json(
      { success: false, error: "Discord OAuth not configured" },
      { status: 500 }
    );
  }

  const params = new URLSearchParams({
    client_id: clientId,
    redirect_uri: `${frontendUrl}/api/auth/discord/callback`,
    response_type: "code",
    scope: "identify email guilds",
  });

  return NextResponse.redirect(
    `https://discord.com/oauth2/authorize?${params}`
  );
}
