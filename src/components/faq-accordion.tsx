"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FAQAccordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return <div className="faq-accordion">{items.map((item,index)=>{const expanded=open===index; return <div className={`faq-item ${expanded ? "open" : ""}`} key={item.q}><h3><button type="button" aria-expanded={expanded} aria-controls={`faq-panel-${index}`} onClick={()=>setOpen(expanded?null:index)}><span>{item.q}</span><ChevronDown aria-hidden="true" /></button></h3><div id={`faq-panel-${index}`} className="faq-answer" hidden={!expanded}><p>{item.a}</p></div></div>})}</div>;
}
