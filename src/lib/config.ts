export const config = {
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  discordGuildId:
    process.env.NEXT_PUBLIC_DISCORD_GUILD_ID,
  // Waitlist opens on 1 January 2025 UTC 00:00
  waitlistLaunchDate: "2026-01-01T00:00:00.000Z",
} as const;
