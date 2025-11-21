'use client';

import { useState } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { logoutAdmin } from '@/lib/auth';
import { AdminLayoutProps } from './layout/types';
import { MENU_ITEMS } from './layout/menuConfig';
import Sidebar from './layout/Sidebar';
import MobileHeader from './layout/MobileHeader';

export default function AdminLayout({ children }: AdminLayoutProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logoutAdmin();
      router.push('/admin/auth/login');
    } catch (error) {
      // Still redirect even if logout API call fails
      router.push('/admin/auth/login');
    }
  };

  const handleToggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleOpenMobile = () => {
    setIsMobileOpen(true);
  };

  const handleCloseMobile = () => {
    setIsMobileOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex">
      <Sidebar
        isCollapsed={isCollapsed}
        isMobileOpen={isMobileOpen}
        onToggleCollapse={handleToggleCollapse}
        onCloseMobile={handleCloseMobile}
        currentPath={pathname}
        menuItems={MENU_ITEMS}
        onLogout={handleLogout}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        <MobileHeader onOpenMobile={handleOpenMobile} />
        
        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}