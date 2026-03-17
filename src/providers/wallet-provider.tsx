"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import type { Config } from "wagmi";
import { kaia } from "viem/chains";

const wagmiQueryClient = new QueryClient();

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);
  const [walletConfig, setWalletConfig] = React.useState<Config | null>(null);

  React.useEffect(() => {
    setMounted(true);

    let isCancelled = false;

    void import("@/config/wallet-config").then((module) => {
      if (!isCancelled) {
        setWalletConfig(module.config);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  if (!mounted || !walletConfig) {
    return null;
  }

  return (
    <WagmiProvider config={walletConfig}>
      <QueryClientProvider client={wagmiQueryClient}>
        <RainbowKitProvider
          coolMode
          initialChain={kaia}
          modalSize="compact"
          theme={darkTheme({
            accentColor: "#E7B67C",
            accentColorForeground: "#000",
            borderRadius: "medium",
          })}
        >
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
