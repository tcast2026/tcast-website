import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/forms";
import { getSupabaseServerClient, supabaseConfigured } from "@/lib/supabase-server";
import type { TrackShipmentResult } from "@/lib/supabase-types";

export const dynamic = "force-dynamic";

function response(body: unknown, init: Parameters<typeof NextResponse.json>[1] = {}) {
  return NextResponse.json(body, {...init, headers: {...init.headers, "Cache-Control":"private, no-store, max-age=0", "Netlify-CDN-Cache-Control":"no-store"}});
}

export async function GET(request:NextRequest){
  const limit=rateLimit(request,"tracking",20,5*60*1000);if(!limit.allowed)return response({message:"Too many tracking requests. Please wait and try again."},{status:429,headers:{"Retry-After":String(limit.retryAfter)}});
  const number=request.nextUrl.searchParams.get("number")?.trim().toUpperCase()||"";if(!/^[A-Za-z0-9-]{5,40}$/.test(number))return response({message:"Enter a valid tracking number."},{status:400});
  if(!supabaseConfigured())return response({code:"not_configured",message:"Online tracking is not connected yet. Please contact TCAST Cargo with your shipment number for an update."},{status:503});
  try{
    const supabase=getSupabaseServerClient()!;

    // Exact lookup through the same public RPC as the Cargo App.
    // Keep the server rate limit: tracking references can be guessed.
    const {data,error}=await (supabase as unknown as {rpc:(fn:string,args:Record<string,unknown>)=>Promise<{data:unknown;error:{message:string}|null}>}).rpc("track_shipment",{p_tracking_number:number});
    if(error)throw error;
    if(!data)return response({message:"No shipment was found for that number. Check the reference or contact TCAST Cargo."},{status:404});

    const result=data as TrackShipmentResult;
    return response({data:result});
  }catch{return response({message:"Tracking is temporarily unavailable. Please try again or contact TCAST Cargo."},{status:502});}
}
