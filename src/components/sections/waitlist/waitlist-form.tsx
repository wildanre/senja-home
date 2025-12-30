"use client";

import { useState, useEffect, useRef } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { toast } from "sonner";
import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/discord-auth-context";
import { LoadingState } from "./loading-state";
import type { AuthStatus } from "@/lib/server-auth";
import { useGuildMembership } from "@/hooks/useGuildMembership";
import { useWalletMutation } from "@/hooks/useWalletMutation";
import { useWaitlistMutation } from "@/hooks/useWaitlistMutation";
import { useWaitlistStatus } from "@/hooks/useWaitlistStatus";
import Image from "next/image";
import { useConnection } from "wagmi";
import { CustomWalletButton } from "@/providers/wallet-custom";

interface WaitlistFormProps {
  initialAuth: AuthStatus;
}

const DISCORD_INVITE_URL = "https://discord.gg/83RPu9KQ";

export default function WaitlistForm({
  initialAuth: _initialAuth,
}: WaitlistFormProps) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { user, isAuthenticated, loading, login, checkAuth } = useAuth();
  const { address, isConnected } = useConnection();
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [currentWallet, setCurrentWallet] = useState<string | undefined>(
    user?.walletAddress || undefined
  );
  const [isWalletFromCache, setIsWalletFromCache] = useState(false);

  const handledAuthRef = useRef<string | null>(null);

  // Initialize wallet from cached DB value
  useEffect(() => {
    if (user?.walletAddress && !currentWallet) {
      setCurrentWallet(user.walletAddress);
      setIsWalletFromCache(true);
    }
  }, [user?.walletAddress]);

  const walletMutation = useWalletMutation();
  const { isInGuild, refetchGuildCheck } = useGuildMembership();
  const waitlistMutation = useWaitlistMutation();
  const { data: waitlistStatus, refetch: refetchWaitlistStatus } =
    useWaitlistStatus();

  useEffect(() => {
    const authStatus = searchParams.get("auth");

    if (authStatus && handledAuthRef.current !== authStatus) {
      handledAuthRef.current = authStatus;

      if (authStatus === "success") {
        toast.success("Discord verified!", {
          description: "Step 1 complete. Now connect your wallet.",
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
  }, [searchParams, checkAuth, router]);

  useEffect(() => {
    if (address && address !== currentWallet && isAuthenticated) {
      setCurrentWallet(address);
      setIsWalletFromCache(false);
      walletMutation.mutate({ address });

      if (currentWallet) {
        toast.info("Wallet updated", {
          description: `Now using ${address.slice(0, 6)}...${address.slice(
            -4
          )}`,
        });
      }
    } else if (!address && currentWallet && !isWalletFromCache) {
      setCurrentWallet(undefined);
    }
  }, [
    address,
    isAuthenticated,
    currentWallet,
    isWalletFromCache,
    walletMutation,
  ]);

  const isDiscordDone = isAuthenticated && !!user;
  const isWalletDone = (isConnected && !!address) || !!currentWallet;
  const isOnWaitlist =
    waitlistStatus?.isOnWaitlist || waitlistMutation.isSuccess || hasSubmitted;
  const canComplete =
    isDiscordDone && isInGuild && isWalletDone && !isOnWaitlist;

  const handleComplete = () => {
    if (!user?.discordId) return;

    waitlistMutation.mutate(
      {
        discordId: user.discordId,
      },
      {
        onSuccess: () => {
          setHasSubmitted(true);
          refetchWaitlistStatus(); // Refresh waitlist status from backend
        },
      }
    );
  };

  if (loading) {
    return <LoadingState />;
  }

  // Users stay on the same page, no redirect to success state

  return (
    <div className="space-y-4 bg-white/5 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      <div className="relative z-10 text-center space-y-2 mb-6">
        <h2 className="text-xl sm:text-2xl font-bold text-white">
          Join the Waitlist
        </h2>
        <p className="text-sm text-neutral-400">
          Be first to access permissionless cross-chain lending with Senja.
        </p>
      </div>

      {/* Step 1: Discord - Shows button or verified badge */}
      <div
        className={`relative z-10 flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
          isDiscordDone
            ? "bg-[#e7b67c]/10 border-[#e7b67c]/30"
            : "bg-white/5 border-white/10"
        } border`}
      >
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 flex-shrink-0 ${
            isDiscordDone
              ? "bg-[#e7b67c] text-[#120a06]"
              : "bg-white/10 text-neutral-600"
          }`}
        >
          {isDiscordDone ? (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            "1"
          )}
        </div>

        {!isDiscordDone ? (
          <button
            onClick={login}
            className="flex-1 flex items-center justify-between group cursor-pointer"
          >
            <span className="text-sm font-medium text-white">
              Verify Discord
            </span>
            <FaDiscord className="w-5 h-5 text-[#5865F2] group-hover:scale-110 transition-transform" />
          </button>
        ) : (
          <div className="flex items-center gap-3 flex-1">
            <div className="w-8 h-8 bg-[#5865F2] rounded-full flex items-center justify-center overflow-hidden flex-shrink-0">
              {user?.discordAvatar ? (
                <Image
                  src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.discordAvatar}.png?size=128`}
                  alt={user.discordUsername}
                  width={32}
                  height={32}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              ) : (
                <FaDiscord className="w-4 h-4 text-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                @{user?.discordUsername}
              </p>
              <p className="text-xs text-[#e7b67c]">Discord Verified</p>
            </div>
          </div>
        )}
      </div>

      {/* Step 2: Join Discord Channel */}
      <div
        className={`relative z-10 flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
          isInGuild
            ? "bg-[#e7b67c]/10 border-[#e7b67c]/30"
            : isDiscordDone
            ? "bg-white/5 border-white/10"
            : "bg-white/5 border-white/10 opacity-50"
        } border`}
      >
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 ${
            isInGuild
              ? "bg-[#e7b67c] text-[#120a06]"
              : "bg-white/10 text-neutral-600"
          }`}
        >
          {isInGuild ? (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            "2"
          )}
        </div>

        {!isInGuild ? (
          <div className="flex-1 space-y-2">
            <a
              href={DISCORD_INVITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between group"
            >
              <span className="text-sm font-medium text-white">
                Join Discord Channel
              </span>
              <svg
                className="w-5 h-5 text-[#e7b67c] group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </a>
            <button
              onClick={async () => {
                const { data: freshData } = await refetchGuildCheck();

                if (freshData?.isMember) {
                  toast.success("Verified!", {
                    description: "You've joined the Discord server!",
                  });
                } else {
                  toast.error("Not verified", {
                    description: "Please join the Discord server first.",
                  });
                }
              }}
              disabled={!isDiscordDone}
              className="w-full px-3 py-2 text-xs font-medium text-[#e7b67c] hover:text-white border border-[#e7b67c]/30 hover:border-[#e7b67c] hover:bg-[#e7b67c]/10 rounded-md transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Verify
            </button>
          </div>
        ) : (
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-white">Discord Member</p>
            <p className="text-xs text-[#e7b67c]">Server Joined</p>
          </div>
        )}
      </div>

      {/* Step 3: Wallet - Shows button or verified badge */}
      <div
        className={`relative z-10 flex items-center gap-3 p-3 rounded-lg transition-all duration-200 ${
          isWalletDone
            ? "bg-[#e7b67c]/10 border-[#e7b67c]/30"
            : isInGuild
            ? "bg-white/5 border-white/10"
            : "bg-white/5 border-white/10 opacity-50"
        } border`}
      >
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-200 flex-shrink-0 ${
            isWalletDone
              ? "bg-[#e7b67c] text-[#120a06]"
              : "bg-white/10 text-neutral-600"
          }`}
        >
          {isWalletDone ? (
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M5 13l4 4L19 7"
              />
            </svg>
          ) : (
            "3"
          )}
        </div>

        <CustomWalletButton cachedWallet={currentWallet} />
      </div>

      {/* Complete Registration Button */}
      <div className="relative z-10 pt-2">
        <Button
          onClick={handleComplete}
          disabled={!canComplete || waitlistMutation.isPending || isOnWaitlist}
          variant={isOnWaitlist ? "default" : "senja-solid"}
          className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
            isOnWaitlist
              ? "bg-[#e7b67c]/20 border-[#e7b67c] text-[#e7b67c] cursor-default hover:bg-[#e7b67c]/20"
              : "shadow-[0_0_20px_-5px_rgba(231,182,124,0.3)] hover:shadow-[0_0_25px_-5px_rgba(231,182,124,0.5)]"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {waitlistMutation.isPending ? (
            <span className="flex items-center gap-2">
              <span className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin" />
              Completing...
            </span>
          ) : isOnWaitlist ? (
            <span className="flex items-center gap-2">
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              You're on Waitlist
            </span>
          ) : (
            "Join Waitlist"
          )}
        </Button>
        {!canComplete && !isOnWaitlist && (
          <p className="text-xs text-neutral-500 text-center mt-2">
            Complete all steps above to join the waitlist
          </p>
        )}
      </div>
    </div>
  );
}
