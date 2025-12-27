import { useQuery } from "@tanstack/react-query";
import { config } from "@/lib/config";

interface WaitlistStatusResponse {
  isOnWaitlist: boolean;
  position?: number;
}

async function fetchWaitlistStatus(): Promise<WaitlistStatusResponse> {
  const response = await fetch(`${config.backendUrl}/api/waitlist/status`, {
    credentials: "include",
  });

  if (!response.ok) {
    // If user not found or not on waitlist, return false
    if (response.status === 404) {
      return { isOnWaitlist: false };
    }
    throw new Error("Failed to fetch waitlist status");
  }

  return response.json();
}

export function useWaitlistStatus() {
  return useQuery<WaitlistStatusResponse>({
    queryKey: ["waitlist-status"],
    queryFn: fetchWaitlistStatus,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000,
    retry: false, // Don't retry if user is not authenticated
  });
}
