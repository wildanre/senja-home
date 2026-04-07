import { Suspense } from "react";
import type { Metadata } from "next";
import WaitlistSection from "@/features/waitlist/components/waitlist/waitlist-section";
import { getServerAuthStatus } from "@/features/waitlist/lib/server-auth";
import { WaitlistIntro } from "@/features/waitlist/components/waitlist/waitlist-intro";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Waitlist",
  description:
    "Join the Senja Finance waitlist to get early access to the permissionless stablecoin lending and borrowing protocol on Kaia ecosystem. Be among the first to experience cross-chain DeFi with LayerZero integration.",
  alternates: {
    canonical: "/waitlist",
  },
  openGraph: {
    title: "Join the Senja Finance Waitlist",
    description:
      "Get early access to Senja Finance — permissionless stablecoin lending and borrowing on Kaia ecosystem with LayerZero cross-chain integration.",
    url: "https://senja.finance/waitlist",
    images: [
      {
        url: "/senja-logo.png",
        width: 1200,
        height: 630,
        alt: "Senja Finance Waitlist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Senja Finance Waitlist",
    description:
      "Get early access to Senja Finance — cross-chain DeFi lending and borrowing on Kaia ecosystem.",
    images: ["/senja-logo.png"],
  },
};

function WaitlistLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-senja-primary/30 border-t-senja-primary rounded-full animate-spin" />
    </div>
  );
}

export default async function WaitlistPage() {
  const initialAuth = await getServerAuthStatus();

  return (
    <div className="min-h-screen">
      <WaitlistIntro />
      <Suspense fallback={<WaitlistLoading />}>
        <WaitlistSection initialAuth={initialAuth} />
      </Suspense>
    </div>
  );
}
