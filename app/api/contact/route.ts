import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { service, email, url } = await req.json();

  if (!service || !email) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // TODO: replace with your email provider (Resend, Nodemailer, etc.)
  // For now, log to console and return success
  console.log("Contact request:", { service, email, url });

  return NextResponse.json({ ok: true });
}
