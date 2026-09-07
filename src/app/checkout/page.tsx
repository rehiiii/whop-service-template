"use client";
import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { trackPixel } from "@/lib/whop";
function CheckoutInner() {
  const params = useSearchParams();
  const leadId = params.get("leadId");
  const [done, setDone] = useState<any>(null);
  useEffect(() => { trackPixel("checkout_started", { leadId }); }, [leadId]);
  const pay = async () => {
    trackPixel("checkout_started", { leadId, amount: 50 });
    const res = await fetch("/api/checkout", { method: "POST", body: JSON.stringify({ leadId, amount: 50 }), headers: { "Content-Type": "application/json" } });
    const data = await res.json();
    trackPixel("checkout_completed", { leadId, checkoutId: data.id });
    setDone(data);
    const lead = JSON.parse(localStorage.getItem("current_lead") || "{}");
    const invRes = await fetch("/api/invoices", { method: "POST", body: JSON.stringify({ leadId, subtotal: 250, depositPaid: 50, tax: 20, balanceDue: 220 }), headers: { "Content-Type": "application/json" } });
    const inv = await invRes.json();
    localStorage.setItem("current_invoice", JSON.stringify(inv));
  };
  if (done) return <div className="p-8"><h1 className="text-xl">Payment Completed (Test Mode) ✅</h1><p>Checkout ID: {done.id}</p><p>Payment Elements: true</p><a href={`/invoice/${JSON.parse(localStorage.getItem("current_invoice")||'{}').id}`} className="text-purple-600 underline">View Invoice → Final Balance</a></div>;
  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Deposit Checkout - $50</h1>
      <p className="mb-4 text-sm text-gray-600">Lead ID: {leadId}</p>
      <div className="border p-4 rounded mb-4 bg-gray-50">
        <p className="text-sm">💳 Whop Payment Elements (Test Mode)</p>
        <p className="text-xs mt-2">Card: 4242 4242 4242 4242 - Any future date, any CVC</p>
        <div className="mt-3 h-12 border-2 border-dashed border-purple-300 rounded flex items-center justify-center text-xs">[ Payment Element Placeholder - Whop Payments ]</div>
      </div>
      <button onClick={pay} className="w-full bg-purple-600 text-white p-3 rounded">Pay $50 Deposit (Test)</button>
      <p className="text-xs mt-4 text-gray-500">Whop Payments API + Pixels: checkout_started, checkout_completed</p>
    </div>
  );
}
export default function Page(){ return <Suspense><CheckoutInner/></Suspense>; }
