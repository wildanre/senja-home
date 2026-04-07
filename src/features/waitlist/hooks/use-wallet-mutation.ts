import { useMutation, useQueryClient } from "@tanstack/react-query";
import type { UpdateWalletParams } from "@/types/waitlist";

async function updateWalletAddress({ address }: UpdateWalletParams) {
  const response = await fetch("/api/waitlist/connect-wallet", {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ walletAddress: address }),
  });

  if (!response.ok) {
    throw new Error("Failed to update wallet address");
  }

  return response.json();
}

export function useWalletMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateWalletAddress,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth-status"] });
      queryClient.invalidateQueries({ queryKey: ["waitlist-status"] });
    },
    onError: (error: Error) => {
      console.error("Failed to update wallet:", error);
    },
  });
}
