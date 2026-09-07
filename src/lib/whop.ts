export const WHOP_FEATURES_PARAGRAPH = `
This template implements 5 core Whop features: (1) Whop App Hosting with whop-app URL via Vercel + Whop Dashboard, (2) Whop Payments with Payment Elements for $50 deposit checkout in test mode, (3) Whop Leads API via /api/leads that creates lead from estimate form, (4) Whop Invoices API via /api/invoices that generates final balance invoice after deposit, (5) Whop Pixels with events estimate_submitted, checkout_started, checkout_completed, invoice_viewed firing visible in console.
`;

export const trackPixel = (event: string, data?: any) => {
  const payload = { event, timestamp: new Date().toISOString(), ...data };
  console.log(`[WHOP_PIXEL] ${event}`, payload);
  if (typeof window !== "undefined") {
    // @ts-ignore
    if (window.whop_pixel) window.whop_pixel.track(event, data);
    window.dispatchEvent(new CustomEvent("whop_pixel_fired", { detail: payload }));
    const events = JSON.parse(localStorage.getItem("whop_pixel_events") || "[]");
    events.push(payload);
    localStorage.setItem("whop_pixel_events", JSON.stringify(events.slice(-20)));
  }
};
