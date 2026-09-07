"use client";
import { useEffect, useState } from "react";
import { trackPixel } from "@/lib/whop";
export default function InvoicePage({ params }: any) {
  const [inv, setInv] = useState<any>(null);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("current_invoice") || "{}");
    setInv(data);
    trackPixel("invoice_viewed", { invoiceId: params.id });
  }, [params.id]);
  if (!inv?.id) return <div className="p-8">Loading invoice {params.id}...</div>;
  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Invoice - Final Balance</h1>
      <div className="border rounded p-6 space-y-2">
        <p>Invoice ID: {inv.whopInvoiceId}</p>
        <p>Lead ID: {inv.leadId}</p>
        <hr className="my-3" />
        <p>Subtotal: ${inv.subtotal}</p>
        <p>Deposit Paid: -${inv.depositPaid} (via Whop Payments)</p>
        <p>Tax: ${inv.tax}</p>
        <p className="font-bold text-lg">Balance Due: ${inv.balanceDue}</p>
        <p className="text-xs text-green-600 mt-4">Status: {inv.status} - Generated via Whop Invoices API POST /api/invoices</p>
      </div>
      <p className="text-xs mt-4 text-gray-500">Whop Pixels: invoice_viewed fired - check console logs</p>
    </div>
  );
          }
