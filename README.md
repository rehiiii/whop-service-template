# Whop Service Template - Bounty Submission by rehiiii

Reusable template for ANY service business. Change ONE file `src/config/company.ts` to rebrand.

## Whop Features Integrated (All 5 Required for Bounty)

1. **Leads API**: POST /api/leads -> Creates Lead ID, stored in localStorage + console.log verification
2. **Whop Payments Elements**: POST /api/checkout -> Whop checkout with test card 4242 4242 4242 4242, $50 deposit
3. **Invoices API**: POST /api/invoices -> Final balance $220 + tax, linked to Lead ID
4. **Whop Pixels**: trackPixel() helper in src/lib/whop.ts - fires events: estimate_submitted, checkout_started, checkout_completed, invoice_viewed. Verifiable via console + localStorage key whop_pixel_events + custom event whop_pixel_fired
5. **Reusable Config**: src/config/company.ts + companyConfig object used across all pages

## User Flow (for Bounty Reviewers to test)
Home (/) -> Estimate (/estimate) -> Enter details -> Lead ID created (Leads API) -> Checkout (/checkout?leadId=XXX) -> $50 deposit with Payment Elements -> Invoice (/invoice/[id]) -> Final balance $220

## Test Mode
All Whop calls run in testMode: true. No real charges. Pixels visible in browser console.

## How to Rebrand for Any Service
Edit src/config/company.ts: name, tagline, services, pricing. Template auto-updates.

## Deploy
Deploy this repo to Vercel -> Get whop-app URL -> Submit to Whop bounty. Build now fixed: 27 lines homepage, no duplicate files.
