import { LucideIcon } from "lucide-react";

// Admin - Authentication

export interface AdminCredentials {
  email: string;
  password: string;
}

export interface AdminUser {
  id: string;
  email: string;
}

// Admin - Layout

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

// Admin - Email

export interface EmailTheme {
  id: string;
  name: string;
  color: string;
  primaryColor: string;
  backgroundColor: string;
  textColor: string;
  template: string;
}

export interface EmailFormData {
  senderName: string;
  subject: string;
  message: string;
  url: string;
  date: string;
  footer: string;
}

// Admin - Waitlist

export interface WaitlistUser {
  id: number;
  address: string | null;
  email: string;
  createdAt: string;
}

export interface WaitlistDataState {
  users: WaitlistUser[];
  isLoading: boolean;
}

export interface WaitlistTableProps {
  users: WaitlistUser[];
  onRefresh: () => void;
  isRefreshing?: boolean;
}

export interface LoadingStateProps {
  message?: string;
}

export interface EmptyStateProps {
  title?: string;
  description?: string;
}

export interface WaitlistHeaderProps {
  userCount: number;
  connectedWalletCount?: number;
}

export interface WaitlistActionsProps {
  onRefresh: () => void;
  userCount: number;
  isLoading?: boolean;
  filteredCount?: number;
  onExport?: () => void;
}

// Library - Rate Limiting

export interface RateLimitResult {
  allowed: boolean;
  timeUntilReset?: number;
}

// Hooks

export interface DashboardStats {
  totalUsers: number;
  newUsersToday: number;
  connectedWallets: number;
  latestSignupAt: string | null;
}

export interface WaitlistListResponse {
  success: boolean;
  users: WaitlistUser[];
  count: number;
  total: number;
  page: number;
  totalPages: number;
}

export interface WaitlistQueryParams {
  page?: number;
  limit?: number;
}

export interface OrbitSizes {
  outerRadius: number;
  innerRadius: number;
  iconSize: number;
}

// Discord Integration

export interface DiscordUser {
  id: string;
  username: string;
  discriminator: string;
  globalName: string | null;
  avatar: string | null;
  email?: string;
}

export interface DiscordTokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
  refresh_token: string;
  scope: string;
}
