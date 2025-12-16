import { FaDiscord } from "react-icons/fa";
import { JoinDiscordCTA } from "./join-discord-cta";

interface SuccessStateProps {
  user: {
    discordId: string;
    discordUsername: string;
    discordAvatar: string | null;
    email: string | null;
    walletAddress: string | null;
  };
}

function truncateAddress(address: string | null): string {
  if (!address) return "";
  if (address.length < 12) return address;
  return `${address.slice(0, 6)}...${address.slice(-4)}`;
}

export function WaitlistSuccessState({ user }: SuccessStateProps) {
  return (
    <div className="space-y-4 sm:space-y-5 bg-white/5 backdrop-blur-md p-6 sm:p-8 lg:p-10 rounded-2xl border border-white/10 shadow-2xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#e7b67c]/10 to-transparent pointer-events-none" />

      {/* Discord Profile Badge */}
      <div className="relative z-10 flex items-center gap-3 p-2.5 sm:p-3 rounded-lg bg-[#5865F2]/10 border border-[#5865F2]/20">
        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#5865F2] rounded-full flex items-center justify-center overflow-hidden">
          {user.discordAvatar ? (
            <img
              src={`https://cdn.discordapp.com/avatars/${user.discordId}/${user.discordAvatar}.png?size=128`}
              alt={user.discordUsername}
              className="w-full h-full object-cover"
            />
          ) : (
            <FaDiscord className="w-6 h-6 text-white" />
          )}
        </div>
        <div className="flex-1">
          <p className="text-sm font-medium text-white">
            @{user.discordUsername}
          </p>
          <p className="text-xs text-green-400 flex items-center gap-1">
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
            Verified
          </p>
        </div>
      </div>

      <div className="relative z-10 text-center space-y-4">
        <div className="w-20 h-20 mx-auto bg-gradient-to-br from-[#e7b67c] to-[#d4a574] rounded-full flex items-center justify-center shadow-lg shadow-[#e7b67c]/20">
          <svg
            className="w-10 h-10 text-black"
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
        </div>

        <div className="space-y-2">
          <h3 className="text-2xl font-semibold text-white">
            You&apos;re on the waitlist!
          </h3>
          <p className="text-neutral-400">
            Welcome back,{" "}
            <span className="text-[#e7b67c] font-medium">
              @{user.discordUsername}
            </span>
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm bg-white/5 p-4 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-neutral-400">Email:</span>
            <span className="text-white font-mono">{user.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neutral-400">Wallet:</span>
            <span className="text-white font-mono text-xs">
              {truncateAddress(user.walletAddress)}
            </span>
          </div>
        </div>

        <p className="text-sm text-neutral-500 pt-2">
          We&apos;ll notify you when Senja launches!
        </p>
      </div>

      <JoinDiscordCTA />
    </div>
  );
}
