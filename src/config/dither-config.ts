export interface DitherConfig {
  waveColor: [number, number, number];
  waveAmplitude: number;
  waveFrequency: number;
  waveSpeed: number;
  colorNum: number;
  pixelSize: number;
  mouseRadius: number;
  enableMouseInteraction?: boolean;
}

export const desktopDitherConfig: DitherConfig = {
  waveColor: [0.87, 0.5, 0.2],
  waveAmplitude: 0.3,
  waveFrequency: 3,
  waveSpeed: 0.05,
  colorNum: 4,
  pixelSize: 1.2,
  mouseRadius: 0.3,
  enableMouseInteraction: true,
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
