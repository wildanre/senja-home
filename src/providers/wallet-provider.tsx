"use client";

import "@rainbow-me/rainbowkit/styles.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RainbowKitProvider, darkTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import { mainnet, base, arbitrum } from "wagmi/chains";
import { http, createConfig } from "wagmi";
import { injected, walletConnect } from "wagmi/connectors";
import { useMemo, useState, useEffect } from "react";

// Create a separate QueryClient for Wagmi (to avoid conflicts)
const wagmiQueryClient = new QueryClient();

export function WalletProvider({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Create config inside component to ensure it only runs on client
  const config = useMemo(
    () =>
      createConfig({
        chains: [mainnet, base, arbitrum],
        connectors: [
          injected(),
          ...(isClient
            ? [
                walletConnect({
                  projectId:
                    process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || "",
                }),
              ]
            : []),
        ],
        transports: {
          [mainnet.id]: http(),
          [base.id]: http(),
          [arbitrum.id]: http(),
        },
      }),
    [isClient]
  );

  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={wagmiQueryClient}>
        <RainbowKitProvider
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
