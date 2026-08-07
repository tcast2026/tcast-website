import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { cleanText, mailConfigured, rateLimit, trustedOrigin } from "@/lib/forms";
import { sendMail } from "@/lib/mailer";

export const runtime = "nodejs";
const schema=z.object({name:z.string().min(2).max(100),phone:z.string().min(6).max(40),whatsapp:z.string().max(40).optional(),email:z.email().max(160),customerType:z.enum(["individual","business"]),origin:z.string().min(2).max(160),destination:z.string().min(2).max(160),method:z.string().min(2).max(80),category:z.string().min(2).max(120),description:z.string().min(10).max(4000),packages:z.coerce.number().int().min(1).max(100000),weight:z.coerce.number().positive().max(10000000),dimensions:z.string().max(200).optional(),value:z.string().max(100).optional(),collection:z.string().min(2).max(100),notes:z.string().max(2000).optional(),consent:z.literal("true"),website:z.string().max(0).optional(),locale:z.enum(["en","sw"]).optional()});
const allowedTypes=new Set(["image/jpeg","image/png","image/webp","application/pdf"]);

export async function POST(request:NextRequest){
  if(!trustedOrigin(request))return NextResponse.json({message:"This request origin is not allowed."},{status:403});
  const limit=rateLimit(request,"quote",4);if(!limit.allowed)return NextResponse.json({message:"Too many quote requests. Please wait before trying again."},{status:429,headers:{"Retry-After":String(limit.retryAfter)}});
  try{
    const form=await request.formData(); const raw:Record<string,string>={}; for(const [key,value] of form.entries())if(typeof value==="string")raw[key]=cleanText(value,key==="description"?4000:key==="notes"?2000:250);
    const parsed=schema.safeParse(raw);const sw=raw.locale==="sw";if(!parsed.success)return NextResponse.json({message:sw?"Kagua taarifa zote zinazohitajika na ujaribu tena.":"Please check all required cargo details and try again."},{status:400});
    const file=form.get("attachment");let attachment:undefined|{filename:string;content:Buffer;contentType:string};
    if(file instanceof File&&file.size>0){if(file.size>5*1024*1024)return NextResponse.json({message:sw?"Faili lazima iwe chini ya 5MB.":"The attachment must be smaller than 5MB."},{status:400});if(!allowedTypes.has(file.type))return NextResponse.json({message:sw?"Tumia JPG, PNG, WEBP au PDF pekee.":"Only JPG, PNG, WEBP or PDF files are allowed."},{status:400});attachment={filename:file.name.replace(/[^a-zA-Z0-9._-]/g,"_"),content:Buffer.from(await file.arrayBuffer()),contentType:file.type};}
    if(!mailConfigured())return NextResponse.json({message:sw?"Njia salama ya barua pepe bado haijaunganishwa. Tafadhali tuma maelezo WhatsApp au tahilcast@gmail.com.":"Secure email delivery is not configured yet. Please send the details by WhatsApp or email tahilcast@gmail.com."},{status:503});
    const d=parsed.data; const text=[`Name: ${d.name}`,`Phone: ${d.phone}`,`WhatsApp: ${d.whatsapp||"Not provided"}`,`Email: ${d.email}`,`Customer type: ${d.customerType}`,`Origin: ${d.origin}`,`Destination: ${d.destination}`,`Preferred method: ${d.method}`,`Cargo category: ${d.category}`,`Packages: ${d.packages}`,`Estimated weight: ${d.weight} kg`,`Dimensions / CBM: ${d.dimensions||"Not provided"}`,`Cargo value: ${d.value||"Not provided"}`,`Collection: ${d.collection}`,"","Cargo description:",d.description,"","Additional notes:",d.notes||"None"].join("\n");
    await sendMail({subject:`Quote request — ${d.name} — ${d.origin} to ${d.destination}`,replyTo:d.email,text,attachments:attachment?[attachment]:undefined});
    return NextResponse.json({message:sw?"Ombi limetumwa. Timu italipitia na kuwasiliana nawe; bado halijaidhinishwa kuwa makadirio ya mwisho.":"Your request was sent. The team will review it and contact you; it is not yet an approved or final quote."});
  }catch{return NextResponse.json({message:"Unable to process the quote request right now. Please contact TCAST Cargo directly."},{status:500});}
}
