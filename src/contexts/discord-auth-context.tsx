"use client";

import { createContext, useContext, ReactNode } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import type { DiscordAuthStatus, DiscordAuthUser } from "@/types/auth";

interface AuthContextType {
  user: DiscordAuthUser | null;
  loading: boolean;
  isAuthenticated: boolean;
  login: () => void;
  logout: () => Promise<void>;
  checkAuth: () => Promise<void>;
}

const DiscordAuthContext = createContext<AuthContextType | undefined>(
  undefined
);

async function fetchAuthStatus(): Promise<DiscordAuthStatus> {
  const res = await fetch("/api/auth/status", {
    credentials: "include",
  });
  return (await res.json()) as DiscordAuthStatus;
}

interface AuthProviderProps {
  children: ReactNode;
  initialData?: DiscordAuthStatus;
}

export function DiscordAuthProvider({
  children,
  initialData,
}: AuthProviderProps) {
  const queryClient = useQueryClient();

  const { data, isLoading, refetch } = useQuery<DiscordAuthStatus>({
    queryKey: ["auth-status"],
    queryFn: fetchAuthStatus,
    staleTime: 10 * 60 * 1000, // 10 minutes
    gcTime: 15 * 60 * 1000,
    retry: 1,
    initialData,
  });

  const logoutMutation = useMutation({
    mutationFn: async () => {
      await fetch("/api/auth/logout", {
        method: "POST",
        credentials: "include",
      });
    },
    onSuccess: () => {
      queryClient.setQueryData(["auth-status"], { authenticated: false });
    },
  });

  const login = () => {
    window.location.href = "/api/auth/discord";
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
