"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/discord-auth-context";
import { VerifiedBadge } from "./verified-badge";
import { JoinDiscordCTA } from "./join-discord-cta";
import { StepsIndicator } from "./steps-indicator";
import { LoadingState } from "./loading-state";
import type { AuthStatus } from "@/lib/server-auth";
import { config } from "@/lib/config";

interface WaitlistFormProps {
  initialAuth: AuthStatus;
}

export default function WaitlistForm({ initialAuth }: WaitlistFormProps) {
  const searchParams = useSearchParams();
  const { user, isAuthenticated, loading, login, checkAuth } = useAuth();
  const [formData, setFormData] = useState({ email: "", address: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const authStatus = searchParams.get("auth");
    const registered = searchParams.get("registered");

    if (authStatus === "success") {
      toast.success("Discord verified!", {
        description: "Now fill in your details to complete registration.",
      });
      checkAuth();
      window.history.replaceState({}, "", "/waitlist");
    } else if (authStatus === "failed") {
      toast.error("Discord Error", {
        description: "Failed to connect Discord. Please try again.",
      });
      window.history.replaceState({}, "", "/waitlist");
    }

    if (registered === "true") {
      toast.success("Registration complete!", {
        description: "You're now on the waitlist!",
      });
      window.history.replaceState({}, "", "/waitlist");
    }
  }, [searchParams, checkAuth]);

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

    setIsSubmitting(true);

    try {
      const sanitizedData = {
        email: formData.email.trim().toLowerCase(),
        address: formData.address.trim(),
      };

      const response = await fetch(`${config.backendUrl}/api/waitlist`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(sanitizedData),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        toast.success("Welcome aboard!", {
          description: "You've been added to the waitlist.",
        });
        window.location.href = "/waitlist?registered=true";
      } else {
        toast.error("Unable to join", {
          description: result.error || "Please try again shortly.",
        });
      }
    } catch (_error) {
      toast.error("Connection error", {
        description: "Please check your internet connection.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) return <LoadingState />;

  if (isAuthenticated && user) {
    return (
      <form
        onSubmit={handleSubmit}
        className="space-y-5 bg-white/5 backdrop-blur-md p-8 sm:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

        <VerifiedBadge
          username={user.discordUsername}
          avatar={user.discordAvatar}
          discordId={user.discordId}
        />

        <JoinDiscordCTA />

        <div className="relative z-10 text-center py-2">
          <h3 className="text-lg font-medium text-white">
            Complete Your Registration
          </h3>
          <p className="text-sm text-neutral-400">Fill in your details below</p>
        </div>

        <div className="space-y-1.5 relative z-10">
          <label
            htmlFor="email"
            className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value.toLowerCase() })
            }
            disabled={isSubmitting}
            className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#e7b67c]/50 focus:ring-1 focus:ring-[#e7b67c]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/20"
          />
        </div>

        <div className="space-y-1.5 relative z-10">
          <label
            htmlFor="address"
            className="text-xs font-medium text-neutral-400 uppercase tracking-wider ml-1"
          >
            Wallet Address
          </label>
          <input
            id="address"
            type="text"
            placeholder="0x..."
            value={formData.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
            disabled={isSubmitting}
            className="w-full px-4 py-3.5 rounded-xl border border-white/10 bg-black/40 text-white text-base placeholder:text-neutral-600 focus:outline-none focus:border-[#e7b67c]/50 focus:ring-1 focus:ring-[#e7b67c]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/20 font-mono"
          />
          <p className="text-xs text-neutral-500 ml-1">
            Must be a valid Ethereum address (42 characters)
          </p>
        </div>

        <Button
          type="submit"
          disabled={isSubmitting}
          variant="senja-solid"
          className="w-full cursor-pointer py-6 text-base font-semibold mt-2 shadow-[0_0_20px_-5px_rgba(231,182,124,0.3)] hover:shadow-[0_0_25px_-5px_rgba(231,182,124,0.5)] relative z-10"
        >
          {isSubmitting ? (
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
