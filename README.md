# Cosasco Website

Next.js 16 website redesign for Cosasco — the global corrosion management leader, a Halma company.

## Tech Stack

- **Framework**: Next.js 16.1.6 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 (inline arbitrary values only)
- **Icons**: lucide-react
- **Font**: Mukta Mahee (@fontsource/mukta-mahee)
- **Email**: Resend (for form backends)

## Quick Start

```bash
npm install
cp .env.example .env.local
# Fill in RESEND_API_KEY in .env.local
npm run dev
```

## Environment Variables

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | Resend API key for email delivery. Get one at [resend.com](https://resend.com). |
| `CONTACT_TO_EMAIL` | Email address that receives form submissions (default: `info@cosasco.com`). |

## Form Backends

All three forms POST to Next.js API routes:

| Form | Route | Destination |
|------|-------|-------------|
| Contact | `POST /api/contact` | `CONTACT_TO_EMAIL` |
| Support Request | `POST /api/support` | `CONTACT_TO_EMAIL` |
| RMA Request | `POST /api/rma` | `CONTACT_TO_EMAIL` + auto-confirmation to customer |

Without a valid `RESEND_API_KEY`, forms will return a 500 error. Set the env var in Vercel dashboard under **Settings → Environment Variables**.

## Route Map

| Section | URL |
|---------|-----|
| Home | `/` |
| Products | `/products`, `/products/er-probe`, `/products/corrosion-coupons`, etc. |
| Industries | `/solutions`, `/solutions/oil-gas`, `/solutions/petrochemical`, etc. |
| Resources | `/resources`, `/resources/blog`, `/resources/case-studies` |
| Case Studies | `/resources/case-studies/north-sea-pipeline`, `/gulf-coast-refinery`, `/water-injection-platform` |
| Blog | `/resources/blog/corrosion-monitoring-fundamentals`, `/h2s-sour-service-integrity`, etc. |
| Software | `/software`, `/software/data-key`, `/software/legacy`, `/software/partner-payment` |
| Support | `/support`, `/support/rma` |
| Innovation | `/innovation` |
| Tools | `/tools/device-length-calculator` |
| Contact | `/contact`, `/contact/find-a-rep` |
| Company | `/about`, `/careers`, `/news` |

## Deployment (Vercel)

1. Push to GitHub (already configured: `github.com/calebnewtonusc/cosasco`)
2. Import repo in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy — zero config required

## Brand

| Token | Value |
|-------|-------|
| Navy | `#0f2a4a` |
| Gold | `#f4a65d` |
| Gold hover | `#d4892a` |
| Body text | `#566677` |
| Heading text | `#0f2a4a` |
| Light bg | `#f0f4f8` |
| Border | `#e8edf2` |
