export interface DitherConfig {
  waveColor: [number, number, number];
  waveAmplitude: number;
  waveFrequency: number;
  waveSpeed: number;
  colorNum: number;
  pixelSize: number;
  mouseRadius: number;
}

export const desktopDitherConfig: DitherConfig = {
  waveColor: [0.87, 0.5, 0.2],
  waveAmplitude: 0.3,
  waveFrequency: 3,
  waveSpeed: 0.05,
  colorNum: 4,
  pixelSize: 1.2,
  mouseRadius: 0.1,
};

export const mobileDitherConfig: DitherConfig = {
  waveColor: [0.9, 0.5, 0.2],
  waveAmplitude: 0.3,
  waveFrequency: 3,
  waveSpeed: 0.05,
  colorNum: 4,
  pixelSize: 1.2,
  mouseRadius: 0.3,
};

export const heroContent = {
  title: "The lending designed for permissionless liquidity",
  buttonText: "Join Waitlist",
  incubatedBy: "incubated by Kaia Chain",
  description:
    "Permissionless by design, Senja unites cross-chain lending, borrowing, and collateral trading without boundaries.",
  logoImage: "/senja2.gif",
  logoAlt: "Senja abstract illustration",
  brandName: "Senja",
} as const;

