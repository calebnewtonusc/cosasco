# Cosasco: Design Notes & Improvement Roadmap
> Source: UI/UX audit of WONE project (Next.js 16 + Framer Motion SaaS platform)
> Applied to: Cosasco B2B industrial corrosion monitoring website

---

## What Was Implemented in This Session

### ✅ globals.css: Polished design system baseline
- **Custom scrollbar:** 6px, on-brand `#c4cdd6` / `#94aabb` color scheme
- **`scroll-padding-top: 80px`:** Anchor links now account for fixed nav height
- **`@keyframes fade-up`:** 24px translateY + cubic-bezier(0.22, 1, 0.36, 1) (WONE's "smooth pop-in" easing)
- **`@keyframes fadeInDown`:** Dropdown menus (was inline, now in CSS)
- **`.animate-fade-up` / `.animate-fade-in`:** Utility classes for CSS-only scroll animations
- **`.delay-75` through `.delay-500`:** Stagger delay utilities for grid children
- **`.no-scrollbar`:** Hides scrollbar on horizontal filter bars (News, Resources)
- **`:focus-visible`:** Added `border-radius: 3px` for cleaner pill-style focus ring

### ✅ AnimateOnScroll.tsx: Better scroll trigger + easing
- Changed from `threshold: 0.1` to `rootMargin: '-60px 0px'`: triggers when element is 60px into viewport (more accurate, avoids premature firing on mobile)
- Changed easing to `cubic-bezier(0.22, 1, 0.36, 1)` via inline `transitionTimingFunction`: same smooth deceleration WONE uses throughout
- Increased translateY from `translate-y-4` (16px) to `translate-y-5` (20px): more pronounced entrance

### ✅ Navigation.tsx: Glassmorphism scroll effect + bug fix
- Added `scrolled` state tracking `window.scrollY > 12`
- When scrolled: `bg-white/95 backdrop-blur-sm shadow-sm`, nav gains frosted glass effect as page scrolls
- When at top: `bg-white border-transparent`, clean and borderless against hero sections
- 300ms smooth CSS transition on background/backdrop-filter/shadow
- **Bug fix:** Mobile "Services" link was pointing to `/support`, corrected to `/services`

---

## Remaining Improvements (Future Roadmap)

These require either `framer-motion` installation or more significant refactoring.

---

### 🔲 Priority 1: High Impact, Moderate Effort

#### 1. Framer Motion staggered grid animations
**WONE pattern:** Each section's card grid uses `useInView` + staggered `delay: i * 0.07s` per child.

**Install:**
```bash
npm install framer-motion
```

**Implementation pattern for any grid:**
```tsx
'use client'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { motion } from 'framer-motion'

const E = [0.22, 1, 0.36, 1] as const

// Wrap grid:
const ref = useRef(null)
const inView = useInView(ref, { once: true, margin: '-60px' })

// Each grid item:
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={inView ? { opacity: 1, y: 0 } : {}}
  transition={{ duration: 0.5, delay: i * 0.08, ease: E }}
>
  {card}
</motion.div>
```

**Best pages to apply this:** Products page (4 category cards), Solutions page (6 industry cards), Services page (6 service cards), Resources page (download grid).

---

#### 2. Active section tracking in navigation
**WONE pattern:** IntersectionObserver watches all `[data-section]` elements. The nav link for the visible section gets highlighted.

**Implementation:**
```tsx
// In Navigation.tsx — add after existing useEffects:
const [activeSection, setActiveSection] = useState('')

useEffect(() => {
  const sections = document.querySelectorAll('[data-section]')
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.getAttribute('data-section') ?? '')
        }
      }
    },
    { rootMargin: '-40% 0px -55% 0px' }
  )
  sections.forEach((s) => observer.observe(s))
  return () => observer.disconnect()
}, [])
```

**Apply to nav links:**
```tsx
const isActive = (href: string) => activeSection === href.replace('/', '')
className={isActive('/products') ? navLinkActive : navLinkIdle}
```

**Add `data-section` to page sections:**
```tsx
<section data-section="products" ...>
```

---

#### 3. Form state animations (AnimatePresence)
**WONE pattern:** Contact/waitlist forms use `AnimatePresence` with `mode="wait"` for smooth idle → loading → success → error transitions. Success shows animated checkmark; error auto-resets after 3s.

**Current state:** Cosasco forms have state but no animated transitions between states.

**With Framer Motion:**
```tsx
<AnimatePresence mode="wait">
  {submitted ? (
    <motion.div
      key="success"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Success content */}
    </motion.div>
  ) : (
    <motion.form key="form" initial={{ opacity: 1 }} exit={{ opacity: 0 }}>
      {/* Form */}
    </motion.form>
  )}
</AnimatePresence>
```

---

### 🔲 Priority 2: Medium Impact, Low Effort

#### 4. Button shadow refinement
**WONE pattern:** Primary CTAs have `box-shadow: 0 4px 16px rgba(49,46,129,0.32)`, a soft colored glow matching the button color.

**Apply to Cosasco gold CTAs:**
```css
/* In globals.css */
.btn-primary {
  box-shadow: 0 4px 16px rgba(244, 166, 93, 0.30);
}
.btn-primary:hover {
  box-shadow: 0 6px 20px rgba(244, 166, 93, 0.40);
  transform: translateY(-1px);
}
```

Or inline on key CTA buttons:
```tsx
className="bg-[#f4a65d] ... shadow-[0_4px_16px_rgba(244,166,93,0.30)] hover:shadow-[0_6px_20px_rgba(244,166,93,0.40)] hover:-translate-y-px transition-all"
```

---

#### 5. Card hover elevation
**WONE pattern:** Cards transition from `shadow-[0_1px_4px_rgba(0,0,0,0.05)]` at rest to `shadow-md` or `shadow-lg` on hover, plus a subtle `-translate-y-1` lift.

**Current state:** Cosasco cards use `hover:shadow-lg` but no translate-y.

**Improvement: add to all product/service/blog cards:**
```tsx
className="... hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
```

For a more noticeable effect on product cards:
```tsx
className="... hover:shadow-[0_8px_30px_rgba(15,42,74,0.12)] hover:-translate-y-1 transition-all duration-200"
```

---

#### 6. Typing/fluid headline sizing
**WONE pattern:** Uses `clamp()` for fluid headline scaling across all viewport widths.

**Apply to page heroes and section headings in globals.css:**
```css
/* Section H2 headings */
h2.section-title {
  font-size: clamp(1.75rem, 3.5vw, 2.75rem);
  letter-spacing: -0.025em;
}

/* Hero H1 */
h1.hero-title {
  font-size: clamp(2.25rem, 5vw, 3.5rem);
  letter-spacing: -0.03em;
}
```

Or apply directly on hero elements using Tailwind arbitrary values:
```tsx
<h1 className="text-[clamp(2.25rem,5vw,3.5rem)] leading-tight tracking-[-0.03em]">
```

---

#### 7. Hero section gradient background
**WONE pattern:** Uses subtle `bg-gradient-to-br` on the hero section rather than a flat color, adding visual depth.

**Cosasco heroes currently:** Flat `bg-[#0f2a4a]`.

**Improvement:**
```tsx
// Subtle gradient from navy to slightly lighter navy
className="bg-gradient-to-br from-[#0f2a4a] via-[#0f2a4a] to-[#1a3a5c]"

// Or a warm-tinted version for CTAs:
className="bg-gradient-to-br from-[#0f2a4a] to-[#0d2240]"
```

---

#### 8. Product/service section overline labels
**WONE pattern:** All section headings are preceded by a small uppercase overline (`PLATFORM`, `HOW IT WORKS`) in brand color.

**Cosasco already does this well.** The `text-[#f4a65d] text-xs font-bold uppercase tracking-[0.1em]` pattern is correct. Ensure this pattern is applied consistently on all pages (some inner pages are inconsistent).

**Audit result:** Apply the overline to `/about` timeline section, `/innovation` R&D programs section, and blog article h2s.

---

### 🔲 Priority 3: Low Impact, Low Effort

#### 9. Mobile menu slide-in drawer (from right)
**WONE pattern:** Mobile menu slides in from the right side as a full-height drawer, with a semi-transparent backdrop overlay.

**Current state:** Cosasco mobile menu drops down from the nav (absolute top-full). Works fine but feels slightly dated.

**Full implementation requires:**
- `AnimatePresence` (Framer Motion) or CSS transform approach
- `position: fixed` menu instead of `absolute`
- `overflow: hidden` on body when open (already implemented in some form)
- Backdrop div with opacity transition

**CSS-only approach (no Framer Motion):**
```tsx
// Mobile menu — change from absolute dropdown to fixed right drawer
<div
  className={`lg:hidden fixed inset-y-0 right-0 w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out ${
    mobileOpen ? 'translate-x-0' : 'translate-x-full'
  } overflow-y-auto pt-20`}
>
  {/* menu content */}
</div>
{/* Backdrop */}
{mobileOpen && (
  <div
    className="lg:hidden fixed inset-0 bg-black/30 z-40"
    onClick={() => dispatch({ type: 'CLOSE_MOBILE' })}
  />
)}
```

---

#### 10. Section divider/decoration elements
**WONE pattern:** Uses subtle gradient dividers or geometric shapes between sections to create visual separation without heavy borders.

**Cosasco currently:** Sections alternate between `bg-white` and `bg-[#f0f4f8]`. This works well and doesn't need changing.

**Optional enhancement:** Add a subtle 1px gradient separator between sections:
```tsx
// Between hero and content sections:
<div className="h-px bg-gradient-to-r from-transparent via-[#e8edf2] to-transparent" />
```

---

## Design Principles Summary (from WONE)

| Principle | WONE Implementation | Status in Cosasco |
|---|---|---|
| Smooth easing | cubic-bezier(0.22, 1, 0.36, 1) | ✅ Implemented in AnimateOnScroll |
| Scroll padding | `scroll-padding-top: 80px` | ✅ Added to globals.css |
| Custom scrollbar | 6px, brand-colored | ✅ Added to globals.css |
| Glassmorphism nav | `bg-white/95 backdrop-blur-sm` on scroll | ✅ Implemented in Navigation |
| Focus ring style | 2px outline, rounded, brand color | ✅ Already present, refined |
| Stagger utilities | `.delay-100` through `.delay-500` | ✅ Added to globals.css |
| Card lift on hover | `-translate-y-1` + shadow change | 🔲 To implement |
| CTA glow shadow | `box-shadow` with brand color | 🔲 To implement |
| Fluid typography | `clamp()` on headings | 🔲 To implement |
| Staggered grids | Framer Motion `useInView` | 🔲 Requires framer-motion |
| Form AnimatePresence | Smooth idle to success transitions | 🔲 Requires framer-motion |
| Active nav tracking | IntersectionObserver per section | 🔲 Optional enhancement |
| Mobile drawer | Slide from right | 🔲 Optional enhancement |

---

## Quick Wins You Can Do Now (No Dependencies)

These can be added incrementally to any page with zero risk:

```tsx
// 1. Card hover lift — add to any card div:
className="... hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgba(15,42,74,0.10)] transition-all duration-200"

// 2. Animate-fade-up on hero content — add to hero text elements:
className="animate-fade-up"          // first element
className="animate-fade-up delay-100" // second
className="animate-fade-up delay-200" // third

// 3. CTA glow — add to primary gold buttons:
className="bg-[#f4a65d] ... shadow-[0_4px_14px_rgba(244,166,93,0.35)] hover:shadow-[0_6px_20px_rgba(244,166,93,0.45)] hover:-translate-y-px transition-all"
```
