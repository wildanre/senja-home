"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import LoadingSpinner from "@/components/ui/loading/loading-spinner";

export default function AdminAuthPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/admin/auth/login");
  }, [router]);

  return <LoadingSpinner message="Redirecting..." fullScreen />;
}
