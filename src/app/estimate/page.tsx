"use client";
import { useState } from "react";
import { companyConfig } from "@/config/company";
import { trackPixel } from "@/lib/whop";
export default function EstimatePage() {
  const [loading, setLoading] = useState(false);
  const [lead, setLead] = useState<any>(null);
  const handleSubmit = async (e: any) => {
    e.preventDefault(); setLoading(true);
    const form = Object.fromEntries(new FormData(e.target).entries());
    trackPixel("estimate_submitted", form);
    const res = await fetch("/api/leads", { method: "POST", body: JSON.stringify(form), headers: { "Content-Type": "application/json" } });
    const data = await res.json(); setLead(data); setLoading(false);
    localStorage.setItem("current_lead", JSON.stringify(data));
    window.location.href = "/checkout?leadId=" + data.id;
  };
  if (lead) return <div className="p-8"><h1>Lead Created: {lead.id}</h1><p>Redirecting to checkout...</p></div>;
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">{companyConfig.name} - Free Estimate</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="name" placeholder="Full Name" required className="w-full p-2 border rounded" />
        <input name="email" placeholder="Email" type="email" required className="w-full p-2 border rounded" />
        <input name="phone" placeholder="Phone" required className="w-full p-2 border rounded" />
        <select name="service" className="w-full p-2 border rounded">{companyConfig.services.map((s:any)=><option key={s.id} value={s.id}>{s.name} - ${s.basePrice}</option>)}</select>
        <textarea name="details" placeholder="Home size, rooms..." className="w-full p-2 border rounded" />
        <button disabled={loading} className="w-full bg-purple-600 text-white p-3 rounded">{loading ? "Creating Lead..." : "Get Free Estimate → Checkout"}</button>
      </form>
      <p className="text-xs mt-4 text-gray-500">Whop Leads API: POST /api/leads | Pixel: estimate_submitted</p>
    </div>
  );
    }
