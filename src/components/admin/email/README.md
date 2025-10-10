# Email Component Refactoring

This folder contains the refactored email components that were originally part of a single `SendEmailForm.tsx` file.

## Components Structure

### Core Components
- **`SendEmailForm.tsx`** - Main component that orchestrates all email functionality
- **`types.ts`** - TypeScript interfaces and type definitions
- **`emailThemes.ts`** - Email template themes with enhanced designs and animations

### UI Components
- **`ThemeSelector.tsx`** - Theme selection grid component
- **`EmailFormFields.tsx`** - Form input fields (sender, subject, message, URL, date)
- **`EmailPreview.tsx`** - Email preview component with HTML rendering
- **`SubmitButton.tsx`** - Submit button with loading states
- **`StatusMessage.tsx`** - Status/error message display component

### Utilities
- **`emailUtils.ts`** - Email template processing and HTML generation utilities
- **`index.ts`** - Barrel export file for easy imports

## Features

### Email Templates
All templates now include:
- **Senja Logo Integration** - Logo from `/public/senja-logo.png`
- **Animated Headers** - Different animation styles per theme:
  - Blue: Pulse animation with radial gradients
  - Green: Organic floating particles with SVG animations
  - Yellow: Energy pulse with multiple gradient overlays
- **Modern Design** - Enhanced gradients, typography, and spacing
- **Responsive Layout** - Professional email client compatibility

### Component Benefits
- **Separation of Concerns** - Each component has a single responsibility
- **Reusability** - Components can be reused in other parts of the application
- **Type Safety** - Full TypeScript support with proper interfaces
- **Maintainability** - Easier to test, debug, and modify individual components
- **Code Organization** - Logical grouping of related functionality

## Usage

```tsx
import SendEmailForm from './SendEmailForm';

// Or import individual components
import { ThemeSelector, EmailFormFields, EmailPreview } from './email';
```

## Template System

The email templates use a simple placeholder system:
- `{{SENDER_NAME}}` - Replaced with sender name
- `{{MESSAGE}}` - Replaced with email message
- `{{URL}}` - Replaced with optional website URL
- `{{DATE}}` - Replaced with optional date
- `{{#if FIELD}}...{{/if}}` - Conditional blocks for optional fields

All templates are mobile-responsive and include modern design elements while maintaining compatibility with email clients.