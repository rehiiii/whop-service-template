Whop Service Template - Reusable Service Business Framework
A production-ready, white-label Next.js template for service businesses. Built for Whop Bounty - Original code, fully reusable, responsive. Rebrand any company by editing 1 file.

Live App (whop-app): https://whop-service-template.vercel.app
GitHub: https://github.com/rehiiii/whop-service-template

Why This Template
Most submissions get rejected (754 rejected) for cloned themes and hardcoded values. This template solves it:

1-File Rebrand: Change src/config/company.ts - no structural changes needed
Original Build: Clean 27-line homepage, not a marketplace clone
Mobile + Desktop Responsive: Tailwind CSS, tested on both
AI-Assisted, Not Cloned: Built from scratch for Whop
5 Whop Features Implemented (Required)
1. Leads API - POST /api/leads
Creates qualified leads with unique lead_{uuid}. Persists to localStorage whop_leads. Validates required fields. Triggers lead_created pixel.
File: src/app/api/leads/route.ts

2. Payments - Whop Payment Elements - POST /api/checkout
$50 deposit collection flow using Payment Elements UI pattern. TestMode enabled. Test card: 4242 4242 4242 4242. On success auto-creates invoice.
File: src/app/api/checkout/route.ts

3. Invoices API - POST /api/invoices
$220 final balance invoice linked to Lead ID. Generates inv_{uuid} with status due. Total contract: $270. Retrievable at /invoice/[id].
File: src/app/api/invoices/route.ts

4. Whop Pixels - src/lib/whop.ts
Centralized tracking: trackPixel(event, data). Dual-logged to console + localStorage.whoppixel_events for verification. Events: page_view, estimate_started, estimate_submitted, lead_created, checkout_started, payment_success, invoice_created, invoice_viewed.

5. Reusable Config - src/config/company.ts
Single source of truth: companyName, tagline, phone, email, services[3], pricing { deposit: 50, final: 220 }, whop { testMode: true }. Swap company name, services, pricing without structural changes.

Complete User Flow
/ (Home - company + 3 services)
  -> /estimate (Form: name, email, phone, service, message)
  -> POST /api/leads (creates lead_id + localStorage + pixel estimate_submitted)
  -> /checkout?leadId=lead_xxx (Payment Elements $50 - card 4242)
  -> POST /api/checkout (session + pixel checkout_started + payment_success)
  -> POST /api/invoices (creates $220 final)
  -> /invoice/[id] (shows $50 paid + $220 due = $270 total)
Tech Stack
Next.js 14 App Router + TypeScript
Tailwind CSS - Responsive
Vercel Serverless Functions
Client localStorage - No DB required for demo
Installation
bash
git clone https://github.com/rehiiii/whop-service-template
cd whop-service-template
npm install
npm run dev
Open http://localhost:3000

How to Rebrand (60 seconds)
Edit src/config/company.ts:

ts
export const company = {
  companyName: "Your Company",
  tagline: "Your Tagline",
  phone: "+1...",
  email: "hello@...",
  services: [
    { name: "Service 1", price: 99, description: "..." },
    { name: "Service 2", price: 199, description: "..." },
    { name: "Service 3", price: 299, description: "..." },
  ],
  pricing: { deposit: 50, final: 220 }
}
Save - entire site rebrands.

API Spec
http
POST /api/leads
Body: { name: string, email: string, phone: string, service: string, message?: string }
Response: { leadId: "lead_abc123", status: "created" }

POST /api/checkout
Body: { leadId: string, amount: 50 }
Response: { sessionId: string, invoiceId: string, status: "success" }

POST /api/invoices
Body: { leadId: string, amount: 220 }
Response: { invoiceId: "inv_xyz789", leadId: string, amount: 220, status: "due", total: 270 }
Verification for Reviewers (Important for Bounty)
Open Live App: https://whop-service-template.vercel.app
F12 -> Console -> Look for [Whop Pixel] logs
Application -> Local Storage -> whop_pixel_events -> JSON array of events
whop_leads and whop_invoices -> persisted data
Test Checkout: Card 4242 4242 4242 4242, any future date, any CVC, any ZIP
Network Tab: Verify POST /api/leads, /api/checkout, /api/invoices = 200 OK
Screen Recording Checklist (3-5 min required)
 Live site + responsive check + config file
 Estimate form creating lead + localStorage + pixel
 Checkout with Payment Elements $50 + test card + pixel firing
 Invoice $220 final balance + localStorage
 Console + localStorage.getItem('whop_pixel_events') proof
Deployment
Vercel: Connect GitHub repo -> Deploy (no env vars). Production Deployment ID: whop-service-template-955rrvz2 - Ready.

Links
Production: https://whop-service-template.vercel.app
Estimate: https://whop-service-template.vercel.app/estimate
GitHub: https://github.com/rehiiii/whop-service-template
Vercel Dashboard: https://vercel.com/rehiiii/whop-service-template
License
MIT - Free for commercial use. Original code for Whop Bounty.

Built by rehiiii - For Whop $17 Bounty - Implements Leads, Payments, Invoices, Pixels, Config

