import { getToken } from '@/lib/auth';
import { WaitlistUser } from './types';

export async function fetchWaitlistData(): Promise<WaitlistUser[]> {
  try {
    const token = getToken();
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/admin/waitlist`, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      const data = await response.json();
      return data.users || [];
    } else {
      throw new Error('Failed to load waitlist data');
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