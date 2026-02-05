"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(`Global error: ${error}`);
  }, [error]);

  return (
    <html>
      <body className="bg-black text-senja-primary flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center gap-6 text-center max-w-md px-6">
          <h1 className="text-4xl font-bold font-hero">
            Something went wrong!
          </h1>
          <p className="text-white/60">
            A critical error occurred. We apologize for the inconvenience.
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
      </body>
    </html>
  );
}
