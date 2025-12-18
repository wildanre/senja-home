"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/discord-auth-context";
import { VerifiedBadge } from "./verified-badge";
import { JoinDiscordCTA } from "./join-discord-cta";
import { StepsIndicator } from "./steps-indicator";
import { LoadingState } from "./loading-state";
import { WaitlistSuccessState } from "./success-state";
import { FormInput } from "./form-input";
import type { AuthStatus } from "@/lib/server-auth";
import { config } from "@/lib/config";

interface WaitlistFormProps {
  initialAuth: AuthStatus;
}

interface WaitlistFormData {
  email: string;
  address: string;
}

async function submitWaitlist(data: WaitlistFormData) {
  const response = await fetch(`${config.backendUrl}/api/waitlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  const result = await response.json();

  if (!response.ok || !result.success) {
    throw new Error(result.error || "Failed to join waitlist");
  }

  return result;
}

export default function WaitlistForm({
  initialAuth: _initialAuth,
}: WaitlistFormProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const queryClient = useQueryClient();
  const { user, isAuthenticated, loading, login, checkAuth } = useAuth();
  const [formData, setFormData] = useState({ email: "", address: "" });

  const authStatus = searchParams.get("auth");
  const registered = searchParams.get("registered");

  // In dev, React StrictMode can run effects more than once. Also, router.replace + refetch can cause rerenders
  // while the query param is still present. Guard toasts so they only fire once per param value.
  const handledRef = useRef<{ auth?: string | null; registered?: string | null }>({
    auth: undefined,
    registered: undefined,
  });

  useEffect(() => {
    if (authStatus && handledRef.current.auth !== authStatus) {
      handledRef.current.auth = authStatus;

      if (authStatus === "success") {
        toast.success("Discord verified!", {
          description: "Now fill in your details to complete registration.",
        });
        checkAuth();
        router.replace("/waitlist");
      } else if (authStatus === "failed") {
        toast.error("Discord Error", {
          description: "Failed to connect Discord. Please try again.",
        });
        router.replace("/waitlist");
      }
    }

    if (registered && handledRef.current.registered !== registered) {
      handledRef.current.registered = registered;

      if (registered === "true") {
        toast.success("Registration complete!", {
          description: "You're now on the waitlist!",
        });
        router.replace("/waitlist");
      }
    }
  }, [authStatus, registered, checkAuth, router]);

  const waitlistMutation = useMutation({
    mutationFn: submitWaitlist,
    onSuccess: (_data) => {
      toast.success("Welcome aboard!", {
        description: "You've been added to the waitlist.",
      });

      // Invalidate and refetch auth status to update user data
      queryClient.invalidateQueries({ queryKey: ["auth-status"] });

      // Redirect (client-side navigation; avoids full reload)
      router.replace("/waitlist?registered=true");
    },
    onError: (error: Error) => {
      toast.error("Unable to join", {
        description: error.message || "Please try again shortly.",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.address) {
      toast.error("Missing information", {
        description: "Please fill in all fields to continue.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error("Invalid email address", {
        description: "Please enter a valid email address.",
      });
      return;
    }

    const addressRegex = /^0x[a-fA-F0-9]{40}$/;
    if (
      !addressRegex.test(formData.address) ||
      formData.address.length !== 42
    ) {
      toast.error("Invalid wallet address", {
        description: "Please enter a valid Ethereum wallet address.",
      });
      return;
    }

    const sanitizedData = {
      email: formData.email.trim().toLowerCase(),
      address: formData.address.trim(),
    };

    waitlistMutation.mutate(sanitizedData);
  };

  if (loading) return <LoadingState />;

  // Check if user already registered (has both email and walletAddress)
  if (isAuthenticated && user && user.email && user.walletAddress) {
    return <WaitlistSuccessState user={user} />;
  }

  if (isAuthenticated && user) {
    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <VerifiedBadge
          username={user.discordUsername}
          avatar={user.discordAvatar}
          discordId={user.discordId}
        />

        <JoinDiscordCTA />

        <div className="relative z-10 text-center py-2">
          <h3 className="text-base sm:text-lg font-medium text-white">
            Complete Your Registration
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400">
            Fill in your details below
          </p>
        </div>

        <FormInput
          id="email"
          label="Email Address"
          type="email"
          placeholder="your@email.com"
          value={formData.email}
          onChange={(val) =>
            setFormData({ ...formData, email: val.toLowerCase() })
          }
          disabled={waitlistMutation.isPending}
        />

        <FormInput
          id="address"
          label="Wallet Address"
          type="text"
          placeholder="0x..."
          value={formData.address}
          onChange={(val) => setFormData({ ...formData, address: val })}
          disabled={waitlistMutation.isPending}
          helpText="Must be a valid Ethereum address (42 characters)"
          className="font-mono"
        />

        <Button
          type="submit"
          disabled={waitlistMutation.isPending}
          variant="senja-solid"
          className="w-full cursor-pointer py-4 sm:py-6 text-sm sm:text-base font-semibold mt-2 shadow-[0_0_20px_-5px_rgba(231,182,124,0.3)] hover:shadow-[0_0_25px_-5px_rgba(231,182,124,0.5)] relative z-10"
        >
          {waitlistMutation.isPending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Processing...
            </span>
          ) : (
            "Join Waitlist"
          )}
        </Button>
      </form>
    );
  }

  return (
    <div className="space-y-6 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group">
      <div className="absolute inset-0 bg-gradient-to-br from-[#5865F2]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 text-center space-y-3">
        <div className="w-16 h-16 mx-auto bg-[#5865F2]/10 rounded-full flex items-center justify-center border border-[#5865F2]/20">
          <FaDiscord className="w-8 h-8 text-[#5865F2]" />
        </div>
        <h3 className="text-xl font-semibold text-white">Join the Waitlist</h3>
        <p className="text-sm text-neutral-400">
          Verify with Discord to continue registration
        </p>
      </div>

      <StepsIndicator />

      <div className="relative z-10 pt-2">
        <button
          onClick={login}
          className="w-full px-6 py-6 bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold rounded-xl transition-all duration-300 flex items-center justify-center gap-3 group/btn relative overflow-hidden"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
          <FaDiscord className="w-5 h-5" />
          <span>Verify with Discord</span>
        </button>
      </div>
    </div>
  );
}
