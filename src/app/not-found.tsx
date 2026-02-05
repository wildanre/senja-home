import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-senja-primary">
      <div className="flex flex-col items-center gap-6 text-center max-w-md px-6">
        <h2 className="text-6xl font-bold font-hero text-senja-accent">404</h2>
        <h3 className="text-2xl font-semibold">Page Not Found</h3>
        <p className="text-white/60">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button>Return Home</Button>
        </Link>
      </div>
    </div>
  );
}
