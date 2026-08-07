import type { MetadataRoute } from "next";
import { company } from "@/config/company";
import { locales } from "@/i18n/config";

const paths=["","about","services","services/air-freight","services/sea-freight","services/door-to-door","services/customs-clearing","services/warehousing-consolidation","services/commercial-cargo","services/personal-effects","tracking","request-quote","how-it-works","faq","gallery","contact","privacy-policy","terms-and-conditions"];

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((locale) =>
    paths.map((path) => {
      const suffix = path ? `/${path}` : "";
      return {
        url: `${company.siteUrl}/${locale}${suffix}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" as const : "monthly" as const,
        priority: path === "" ? 1 : path.startsWith("services") ? 0.8 : 0.6,
        alternates: { languages: { en: `${company.siteUrl}/en${suffix}`, sw: `${company.siteUrl}/sw${suffix}` } },
      };
    }),
  );
}
