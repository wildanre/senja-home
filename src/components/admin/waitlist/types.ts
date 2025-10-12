export interface WaitlistUser {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

export interface WaitlistDataState {
  users: WaitlistUser[];
  isLoading: boolean;
}

export interface WaitlistTableProps {
  users: WaitlistUser[];
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
}

export interface WaitlistActionsProps {
  onRefresh: () => void;
  userCount: number;
  isLoading?: boolean;
}