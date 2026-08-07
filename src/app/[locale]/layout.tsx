import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../globals.css";
import { company } from "@/config/company";
import { Footer, FloatingActions, Header } from "@/components/site-shell";
import { JsonLd } from "@/components/ui";
import { isLocale, locales, type Locale } from "@/i18n/config";

export const metadata: Metadata = {
  metadataBase: new URL(company.siteUrl),
  applicationName: company.brandName,
  title: { default: "TCAST Cargo", template: "%s | TCAST Cargo" },
  description: "Cargo, freight forwarding, clearing and logistics between Dubai and Tanzania.",
  icons: { icon: "/brand/favicon.png", apple: "/brand/apple-touch-icon.png" },
  openGraph: { siteName: company.brandName, type: "website" },
  twitter: { card: "summary_large_image" },
  category: "logistics",
};

export function generateStaticParams() { return locales.map((locale)=>({locale})); }

export default async function LocaleLayout({ children, params }: Readonly<{ children: React.ReactNode; params: Promise<{locale:string}> }>) {
  const {locale:raw}=await params; if(!isLocale(raw))notFound(); const locale=raw as Locale;
  const organization={"@context":"https://schema.org","@type":"Organization",name:company.legalName,alternateName:company.brandName,url:company.siteUrl,logo:`${company.siteUrl}/brand/tcast-logo.png`,email:company.email,telephone:[company.phones.tanzania.display,company.phones.tanzaniaSecondary.display,company.phones.dubai.display],areaServed:[{"@type":"Country",name:"Tanzania"},{"@type":"Country",name:"United Arab Emirates"}],contactPoint:[{"@type":"ContactPoint",telephone:company.phones.tanzania.display,contactType:"customer service",areaServed:"TZ"},{"@type":"ContactPoint",telephone:company.phones.tanzaniaSecondary.display,contactType:"customer service",areaServed:"TZ"},{"@type":"ContactPoint",telephone:company.phones.dubai.display,contactType:"customer service",areaServed:"AE",availableLanguage:["English","Swahili"]}]};
  const locations=Object.values(company.offices).map((office,index)=>({"@context":"https://schema.org","@type":"LocalBusiness",name:`${company.brandName} — ${index===0?"Tanzania":"Dubai"}`,url:company.siteUrl,email:company.email,telephone:index===0?[company.phones.tanzania.display,company.phones.tanzaniaSecondary.display]:company.phones.dubai.display,address:{"@type":"PostalAddress",streetAddress:office.address,addressCountry:index===0?"TZ":"AE"},parentOrganization:{"@type":"Organization",name:company.legalName}}));
  return <html lang={locale}><body><JsonLd data={[organization,...locations]}/><Header locale={locale}/><main id="main-content">{children}</main><Footer locale={locale}/><FloatingActions locale={locale}/></body></html>;
}
