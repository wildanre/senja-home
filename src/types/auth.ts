export interface DiscordAuthUser {
  id: number;
  discordId: string;
  discordUsername: string;
  discordAvatar: string | null;
  email: string | null;
  walletAddress: string | null;
  discordGuilds?: string[];
  isOnWaitlist?: boolean;
}

export interface DiscordAuthStatus {
  authenticated: boolean;
  user?: DiscordAuthUser;
}
