import { cookies } from "next/headers";
import { buildBackendUrl } from "./backend";

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
    const cookieHeader = cookieStore
      .getAll()
      .map(({ name, value }) => `${name}=${value}`)
      .join("; ");

    if (!cookieHeader) {
      return { authenticated: false };
    }

    const res = await fetch(buildBackendUrl("/api/auth/status"), {
      headers: {
        Cookie: cookieHeader,
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
