export const config = {
  backendUrl: process.env.NEXT_PUBLIC_BACKEND_URL,
  discordGuildId:
    process.env.NEXT_PUBLIC_DISCORD_GUILD_ID || "1317434634858676274",
} as const;
