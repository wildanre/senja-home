import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import { kaia } from "viem/chains";
export const config = getDefaultConfig({
  appName: "Senja Finance",
  projectId: "YOUR_PROJECT_ID",
  chains: [kaia],
  ssr: true,
});
