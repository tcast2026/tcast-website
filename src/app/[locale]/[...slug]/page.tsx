import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LeadershipPage } from "@/components/leadership-page";
import { ContactPage, FAQPage, GalleryPage, GeneralContentPage, QuotePage, ServiceDetail, ServicesOverview, TrackingPage } from "@/components/page-views";
import { company } from "@/config/company";
import { getContentPage, routeMeta } from "@/data/pages";
import { getService } from "@/data/services";
import { isLocale, locales, type Locale, localizePath, routeKeyForPath } from "@/i18n/config";

const simpleSlugs = ["about", "services", "tracking", "request-quote", "how-it-works", "faq", "gallery", "contact", "privacy-policy", "terms-and-conditions"];
const serviceSlugs = ["air-freight", "sea-freight", "door-to-door", "customs-clearing", "warehousing-consolidation", "commercial-cargo", "personal-effects"];

export function generateStaticParams() {
  return locales.flatMap((locale) => [
    ...simpleSlugs.map((slug) => ({ locale, slug: [slug] })),
    ...serviceSlugs.map((slug) => ({ locale, slug: ["services", slug] })),
    { locale, slug: [locale === "en" ? "leadership" : "uongozi"] },
  ]);
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string[] }> }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) return {};

  const locale = raw as Locale;
  const path = slug.join("/");
  const routeKey = routeKeyForPath(path);
  let title = "";
  let description = "";
  let image = "/og.png";

  if (path.startsWith("services/")) {
    const service = getService(locale, slug[1]);
    if (!service) return {};
    title = service.title;
    description = service.short;
    image = service.image;
  } else {
    const meta = routeMeta[routeKey]?.[locale];
    if (!meta) return {};
    ({ title, description, image } = meta);
  }

  const localPath = localizePath(locale, routeKey);
  if (localPath !== `/${locale}/${path}`) return {};

  return {
    title,
    description,
    alternates: {
      canonical: localPath,
      languages: { en: localizePath("en", routeKey), sw: localizePath("sw", routeKey) },
    },
    openGraph: {
      title: `${title} | ${company.brandName}`,
      description,
      url: localPath,
      locale: locale === "en" ? "en_US" : "sw_TZ",
      images: [{ url: image, alt: `${company.brandName} — ${title}` }],
    },
    twitter: { title: `${title} | ${company.brandName}`, description, images: [image] },
  };
}

export default async function RoutePage({ params }: { params: Promise<{ locale: string; slug: string[] }> }) {
  const { locale: raw, slug } = await params;
  if (!isLocale(raw)) notFound();
  const locale = raw as Locale;
  const path = slug.join("/");

  if (path === "services") return <ServicesOverview locale={locale} />;
  if (path.startsWith("services/") && slug.length === 2) {
    const service = getService(locale, slug[1]);
    if (!service) notFound();
    return <ServiceDetail locale={locale} service={service} />;
  }
  if (path === "tracking") return <TrackingPage locale={locale} />;
  if (path === "request-quote") return <QuotePage locale={locale} />;
  if (path === "faq") return <FAQPage locale={locale} />;
  if (path === "gallery") return <GalleryPage locale={locale} />;
  if (path === "contact") return <ContactPage locale={locale} />;
  if (path === (locale === "en" ? "leadership" : "uongozi")) return <LeadershipPage locale={locale} />;

  const page = getContentPage(locale, path);
  if (page) return <GeneralContentPage locale={locale} page={page} />;
  notFound();
}
