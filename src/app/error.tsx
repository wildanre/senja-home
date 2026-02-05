"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-senja-primary">
      <div className="flex flex-col items-center gap-6 text-center max-w-md px-6">
        <h2 className="text-4xl font-bold font-hero">Something went wrong!</h2>
        <p className="text-white/60">
          We encountered an error while loading this page.
        </p>
        <div className="flex gap-4">
          <Button onClick={() => reset()} variant="outline">
            Try again
          </Button>
          <Link href="/">
            <Button>Go Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
