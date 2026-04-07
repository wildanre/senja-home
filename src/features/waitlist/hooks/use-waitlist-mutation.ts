import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import type { SubmitWaitlistParams } from "@/types/waitlist";

async function submitWaitlist(data: SubmitWaitlistParams) {
  const response = await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(
      error.error || error.message || "Failed to submit waitlist"
    );
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
