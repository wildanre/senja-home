import { useQuery } from '@tanstack/react-query';

export interface DashboardStats {
  totalUsers: number;
  emailsSent: number;
  activeUsers: number;
}

const fetchDashboardData = async (): Promise<DashboardStats> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalUsers: 1250,
        emailsSent: 45,
        activeUsers: 892,
      });
    }, 1000);
  });
};

export function useDashboardStats() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ['dashboardStats'],
    queryFn: fetchDashboardData,
    staleTime: 5 * 60 * 1000,
    refetchOnWindowFocus: true,
  });

  return {
    stats: data ?? {
      totalUsers: 0,
      emailsSent: 0,
      activeUsers: 0,
    },
    isLoading,
    error: error as Error | null,
    refetch,
  };
}
