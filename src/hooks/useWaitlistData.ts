import { useQuery } from "@tanstack/react-query";
import { WaitlistUser } from "@/components/admin/waitlist/types";

const fetchWaitlistData = async (): Promise<WaitlistUser[]> => {
  try {
    const response = await fetch("/api/waitlist", {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || "Failed to load waitlist data");
    }

    const data = await response.json();

    if (Array.isArray(data)) {
      return data;
    }

    if (data.users && Array.isArray(data.users)) {
      return data.users;
    }

    if (data.data && Array.isArray(data.data)) {
      return data.data;
    }

    console.log("Unexpected response format:", data);
    return [];
  } catch (error) {
    console.error("Fetch waitlist error:", error);
    throw error;
  }
};

export function useWaitlistData() {
  const { data, isLoading, error, refetch, isFetching } = useQuery({
    queryKey: ["waitlistUsers"],
    queryFn: fetchWaitlistData,
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
