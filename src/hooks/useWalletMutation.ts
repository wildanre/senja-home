import { useMutation, useQueryClient } from "@tanstack/react-query";
import { config } from "@/lib/config";

interface UpdateWalletParams {
  address: string;
}

async function updateWalletAddress({ address }: UpdateWalletParams) {
  const response = await fetch(
    `${config.backendUrl}/api/waitlist/connect-wallet`,
    {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({ walletAddress: address }),
    }
  );

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
    },
    onError: (error: Error) => {
      console.error("Failed to update wallet:", error);
    },
  });
}
