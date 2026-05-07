# Pristine Tech

Corporate website for Pristine Tech — delivering high-quality, future-forward digital solutions.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 15.3.5 with App Router
- **React**: 19.0.0
- **Styling**: [Tailwind CSS](https://tailwindcss.com) v4
- **Font**: [Geist](https://vercel.com/font) (Vercel's font family)
- **Email**: [Resend](https://resend.com) API for contact form
- **Notifications**: [Sonner](https://sonner.emilkowal.ski) toast notifications

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
app/
├── api/contact/route.js    # Contact form API endpoint
├── layout.jsx              # Root layout with fonts & Toaster
├── page.jsx                # Homepage composition
└── globals.css             # Global styles & Tailwind

components/
├── Hero.jsx                # Landing hero section
├── Partners.jsx            # Partner logos
├── Services.jsx            # 4 service cards
├── CaseStudies.jsx         # Horizontal scrolling case studies
├── ContactUs.jsx           # Contact form
└── Footer.jsx              # Site footer

public/                     # Static assets (images)
```

## Build

Generate static export:

```bash
npm run build
```

Output is in `dist/` (configured for static export).

## Environment Variables

The contact form requires a Resend API key. Set in `app/api/contact/route.js` or use environment variables:

```bash
RESEND_API_KEY=your_api_key
```

## Deployment

Configured for static export. Deploy the `dist/` folder to any static hosting service.
