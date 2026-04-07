"use client";

import { ReactNode, useEffect, useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import type { Config } from "wagmi";
import { kaia } from "viem/chains";
import { DiscordAuthProvider } from "@/contexts/discord-auth-context";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    },
  },
});

interface AppProvidersProps {
  children: ReactNode;
}

export default function AppProviders({ children }: AppProvidersProps) {
  const [mounted, setMounted] = useState(false);
  const [walletConfig, setWalletConfig] = useState<Config | null>(null);

  useEffect(() => {
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
    <QueryClientProvider client={queryClient}>
      <WagmiProvider config={walletConfig}>
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
          <DiscordAuthProvider>{children}</DiscordAuthProvider>
        </RainbowKitProvider>
      </WagmiProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
