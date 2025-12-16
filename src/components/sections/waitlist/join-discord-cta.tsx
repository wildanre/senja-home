import { FaDiscord } from "react-icons/fa";

const DISCORD_INVITE_URL = "https://discord.gg/83RPu9KQ";

export function JoinDiscordCTA() {
  return (
    <div className="relative z-10">
      <a
        href={DISCORD_INVITE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center gap-2 p-3 rounded-lg bg-[#5865F2] hover:bg-[#4752C4] transition-all duration-300 group/discord"
      >
        <FaDiscord className="w-5 h-5 text-white" />
        <span className="text-white font-medium text-sm">
          Join Our Discord Server
        </span>
        <svg
          className="w-4 h-4 text-white/70 group-hover/discord:translate-x-1 transition-transform"
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
