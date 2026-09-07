import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const { leadId, amount } = await req.json();
  const checkout = {
    id: `chk_${Date.now()}`, leadId, amount, currency: "usd",
    status: "completed_test", paymentElements: true,
    whopCheckoutId: `whop_chk_${Date.now()}`, createdAt: new Date().toISOString(),
  };
  console.log("[WHOP_CHECKOUT_COMPLETED] Payment Elements:", checkout.id);
  return NextResponse.json(checkout);
}
