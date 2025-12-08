import type { Metadata } from "next";
import Script from "next/script";
import {
  DM_Serif_Display,
  Geist,
  Geist_Mono,
  Playfair_Display,
} from "next/font/google";
import "./globals.css";
import { BackgroundWrapper } from "@/components/ui/background";
import { AuthProvider } from "@/contexts/auth-context";
import { Toaster } from "sonner";
import QueryProvider from "@/components/providers/query-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const heroDisplay = DM_Serif_Display({
  variable: "--font-hero-display",
  subsets: ["latin"],
  weight: ["400"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["italic"],
});


const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Senja Finance",
    template: "%s | Senja Finance DeFi Protocol"
  },
  description: "Senja Finance is a permissionless stablecoin lending and borrowing protocol built on Kaia ecosystem. Cross-chain liquidity aggregation with LayerZero integration, isolated pools, and seamless user experience via LINE Mini DApp.",
  keywords: [
    "Senja Finance",
    "senja finance",
    "senja",
    "senja finance protocol",
    "senja protocol",
    "senja finance lending",
    "senja finance borrowing",
    "senja finance lending and borrowing",
    "senja finance lending and borrowing protocol",
    "senja finance lending and borrowing protocol on kaia",
    "senja finance lending and borrowing protocol on kaia ecosystem",
    "senja finance lending and borrowing protocol on kaia ecosystem with layerzero integration",
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
  metadataBase: new URL('https://www.senja.finance'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.senja.finance',
    siteName: 'Senja Finance',
    title: 'Senja Finance',
    description: 'Senja Finance is a permissionless stablecoin lending and borrowing protocol built on Kaia ecosystem. Cross-chain liquidity aggregation with LayerZero integration.',
    images: [
      {
        url: '/senja-logo.png',
        width: 1200,
        height: 630,
        alt: 'Senja Finance - DeFi Lending Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Senja Finance - Permissionless DeFi Protocol',
    description: 'Cross-chain lending and borrowing protocol with LayerZero integration on Kaia ecosystem.',
    images: ['/senja-logo.png'],
    creator: '@senjafinance',
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
        className={`${geistSans.variable} ${geistMono.variable} ${heroDisplay.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Script
          id="prevent-auto-scroll"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
                window.history.scrollRestoration = 'manual';
              }
              // Prevent auto-scroll to hash on page load if no hash
              if (typeof window !== 'undefined' && !window.location.hash) {
                window.scrollTo(0, 0);
              }
            `,
          }}
        />
        <Toaster 
          position="top-right" 
          richColors 
          closeButton
          toastOptions={{
            style: {
              background: 'rgba(0, 0, 0, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              color: 'white',
            },
          }}
        />
        <QueryProvider>
          <AuthProvider>
            <BackgroundWrapper>{children}</BackgroundWrapper>
          </AuthProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
