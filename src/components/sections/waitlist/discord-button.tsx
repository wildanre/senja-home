"use client";

import { FaDiscord } from "react-icons/fa";
import { Button } from "@/components/ui/button";

interface DiscordButtonProps {
  variant?: "oauth" | "join";
  className?: string;
  isLoading?: boolean;
}

export default function DiscordButton({
  variant = "oauth",
  className = "",
  isLoading = false,
}: DiscordButtonProps) {
  const handleOAuth = () => {
    window.location.href = "/api/auth/discord";
  };

  const handleJoinServer = () => {
    window.open("https://discord.gg/83RPu9KQ", "_blank", "noopener,noreferrer");
  };

  if (variant === "join") {
    return (
      <Button
        type="button"
        onClick={handleJoinServer}
        className={`group relative overflow-hidden bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all duration-300 ${className}`}
      >
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <FaDiscord className="w-5 h-5 mr-2" />
        <span>Join Our Discord</span>
      </Button>
    );
  }

  return (
    <Button
      type="button"
      onClick={handleOAuth}
      disabled={isLoading}
      className={`group relative overflow-hidden bg-[#5865F2] hover:bg-[#4752C4] text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed ${className}`}
    >
      <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      {isLoading ? (
        <span className="flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          Connecting...
        </span>
      ) : (
        <>
          <FaDiscord className="w-5 h-5 mr-2" />
          <span>Continue with Discord</span>
        </>
      )}
    </Button>
  );
}
