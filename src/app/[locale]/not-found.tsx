"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound(){
  const pathname=usePathname();const sw=pathname.startsWith("/sw");const locale=sw?"sw":"en";
  return <section className="not-found"><div className="not-found-image"><Image src="/images/not-found.webp" alt={sw?"Meli ya mizigo ikisubiri njia sahihi":"Cargo ship awaiting the correct route"} fill priority sizes="50vw"/></div><div><span className="eyebrow">ERROR 404</span><h1>{sw?"Njia hii ya mzigo haijapatikana":"This cargo route could not be found"}</h1><p>{sw?"Ukurasa unaweza kuwa umehamishwa au anwani haijakamilika. Rudi kwenye tovuti au wasiliana na TCAST Cargo kwa msaada.":"The page may have moved or the address may be incomplete. Return to the website or contact TCAST Cargo for help."}</p><div className="hero-actions"><Link className="button button-primary" href={`/${locale}`}>{sw?"Rudi mwanzo":"Go to homepage"}</Link><Link className="button button-outline" href={`/${locale}/contact`}>{sw?"Wasiliana na TCAST":"Contact TCAST"}</Link></div></div></section>;
}
