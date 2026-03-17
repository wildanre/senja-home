"use client";

import { usePathname } from "next/navigation";

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div key={pathname} className="animate-page-transition-in">
      {children}
      <style jsx>{`
        .animate-page-transition-in {
          animation: page-transition-in 0.3s ease-out both;
        }

        @keyframes page-transition-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
