import { Suspense } from "react";
import WaitlistSection from "@/components/sections/waitlist/waitlist-section";
import { getServerAuthStatus } from "@/lib/server-auth";
import { WaitlistIntro } from "@/components/sections/waitlist/waitlist-intro";

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
