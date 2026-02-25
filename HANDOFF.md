# Cosasco Website: Developer Handoff Guide

> **Last updated:** February 2026
> **Built by:** Caleb Newton
> **Repository:** `github.com/calebnewtonusc/cosasco`
> **Framework:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · React 19

---

## Table of Contents

1. [Quick Start](#1-quick-start)
2. [Environment Variables](#2-environment-variables)
3. [Deploy to Vercel (Production)](#3-deploy-to-vercel-production)
4. [Email Forms: How They Work](#4-email-forms-how-they-work)
5. [How to Add a Blog Post](#5-how-to-add-a-blog-post)
6. [How to Add a Product Page](#6-how-to-add-a-product-page)
7. [How to Add a Case Study](#7-how-to-add-a-case-study)
8. [Design System & Brand Tokens](#8-design-system--brand-tokens)
9. [Full Route Map](#9-full-route-map)
10. [File Structure](#10-file-structure)
11. [Common Maintenance Tasks](#11-common-maintenance-tasks)
12. [Troubleshooting](#12-troubleshooting)

---

## 1. Quick Start

**Prerequisites:** Node.js 20+, npm 10+

```bash
# Clone the repo
git clone https://github.com/calebnewtonusc/cosasco.git
cd cosasco

# Install dependencies
npm install

# Copy environment variables and fill in your values
cp .env.example .env.local

# Start the dev server
npm run dev
# → Opens at http://localhost:3000
```

To build for production (verifies everything compiles):

```bash
npm run build
```

---

## 2. Environment Variables

Create a `.env.local` file in the project root. **Never commit this file** (it's already in `.gitignore`).

| Variable | Description | Example Value |
|---|---|---|
| `RESEND_API_KEY` | API key from [resend.com](https://resend.com), required for all 3 contact forms | `re_abc123...` |
| `CONTACT_TO_EMAIL` | Email address that receives form submissions. If not set, falls back to the default below | `info@cosasco.com` |

**Default fallback destinations (if `CONTACT_TO_EMAIL` is not set):**
- Contact form → `info@cosasco.com`
- Support tickets → `support@cosasco.com`
- RMA requests → `rma@cosasco.com`

> **Important:** The Resend account must have `cosasco.com` verified as a sending domain. Without this, emails will fail. See [resend.com/docs/sending/domains](https://resend.com/docs/sending/domains).

---

## 3. Deploy to Vercel (Production)

### First-time setup

1. Go to [vercel.com](https://vercel.com) → **Add New Project**
2. Import from GitHub: `calebnewtonusc/cosasco`
3. Framework preset: **Next.js** (auto-detected)
4. Add environment variables (Settings → Environment Variables):
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_TO_EMAIL` = `info@cosasco.com`
5. Click **Deploy**

### Subsequent deploys

Every push to `main` branch on GitHub automatically triggers a new Vercel deployment. No manual steps needed.

### Custom domain

In Vercel → Settings → Domains, add `cosasco.com` and `www.cosasco.com`. Update your DNS provider's records to point to Vercel's nameservers as instructed.

---

## 4. Email Forms: How They Work

There are three contact forms on the site, each with a dedicated API route:

| Form | Page | API Route | Sends To |
|---|---|---|---|
| General contact | `/contact` | `POST /api/contact` | `CONTACT_TO_EMAIL` |
| Technical support | `/support` | `POST /api/support` | `CONTACT_TO_EMAIL` |
| RMA request | `/support/rma` | `POST /api/rma` | `CONTACT_TO_EMAIL` + auto-confirmation to customer |

All three use [Resend](https://resend.com) to send emails. The RMA form additionally sends a confirmation email back to the customer with their assigned RMA number (format: `RMA-2026-XXXX`).

### Setting up Resend

1. Create an account at [resend.com](https://resend.com)
2. Add and verify the domain `cosasco.com`
3. Create an API key (Resend dashboard → API Keys → Create API Key)
4. Add `RESEND_API_KEY=re_...` to your Vercel environment variables

### Testing forms locally

With `.env.local` configured, run `npm run dev` and submit a form. Check the Resend dashboard under **Logs** to see email delivery status.

---

## 5. How to Add a Blog Post

1. **Create the directory and file:**

   ```
   app/resources/blog/your-post-slug/page.tsx
   ```

2. **Copy the structure from an existing post.** The pattern is always:
   - Metadata export at the top
   - Dark navy hero section with breadcrumb
   - Category badge (color-coded)
   - `grid lg:grid-cols-3 gap-12` layout (main article + sidebar)
   - Bottom back/forward nav strip

   Example to copy from: `app/resources/blog/corrosion-monitoring-fundamentals/page.tsx`

3. **Add it to the blog index** (`app/resources/blog/page.tsx`):

   ```tsx
   const articles = [
     // Add your new article at the top of this array:
     {
       href: '/resources/blog/your-post-slug',
       category: 'Technical Guide',        // or: Field Applications, Chemical Injection, Product Update
       title: 'Your Article Title',
       excerpt: 'One sentence summary...',
       author: 'Author Name',
       date: 'Mar 5, 2026',
       readTime: '7 min read',
     },
     // ...existing articles below
   ]
   ```

4. **Optionally add it to the Resources page preview** (`app/resources/page.tsx`) by updating the 3-card "From the Blog" section.

5. Commit and push. Vercel deploys automatically.

### Category color reference

| Category | Badge Classes |
|---|---|
| Technical Guide | `bg-[#dbeafe] text-[#1d4ed8]` |
| Field Applications | `bg-[#d1fae5] text-[#065f46]` |
| Chemical Injection | `bg-[#fef3c7] text-[#92400e]` |
| Product Update | `bg-[#ede9fe] text-[#5b21b6]` |

---

## 6. How to Add a Product Page

1. Create `app/products/your-product-name/page.tsx`
2. Copy structure from an existing product page (e.g., `app/products/er-probe/page.tsx`)
3. Add a link in `app/products/page.tsx` to the new product
4. Optionally add to the Navigation mega-menu in `components/Navigation.tsx` (search for the existing products list)

---

## 7. How to Add a Case Study

1. Create `app/resources/case-studies/your-case-study/page.tsx`
2. Copy from `app/resources/case-studies/north-sea-pipeline/page.tsx`
3. Add it to the case studies index at `app/resources/case-studies/page.tsx`
4. The sitemap (`app/sitemap.ts`) is dynamic and will pick it up automatically

---

## 8. Design System & Brand Tokens

All styling uses **Tailwind CSS v4 inline arbitrary values only** (no custom CSS classes, no config-level theme overrides).

### Color palette

| Token | Hex | Usage |
|---|---|---|
| Navy (primary) | `#0f2a4a` | Hero backgrounds, headings, buttons |
| Gold (accent) | `#f4a65d` | CTAs, highlights, hover states |
| Gold dark (hover) | `#d4892a` | Button hover |
| Body text | `#566677` | Paragraph text |
| Light background | `#f0f4f8` | Section backgrounds |
| Border | `#e8edf2` | Card borders, dividers |
| Muted text | `#94aabb` | Subtext on dark backgrounds |

### Typography

- Font: **Mukta** (loaded via `@fontsource/mukta`)
- Headings: `font-black` (weight 900)
- Body: default (weight 400)
- Labels/overlines: `text-xs font-bold uppercase tracking-[0.1em]`

### Layout conventions

- Max content width: `max-w-6xl mx-auto px-6`
- All page heroes: `pt-[72px]` (accounts for fixed 72px nav height)
- Cards: `rounded-xl` or `rounded-2xl`, `border border-[#e8edf2]`
- Section padding: `py-16` standard, `py-12` compact

### Icons

All icons are from [Lucide React](https://lucide.dev). Import like:
```tsx
import { ArrowRight, CheckCircle, Download } from 'lucide-react'
```

---

## 9. Full Route Map

```
/                               Homepage
/about                          About Cosasco
/innovation                     Innovation & R&D
/careers                        Careers
/news                           News & Press
/contact                        Contact form
/contact/find-a-rep             Find a Sales Rep

/products                       Products overview
/products/er-probe              ER Probe systems
/products/corrosion-monitoring  Corrosion monitoring overview
/products/corrosion-coupons     Corrosion coupons
/products/access-fittings       Access fittings
/products/chemical-injection    Chemical injection
/products/data-acquisition      Data acquisition
/products/erosion-monitoring    Erosion monitoring
/products/fieldcom              FieldCom hardware
/products/quill-assembly        Quill assemblies
/products/ut-sensor             UT sensors

/solutions                      Solutions overview
/solutions/oil-gas              Oil & Gas
/solutions/petrochemical        Petrochemical
/solutions/chemical-processing  Chemical processing
/solutions/water-treatment      Water treatment
/solutions/pulp-paper           Pulp & Paper
/solutions/utilities            Utilities

/software                       Software overview
/software/data-key              Data Key Activation
/software/legacy                Legacy downloads
/software/partner-payment       Partner payment portal

/resources                      Resources hub
/resources/blog                 Blog index
/resources/blog/[slug]          Individual blog posts (4 live)
/resources/case-studies         Case studies index
/resources/case-studies/[slug]  Individual case studies (3 live)

/support                        Technical support form
/support/rma                    RMA request form

/tools/device-length-calculator Interactive probe depth calculator

/sitemap.xml                    Auto-generated sitemap
/robots.txt                     Auto-generated robots.txt

POST /api/contact               Contact form email handler
POST /api/support               Support ticket email handler
POST /api/rma                   RMA request email handler
```

---

## 10. File Structure

```
cosasco/
├── app/
│   ├── api/
│   │   ├── contact/route.ts       ← Email handler for contact form
│   │   ├── support/route.ts       ← Email handler for support form
│   │   └── rma/route.ts           ← Email handler for RMA form
│   ├── resources/
│   │   └── blog/
│   │       ├── page.tsx           ← Blog index
│   │       ├── [slug]/page.tsx    ← Individual blog posts
│   ├── software/
│   │   ├── data-key/page.tsx
│   │   ├── legacy/page.tsx
│   │   └── partner-payment/page.tsx
│   ├── tools/
│   │   └── device-length-calculator/page.tsx
│   ├── layout.tsx                 ← Root layout (nav + footer)
│   ├── page.tsx                   ← Homepage
│   ├── sitemap.ts                 ← Auto-generated sitemap
│   └── robots.ts                  ← robots.txt
├── components/
│   ├── Navigation.tsx             ← Main nav (desktop + mobile)
│   ├── Footer.tsx                 ← Site footer
│   ├── AnimateOnScroll.tsx        ← Scroll-triggered fade-in
│   ├── BackToTop.tsx              ← Back to top button
│   ├── CookieBanner.tsx           ← GDPR cookie notice
│   ├── PrintButton.tsx            ← Print support for RMA
│   ├── RecentlyViewed.tsx         ← Recently viewed products
│   ├── StatCounter.tsx            ← Animated stat numbers
│   └── SupportFAQ.tsx             ← Accordion FAQ
├── .env.example                   ← Copy to .env.local and fill in
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

---

## 11. Common Maintenance Tasks

### Update navigation links

Edit `components/Navigation.tsx`. There are two nav sections: desktop (search for `hidden md:flex`) and mobile (search for `md:hidden`). Both must be updated together.

### Change the "Contact To" email

Update `CONTACT_TO_EMAIL` in Vercel → Settings → Environment Variables. No code change needed.

### Update phone numbers / addresses

Search the codebase for the current number:
```bash
grep -r "949-0123" .
grep -r "562" .
```
Then update those specific files.

### Add a new team member to "Find a Rep"

Edit `app/contact/find-a-rep/page.tsx`.

### Update the sitemap

The sitemap (`app/sitemap.ts`) is auto-generated from a static list. When you add new pages, add their paths to the `routes` array in that file.

---

## 12. Troubleshooting

### Emails not sending

1. Check Vercel → Functions → `/api/contact` logs for the error
2. Verify `RESEND_API_KEY` is set in Vercel environment variables
3. Verify `cosasco.com` is a verified domain in your Resend account
4. Check Resend dashboard → Logs for delivery status

### Build failing

```bash
npm run build
```
TypeScript errors will be shown with file and line number. Common causes:
- Unescaped apostrophes in single-quoted strings (use double quotes or `&apos;`)
- Missing `'use client'` directive on a component that uses `useState`/`useEffect`

### Styles not applying

This project uses **Tailwind CSS v4**. All class names must be full inline arbitrary values like `bg-[#0f2a4a]`. Do not use shorthand theme values or add to `tailwind.config.ts`, as the v4 setup does not use a traditional config-based theme.

### Dev server shows stale content

```bash
rm -rf .next && npm run dev
```

---

## Key Contacts

| Role | Name | Email |
|---|---|---|
| Developer (handoff) | Caleb Newton | calebsnewton@gmail.com |
| Cosasco Support | (unassigned) | support@cosasco.com |
| Cosasco RMA | (unassigned) | rma@cosasco.com |
| Cosasco General | (unassigned) | info@cosasco.com |
