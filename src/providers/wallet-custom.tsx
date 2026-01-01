"use client";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Image from "next/image";
import { Wallet } from "lucide-react";

interface CustomWalletButtonProps {
  cachedWallet?: string;
  isDisabled?: boolean;
  isOnWaitlist?: boolean;
}

export const CustomWalletButton = ({
  cachedWallet,
  isDisabled = false,
  isOnWaitlist = false,
}: CustomWalletButtonProps) => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
            className="flex-1"
          >
            {(() => {
              // Prioritize cachedWallet - only show wallet if it exists (Discord session active)
              // If no cachedWallet, always show connect button (even if RainbowKit is connected)

              if (!cachedWallet) {
                // If on waitlist but no cached wallet locally, show generic success state
                if (isOnWaitlist) {
                  return (
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white font-mono truncate">
                        Linked Wallet
                      </p>
                      <p className="text-xs text-senja-primary">
                        Wallet Connected
                      </p>
                    </div>
                  );
                }

                // No wallet from API (Discord session expired or not set yet)
                return (
                  <button
                    onClick={isDisabled ? undefined : openConnectModal}
                    type="button"
                    disabled={isDisabled}
                    className={`w-full flex items-center justify-between group rounded-md p-3 transition-all duration-200 ${
                      isDisabled
                        ? "opacity-50 cursor-not-allowed"
                        : "hover:bg-senja-primary/10 cursor-pointer"
                    }`}
                  >
                    <span className="text-sm font-medium text-white">
                      Connect Wallet
                    </span>
                    <Wallet
                      className={`w-4 h-4 text-senja-primary ${
                        !isDisabled && "group-hover:scale-110"
                      } transition-transform`}
                    />
                  </button>
                );
              }

              // cachedWallet exists - show wallet address
              // Check if actively connected for chain info
              if (connected) {
                if (chain.unsupported) {
                  return (
                    <button
                      onClick={openChainModal}
                      type="button"
                      className="w-full flex items-center justify-center gap-2 px-4 py-3 text-sm font-medium text-white bg-red-500/20 border border-red-500/30 hover:bg-red-500/30 rounded-md transition-all duration-200"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                        />
                      </svg>
                      Wrong Network
                    </button>
                  );
                }

                return (
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    {chain.hasIcon && chain.iconUrl && (
                      <div
                        className="w-8 h-8 rounded-full overflow-hidden shrink-0"
                        style={{ background: chain.iconBackground }}
                      >
                        <Image
                          alt={chain.name ?? "Chain icon"}
                          src={chain.iconUrl}
                          width={32}
                          height={32}
                          className="w-full h-full"
                        />
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-white font-mono truncate">
                        {account.displayName}
                      </p>
                      <p className="text-xs text-senja-primary">{chain.name}</p>
                    </div>
                  </div>
                );
              }

              // cachedWallet exists but not actively connected
              return (
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white font-mono truncate">
                    {`${cachedWallet.slice(0, 6)}...${cachedWallet.slice(-4)}`}
                  </p>
                  <p className="text-xs text-senja-primary">Wallet Connected</p>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
