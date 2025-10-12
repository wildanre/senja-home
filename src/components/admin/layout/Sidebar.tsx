'use client';

import { SidebarProps } from './types';
import SidebarHeader from './SidebarHeader';
import SidebarNavigation from './SidebarNavigation';
import SidebarFooter from './SidebarFooter';

export default function Sidebar({
  isCollapsed,
  isMobileOpen,
  onToggleCollapse,
  onCloseMobile,
  currentPath,
  menuItems,
  onLogout
}: SidebarProps) {
  return (
    <>
      {/* Mobile backdrop */}
      {isMobileOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
          onClick={onCloseMobile}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:relative inset-y-0 left-0 z-30 h-screen
        ${isCollapsed ? 'w-16' : 'w-64'}
        ${isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
        bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
        transition-all duration-300 ease-in-out
        flex flex-col
      `}>
        <SidebarHeader 
          isCollapsed={isCollapsed}
          onToggleCollapse={onToggleCollapse}
        />
        
        <SidebarNavigation
          menuItems={menuItems}
          currentPath={currentPath}
          isCollapsed={isCollapsed}
          onCloseMobile={onCloseMobile}
        />
        
        <SidebarFooter 
          isCollapsed={isCollapsed}
          onLogout={onLogout}
        />
      </div>
    </>
  );
}