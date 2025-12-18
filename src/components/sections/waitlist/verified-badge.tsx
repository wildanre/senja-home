import { FaDiscord } from "react-icons/fa";
import Image from "next/image";

interface VerifiedBadgeProps {
  username: string;
  avatar: string | null;
  discordId: string;
}

export function VerifiedBadge({
  username,
  avatar,
  discordId,
}: VerifiedBadgeProps) {
  return (
    <div className="relative z-10 flex items-center gap-3 p-3 rounded-lg bg-[#e7b67c]/10 border border-[#e7b67c]/30">
      <div className="w-10 h-10 bg-[#5865F2] rounded-full flex items-center justify-center overflow-hidden">
        {avatar ? (
          <Image
            src={`https://cdn.discordapp.com/avatars/${discordId}/${avatar}.png?size=128`}
            alt={username}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            unoptimized
          />
        ) : (
          <FaDiscord className="w-5 h-5 text-white" />
        )}
      </div>
      <div className="flex-1">
        <p className="text-sm font-medium text-white">@{username}</p>
        <p className="text-xs text-[#e7b67c] flex items-center gap-1">
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          Discord Verified
        </p>
      </div>
    </div>
  );
}
