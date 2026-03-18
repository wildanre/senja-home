import type { WaitlistUser } from "@/types";
import {
  fetchAllAdminWaitlistUsers,
  formatWaitlistDate,
} from "@/lib/admin-waitlist";

export async function fetchWaitlistData(): Promise<WaitlistUser[]> {
  return fetchAllAdminWaitlistUsers();
}

export function formatRegistrationDate(dateString: string): string {
  return formatWaitlistDate(dateString);
}
