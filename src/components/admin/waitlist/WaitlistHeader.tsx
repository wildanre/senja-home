'use client';

import { WaitlistHeaderProps } from './types';

export default function WaitlistHeader({ userCount }: WaitlistHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
        Waitlist Data
      </h2>
      <div className="bg-blue-100 dark:bg-blue-900 px-4 py-2 rounded-full">
        <span className="text-blue-800 dark:text-blue-200 font-medium">
          {userCount} users
        </span>
      </div>
    </div>
  );
}