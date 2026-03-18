import { useQuery } from "@tanstack/react-query";
import { fetchAllAdminWaitlistUsers } from "@/lib/admin-waitlist";

export function useWaitlistData() {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["admin", "waitlist", "all"],
    queryFn: fetchAllAdminWaitlistUsers,
    staleTime: 2 * 60 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
  });

  return {
    users: data ?? [],
    isLoading,
    error: error as Error | null,
    refetch,
    isFetching,
  };
}
