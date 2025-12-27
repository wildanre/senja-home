import { useQuery } from "@tanstack/react-query";
import { config } from "@/lib/config";
import { useAuth } from "@/contexts/discord-auth-context";

export function useGuildMembership() {
  const { user, isAuthenticated } = useAuth();

  const { data: guildCheckData, refetch: refetchGuildCheck } = useQuery({
    queryKey: ["guild-membership", user?.discordId],
    queryFn: async () => {
      try {
        const response = await fetch(
          `${config.backendUrl}/api/auth/check-guild`,
          {
            credentials: "include",
          }
        );

        if (!response.ok) {
          return { isMember: false, source: "api" };
        }

        const data = await response.json();
        const isMember = data.guilds?.includes(config.discordGuildId) || false;

        return { isMember, source: "api" };
      } catch (error) {
        return { isMember: false, source: "error" };
      }
    },
    enabled: isAuthenticated && !!user,
    staleTime: 10 * 60 * 1000,
    gcTime: 15 * 60 * 1000,
    refetchOnWindowFocus: false,
    refetchInterval: 10 * 60 * 1000,
  });

  return {
    isInGuild: guildCheckData?.isMember || false,
    refetchGuildCheck,
  };
}
