import Link from "next/link";
import { companyConfig } from "@/config/company";

export default function Home() {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold">{companyConfig.name}</h1>
      <p className="mt-2 text-gray-600">{companyConfig.tagline}</p>
      <p className="mt-1 text-sm">{companyConfig.description}</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        {companyConfig.services.map((s:any)=>(
          <div key={s.id} className="border p-4 rounded">
            <h3 className="font-bold">{s.name}</h3>
            <p className="text-sm">${s.basePrice} - {s.time}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 space-y-3">
        <Link href="/estimate" className="block w-full bg-purple-600 text-white p-3 rounded text-center font-bold">Start Free Estimate → Leads API</Link>
        <Link href="/checkout?leadId=demo" className="block w-full border border-purple-600 text-purple-600 p-3 rounded text-center font-bold">Demo Checkout - Payment Elements</Link>
      </div>
      <div className="mt-10 p-4 bg-gray-50 rounded text-xs">
        <p>Whop: Leads API, Payments Elements, Invoices API, Pixels (trackPixel in lib/whop.ts). Reusable via company.ts</p>
      </div>
    </div>
  );
}
