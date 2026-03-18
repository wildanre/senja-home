import { useQuery } from "@tanstack/react-query";
import { fetchAllAdminWaitlistUsers } from "@/lib/admin-waitlist";
import type { DashboardStats } from "@/types";

function mapDashboardStats(
  users: Awaited<ReturnType<typeof fetchAllAdminWaitlistUsers>>
): DashboardStats {
  const startOfToday = new Date();
  startOfToday.setHours(0, 0, 0, 0);

  return {
    totalUsers: users.length,
    newUsersToday: users.filter((user) => new Date(user.createdAt) >= startOfToday)
      .length,
    connectedWallets: users.filter((user) => Boolean(user.address)).length,
    latestSignupAt: users[0]?.createdAt ?? null,
  };
}

export function useDashboardStats() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["admin", "waitlist", "all"],
    queryFn: fetchAllAdminWaitlistUsers,
    select: mapDashboardStats,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  return {
    stats: data ?? {
      totalUsers: 0,
      newUsersToday: 0,
      connectedWallets: 0,
      latestSignupAt: null,
    },
    isLoading,
    error: error as Error | null,
    refetch,
  };
}
