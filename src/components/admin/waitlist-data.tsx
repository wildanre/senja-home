"use client";

import { useMemo } from "react";
import { useWaitlistData } from "@/hooks/useWaitlistData";
import WaitlistHeader from "./waitlist/waitlist-header";
import WaitlistTable from "./waitlist/waitlist-table";
import LoadingSpinner from "@/components/ui/loading/loading-spinner";
import EmptyState from "./waitlist/empty-state";

export default function WaitlistData() {
  const { users, isLoading, error, refetch, isFetching } = useWaitlistData();

  const connectedWalletCount = useMemo(
    () => users.filter((user) => Boolean(user.address)).length,
    [users]
  );

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

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <WaitlistHeader
        userCount={users.length}
        connectedWalletCount={connectedWalletCount}
      />

      {users.length > 0 ? (
        <WaitlistTable
          users={users}
          onRefresh={refetch}
          isRefreshing={isFetching}
        />
      ) : (
        <EmptyState />
      )}
    </div>
  );
}
