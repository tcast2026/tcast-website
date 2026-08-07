import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { cleanText, mailConfigured, rateLimit, trustedOrigin } from "@/lib/forms";
import { sendMail } from "@/lib/mailer";

const schema = z.object({
  name: z.string().min(2).max(100), phone: z.string().min(6).max(40), email: z.email().max(160),
  department: z.enum(["General Enquiry","Quote Request","Shipment Tracking","Customs Clearing","Commercial Cargo","Customer Support"]),
  message: z.string().min(10).max(4000), consent: z.literal("true"), website: z.string().max(0).optional(), locale: z.enum(["en","sw"]).optional(),
});

export async function POST(request: NextRequest) {
  if (!trustedOrigin(request)) return NextResponse.json({ message: "This request origin is not allowed." }, { status: 403 });
  const limit=rateLimit(request,"contact",5); if(!limit.allowed)return NextResponse.json({message:"Too many requests. Please wait before trying again."},{status:429,headers:{"Retry-After":String(limit.retryAfter)}});
  try {
    const raw=await request.json(); const normalized=Object.fromEntries(Object.entries(raw).map(([key,value])=>[key,cleanText(value,key==="message"?4000:200)]));
    const parsed=schema.safeParse(normalized); const sw=normalized.locale==="sw";
    if(!parsed.success)return NextResponse.json({message:sw?"Kagua sehemu zinazohitajika na ujaribu tena.":"Please check the required fields and try again."},{status:400});
    if(!mailConfigured())return NextResponse.json({message:sw?"Fomu ya barua pepe bado haijaunganishwa. Tafadhali tumia simu, WhatsApp au tahilcast@gmail.com.":"Secure email delivery is not configured yet. Please call, use WhatsApp, or email tahilcast@gmail.com."},{status:503});
    const d=parsed.data; await sendMail({subject:`Website enquiry — ${d.department} — ${d.name}`,replyTo:d.email,text:[`Name: ${d.name}`,`Phone: ${d.phone}`,`Email: ${d.email}`,`Department: ${d.department}`,"",d.message].join("\n")});
    return NextResponse.json({message:sw?"Ujumbe umetumwa. Timu ya TCAST itakujibu baada ya kukagua ombi.":"Your enquiry was sent. The TCAST team will respond after reviewing it."});
  } catch { return NextResponse.json({message:"Unable to process the enquiry right now. Please contact TCAST Cargo directly."},{status:500}); }
}
