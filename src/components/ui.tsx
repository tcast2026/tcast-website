import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Box, BriefcaseBusiness, Check, Clock3, FileCheck2, Mail, MapPin, Package, Phone, Plane, Ship, Truck, Warehouse } from "lucide-react";
import type { ReactNode } from "react";
import { company, mapsLink, whatsappLink } from "@/config/company";
import type { Service } from "@/data/services";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";
import { getUi } from "@/i18n/dictionaries";

export function JsonLd({ data }: { data: object | object[] }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function Breadcrumbs({ locale, items }: { locale: Locale; items: { label: string; href?: string }[] }) {
  const home = locale === "en" ? "Home" : "Mwanzo";
  const all = [{ label: home, href: localizePath(locale) }, ...items];
  const schema = { "@context":"https://schema.org", "@type":"BreadcrumbList", itemListElement: all.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.label,item:item.href ? `${company.siteUrl}${item.href}` : undefined})) };
  return <><nav className="breadcrumbs container" aria-label="Breadcrumb"><ol>{all.map((item,index)=><li key={`${item.label}-${index}`}>{item.href && index < all.length-1 ? <Link href={item.href}>{item.label}</Link> : <span aria-current={index === all.length-1 ? "page" : undefined}>{item.label}</span>}</li>)}</ol></nav><JsonLd data={schema}/></>;
}

export function PageHero({ locale, eyebrow, title, description, image, alt, children }: { locale: Locale; eyebrow: string; title: string; description: string; image: string; alt: string; children?: ReactNode }) {
  const t=getUi(locale);
  return <section className="page-hero">
    <Image src={image} alt={alt} fill sizes="100vw" priority className="hero-image" />
    <div className="hero-shade" />
    <div className="container page-hero-inner"><div className="hero-copy"><span className="eyebrow">{eyebrow}</span><h1>{title}</h1><p>{description}</p>{children && <div className="hero-actions">{children}</div>}</div><span className="image-note">{t.labels.sourceNote}</span></div>
  </section>;
}

const icons = { plane: Plane, ship: Ship, truck: Truck, file: FileCheck2, warehouse: Warehouse, briefcase: BriefcaseBusiness, package: Package };

export function ServiceCard({ locale, service }: { locale: Locale; service: Service }) {
  const t=getUi(locale); const Icon=icons[service.icon];
  return <article className="service-card"><div className="service-card-image"><Image src={service.image} alt={service.alt} fill sizes="(max-width: 720px) 100vw, 33vw" /></div><div className="service-card-body"><span className="service-icon"><Icon /></span><h3>{service.title}</h3><p>{service.short}</p><Link href={localizePath(locale,`services/${service.slug}`)}>{t.actions.learn}<ArrowRight size={17}/></Link></div></article>;
}

export function OfficeGrid({ locale, maps = false }: { locale: Locale; maps?: boolean }) {
  const t=getUi(locale);
  const tanzaniaOffice = { ...company.offices.tanzania, lines: locale === "sw" ? company.offices.tanzania.linesSw : company.offices.tanzania.lines };
  const offices = [{key:"dubai",label:t.labels.dubai,phones:[company.phones.dubai],office:company.offices.dubai},{key:"tanzania",label:t.labels.tanzania,phones:[company.phones.tanzania,company.phones.tanzaniaSecondary],office:tanzaniaOffice}] as const;
  return <div className={`office-grid ${maps ? "with-maps" : ""}`}>{offices.map(({key,label,phones,office})=><article className="office-card" key={key}><div className="office-card-top"><span>{key === "dubai" ? "UAE" : "TZ"}</span><div><h3>{label}</h3><p>{office.city}</p></div></div><address>{office.lines.map(line=><span key={line}>{line}</span>)}</address><p className="hours"><Clock3 size={17}/>{t.hoursPending}</p><div className="office-actions">{phones.map(phone=><a className="button button-small button-navy" href={`tel:${phone.href}`} key={phone.href}><Phone size={16}/>{phone.display}</a>)}<a className="button button-small button-outline" href={mapsLink(office.address)} target="_blank" rel="noreferrer"><MapPin size={16}/>{t.actions.directions}</a>{key === "dubai" && <a className="button button-small button-outline" href={whatsappLink()} target="_blank" rel="noreferrer">WhatsApp</a>}</div>{maps && <iframe className="map-frame" title={`${label} map`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(office.address)}&output=embed`} />}</article>)}</div>;
}

export function QuoteCTA({ locale, title, text }: { locale: Locale; title?: string; text?: string }) {
  const t=getUi(locale);
  return <section className="quote-cta"><div className="route-lines" aria-hidden="true"><Plane/><span></span><Ship/></div><div><span className="eyebrow">TCAST CARGO</span><h2>{title || (locale === "en" ? "Plan your next shipment with us" : "Panga mzigo wako nasi")}</h2><p>{text || (locale === "en" ? "Share the cargo details and our team will review the practical options." : "Tuma maelezo ya mzigo na timu yetu itakagua chaguo zinazofaa.")}</p></div><div className="quote-cta-actions"><Link className="button button-white" href={localizePath(locale,"request-quote")}>{t.actions.quote}</Link><a className="button button-outline-light" href={whatsappLink()} target="_blank" rel="noreferrer">{t.actions.whatsapp}</a></div></section>;
}

export function TickList({ items }: { items: string[] }) { return <ul className="tick-list">{items.map(item=><li key={item}><Check size={18}/><span>{item}</span></li>)}</ul>; }

export function CargoNotice({ locale }: { locale: Locale }) { const t=getUi(locale); return <div className="cargo-notice"><Box/><div><strong>{t.labels.notice}</strong><p>{t.restricted}</p></div></div>; }

export function ContactStrip({ locale }: { locale: Locale }) { const t=getUi(locale); return <div className="contact-strip"><div className="contact-phone-group"><a href={`tel:${company.phones.tanzania.href}`}><Phone/>{company.phones.tanzania.display}</a><a href={`tel:${company.phones.tanzaniaSecondary.href}`}><Phone/>{company.phones.tanzaniaSecondary.display}</a></div><a href={`tel:${company.phones.dubai.href}`}><Phone/>{company.phones.dubai.display}</a><a href={`mailto:${company.email}`}><Mail/>{company.email}</a><a href={whatsappLink()} target="_blank" rel="noreferrer">{t.actions.whatsapp}<ArrowRight/></a></div>; }
