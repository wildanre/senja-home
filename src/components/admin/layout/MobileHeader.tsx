'use client';

import { Menu } from 'lucide-react';
import { MobileHeaderProps } from './types';

export default function MobileHeader({ onOpenMobile }: MobileHeaderProps) {
  return (
    <div className="lg:hidden bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-4 py-3">
      <div className="flex items-center justify-between">
        <button
          onClick={onOpenMobile}
          className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <Menu className="w-5 h-5 text-gray-600 dark:text-gray-400" />
        </button>
        <div className="flex items-center space-x-2">
          <div className="w-6 h-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
          <span className="font-semibold text-gray-900 dark:text-white">SenjaLabs Admin</span>
        </div>
      </div>
    </div>
  );
}