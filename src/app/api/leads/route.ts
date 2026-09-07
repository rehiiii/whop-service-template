import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  const body = await req.json();
  const lead = {
    id: `lead_${Date.now()}_${Math.random().toString(36).slice(2,6)}`,
    ...body, status: "new", createdAt: new Date().toISOString(),
    whopLeadId: `whop_lead_${Date.now()}`,
  };
  console.log("[WHOP_LEAD_CREATED]", lead.id);
  return NextResponse.json(lead);
    }
