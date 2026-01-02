import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { kaia } from "viem/chains";
import {
  metaMaskWallet,
  walletConnectWallet,
  rainbowWallet,
  okxWallet,
  rabbyWallet,
} from "@rainbow-me/rainbowkit/wallets";


const PROJECT_ID = process.env.NEXT_PUBLIC_RAINBOW_PROJECT_ID;

export const config = getDefaultConfig({
  appName: "Senja",
  projectId: PROJECT_ID as string,
  chains: [kaia],
  ssr: true,
  wallets: [
    {
      groupName: "Popular",
      wallets: [
        metaMaskWallet,
        okxWallet,
        rabbyWallet,
        walletConnectWallet,
        rainbowWallet,
      ],
    },
  ],
});
