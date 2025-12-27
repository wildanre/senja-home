import { useMutation, useQueryClient } from "@tanstack/react-query";
import { config } from "@/lib/config";
import { toast } from "sonner";

interface SubmitWaitlistParams {
  discordId: string;
  email?: string;
}

async function submitWaitlist(data: SubmitWaitlistParams) {
  const response = await fetch(`${config.backendUrl}/api/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Failed to submit waitlist");
  }

  return response.json();
}

export function useWaitlistMutation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: submitWaitlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["auth-status"] });
      queryClient.invalidateQueries({ queryKey: ["waitlist-status"] });
      toast.success("Welcome to the waitlist!", {
        description: "You've successfully joined. We'll notify you soon!",
      });
    },
    onError: (error: Error) => {
      toast.error("Failed to join waitlist", {
        description: error.message,
      });
    },
  });
}
