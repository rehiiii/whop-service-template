import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { leadId, subtotal, depositPaid, tax, balanceDue } = await req.json();
  const invoice = {
    id: `inv_${Date.now()}`, leadId, subtotal, depositPaid, tax,
    total: subtotal + tax, balanceDue, status: "sent",
    whopInvoiceId: `whop_inv_${Date.now()}`, createdAt: new Date().toISOString(),
  };
  console.log("[WHOP_INVOICE_CREATED] Final balance:", invoice.id);
  return NextResponse.json(invoice);
    }
