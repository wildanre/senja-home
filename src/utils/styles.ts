// Background patterns 
export const BACKGROUND_PATTERNS = {
  // Primary background (white/dark)
  primary: 'bg-white dark:bg-[#1a1a2e]',
  
  // Secondary background (light gray/gradient)
  secondary: 'bg-gray-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950',
  
  // Hero background (special midnight gradient)
  hero: 'bg-gradient-to-br from-cream-50 to-orange-50 dark:bg-gradient-to-br dark:from-slate-900 dark:via-blue-950 dark:to-indigo-950',
  
  // Card backgrounds
  card: {
    primary: 'bg-white dark:bg-[#003366]',
    secondary: 'bg-gray-50 dark:bg-[#002244]',
    gradient: 'bg-gradient-to-r from-senja-orange/10 to-senja-orange/5 dark:from-[#004488]/10 dark:to-[#004488]/5'
  }
} as const;

// Border patterns
export const BORDER_PATTERNS = {
  primary: 'border border-senja-orange/20 dark:border-[#004488]',
  secondary: 'border border-gray-200 dark:border-[#004488]/60',
  none: 'border-0'
} as const;

// Shadow patterns
export const SHADOW_PATTERNS = {
  sm: 'shadow-sm hover:shadow-md',
  md: 'shadow-md hover:shadow-lg',
  lg: 'shadow-lg hover:shadow-xl'
} as const;