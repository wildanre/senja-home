"use client";

import { Users } from "lucide-react";
import type { EmptyStateProps } from "@/types";

export default function EmptyState({
  title = "No users yet",
  description = "No users have registered for the waitlist yet",
}: EmptyStateProps) {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
        <Users className="w-8 h-8 text-gray-400" />
      </div>
      <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-gray-500 dark:text-gray-400">{description}</p>
    </div>
  );
}
