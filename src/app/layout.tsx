import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundWrapper from "@/components/BackgroundWrapper";
import { AuthProvider } from "@/contexts/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Senja - Permissionless DeFi Protocol | Cross-Chain Lending & Borrowing",
    template: "%s | Senja DeFi Protocol"
  },
  description: "Senja is a permissionless stablecoin lending and borrowing protocol built on Kaia ecosystem. Cross-chain liquidity aggregation with LayerZero integration, isolated pools, and seamless user experience via LINE Mini DApp.",
  keywords: [
    "Senja Finance",
    "senja finance",
    "Senja Finance Protocol",
    "Senja Protocol",
    "DeFi",
    "lending protocol",
    "borrowing",
    "stablecoin",
    "cross-chain",
    "Kaia ecosystem",
    "LayerZero",
    "LINE Mini DApp",
    "permissionless",
    "liquidity",
    "collateral",
    "DragonSwap",
    "Orakl Network",
    "blockchain",
    "cryptocurrency",
    "yield farming"
  ],
  authors: [{ name: "Senja Protocol Team" }],
  creator: "Senja Protocol",
  publisher: "Senja Protocol",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://senja.finance'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://senja.finance',
    siteName: 'Senja Protocol',
    title: 'Senja - Permissionless DeFi Protocol | Cross-Chain Lending & Borrowing',
    description: 'Senja is a permissionless stablecoin lending and borrowing protocol built on Kaia ecosystem. Cross-chain liquidity aggregation with LayerZero integration.',
    images: [
      {
        url: '/senja-logo.png',
        width: 1200,
        height: 630,
        alt: 'Senja Protocol - DeFi Lending Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senja - Permissionless DeFi Protocol',
    description: 'Cross-chain lending and borrowing protocol with LayerZero integration on Kaia ecosystem.',
    images: ['/senja-logo.png'],
    creator: '@senjaprotocol',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: '4thNE4JzvndGPzU-px40Nu2S8BYNudg4SswZH_Tc3zU',
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/senja-logo.png', type: 'image/png' }
    ],
    shortcut: '/favicon.svg',
    apple: '/senja-logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <BackgroundWrapper>{children}</BackgroundWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
