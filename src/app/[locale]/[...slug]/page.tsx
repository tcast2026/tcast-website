import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { company } from "@/config/company";
import { getContentPage, routeMeta } from "@/data/pages";
import { getService } from "@/data/services";
import { ContactPage, FAQPage, GalleryPage, GeneralContentPage, QuotePage, ServiceDetail, ServicesOverview, TrackingPage } from "@/components/page-views";
import { isLocale, locales, type Locale } from "@/i18n/config";

const simpleSlugs=["about","services","tracking","request-quote","how-it-works","faq","gallery","contact","privacy-policy","terms-and-conditions"];
const serviceSlugs=["air-freight","sea-freight","door-to-door","customs-clearing","warehousing-consolidation","commercial-cargo","personal-effects"];

export function generateStaticParams(){return locales.flatMap(locale=>[...simpleSlugs.map(slug=>({locale,slug:[slug]})),...serviceSlugs.map(slug=>({locale,slug:["services",slug]}))]);}

export async function generateMetadata({params}:{params:Promise<{locale:string;slug:string[]}>}):Promise<Metadata>{
  const {locale:raw,slug}=await params;if(!isLocale(raw))return{};const locale=raw as Locale;const path=slug.join("/");let title="";let description="";
  if(path.startsWith("services/")){const service=getService(locale,slug[1]);if(!service)return{};title=service.title;description=service.short;}else{const meta=routeMeta[path]?.[locale];if(!meta)return{};({title,description}=meta);}
  const localPath=`/${locale}/${path}`;const otherLocale=locale==="en"?"sw":"en";const otherPath=`/${otherLocale}/${path}`;
  return{title,description,alternates:{canonical:localPath,languages:{[locale]:localPath,[otherLocale]:otherPath}},openGraph:{title:`${title} | ${company.brandName}`,description,url:localPath,locale:locale==="en"?"en_US":"sw_TZ",images:[{url:"/og.png",width:1200,height:630,alt:`${company.brandName} — ${title}`}]},twitter:{title:`${title} | ${company.brandName}`,description,images:["/og.png"]}};
}

export default async function RoutePage({params}:{params:Promise<{locale:string;slug:string[]}>}){
  const {locale:raw,slug}=await params;if(!isLocale(raw))notFound();const locale=raw as Locale;const path=slug.join("/");
  if(path==="services")return <ServicesOverview locale={locale}/>;
  if(path.startsWith("services/")&&slug.length===2){const service=getService(locale,slug[1]);if(!service)notFound();return <ServiceDetail locale={locale} service={service}/>;}
  if(path==="tracking")return <TrackingPage locale={locale}/>;
  if(path==="request-quote")return <QuotePage locale={locale}/>;
  if(path==="faq")return <FAQPage locale={locale}/>;
  if(path==="gallery")return <GalleryPage locale={locale}/>;
  if(path==="contact")return <ContactPage locale={locale}/>;
  const page=getContentPage(locale,path);if(page)return <GeneralContentPage locale={locale} page={page}/>;
  notFound();
}
