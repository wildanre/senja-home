'use client';

import { useState, useEffect } from 'react';
import { WaitlistUser } from './waitlist/types';
import { fetchWaitlistData } from './waitlist/waitlistUtils';
import WaitlistHeader from './waitlist/WaitlistHeader';
import WaitlistTable from './waitlist/WaitlistTable';
import WaitlistActions from './waitlist/WaitlistActions';
import LoadingState from './waitlist/LoadingState';
import EmptyState from './waitlist/EmptyState';

export default function WaitlistData() {
  const [waitlistUsers, setWaitlistUsers] = useState<WaitlistUser[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    loadWaitlistData();
  }, []);

  const loadWaitlistData = async () => {
    try {
      setIsRefreshing(true);
      const users = await fetchWaitlistData();
      setWaitlistUsers(users);
    } catch (error) {
      // Error is handled by the component state
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleRefresh = async () => {
    await loadWaitlistData();
  };

  if (isLoading) {
    return <LoadingState />;
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
      <WaitlistHeader userCount={waitlistUsers.length} />
      
      {waitlistUsers.length > 0 ? (
        <WaitlistTable users={waitlistUsers} />
      ) : (
        <EmptyState />
      )}
      
      <WaitlistActions 
        onRefresh={handleRefresh}
        userCount={waitlistUsers.length}
        isLoading={isRefreshing}
      />
    </div>
  );
}