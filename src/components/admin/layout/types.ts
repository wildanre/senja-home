import { LucideIcon } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  icon: LucideIcon;
  path: string;
  description: string;
}

export interface SidebarProps {
  isCollapsed: boolean;
  isMobileOpen: boolean;
  onToggleCollapse: () => void;
  onCloseMobile: () => void;
  currentPath: string;
  menuItems: MenuItem[];
  onLogout: () => void;
}

export interface SidebarHeaderProps {
  isCollapsed: boolean;
  onToggleCollapse: () => void;
}

export interface SidebarNavigationProps {
  menuItems: MenuItem[];
  currentPath: string;
  isCollapsed: boolean;
  onCloseMobile: () => void;
}

export interface SidebarFooterProps {
  isCollapsed: boolean;
  onLogout: () => void;
}

export interface MobileHeaderProps {
  onOpenMobile: () => void;
}

export interface AdminLayoutProps {
  children: React.ReactNode;
}