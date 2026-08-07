import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, CheckCircle2, MessageCircle, PackageCheck, Plane, Route, Ship, Warehouse } from "lucide-react";
import { notFound } from "next/navigation";
import { company, whatsappLink } from "@/config/company";
import { getServices } from "@/data/services";
import { faqGroups, homeCopy } from "@/data/site";
import { routeMeta } from "@/data/pages";
import { CargoNotice, JsonLd, OfficeGrid, QuoteCTA, ServiceCard } from "@/components/ui";
import { FAQAccordion } from "@/components/faq-accordion";
import { isLocale, localizePath, type Locale } from "@/i18n/config";
import { getUi } from "@/i18n/dictionaries";

export async function generateMetadata({params}:{params:Promise<{locale:string}>}):Promise<Metadata>{const {locale:raw}=await params;if(!isLocale(raw))return{};const m=routeMeta[""][raw];const url=`/${raw}`;return{title:m.title,description:m.description,alternates:{canonical:url,languages:{en:"/en",sw:"/sw"}},openGraph:{title:m.title,description:m.description,url,locale:raw==="en"?"en_US":"sw_TZ",images:[{url:"/og.png",width:1200,height:630,alt:"TCAST Cargo — Dubai to Tanzania logistics"}]},twitter:{title:m.title,description:m.description,images:["/og.png"]}};}

export default async function Home({params}:{params:Promise<{locale:string}>}) {
  const {locale:raw}=await params;if(!isLocale(raw))notFound();const locale=raw as Locale;const copy=homeCopy[locale];const t=getUi(locale);const services=getServices(locale);const previewFaq=faqGroups[locale].slice(0,5).map(group=>group.items[0]);
  const faqSchema={"@context":"https://schema.org","@type":"FAQPage",mainEntity:previewFaq.map(item=>({"@type":"Question",name:item.q,acceptedAnswer:{"@type":"Answer",text:item.a}}))};
  return <>
    <JsonLd data={faqSchema}/>
    <section className="home-hero">
      <Image src="/images/home.webp" alt={locale==="en"?"International cargo aircraft and freight operations":"Ndege na shughuli za mizigo ya kimataifa"} fill priority sizes="100vw" className="hero-image"/>
      <div className="home-hero-overlay"/><div className="container home-hero-inner"><div className="home-hero-copy"><span className="eyebrow light">{copy.eyebrow}</span><h1>{copy.title}</h1><p>{copy.intro}</p><div className="hero-actions"><Link className="button button-primary button-large" href={localizePath(locale,"request-quote")}>{t.actions.quote}<ArrowRight/></Link><Link className="button button-outline-light button-large" href={localizePath(locale,"tracking")}>{t.actions.track}</Link></div><div className="hero-route"><span><Plane/> Dubai</span><i></i><strong>{copy.routeLabel}</strong><i></i><span>Dar es Salaam <Ship/></span></div></div><div className="hero-contact-card"><span>{locale==="en"?"Cargo support":"Msaada wa mizigo"}</span><h2>{locale==="en"?"Talk to our Dubai team":"Ongea na timu ya Dubai"}</h2><a href={`tel:${company.phones.dubai.href}`}>{company.phones.dubai.display}</a><a href={whatsappLink()} target="_blank" rel="noreferrer"><MessageCircle/>{t.actions.whatsapp}</a></div></div>
      <span className="image-note home-image-note">{t.labels.sourceNote}</span>
    </section>

    <section className="section services-section"><div className="container"><div className="section-heading split"><div><span className="eyebrow">{t.nav.services}</span><h2>{copy.servicesTitle}</h2></div><p>{copy.servicesIntro}</p></div><div className="service-grid">{services.map(s=><ServiceCard key={s.slug} locale={locale} service={s}/>)}</div><div className="center-action"><Link className="button button-outline" href={localizePath(locale,"services")}>{t.actions.services}<ArrowRight/></Link></div></div></section>

    <section className="section corridor-section"><div className="container corridor-grid"><div className="corridor-image"><Image src="/images/services.webp" alt={locale==="en"?"Freight cargo prepared for transport from Dubai to Tanzania":"Mzigo ukiandaliwa kutoka Dubai kwenda Tanzania"} fill sizes="(max-width: 900px) 100vw, 50vw"/><span className="image-note">{t.labels.sourceNote}</span><div className="corridor-badge"><Route/><span>Dubai</span><ArrowRight/><span>Dar es Salaam</span></div></div><div className="corridor-copy"><span className="eyebrow">UAE → TANZANIA</span><h2>{copy.corridorTitle}</h2>{copy.corridorText.map(p=><p key={p}>{p}</p>)}<div className="mode-row"><div><Plane/><strong>{locale==="en"?"Air freight":"Mizigo ya anga"}</strong></div><div><Ship/><strong>{locale==="en"?"Sea freight":"Mizigo ya bahari"}</strong></div><div><Warehouse/><strong>{locale==="en"?"Consolidation":"Uunganishaji"}</strong></div></div><Link className="text-link" href={localizePath(locale,"how-it-works")}>{t.nav.how}<ArrowRight/></Link></div></div></section>

    <section className="section why-section"><div className="container why-grid"><div><span className="eyebrow">TCAST CARGO</span><h2>{copy.whyTitle}</h2><p>{locale==="en"?"A good cargo experience depends on clear expectations and coordinated handovers. These are the practical advantages we bring to the route.":"Uzoefu mzuri wa mzigo hutegemea matarajio yaliyo wazi na makabidhiano yaliyoratibiwa. Hizi ni faida tunazoleta katika njia hii."}</p><Link className="button button-navy" href={localizePath(locale,"about")}>{t.nav.about}<ArrowRight/></Link></div><ul>{copy.why.map(item=><li key={item}><CheckCircle2/><span>{item}</span></li>)}</ul></div></section>

    <section className="section process-section"><div className="container"><div className="section-heading centered"><span className="eyebrow">{t.nav.how}</span><h2>{copy.processTitle}</h2></div><ol className="process-grid">{copy.process.map((step,index)=><li key={step}><span>{String(index+1).padStart(2,"0")}</span><PackageCheck/><h3>{step}</h3></li>)}</ol><div className="center-action"><Link className="button button-outline" href={localizePath(locale,"how-it-works")}>{t.actions.learn}<ArrowRight/></Link></div></div></section>

    <section className="section cargo-types"><div className="container cargo-types-grid"><div><span className="eyebrow">{locale==="en"?"What can you ship?":"Unaweza kutuma nini?"}</span><h2>{copy.cargoTitle}</h2><p>{locale==="en"?"Every item is reviewed before acceptance. Send a complete list so we can check the method, packaging and documents.":"Kila bidhaa hukaguliwa kabla ya kukubaliwa. Tuma orodha kamili ili tukague njia, ufungashaji na nyaraka."}</p><CargoNotice locale={locale}/></div><div className="cargo-chip-grid">{copy.cargo.map(item=><div key={item}><Box/><span>{item}</span></div>)}</div></div></section>

    <section className="section offices-section"><div className="container"><div className="section-heading centered"><span className="eyebrow">{t.nav.contact}</span><h2>{copy.officesTitle}</h2></div><OfficeGrid locale={locale}/></div></section>
    <section className="section faq-preview"><div className="container faq-preview-grid"><div><span className="eyebrow">FAQ</span><h2>{copy.faqTitle}</h2><p>{locale==="en"?"Get straightforward guidance, then contact us for requirements that depend on your exact cargo.":"Pata mwongozo wa wazi, kisha wasiliana nasi kwa masharti yanayotegemea mzigo wako."}</p><Link className="button button-outline" href={localizePath(locale,"faq")}>{t.actions.viewAll}<ArrowRight/></Link></div><FAQAccordion items={previewFaq}/></div></section>
    <div className="container final-cta-wrap"><QuoteCTA locale={locale} title={copy.finalTitle} text={copy.finalText}/></div>
  </>;
}
