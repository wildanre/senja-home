# Motion Components

Reusable motion/animation components built on top of Framer Motion for consistent animations across the app.

## Components

### 1. FadeIn
Simple fade-in animation (opacity 0 → 1).

```tsx
import { FadeIn } from "@/components/ui/motion";

<FadeIn delay={0.2} duration={0.6}>
  <div>Your content</div>
</FadeIn>
```

**Props:**
- `delay?: number` - Delay before animation starts (default: 0)
- `duration?: number` - Animation duration (default: 0.6)
- `once?: boolean` - Animate only once (default: false)
- `amount?: number` - Percentage of element visible to trigger (default: 0.3)
- `className?: string` - Additional CSS classes

---

### 2. SlideIn
Slide animation from any direction.

```tsx
import { SlideIn } from "@/components/ui/motion";

<SlideIn direction="up" distance={50}>
  <div>Your content</div>
</SlideIn>
```

**Props:**
- `direction?: "up" | "down" | "left" | "right"` - Slide direction (default: "up")
- `distance?: number` - Distance to slide (default: 50)
- `delay?: number` - Delay before animation starts (default: 0)
- `duration?: number` - Animation duration (default: 0.6)
- `once?: boolean` - Animate only once (default: false)
- `amount?: number` - Percentage of element visible to trigger (default: 0.3)
- `className?: string` - Additional CSS classes

---

### 3. ScaleIn
Scale animation (scale up from smaller size).

```tsx
import { ScaleIn } from "@/components/ui/motion";

<ScaleIn initialScale={0.8}>
  <div>Your content</div>
</ScaleIn>
```

**Props:**
- `initialScale?: number` - Initial scale value (default: 0.9)
- `delay?: number` - Delay before animation starts (default: 0)
- `duration?: number` - Animation duration (default: 0.6)
- `once?: boolean` - Animate only once (default: false)
- `amount?: number` - Percentage of element visible to trigger (default: 0.3)
- `className?: string` - Additional CSS classes

---

### 4. Stagger
Stagger animation for children (animate them one by one).

```tsx
import { Stagger } from "@/components/ui/motion";

<Stagger staggerDelay={0.1}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</Stagger>
```

**Props:**
- `staggerDelay?: number` - Delay between each child (default: 0.1)
- `delay?: number` - Initial delay before first child (default: 0)
- `duration?: number` - Animation duration for each child (default: 0.6)
- `once?: boolean` - Animate only once (default: false)
- `amount?: number` - Percentage of element visible to trigger (default: 0.3)
- `className?: string` - Additional CSS classes

---

### 5. MotionContainer
Flexible motion container for custom animations.

```tsx
import { MotionContainer } from "@/components/ui/motion";

<MotionContainer
  as="section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
>
  <div>Your content</div>
</MotionContainer>
```

**Props:**
- `as?: "div" | "section" | "article" | "aside" | "header" | "footer" | "main"` - HTML element (default: "div")
- `className?: string` - Additional CSS classes
- All Framer Motion props (`initial`, `animate`, `whileInView`, `transition`, etc.)

---

## Usage Examples

### Before (direct motion usage):
```tsx
import { motion } from "motion/react";

<motion.div
  initial={{ opacity: 0, y: -30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.5 }}
>
  <h2>Get in Touch</h2>
</motion.div>
```

### After (using motion components):
```tsx
import { SlideIn } from "@/components/ui/motion";

<SlideIn direction="down" distance={30} duration={0.8} amount={0.5}>
  <h2>Get in Touch</h2>
</SlideIn>
```

## Benefits

✅ **Cleaner Code** - Less boilerplate  
✅ **Consistent** - Same animation patterns everywhere  
✅ **Maintainable** - Change animation in one place  
✅ **Type Safe** - Full TypeScript support  
✅ **Reusable** - DRY principle  
✅ **Flexible** - Easy to customize

