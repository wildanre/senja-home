"use client";

import React from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { kaia } from "viem/chains";
import { config } from "@/config/wallet-config";

const wagmiQueryClient = new QueryClient();

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    // @ts-ignore
    import("@rainbow-me/rainbowkit/styles.css");
  }, []);

  return (
    <WagmiProvider config={config}>
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
          {mounted && children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}
