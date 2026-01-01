import { FaDiscord } from "react-icons/fa";

const DISCORD_INVITE_URL = "https://bit.ly/senjadiscord";

export function JoinDiscordCTA() {
  return (
    <div className="relative z-10">
      <a
        href={DISCORD_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-3 p-3 rounded-lg bg-senja-primary/10 hover:bg-senja-primary/20 border border-senja-primary/30 transition-all duration-200 group/discord"
      >
        <div className="w-8 h-8 rounded-full bg-[#5865F2] flex items-center justify-center">
          <FaDiscord className="w-5 h-5 text-white" />
        </div>
        <span className="text-white font-medium text-sm flex-1 text-left">
          Join Our Discord Server
        </span>
        <svg
          className="w-4 h-4 text-senja-primary group-hover/discord:translate-x-1 transition-transform"
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
    </div>
  );
}
