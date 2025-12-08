import type { AdminUser } from "@/types";
import { getCSRFToken, clearCSRFToken, refreshCSRFToken } from "./csrf";

export async function isAuthenticated(): Promise<boolean> {
  try {
    const response = await fetch("/api/admin/verify", {
      method: "GET",
      credentials: "include",
    });

    if (response.ok) {
      const data = await response.json();
      return data.success === true;
    }

    return false;
  } catch (_error) {
    return false;
  }
}

export async function loginAdmin(
  email: string,
  password: string
): Promise<{ success: boolean; error?: string; admin?: AdminUser }> {
  try {
    // Get CSRF token first
    const csrfToken = await getCSRFToken();

    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-csrf-token": csrfToken,
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });

    // Parse response JSON
    let data;
    try {
      data = await response.json();
    } catch (_parseError) {
      return {
        success: false,
        error:
          response.status === 401
            ? "Invalid email or password"
            : "Server error. Please try again.",
      };
    }

    // Handle CSRF error - refresh token and retry once
    if (response.status === 403 && data.error?.includes("CSRF")) {
      try {
        const newToken = await refreshCSRFToken();
        const retryResponse = await fetch("/api/admin/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "x-csrf-token": newToken,
          },
          credentials: "include",
          body: JSON.stringify({ email, password }),
        });

        const retryData = await retryResponse.json();

        if (retryResponse.ok && retryData.success) {
          return { success: true, admin: retryData.admin };
        }

        return {
          success: false,
          error: retryData.error || "Login failed",
        };
      } catch (_retryError) {
        return {
          success: false,
          error: "CSRF token error. Please refresh the page and try again.",
        };
      }
    }

    if (response.ok && data.success) {
      return { success: true, admin: data.admin };
    }

    return {
      success: false,
      error:
        data.error ||
        (response.status === 401
          ? "Invalid email or password"
          : "Login failed"),
    };
  } catch (error) {
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Network error. Please check your connection.",
    };
  }
}

export async function logoutAdmin(): Promise<void> {
  try {
    await fetch("/api/admin/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    // Clear CSRF token after logout
    clearCSRFToken();
  } catch (_error) {
    // Clear CSRF token even on error
    clearCSRFToken();
  }
}

export function clearAuthCache(): void {}

export function getAuthCacheStatus(): {
  cached: boolean;
  age?: number;
  result?: boolean;
} {
  return { cached: false };
}
