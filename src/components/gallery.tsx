"use client";

import Image from "next/image";
import { Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { galleryItems } from "@/data/site";
import type { Locale } from "@/i18n/config";
import { getUi } from "@/i18n/dictionaries";

export function Gallery({ locale }: { locale: Locale }) {
  const [selected,setSelected]=useState<number|null>(null); const t=getUi(locale);
  useEffect(()=>{if(selected===null)return;const close=(e:KeyboardEvent)=>{if(e.key==="Escape")setSelected(null)};document.body.style.overflow="hidden";window.addEventListener("keydown",close);return()=>{document.body.style.overflow="";window.removeEventListener("keydown",close)}},[selected]);
  return <><div className="gallery-grid">{galleryItems.map((item,index)=><button key={item.image} className={`gallery-item gallery-item-${index+1}`} type="button" onClick={()=>setSelected(index)} aria-label={`${locale==="en"?item.en:item.sw} — ${locale==="en"?"open image":"fungua picha"}`}><Image src={item.image} alt={locale==="en"?item.en:item.sw} fill sizes="(max-width: 720px) 100vw, 33vw"/><span><Maximize2/>{locale==="en"?item.en:item.sw}</span></button>)}</div><p className="gallery-disclaimer">{t.labels.sourceNote}</p>{selected!==null&&<div className="lightbox" role="dialog" aria-modal="true" aria-label={locale==="en"?galleryItems[selected].en:galleryItems[selected].sw} onClick={()=>setSelected(null)}><button type="button" aria-label={locale==="en"?"Close image":"Funga picha"} onClick={()=>setSelected(null)}><X/></button><div className="lightbox-image" onClick={e=>e.stopPropagation()}><Image src={galleryItems[selected].image} alt={locale==="en"?galleryItems[selected].en:galleryItems[selected].sw} fill sizes="90vw"/><p>{locale==="en"?galleryItems[selected].en:galleryItems[selected].sw}</p></div></div>}</>;
}
