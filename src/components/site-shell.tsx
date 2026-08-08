"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Mail, MapPin, Menu, MessageCircle, Phone, X, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { company, mapsLink, whatsappLink } from "@/config/company";
import { getServices } from "@/data/services";
import { alternateLocalePath, type Locale, localizePath } from "@/i18n/config";
import { getUi } from "@/i18n/dictionaries";

function LanguageSwitcher({ locale, compact = false }: { locale: Locale; compact?: boolean }) {
  const pathname = usePathname();
  const other = locale === "en" ? "sw" : "en";
  const nextPath = alternateLocalePath(pathname, other);
  return (
    <Link className={compact ? "language-switch compact" : "language-switch"} href={nextPath} hrefLang={other}>
      <span className="language-current">{locale.toUpperCase()}</span>
      <span aria-hidden="true">/</span>
      <span>{other.toUpperCase()}</span>
    </Link>
  );
}

export function Header({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = getUi(locale);
  const services = getServices(locale);
  const nav = [
    [t.nav.home, ""], [t.nav.how, "how-it-works"],
    [t.nav.gallery, "gallery"], [t.nav.faq, "faq"], [t.nav.contact, "contact"],
  ] as const;
  const active = (slug: string) => pathname === localizePath(locale, slug);

  return (
    <>
      <a className="skip-link" href="#main-content">{t.skip}</a>
      <div className="topbar">
        <div className="container topbar-inner">
          <div className="topbar-links">
            <div className="topbar-phone-group"><Phone size={14} /><span>TZ</span><a href={`tel:${company.phones.tanzania.href}`}>{company.phones.tanzania.display}</a><span aria-hidden="true">/</span><a href={`tel:${company.phones.tanzaniaSecondary.href}`}>{company.phones.tanzaniaSecondary.display}</a></div>
            <a href={`tel:${company.phones.dubai.href}`}><Phone size={14} /> UAE {company.phones.dubai.display}</a>
            <a href={`mailto:${company.email}`}><Mail size={14} /> {company.email}</a>
          </div>
          <div className="topbar-links topbar-locations">
            <span><MapPin size={14} /> Dar es Salaam & Dubai</span>
            <LanguageSwitcher locale={locale} compact />
          </div>
        </div>
      </div>
      <header className="site-header">
        <div className="container header-inner">
          <Link href={localizePath(locale)} className="brand" aria-label={`${company.brandName} — ${t.nav.home}`}>
            <Image src="/brand/tcast-logo.png" width={250} height={178} alt="TCAST Cargo" priority />
          </Link>
          <nav className="desktop-nav" aria-label="Primary navigation">
            <Link className={active("") ? "active" : ""} href={localizePath(locale)}>{t.nav.home}</Link>
            <div className="nav-dropdown">
              <Link className={active("about") || active("leadership") ? "active" : ""} href={localizePath(locale, "about")}>
                {t.nav.about}<ChevronDown size={15} />
              </Link>
              <div className="dropdown-panel about-dropdown">
                <Link href={localizePath(locale, "about")}>{t.nav.about}</Link>
                <Link href={localizePath(locale, "leadership")}>{t.nav.leadership}</Link>
              </div>
            </div>
            <div className="nav-dropdown">
              <Link className={pathname.includes(`/${locale}/services`) ? "active" : ""} href={localizePath(locale, "services")}>
                {t.nav.services}<ChevronDown size={15} />
              </Link>
              <div className="dropdown-panel">
                {services.map((service) => <Link key={service.slug} href={localizePath(locale, `services/${service.slug}`)}>{service.title}</Link>)}
              </div>
            </div>
            {nav.slice(1).map(([label, slug]) => <Link key={slug} className={active(slug) ? "active" : ""} href={localizePath(locale, slug)}>{label}</Link>)}
          </nav>
          <div className="header-actions">
            <LanguageSwitcher locale={locale} />
            <Link className="button button-ghost header-track" href={localizePath(locale, "tracking")}>{t.nav.track}</Link>
            <Link className="button button-primary header-quote" href={localizePath(locale, "request-quote")}>{t.nav.quote}</Link>
            <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-menu" aria-label={open ? t.nav.close : t.nav.menu} onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        <div id="mobile-menu" className={`mobile-menu ${open ? "open" : ""}`} aria-hidden={!open} onClick={(event) => { if ((event.target as HTMLElement).closest("a")) setOpen(false); }}>
          <div className="container mobile-menu-inner">
            <Link href={localizePath(locale)}>{t.nav.home}</Link>
            <Link href={localizePath(locale, "about")}><strong>{t.nav.about}</strong></Link>
            <div className="mobile-services mobile-about"><Link href={localizePath(locale, "leadership")}>{t.nav.leadership}</Link></div>
            <Link href={localizePath(locale, "services")}><strong>{t.nav.services}</strong></Link>
            <div className="mobile-services">{services.map((s) => <Link key={s.slug} href={localizePath(locale, `services/${s.slug}`)}>{s.title}</Link>)}</div>
            {nav.slice(1).map(([label, slug]) => <Link key={slug} href={localizePath(locale, slug)}>{label}</Link>)}
            <div className="mobile-actions">
              <Link className="button button-ghost" href={localizePath(locale, "tracking")}>{t.nav.track}</Link>
              <Link className="button button-primary" href={localizePath(locale, "request-quote")}>{t.nav.quote}</Link>
              <LanguageSwitcher locale={locale} />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export function Footer({ locale }: { locale: Locale }) {
  const t = getUi(locale);
  const services = getServices(locale);
  const links = [[t.nav.about,"about"],[t.nav.leadership,"leadership"],[t.nav.how,"how-it-works"],[t.nav.faq,"faq"],[t.nav.gallery,"gallery"],[t.nav.contact,"contact"],[t.nav.track,"tracking"]];
  const tanzaniaLines = locale === "sw" ? company.offices.tanzania.linesSw : company.offices.tanzania.lines;
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link href={localizePath(locale)}><Image src="/brand/tcast-logo.png" width={250} height={178} alt="TCAST Cargo" /></Link>
          <p>{t.footerSummary}</p>
          <a href={`mailto:${company.email}`}><Mail size={16} />{company.email}</a>
        </div>
        <div><h2>{t.labels.quickLinks}</h2><div className="footer-links">{links.map(([label,slug])=><Link key={slug} href={localizePath(locale,slug)}>{label}</Link>)}</div></div>
        <div><h2>{t.labels.serviceLinks}</h2><div className="footer-links">{services.slice(0,5).map(s=><Link key={s.slug} href={localizePath(locale,`services/${s.slug}`)}>{s.title}</Link>)}</div></div>
        <div className="footer-office"><h2>{t.labels.dubai}</h2><p>{company.offices.dubai.lines.join(", ")}</p><a href={`tel:${company.phones.dubai.href}`}><Phone size={16}/>{company.phones.dubai.display}</a><a target="_blank" rel="noreferrer" href={mapsLink(company.offices.dubai.address)}><MapPin size={16}/>{t.actions.directions}</a></div>
        <div className="footer-office"><h2>{t.labels.tanzania}</h2><p>{tanzaniaLines.join(", ")}</p><a href={`tel:${company.phones.tanzania.href}`}><Phone size={16}/>{company.phones.tanzania.display}</a><a href={`tel:${company.phones.tanzaniaSecondary.href}`}><Phone size={16}/>{company.phones.tanzaniaSecondary.display}</a><a target="_blank" rel="noreferrer" href={mapsLink(company.offices.tanzania.address)}><MapPin size={16}/>{t.actions.directions}</a></div>
      </div>
      <div className="container footer-bottom"><p>© {new Date().getFullYear()} {company.legalName}. {t.copyright}</p><div><Link href={localizePath(locale,"privacy-policy")}>{locale === "en" ? "Privacy Policy" : "Sera ya Faragha"}</Link><Link href={localizePath(locale,"terms-and-conditions")}>{locale === "en" ? "Terms & Conditions" : "Vigezo na Masharti"}</Link></div></div>
    </footer>
  );
}

export function FloatingActions({ locale }: { locale: Locale }) {
  const [visible, setVisible] = useState(false);
  const t = getUi(locale);
  useEffect(() => { const handler=()=>setVisible(window.scrollY>500); handler(); window.addEventListener("scroll",handler,{passive:true}); return()=>window.removeEventListener("scroll",handler); },[]);
  return <div className="floating-actions">
    {visible && <button type="button" className="floating-button back-top" aria-label={t.actions.backTop} onClick={()=>window.scrollTo({top:0,behavior:"smooth"})}><ArrowUp /></button>}
    <a className="floating-button whatsapp" href={whatsappLink()} target="_blank" rel="noreferrer" aria-label={t.actions.whatsapp}><MessageCircle /><span>{t.actions.whatsapp}</span></a>
  </div>;
}
