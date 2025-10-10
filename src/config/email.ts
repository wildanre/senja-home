// Email configuration
export const EMAIL_CONFIG = {
  // Replace this with your actual domain when deploying
  // For development: 'http://localhost:3000'
  // For production: 'https://your-actual-domain.com'
  DOMAIN: process.env.NEXT_PUBLIC_DOMAIN || 'https://your-domain.com',
  
  // Logo configuration - Using Senja Twitter profile image
  LOGO_URL: process.env.NEXT_PUBLIC_LOGO_URL || 'https://senja.gitbook.io/senja-docs/~gitbook/image?url=https%3A%2F%2F4093304817-files.gitbook.io%2F%7E%2Ffiles%2Fv0%2Fb%2Fgitbook-x-prod.appspot.com%2Fo%2Forganizations%252FJONkjXYArjKbuJxhBrqq%252Fsites%252Fsite_R8Tpa%252Ficon%252FnLeBtCMwZrMD4IWDKPBl%252Fsenjalogodocs.png%3Falt%3Dmedia%26token%3D5e5badeb-425a-48d5-9f35-aefaaefe3401&width=32&dpr=2&quality=100&sign=6c1552f7&sv=2',
  
  // Alternative: Use a base64 encoded logo for better email compatibility
  // LOGO_BASE64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=='
};