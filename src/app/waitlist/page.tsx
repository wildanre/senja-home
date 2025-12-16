import { Suspense } from "react";
import { WaitlistSection } from "@/components/sections/waitlist";
import { getServerAuthStatus } from "@/lib/server-auth";

function WaitlistLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-8 h-8 border-2 border-[#e7b67c]/30 border-t-[#e7b67c] rounded-full animate-spin" />
    </div>
  );
}

export default async function WaitlistPage() {
  const initialAuth = await getServerAuthStatus();

  return (
    <div className="min-h-screen">
      <Suspense fallback={<WaitlistLoading />}>
        <WaitlistSection initialAuth={initialAuth} />
      </Suspense>
    </div>
  );
}
