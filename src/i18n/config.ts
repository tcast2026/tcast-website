export const locales = ["en", "sw"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

const localizedRoutes = {
  leadership: { en: "leadership", sw: "uongozi" },
} as const;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizePath(locale: Locale, path = "") {
  const route = path.replace(/^\/+|\/+$/g, "");
  const localized = localizedRoutes[route as keyof typeof localizedRoutes]?.[locale] ?? route;
  const normalized = localized ? `/${localized}` : "";
  return `/${locale}${normalized}`;
}

export function routeKeyForPath(path: string) {
  const normalized = path.replace(/^\/+|\/+$/g, "");
  return Object.entries(localizedRoutes).find(([, routes]) => Object.values(routes).some((route) => route === normalized))?.[0] ?? normalized;
}

export function alternateLocalePath(pathname: string, targetLocale: Locale) {
  const path = pathname.replace(/^\/(en|sw)(?=\/|$)/, "");
  return localizePath(targetLocale, routeKeyForPath(path));
}
