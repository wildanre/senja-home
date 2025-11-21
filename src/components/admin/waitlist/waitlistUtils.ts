import { WaitlistUser } from './types';

/**
 * Fetch waitlist data using Next.js API route
 * Authentication is handled via httpOnly cookie
 */
export async function fetchWaitlistData(): Promise<WaitlistUser[]> {
  try {
    const response = await fetch('/api/admin/waitlist', {
      method: 'GET',
      credentials: 'include', // Important: include cookies
    });

    if (response.ok) {
      const data = await response.json();
      return data.users || [];
    } else {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || 'Failed to load waitlist data');
    }
  } catch (error) {
    console.error('Error loading waitlist:', error);
    throw error;
  }
}

export function formatRegistrationDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
}