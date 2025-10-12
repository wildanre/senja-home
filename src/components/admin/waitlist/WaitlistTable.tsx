'use client';

import { WaitlistUser } from './types';

interface WaitlistTableRowProps {
  user: WaitlistUser;
  index: number;
}

function WaitlistTableRow({ user, index }: WaitlistTableRowProps) {
  return (
    <tr 
      className={`border-b dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors ${
        index % 2 === 0 ? 'bg-gray-50 dark:bg-gray-750' : 'bg-white dark:bg-gray-800'
      }`}
    >
      <td className="py-3 px-4 text-gray-600 dark:text-gray-400">
        {index + 1}
      </td>
      <td className="py-3 px-4 text-gray-900 dark:text-white font-medium">
        {user.name}
      </td>
      <td className="py-3 px-4 text-gray-600 dark:text-gray-300">
        {user.email}
      </td>
      <td className="py-3 px-4 text-gray-500 dark:text-gray-400">
        {new Date(user.createdAt).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })}
      </td>
    </tr>
  );
}

interface WaitlistTableProps {
  users: WaitlistUser[];
}

export default function WaitlistTable({ users }: WaitlistTableProps) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead>
          <tr className="border-b dark:border-gray-700">
            <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">No</th>
            <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Name</th>
            <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Email</th>
            <th className="text-left py-3 px-4 text-gray-900 dark:text-white font-semibold">Registration Date</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <WaitlistTableRow 
              key={user.id} 
              user={user} 
              index={index} 
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}