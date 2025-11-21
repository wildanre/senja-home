
interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimitMap = new Map<string, RateLimitEntry>();

// Cleanup old entries every 5 minutes
setInterval(() => {
  const now = Date.now();
  for (const [key, entry] of rateLimitMap.entries()) {
    if (now > entry.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}, 5 * 60 * 1000);

export interface RateLimitResult {
  allowed: boolean;
  remaining: number;
  resetTime: number;
}

/**
 * Check if request is allowed based on rate limit
 * @param identifier - Unique identifier (e.g., email or IP)
 * @param maxAttempts - Maximum attempts allowed in window
 * @param windowMs - Time window in milliseconds
 */
export function checkRateLimit(
  identifier: string,
  maxAttempts: number = 5,
  windowMs: number = 15 * 60 * 1000 // 15 minutes default
): RateLimitResult {
  const now = Date.now();
  const entry = rateLimitMap.get(identifier);

  // No entry or expired entry - allow and create new
  if (!entry || now > entry.resetTime) {
    const resetTime = now + windowMs;
    rateLimitMap.set(identifier, {
      count: 1,
      resetTime,
    });
    return {
      allowed: true,
      remaining: maxAttempts - 1,
      resetTime,
    };
  }

  // Entry exists and not expired
  if (entry.count >= maxAttempts) {
    // Rate limit exceeded
    return {
      allowed: false,
      remaining: 0,
      resetTime: entry.resetTime,
    };
  }

  // Increment count and allow
  entry.count += 1;
  rateLimitMap.set(identifier, entry);

  return {
    allowed: true,
    remaining: maxAttempts - entry.count,
    resetTime: entry.resetTime,
  };
}

export function resetRateLimit(identifier: string): void {
  rateLimitMap.delete(identifier);
}

export function getTimeUntilReset(resetTime: number): string {
  const now = Date.now();
  const diffMs = resetTime - now;
  
  if (diffMs <= 0) return '0 seconds';
  
  const minutes = Math.floor(diffMs / 60000);
  const seconds = Math.floor((diffMs % 60000) / 1000);
  
  if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? 's' : ''} ${seconds} second${seconds !== 1 ? 's' : ''}`;
  }
  
  return `${seconds} second${seconds !== 1 ? 's' : ''}`;
}
