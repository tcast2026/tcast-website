import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Eye, Handshake, PackageCheck, ShieldCheck, TrendingUp } from "lucide-react";
import { company } from "@/config/company";
import { leadershipContent } from "@/data/leadership";
import type { Locale } from "@/i18n/config";
import { localizePath } from "@/i18n/config";
import { Breadcrumbs, JsonLd, QuoteCTA } from "./ui";

const principleIcons = [Handshake, Eye, PackageCheck, ShieldCheck, TrendingUp];

export function LeadershipPage({ locale }: { locale: Locale }) {
  const content = leadershipContent[locale];
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": `${company.siteUrl}/#twahil-salum-than`,
        name: "Twahil Salum Than",
        image: `${company.siteUrl}/images/twahil-salum-than.jpeg`,
        jobTitle: content.role,
        worksFor: { "@id": `${company.siteUrl}/#organization` },
        owns: { "@id": `${company.siteUrl}/#organization` },
      },
      {
        "@type": "Organization",
        "@id": `${company.siteUrl}/#organization`,
        name: company.legalName,
        url: company.siteUrl,
        founder: { "@id": `${company.siteUrl}/#twahil-salum-than` },
      },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <Breadcrumbs locale={locale} items={[{ label: content.eyebrow }]} />
      <section className="leadership-hero">
        <div className="container leadership-hero-grid">
          <div className="leadership-hero-copy">
            <span className="eyebrow light">{content.eyebrow}</span>
            <h1>{content.heroTitle}</h1>
            <p>{content.heroDescription}</p>
            <div className="leadership-identity">
              <strong>Twahil Salum Than</strong>
              <span>{content.role}</span>
            </div>
            <div className="hero-actions">
              <Link className="button button-primary" href={localizePath(locale, "contact")}>
                {locale === "en" ? "Contact TCAST" : "Wasiliana na TCAST"}<ArrowRight />
              </Link>
              <Link className="button button-outline-light" href={localizePath(locale, "request-quote")}>
                {locale === "en" ? "Request a quote" : "Omba makadirio"}
              </Link>
            </div>
          </div>
          <div className="leadership-portrait-wrap">
            <div className="leadership-portrait">
              <Image
                src="/images/twahil-salum-than.jpeg"
                alt={`Twahil Salum Than, ${content.role}`}
                fill
                priority
                sizes="(max-width: 800px) 92vw, 42vw"
              />
            </div>
            <div className="ownership-badge"><ShieldCheck />{content.ownershipLabel}</div>
          </div>
        </div>
      </section>

      <section className="section leadership-profile">
        <div className="container leadership-profile-grid">
          <div>
            <span className="eyebrow">{content.profileEyebrow}</span>
            <h2>{content.profileTitle}</h2>
            <p className="leadership-role">{content.role}</p>
          </div>
          <div className="leadership-profile-copy">
            {content.profileParagraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="owner-statement"><ShieldCheck /><p>{content.ownerStatement}</p></div>
          </div>
        </div>
      </section>

      <section className="section founder-message">
        <div className="container founder-message-grid">
          <div>
            <span className="eyebrow light">TCAST CARGO</span>
            <h2>{content.founderMessageTitle}</h2>
          </div>
          <div>
            {content.founderMessage.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            <div className="founder-signature"><strong>Twahil Salum Than</strong><span>{content.role}</span></div>
          </div>
        </div>
      </section>

      <section className="section leadership-vision">
        <div className="container">
          <div className="vision-callout">
            <span>01</span>
            <div><h2>{content.visionTitle}</h2><p>{content.vision}</p></div>
          </div>
          <div className="leadership-focus-grid">
            {content.focusSections.map((section, index) => (
              <article key={section.title}><span>0{index + 2}</span><h3>{section.title}</h3><p>{section.text}</p></article>
            ))}
          </div>
        </div>
      </section>

      <section className="section leadership-principles">
        <div className="container">
          <div className="section-heading centered">
            <span className="eyebrow">{content.principlesEyebrow}</span>
            <h2>{content.principlesTitle}</h2>
          </div>
          <div className="principles-grid">
            {content.principles.map((principle, index) => {
              const Icon = principleIcons[index];
              return <article key={principle.title}><Icon /><h3>{principle.title}</h3><p>{principle.text}</p></article>;
            })}
          </div>
        </div>
      </section>

      <div className="container final-cta-wrap">
        <QuoteCTA locale={locale} title={content.ctaTitle} text={content.ctaText} />
      </div>
    </>
  );
}
