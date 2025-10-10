'use client';

import { SidebarNavigationProps, MenuItem } from './types';

interface NavigationItemProps {
  item: MenuItem;
  isActive: boolean;
  isCollapsed: boolean;
  onClick: () => void;
}

function NavigationItem({ item, isActive, isCollapsed, onClick }: NavigationItemProps) {
  const IconComponent = item.icon;
  
  return (
    <button
      onClick={onClick}
      className={`
        w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-left
        transition-all duration-200 group
        ${isActive 
          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800' 
          : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
        }
        ${isCollapsed ? 'justify-center px-2' : ''}
      `}
    >
      <IconComponent className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-blue-600 dark:text-blue-400' : ''}`} />
      {!isCollapsed && (
        <div className="flex-1 min-w-0">
          <p className="font-medium">{item.name}</p>
          <p className="text-xs text-gray-500 dark:text-gray-400 truncate">{item.description}</p>
        </div>
      )}
    </button>
  );
}

export default function SidebarNavigation({ 
  menuItems, 
  currentPath, 
  isCollapsed, 
  onNavigate, 
  onCloseMobile 
}: SidebarNavigationProps) {
  const handleItemClick = (path: string) => {
    onNavigate(path);
    onCloseMobile();
  };

  return (
    <nav className="flex-1 p-4 space-y-2">
      {menuItems.map((item) => (
        <NavigationItem
          key={item.id}
          item={item}
          isActive={currentPath === item.path}
          isCollapsed={isCollapsed}
          onClick={() => handleItemClick(item.path)}
        />
      ))}
    </nav>
  );
}