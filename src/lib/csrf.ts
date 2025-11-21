
let csrfToken: string | null = null;


export async function getCSRFToken(): Promise<string> {
  if (csrfToken) {
    return csrfToken;
  }

  try {
    const response = await fetch('/api/csrf-token', {
      method: 'GET',
      credentials: 'include',
    });

    if (!response.ok) {
      throw new Error('Failed to get CSRF token');
    }

    const data = await response.json();
    
    if (!data.csrfToken) {
      throw new Error('CSRF token not found in response');
    }

    csrfToken = data.csrfToken;
    return csrfToken as string;
  } catch (error) {
    throw new Error(`Failed to get CSRF token: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}


export function clearCSRFToken(): void {
  csrfToken = null;
}


export async function refreshCSRFToken(): Promise<string> {
  clearCSRFToken();
  return getCSRFToken();
}

/**
 * Initialize CSRF token on app load
 * Call this when the application starts
 */
export async function initializeCSRFToken(): Promise<void> {
  try {
    await getCSRFToken();
  } catch (error) {
    // Silent error on initialization
    // Token will be fetched on first request
  }
}
