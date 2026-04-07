import { cookies } from "next/headers";
import { buildBackendUrl } from "@/lib/backend";
import type { DiscordAuthStatus } from "@/types/auth";

export async function getServerAuthStatus(): Promise<DiscordAuthStatus> {
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

    return (await res.json()) as DiscordAuthStatus;
  } catch (error) {
    console.error("Server auth check failed:", error);
    return { authenticated: false };
  }
}
