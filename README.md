![Next.js](https://img.shields.io/badge/Next.js_16-black?style=flat-square&logo=next.js&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Anthropic](https://img.shields.io/badge/Claude_AI-D97757?style=flat-square&logo=anthropic&logoColor=white)
![Resend](https://img.shields.io/badge/Resend-000000?style=flat-square&logo=mail&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-black?style=flat-square&logo=vercel&logoColor=white)

# Cosasco: Corporate Website Redesign

A full website redesign for **Cosasco**, a global leader in corrosion and erosion monitoring solutions serving the oil and gas, petrochemical, chemical processing, water treatment, and pulp and paper industries. Built for Avenues Tech Consulting Spring 2026, the project delivers a restructured information architecture, application-based product discovery, and a modern UI grounded in Cosasco's industrial brand.

**Live:** [cosasco.vercel.app](https://cosasco.vercel.app)

> Screenshot

## Features

- **AI-powered product finder:** interactive wizard that guides users to the right corrosion monitoring solution based on their application, industry, and environment
- **Full product catalog:** dedicated pages for ER probes, corrosion coupons, access fittings, chemical injection systems, data acquisition hardware, erosion monitoring, FieldCom devices, quill assemblies, and UT sensors
- **Industry-specific solutions:** tailored landing pages for Oil & Gas, Petrochemical, Chemical Processing, Water Treatment, Pulp & Paper, and Utilities
- **Resources hub:** technical blog with categorized articles (Technical Guide, Field Applications, Chemical Injection, Product Update) and case studies including a North Sea pipeline deployment
- **Contact and support system:** general contact form, technical support ticketing, and RMA request form with automated confirmation emails (powered by Resend); AI-assisted floating chat via Claude
- **Interactive probe depth calculator:** engineering tool at `/tools/device-length-calculator` for field technicians

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Typography | Mukta (via @fontsource) |
| Icons | Lucide React |
| AI Chat | Anthropic Claude (`@anthropic-ai/sdk`) |
| Email | Resend |
| Deployment | Vercel |

## Getting Started

```bash
# Install dependencies
npm install

# Copy and configure environment variables
cp .env.example .env.local

# Start dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable | Description |
|---|---|
| `RESEND_API_KEY` | API key from resend.com, required for all contact forms |
| `CONTACT_TO_EMAIL` | Destination email for form submissions (defaults to `info@cosasco.com`) |

```bash
npm run build   # Production build (TypeScript errors surface here)
npm start       # Production server
```

## Route Map (Abbreviated)

```
/                     Homepage
/products             Products overview + catalog
/solutions            Industry-specific solution pages
/software             Software downloads + partner portal
/resources            Blog + case studies hub
/tools/device-length-calculator
/support              Technical support form
/support/rma          RMA request form
/contact              General contact
```

## Project Context

Built for Avenues Tech Consulting Spring 2026. Developer handoff documentation available in `HANDOFF.md` at the project root.

## Author

**Caleb Newton** at [calebnewton.me](https://calebnewton.me)
