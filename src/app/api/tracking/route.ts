import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/forms";
import { getSupabaseServerClient, supabaseConfigured } from "@/lib/supabase-server";
import type { TrackShipmentResult } from "@/lib/supabase-types";

export async function GET(request:NextRequest){
  const limit=rateLimit(request,"tracking",20,5*60*1000);if(!limit.allowed)return NextResponse.json({message:"Too many tracking requests. Please wait and try again."},{status:429,headers:{"Retry-After":String(limit.retryAfter)}});
  const number=request.nextUrl.searchParams.get("number")?.trim()||"";if(!/^[A-Za-z0-9-]{5,40}$/.test(number))return NextResponse.json({message:"Enter a valid tracking number."},{status:400});
  if(!supabaseConfigured())return NextResponse.json({code:"not_configured",message:"Online tracking is not connected yet. Please contact TCAST Cargo with your shipment number for an update."},{status:503});
  try{
    const supabase=getSupabaseServerClient()!;

    // track_shipment() is a SECURITY DEFINER function (see
    // supabase/migrations in the tcast-cargo-webapp repo) — it's the only
    // thing the publishable key can call for shipment data. It looks up one
    // exact tracking number and returns null if there's no match, so this
    // key can never list or enumerate other customers' shipments. The
    // Cargo App is the only thing that ever writes shipments; this route
    // never does, so there is no duplicated tracking data.
    // Untyped client (see supabase-server.ts) means .rpc()'s generic
    // inference resolves to `undefined`/`never` for the args and result
    // rather than something useful — cast to unknown/any at the call site
    // rather than fighting supabase-js's generic inference (same tradeoff
    // documented in supabase-server.ts).
    const {data,error}=await (supabase as unknown as {rpc:(fn:string,args:Record<string,unknown>)=>Promise<{data:unknown;error:{message:string}|null}>}).rpc("track_shipment",{p_tracking_number:number});
    if(error)throw error;
    if(!data)return NextResponse.json({message:"No shipment was found for that number. Check the reference or contact TCAST Cargo."},{status:404});

    const result=data as TrackShipmentResult;
    return NextResponse.json({data:result});
  }catch{return NextResponse.json({message:"Tracking is temporarily unavailable. Please try again or contact TCAST Cargo."},{status:502});}
}
