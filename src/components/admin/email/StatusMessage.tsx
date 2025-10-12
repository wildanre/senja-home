'use client';

interface StatusMessageProps {
  status: string;
}

export default function StatusMessage({ status }: StatusMessageProps) {
  if (!status) return null;

  return (
    <div className="mt-4 p-4 rounded-md bg-gray-100 dark:bg-gray-700">
      <p className="text-sm text-gray-900 dark:text-white">{status}</p>
    </div>
  );
}