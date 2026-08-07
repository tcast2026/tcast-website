"use client";

import { AlertCircle, CheckCircle2, LoaderCircle, MessageCircle, PackageSearch, Search, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import type { Locale } from "@/i18n/config";
import { whatsappLink } from "@/config/company";
import { supabaseBrowser, supabaseBrowserConfigured } from "@/lib/supabase-browser";

type FormState = { type: "idle" | "loading" | "success" | "error"; message?: string };

function Status({ state }: { state: FormState }) {
  if (state.type === "idle") return null;
  return <div className={`form-status ${state.type}`} role={state.type === "error" ? "alert" : "status"}>{state.type === "loading" ? <LoaderCircle className="spin"/> : state.type === "success" ? <CheckCircle2/> : <AlertCircle/>}<span>{state.message}</span></div>;
}

export function ContactForm({ locale }: { locale: Locale }) {
  const [state,setState]=useState<FormState>({type:"idle"});
  const sw=locale==="sw";
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setState({type:"loading",message:sw?"Inatuma…":"Sending…"});const form=e.currentTarget;const data=Object.fromEntries(new FormData(form));try{const res=await fetch("/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(data)});const body=await res.json();if(!res.ok)throw new Error(body.message);setState({type:"success",message:body.message});form.reset();}catch(error){setState({type:"error",message:error instanceof Error?error.message:(sw?"Imeshindikana kutuma.":"Unable to send your enquiry.")});}}
  return <form className="form-card" onSubmit={submit} noValidate><input type="hidden" name="locale" value={locale}/><div className="form-heading"><span className="eyebrow">{sw?"Tuma ujumbe":"Send an enquiry"}</span><h2>{sw?"Tunawezaje kukusaidia?":"How can we help?"}</h2><p>{sw?"Taja unachohitaji na njia bora ya kukupata.":"Tell us what you need and the best way to reach you."}</p></div><div className="form-grid">
    <label><span>{sw?"Jina kamili":"Full name"} *</span><input name="name" required minLength={2} autoComplete="name" /></label>
    <label><span>{sw?"Namba ya simu":"Telephone number"} *</span><input name="phone" required type="tel" autoComplete="tel" /></label>
    <label><span>{sw?"Barua pepe":"Email"} *</span><input name="email" required type="email" autoComplete="email" /></label>
    <label><span>{sw?"Idara":"Department"} *</span><select name="department" required defaultValue=""><option value="" disabled>{sw?"Chagua":"Select"}</option>{["General Enquiry","Quote Request","Shipment Tracking","Customs Clearing","Commercial Cargo","Customer Support"].map(v=><option key={v}>{v}</option>)}</select></label>
    <label className="full"><span>{sw?"Ujumbe":"Message"} *</span><textarea name="message" required minLength={10} rows={6}/></label>
    <label className="honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label className="checkbox full"><input type="checkbox" name="consent" value="true" required/><span>{sw?"Nakubali TCAST itumie taarifa hizi kujibu ombi langu.":"I consent to TCAST using these details to respond to my enquiry."}</span></label>
  </div><Status state={state}/><button className="button button-primary submit-button" disabled={state.type==="loading"} type="submit"><Send size={18}/>{sw?"Tuma ujumbe":"Send enquiry"}</button></form>;
}

export function QuoteForm({ locale }: { locale: Locale }) {
  const [state,setState]=useState<FormState>({type:"idle"}); const sw=locale==="sw";
  async function submit(e:FormEvent<HTMLFormElement>){e.preventDefault();setState({type:"loading",message:sw?"Inatuma ombi…":"Submitting request…"});const form=e.currentTarget;try{const res=await fetch("/api/quote",{method:"POST",body:new FormData(form)});const body=await res.json();if(!res.ok)throw new Error(body.message);setState({type:"success",message:body.message});form.reset();}catch(error){setState({type:"error",message:error instanceof Error?error.message:(sw?"Ombi halikutumwa.":"The request could not be submitted.")});}}
  const methods=sw?["Anga","Bahari","Mlango hadi mlango","Sina uhakika"]:["Air freight","Sea freight","Door-to-door","Not sure"];
  return <form className="form-card quote-form" onSubmit={submit} noValidate><input type="hidden" name="locale" value={locale}/><div className="form-heading"><span className="eyebrow">{sw?"Maelezo ya mzigo":"Cargo details"}</span><h2>{sw?"Omba makadirio ya usafirishaji":"Request a shipping estimate"}</h2><p>{sw?"Makadirio yatakaguliwa na timu; hii si idhini ya mwisho ya mzigo.":"The team will review your request; submission does not approve the cargo or finalize a quote."}</p></div><div className="form-grid">
    <label><span>{sw?"Jina kamili":"Full name"} *</span><input name="name" required minLength={2} autoComplete="name" /></label>
    <label><span>{sw?"Namba ya simu":"Telephone number"} *</span><input name="phone" type="tel" required autoComplete="tel" /></label>
    <label><span>WhatsApp</span><input name="whatsapp" type="tel" autoComplete="tel" /></label>
    <label><span>{sw?"Barua pepe":"Email"} *</span><input name="email" type="email" required autoComplete="email" /></label>
    <label><span>{sw?"Aina ya mteja":"Customer type"} *</span><select name="customerType" required defaultValue=""><option value="" disabled>{sw?"Chagua":"Select"}</option><option value="individual">{sw?"Mtu binafsi":"Individual"}</option><option value="business">{sw?"Biashara":"Business"}</option></select></label>
    <label><span>{sw?"Mzigo unatoka":"Shipping origin"} *</span><input name="origin" required /></label>
    <label><span>{sw?"Unakoenda":"Destination"} *</span><input name="destination" required /></label>
    <label><span>{sw?"Njia unayopendelea":"Preferred method"} *</span><select name="method" required defaultValue=""><option value="" disabled>{sw?"Chagua":"Select"}</option>{methods.map(v=><option key={v}>{v}</option>)}</select></label>
    <label><span>{sw?"Aina ya mzigo":"Cargo category"} *</span><input name="category" required placeholder={sw?"mf. nguo, vipuri":"e.g. clothing, spare parts"}/></label>
    <label><span>{sw?"Idadi ya vifurushi":"Number of packages"} *</span><input name="packages" type="number" min="1" required /></label>
    <label><span>{sw?"Uzito wa makadirio (kg)":"Estimated weight (kg)"} *</span><input name="weight" type="number" min="0.1" step="0.1" required /></label>
    <label><span>{sw?"Vipimo au CBM":"Dimensions or CBM"}</span><input name="dimensions" placeholder="L × W × H / CBM" /></label>
    <label><span>{sw?"Thamani ya mzigo (si lazima)":"Cargo value (optional)"}</span><input name="value" /></label>
    <label><span>{sw?"Njia ya kukusanya":"Collection preference"} *</span><select name="collection" required defaultValue=""><option value="" disabled>{sw?"Chagua":"Select"}</option><option>{sw?"Nitaleta ofisini":"I will deliver to office"}</option><option>{sw?"Nahitaji ukusanyaji":"Collection requested"}</option><option>{sw?"Nahitaji ushauri":"Need guidance"}</option></select></label>
    <label className="full"><span>{sw?"Maelezo ya mzigo":"Cargo description"} *</span><textarea name="description" required minLength={10} rows={5} placeholder={sw?"Orodhesha bidhaa, idadi, hali na mahitaji maalumu":"List items, quantities, condition and special handling"}/></label>
    <label className="full"><span>{sw?"Maelezo ya ziada":"Additional notes"}</span><textarea name="notes" rows={3}/></label>
    <label className="full file-input"><span>{sw?"Picha au hati (JPG, PNG, WEBP au PDF; hadi 5MB)":"Image or document (JPG, PNG, WEBP or PDF; max 5MB)"}</span><input name="attachment" type="file" accept="image/jpeg,image/png,image/webp,application/pdf" /></label>
    <label className="honeypot" aria-hidden="true"><span>Website</span><input name="website" tabIndex={-1} autoComplete="off" /></label>
    <label className="checkbox full"><input type="checkbox" name="consent" value="true" required/><span>{sw?"Nakubali taarifa hizi zitumike kukagua ombi langu kwa mujibu wa Sera ya Faragha.":"I consent to these details being used to review my request under the Privacy Policy."}</span></label>
  </div><Status state={state}/>{state.type==="success"&&<a className="button button-outline whatsapp-after" href={whatsappLink(sw?"Habari TCAST Cargo, nimetuma ombi la makadirio kwenye tovuti.":"Hello TCAST Cargo, I submitted a quote request on the website.")} target="_blank" rel="noreferrer"><MessageCircle size={18}/>{sw?"Fuatilia WhatsApp":"Follow up on WhatsApp"}</a>}<button className="button button-primary submit-button" disabled={state.type==="loading"} type="submit"><Send size={18}/>{sw?"Tuma ombi":"Submit request"}</button></form>;
}

type TrackingResult={shipmentNumber:string;status:string;origin:string;destination:string;currentLocation:string;receiver:string;weightKg:number;pcs:number;expectedArrival?:string;lastUpdate:string;history:{status:string;location?:string;time:string;description?:string}[]};

const STATUS_TONE:Record<string,string>={Received:"tone-blue",Processing:"tone-blue",Packed:"tone-blue","In Transit":"tone-orange",Dispatched:"tone-orange",Arrived:"tone-orange","Ready for Collection":"tone-orange",Delivered:"tone-green","On Hold":"tone-red"};

function formatDate(value?:string,sw?:boolean){if(!value)return "—";try{return new Date(value).toLocaleString(sw?"sw-TZ":"en-GB",{day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit"});}catch{return value;}}

export function TrackingForm({ locale }: { locale: Locale }) {
  const sw=locale==="sw"; const [number,setNumber]=useState(""); const [state,setState]=useState<FormState>({type:"idle"}); const [result,setResult]=useState<TrackingResult|null>(null);
  async function submit(e:FormEvent){
    e.preventDefault();setResult(null);
    const trimmed=number.trim();
    if(!/^[A-Za-z0-9-]{5,40}$/.test(trimmed)){setState({type:"error",message:sw?"Weka namba sahihi yenye angalau herufi au tarakimu 5.":"Enter a valid tracking number with at least 5 letters or digits."});return;}
    setState({type:"loading",message:sw?"Inatafuta mzigo…":"Looking up shipment…"});
    try{
      if(!supabaseBrowserConfigured){throw new Error(sw?"Ufuatiliaji mtandaoni haujaunganishwa bado. Tafadhali wasiliana na TCAST Cargo ukiwa na namba ya mzigo wako.":"Online tracking is not connected yet. Please contact TCAST Cargo with your shipment number for an update.");}
      // Reads directly from Supabase in the browser — no route, no cache,
      // always the latest data the Cargo App has written. track_shipment()
      // is a SECURITY DEFINER function that does a single exact-match
      // lookup, so the publishable key still can't enumerate shipments;
      // every table stays restricted to authenticated Cargo App staff.
      // Untyped client (see supabase-browser.ts) means .rpc()'s generic
      // inference resolves to undefined/never for the args/result, so cast
      // at the call site rather than fighting supabase-js's generics.
      const {data,error}=await (supabaseBrowser as unknown as {rpc:(fn:string,args:Record<string,unknown>)=>Promise<{data:unknown;error:{message:string}|null}>}).rpc("track_shipment",{p_tracking_number:trimmed});
      if(error)throw error;
      if(!data){setState({type:"error",message:sw?"Hakuna mzigo uliopatikana kwa namba hiyo. Angalia rejea au wasiliana na TCAST Cargo.":"No shipment was found for that number. Check the reference or contact TCAST Cargo."});return;}
      setResult(data as TrackingResult);
      setState({type:"success",message:sw?"Taarifa ya mzigo imepatikana.":"Shipment information found."});
    }catch(error){setState({type:"error",message:error instanceof Error?error.message:(sw?"Ufuatiliaji haupatikani.":"Tracking is unavailable.")});}
  }
  return <div className="tracking-card"><div className="tracking-icon"><PackageSearch/></div><h2>{sw?"Weka namba ya ufuatiliaji":"Enter your tracking number"}</h2><p>{sw?"Tumia rejea uliyopewa na TCAST Cargo.":"Use the shipment reference provided by TCAST Cargo."}</p><form className="tracking-search" onSubmit={submit}><label className="sr-only" htmlFor="tracking-number">{sw?"Namba ya ufuatiliaji":"Tracking number"}</label><input id="tracking-number" value={number} onChange={e=>setNumber(e.target.value)} placeholder="TCAST-XXXXXXXX" maxLength={40} autoComplete="off"/><button className="button button-primary" disabled={state.type==="loading"}><Search/>{sw?"Tafuta":"Search"}</button></form><Status state={state}/>{state.type==="idle"&&<div className="tracking-empty"><PackageSearch/><span>{sw?"Hali ya mzigo itaonekana hapa.":"Your shipment status will appear here."}</span></div>}{result&&<div className="tracking-result">
    <div className="tracking-result-head"><div><span>{sw?"Namba ya mzigo":"Tracking number"}</span><strong className="tracking-number-value">{result.shipmentNumber}</strong></div><span className={`status-pill ${STATUS_TONE[result.status]||"tone-blue"}`}>{result.status}</span></div>
    <div className="tracking-summary">
      <div><span>{sw?"Mahali ilipo sasa":"Current location"}</span><strong>{result.currentLocation}</strong></div>
      <div><span>{sw?"Mpokeaji":"Receiver"}</span><strong>{result.receiver}</strong></div>
      <div><span>{sw?"Kutoka":"Origin"}</span><strong>{result.origin}</strong></div>
      <div><span>{sw?"Kwenda":"Destination"}</span><strong>{result.destination}</strong></div>
      <div><span>{sw?"Uzito":"Weight"}</span><strong>{result.weightKg} kg</strong></div>
      <div><span>{sw?"Idadi ya vifurushi":"Packages"}</span><strong>{result.pcs}</strong></div>
      <div><span>{sw?"Kuwasili kunakotarajiwa":"Expected arrival"}</span><strong>{result.expectedArrival?formatDate(result.expectedArrival,sw):(sw?"Itathibitishwa":"To be confirmed")}</strong></div>
      <div><span>{sw?"Sasisho la mwisho":"Last updated"}</span><strong>{formatDate(result.lastUpdate,sw)}</strong></div>
    </div>
    {result.history.length>0&&<ol className="tracking-timeline">{result.history.map((item,index)=><li key={`${item.time}-${index}`} className={index===0?"current":""}><span></span><div><time>{formatDate(item.time,sw)}</time><strong>{item.status}</strong>{item.location&&<small>{item.location}</small>}{item.description&&<p>{item.description}</p>}</div></li>)}</ol>}
  </div>}</div>;
}
