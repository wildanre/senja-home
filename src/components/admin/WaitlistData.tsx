"use client";

import { useWaitlistData } from "@/hooks/useWaitlistData";
import WaitlistHeader from "./waitlist/WaitlistHeader";
import WaitlistTable from "./waitlist/WaitlistTable";
import WaitlistActions from "./waitlist/WaitlistActions";
import { LoadingSpinner } from "@/components/ui/loading";
import EmptyState from "./waitlist/EmptyState";

export default function WaitlistData() {
  const { users, isLoading, error, refetch, isFetching } = useWaitlistData();

  if (isLoading) {
    return <LoadingSpinner message="Loading waitlist data..." fullScreen />;
  }

  if (error) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <div className="text-center py-8">
          <p className="text-red-600 dark:text-red-400 mb-4">
            Failed to load waitlist data
          </p>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {error.message}
          </p>
          <button
            onClick={() => refetch()}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  const hasUsers = users.length > 0;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <WaitlistHeader userCount={users.length} />

      {hasUsers ? <WaitlistTable users={users} /> : <EmptyState />}

      <WaitlistActions
        onRefresh={refetch}
        userCount={users.length}
        isLoading={isFetching}
        users={users}
      />
    </div>
  );
}
