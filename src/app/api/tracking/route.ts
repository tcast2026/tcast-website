import { NextRequest, NextResponse } from "next/server";
import { rateLimit } from "@/lib/forms";
import { getSupabaseServerClient, supabaseConfigured } from "@/lib/supabase-server";

export async function GET(request:NextRequest){
  const limit=rateLimit(request,"tracking",20,5*60*1000);if(!limit.allowed)return NextResponse.json({message:"Too many tracking requests. Please wait and try again."},{status:429,headers:{"Retry-After":String(limit.retryAfter)}});
  const number=request.nextUrl.searchParams.get("number")?.trim()||"";if(!/^[A-Za-z0-9-]{5,40}$/.test(number))return NextResponse.json({message:"Enter a valid tracking number."},{status:400});
  if(!supabaseConfigured())return NextResponse.json({code:"not_configured",message:"Online tracking is not connected yet. Please contact TCAST Cargo with your shipment number for an update."},{status:503});
  try{
    const supabase=getSupabaseServerClient()!;

    // The website only ever reads shipments through this server-only route —
    // it never writes, and never talks to Supabase from the browser. The
    // Cargo App (Project 2) is the system of record; this query always
    // returns whatever it last wrote, so there is no duplicated tracking data.
    const {data:shipment,error:shipmentError}=await supabase
      .from("shipments")
      .select("id,tracking_number,status,origin,destination,destination_city,weight_kg,pcs,receiver_name,expected_arrival,updated_at")
      .eq("tracking_number",number)
      .maybeSingle();
    if(shipmentError)throw shipmentError;
    if(!shipment)return NextResponse.json({message:"No shipment was found for that number. Check the reference or contact TCAST Cargo."},{status:404});

    const {data:events,error:eventsError}=await supabase
      .from("shipment_status_events")
      .select("status,location,event_time,note,is_public")
      .eq("shipment_id",shipment.id)
      .order("event_time",{ascending:false});
    if(eventsError)throw eventsError;

    const allEvents=events||[];
    const publicEvents=allEvents.filter((event)=>event.is_public);
    const latestEvent=allEvents[0];

    const data={
      shipmentNumber:shipment.tracking_number as string,
      status:shipment.status as string,
      origin:shipment.origin as string,
      destination:`${shipment.destination_city as string}, ${shipment.destination as string}`,
      currentLocation:(latestEvent?.location as string|undefined)||(shipment.destination_city as string),
      receiver:shipment.receiver_name as string,
      weightKg:Number(shipment.weight_kg??0),
      pcs:Number(shipment.pcs??0),
      expectedArrival:(shipment.expected_arrival as string|null)||undefined,
      lastUpdate:shipment.updated_at as string,
      history:publicEvents.map((event)=>({
        status:event.status as string,
        location:(event.location as string)||undefined,
        time:event.event_time as string,
        description:(event.note as string)||undefined,
      })),
    };

    return NextResponse.json({data});
  }catch{return NextResponse.json({message:"Tracking is temporarily unavailable. Please try again or contact TCAST Cargo."},{status:502});}
}
