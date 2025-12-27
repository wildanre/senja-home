"use client";

import { createContext, useContext, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { config } from "@/lib/config";

interface User {
  id: number;
  discordId: string;
  discordUsername: string;
  discordAvatar: string | null;
  email: string | null;
  walletAddress: string | null;
  discordGuilds?: string[]; // Array of guild IDs user is a member of
  isOnWaitlist?: boolean; // Whether user has completed waitlist registration
}

interface AuthStatus {
  authenticated: boolean;
  user?: User;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const DiscordAuthContext = createContext<AuthContextType | undefined>(
  undefined
);

async function fetchAuthStatus(): Promise<AuthStatus> {
  const res = await fetch(`${config.backendUrl}/api/auth/status`, {
    credentials: "include",
  });
  return res.json();
}

interface AuthProviderProps {
  children: ReactNode;
  initialData?: AuthStatus;
}

export function DiscordAuthProvider({
  children,
  initialData,
}: AuthProviderProps) {
  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery<AuthStatus>({
    queryKey: ["auth-status"],
    queryFn: fetchAuthStatus,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000,
    retry: 1,
    initialData,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await fetch(`${config.backendUrl}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
      });
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth-status"], { authenticated: false });
    },
  });

  const login = () => {
    window.location.href = `${config.backendUrl}/api/auth/discord`;
  };

  const logout = async () => {
    await logoutMutation.mutateAsync();
  };

  const checkAuth = async () => {
    await refetch();
  };

  return (
    <DiscordAuthContext.Provider
      value={{
        user: data?.authenticated ? data.user! : null,
        loading: isLoading,
        isAuthenticated: !!data?.authenticated,
        login,
        logout,
        checkAuth,
      }}
    >
      {children}
    </DiscordAuthContext.Provider>
  );
}

export function useDiscordAuth() {
  const context = useContext(DiscordAuthContext);
  if (!context) {
    throw new Error("useDiscordAuth must be used within DiscordAuthProvider");
  }
  return context;
}

// Alias for backwards compatibility
export const AuthProvider = DiscordAuthProvider;
export const useAuth = useDiscordAuth;
