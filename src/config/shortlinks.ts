export const SHORTLINKS = {
  discord: "https://discord.gg/Yuf8n7rf9B",
  x: "https://x.com/SenjaLabs",
  twitter: "https://x.com/SenjaLabs",
} as const;

export type ShortlinkSlug = keyof typeof SHORTLINKS;

export function getShortlinkUrl(slug: string): string | null {
  return SHORTLINKS[slug as ShortlinkSlug] || null;
}

export function isValidShortlink(slug: string): slug is ShortlinkSlug {
  return slug in SHORTLINKS;
}
