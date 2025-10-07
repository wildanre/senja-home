# Components Structure

This directory contains all reusable components for the Senja landing page.

## Directory Structure

```
components/
├── ui/               # Reusable UI components
│   ├── Button.tsx    # Primary and secondary button component
│   └── index.ts      # UI components exports
│
└── sections/         # Page section components
    ├── Hero.tsx      # Hero section with title, taglines, and CTA buttons
    └── index.ts      # Section components exports
```

## Usage

### Button Component
```tsx
import { Button } from '@/components/ui';

<Button href="/app" variant="primary">
  Go to App
</Button>
```

### Hero Section
```tsx
import { Hero } from '@/components/sections';

<Hero />
```

## Color Palette

The Senja platform uses the following colors:
- `senja-cream`: #FFF3E0
- `senja-cream-light`: #FFE0B2
- `senja-orange`: #FF7043
- `senja-brown`: #5D4037
- `senja-brown-dark`: #4E342E
- `senja-background`: #FAFAFA
