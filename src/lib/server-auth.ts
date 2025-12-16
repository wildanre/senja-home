import { cookies } from "next/headers";
import { config } from "./config";

export interface User {
  id: number;
  discordId: string;
  discordUsername: string;
  discordAvatar: string | null;
  email: string | null;
  walletAddress: string | null;
}

export interface AuthStatus {
  authenticated: boolean;
  user?: User;
}

export async function getServerAuthStatus(): Promise<AuthStatus> {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("connect.sid");

    if (!sessionCookie) {
      return { authenticated: false };
    }

    const res = await fetch(`${config.backendUrl}/api/auth/status`, {
      headers: {
        Cookie: `connect.sid=${sessionCookie.value}`,
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return { authenticated: false };
    }

    return await res.json();
  } catch (error) {
    console.error("Server auth check failed:", error);
    return { authenticated: false };
  }
}
