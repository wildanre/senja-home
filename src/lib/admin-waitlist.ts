import type {
  WaitlistListResponse,
  WaitlistQueryParams,
  WaitlistUser,
} from "@/types";

const ADMIN_WAITLIST_BATCH_SIZE = 500;

function buildWaitlistQuery(params: WaitlistQueryParams) {
  const searchParams = new URLSearchParams();

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined || value === null || value === "") {
      continue;
    }

    searchParams.set(key, String(value));
  }

  return searchParams.toString();
}

export async function fetchAdminWaitlistPage(
  params: WaitlistQueryParams = {}
): Promise<WaitlistListResponse> {
  const query = buildWaitlistQuery(params);
  const response = await fetch(
    `/api/admin/waitlist${query ? `?${query}` : ""}`,
    {
      method: "GET",
      credentials: "include",
      cache: "no-store",
    }
  );

  if (response.status === 401) {
    if (typeof window !== "undefined") {
      window.location.href = "/admin/auth/login";
    }
    throw new Error("Authentication required. Redirecting to login...");
  }

  const data = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(data.error || "Failed to load waitlist data");
  }

  return {
    success: true,
    users: Array.isArray(data.users) ? data.users : [],
    count: Number(data.count || 0),
    total: Number(data.total || 0),
    page: Number(data.page || 1),
    totalPages: Number(data.totalPages || 1),
  };
}

export async function fetchAllAdminWaitlistUsers(): Promise<WaitlistUser[]> {
  const allUsers: WaitlistUser[] = [];
  let page = 1;
  let totalPages = 1;

  do {
    const response = await fetchAdminWaitlistPage({
      page,
      limit: ADMIN_WAITLIST_BATCH_SIZE,
    });

    allUsers.push(...response.users);
    totalPages = response.totalPages;
    page += 1;
  } while (page <= totalPages);

  return allUsers;
}

export function formatWaitlistDate(dateString: string) {
  return new Date(dateString).toLocaleString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function isDateWithinPreset(
  dateString: string,
  preset: "all" | "today" | "7d" | "30d"
) {
  if (preset === "all") {
    return true;
  }

  const createdAt = new Date(dateString).getTime();
  const now = new Date();

  if (preset === "today") {
    const startOfToday = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate()
    ).getTime();
    return createdAt >= startOfToday;
  }

  const days = preset === "7d" ? 7 : 30;
  const threshold = now.getTime() - days * 24 * 60 * 60 * 1000;
  return createdAt >= threshold;
}
