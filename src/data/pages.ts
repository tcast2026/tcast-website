import type { Locale } from "@/i18n/config";

export type ContentPage = {
  slug: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  sections: { title: string; paragraphs: string[]; bullets?: string[] }[];
};

const pages: Record<Locale, ContentPage[]> = {
  en: [
    {
      slug: "about",
      eyebrow: "About TCAST Cargo",
      title: "Practical logistics support across the UAE–Tanzania corridor",
      description: "TCAST Cargo & Clearing Ltd supports individuals and businesses with cargo receiving, freight coordination, consolidation, customs assistance and delivery planning.",
      image: "/images/about.webp",
      alt: "Logistics professionals coordinating cargo in a freight facility",
      sections: [
        { title: "What we do", paragraphs: ["TCAST Cargo connects customers, suppliers, carriers and destination handling through one coordinated cargo process. From a personal parcel or household shipment to business stock and machinery, we begin by understanding what is being shipped, where it must go and which documents may apply.", "Our role is to make each handover clearer: receiving cargo in Dubai, preparing air or sea freight, combining eligible deliveries, supporting declarations and coordinating collection or final delivery in Tanzania."] },
        { title: "Our mission", paragraphs: ["To provide dependable, understandable cargo coordination between the United Arab Emirates and Tanzania, with practical guidance at every stage and honest communication about requirements, options and next steps."] },
        { title: "Our vision", paragraphs: ["To be a trusted logistics link for people and enterprises trading, purchasing and sending goods between the UAE and Tanzania—known for organized handling, responsive support and transparent coordination."] },
        { title: "Core values", paragraphs: ["The way a shipment is communicated is as important as the way it is moved."], bullets: ["Clarity — explain requirements and responsibilities in plain language", "Care — treat every package and document as part of a customer commitment", "Accountability — record handovers and follow up on agreed actions", "Compliance — respect carrier, customs and product requirements", "Practical service — recommend an arrangement that fits the actual cargo"] },
        { title: "Who we serve", paragraphs: ["Our services are designed for varied customer needs without assuming that one shipping method suits everyone."], bullets: ["Individuals and families sending personal effects or parcels", "Traders, shops and SMEs importing stock", "Importers, exporters and wholesalers", "Corporate teams coordinating equipment or supplies", "Online sellers and customers purchasing from UAE suppliers"] },
        { title: "Present in Dubai and Dar es Salaam", paragraphs: ["Our Dubai presence supports cargo receiving, supplier coordination and export preparation. Our Dar es Salaam presence supports customer communication, customs coordination and destination handover. Exact office details appear below and on the Contact page."] },
      ],
    },
    {
      slug: "how-it-works",
      eyebrow: "Your shipment journey",
      title: "A clear process from first enquiry to final handover",
      description: "Understand the eight practical stages TCAST Cargo uses to plan, receive, prepare, ship and coordinate cargo between Dubai and Tanzania.",
      image: "/images/how-it-works.webp",
      alt: "Cargo being checked and prepared during a logistics handover",
      sections: [
        { title: "1. Request an estimate", paragraphs: ["Contact TCAST or complete the quote form with origin, destination, cargo type, quantity, estimated weight and dimensions. The more complete the information, the more useful the initial estimate can be."] },
        { title: "2. Submit cargo information", paragraphs: ["Share a packing list, photos where helpful, values and any product information. Declare batteries, liquids, fragile goods, machinery and regulated items before delivery."] },
        { title: "3. Collection or office delivery", paragraphs: ["TCAST confirms where approved cargo should be delivered or whether collection can be arranged for the stated address. Each package should carry the assigned customer reference."] },
        { title: "4. Inspection and measurement", paragraphs: ["The team checks visible package condition and records weight or dimensions as appropriate. Final chargeable measurements may differ from early customer estimates."] },
        { title: "5. Packing and consolidation", paragraphs: ["Eligible packages may be regrouped or consolidated as agreed. Any material repacking, crating or special handling is discussed before work proceeds."] },
        { title: "6. Shipping arrangement", paragraphs: ["Air or sea transport is coordinated using the confirmed cargo information, available routing and accepted documents. The team shares the relevant shipment reference and updates."] },
        { title: "7. Customs processing", paragraphs: ["Shipment and consignee documents are used for the applicable declaration and release process. Authorities may request clarification, inspection, duties, taxes or permits."] },
        { title: "8. Collection or final delivery", paragraphs: ["After release, the customer is advised about collection or an agreed final-mile delivery. Identification, authorization and any outstanding requirements must be completed before handover."] },
        { title: "Practical customer tips", paragraphs: ["Keep copies of every list and invoice, use the same description throughout, label all packages, remain reachable and never send an undeclared item."], bullets: ["Confirm cargo acceptance before supplier delivery", "Photograph fragile or valuable items before packing", "Do not rely on unconfirmed transit estimates", "Tell TCAST immediately if shipment details change"] },
      ],
    },
    {
      slug: "privacy-policy",
      eyebrow: "Privacy",
      title: "Privacy Policy",
      description: "How TCAST Cargo handles information submitted through this website and cargo enquiry forms.",
      image: "/images/privacy.webp",
      alt: "Secure digital logistics records used to coordinate a cargo enquiry",
      sections: [
        { title: "Information we receive", paragraphs: ["When you contact us, request a quote or ask about a shipment, you may provide names, contact details, addresses, cargo descriptions, package information, documents and message content. Technical security logs may record time, browser information and network address."] },
        { title: "How information is used", paragraphs: ["Information is used to respond to enquiries, assess cargo requirements, coordinate requested services, communicate shipment updates, maintain operational records, prevent misuse and comply with applicable legal or regulatory duties."] },
        { title: "Sharing and service providers", paragraphs: ["Relevant information may be shared with carriers, customs representatives, delivery providers, technology or email providers and authorities where needed for a requested service or legal obligation. TCAST does not sell personal information submitted through this website."] },
        { title: "Retention and security", paragraphs: ["Records are retained for operational, legal and dispute-resolution needs. Reasonable technical and organizational measures are used, but no internet transmission or storage system can be guaranteed completely secure."] },
        { title: "Your choices", paragraphs: ["You may request correction of inaccurate contact information or ask a privacy question by emailing tahilcast@gmail.com. Some records may need to be retained where required for shipments, accounting, compliance or legal claims."] },
        { title: "Website services and updates", paragraphs: ["This website may use essential technical storage and third-party map or communication links. Their providers apply their own terms. This policy may be updated when services or requirements change; the current version shown on this page applies."] },
      ],
    },
    {
      slug: "terms-and-conditions",
      eyebrow: "Website terms",
      title: "Terms and Conditions",
      description: "General website and enquiry terms for TCAST Cargo. Shipment-specific terms are confirmed separately in writing.",
      image: "/images/terms.webp",
      alt: "Cargo documents prepared for review before international transport",
      sections: [
        { title: "Website information", paragraphs: ["This website provides general information about TCAST Cargo services. It is not a guaranteed offer, fixed price, confirmed schedule or acceptance of cargo. A shipment arrangement exists only after scope, cargo details, charges and applicable conditions are confirmed through an authorized TCAST communication."] },
        { title: "Customer responsibilities", paragraphs: ["Customers must provide accurate descriptions, quantities, values, dimensions, contact information and documents. The sender is responsible for declaring restricted, dangerous, regulated or fragile contents and for having authority to ship the goods."] },
        { title: "Quotations and changes", paragraphs: ["An initial estimate may change after actual measurement, inspection, routing confirmation, customs assessment or a change in customer instructions. Validity, currency, inclusions, exclusions and payment requirements are stated in the issued quotation."] },
        { title: "Carriers, customs and timing", paragraphs: ["Transport and clearance may involve independent carriers, authorities and service providers. Schedules and release decisions can be affected by operational, regulatory or external events. TCAST will coordinate and communicate but does not make unsupported delivery guarantees."] },
        { title: "Restricted goods", paragraphs: ["TCAST may refuse or stop handling cargo that is prohibited, unsafe, inaccurately described, inadequately packed or missing required approvals. The customer should ask for confirmation before sending any uncertain item."] },
        { title: "Claims and shipment-specific terms", paragraphs: ["Packaging, inspection, notification and claim requirements depend on the actual service and carrier. Customers should keep receipts, packing records and photographs and report concerns promptly. Shipment-specific written terms take priority over this general website summary."] },
        { title: "Contact", paragraphs: ["Questions about these terms can be sent to tahilcast@gmail.com or discussed with the Dubai or Tanzania office before cargo is handed over."] },
      ],
    },
  ],
  sw: [
    {
      slug:"about",eyebrow:"Kuhusu TCAST Cargo",title:"Msaada wa vitendo wa usafirishaji kati ya UAE na Tanzania",description:"TCAST Cargo & Clearing Ltd husaidia watu na biashara kwa upokeaji, usafirishaji, kuunganisha mizigo, forodha na uwasilishaji.",image:"/images/about.webp",alt:"Wataalamu wa usafirishaji wakiratibu mizigo",sections:[
        {title:"Tunachofanya",paragraphs:["TCAST Cargo huunganisha wateja, wasambazaji, wabebaji na wahudumu wa mwisho katika mchakato mmoja. Tunaanza kwa kuelewa mzigo, unakoenda na nyaraka zinazoweza kuhitajika.","Tunasaidia kupokea Dubai, kuandaa usafiri wa anga au bahari, kuunganisha mizigo inayofaa, kusaidia matamko na kuratibu kuchukua au kupeleka Tanzania."]},
        {title:"Dhamira yetu",paragraphs:["Kutoa uratibu wa mizigo unaoeleweka na kutegemewa kati ya UAE na Tanzania, kwa mwongozo wa vitendo na mawasiliano ya wazi katika kila hatua."]},
        {title:"Dira yetu",paragraphs:["Kuwa kiungo kinachoaminika kwa watu na biashara zinazonunua na kutuma bidhaa kati ya UAE na Tanzania, tukijulikana kwa mpangilio, mwitikio na uwazi."]},
        {title:"Maadili yetu",paragraphs:["Mawasiliano ya mzigo ni muhimu sawa na namna unavyosafirishwa."],bullets:["Uwazi — kueleza masharti kwa lugha rahisi","Uangalifu — kuheshimu kila kifurushi na nyaraka","Uwajibikaji — kurekodi makabidhiano na kufuatilia","Uzingatiaji — kuheshimu masharti ya wabebaji na forodha","Huduma ya vitendo — kupendekeza mpango unaofaa mzigo"]},
        {title:"Tunawahudumia nani",paragraphs:["Hatuchukulii kwamba njia moja inafaa kila mteja."],bullets:["Watu binafsi na familia","Wafanyabiashara, maduka na SME","Waagizaji, wauzaji nje na wa jumla","Kampuni zinazosafirisha vifaa","Wauzaji mtandaoni na wanunuzi wa UAE"]},
        {title:"Tupo Dubai na Dar es Salaam",paragraphs:["Uwepo wetu Dubai husaidia upokeaji, wasambazaji na maandalizi ya kusafirisha. Dar es Salaam husaidia mawasiliano, forodha na makabidhiano. Anwani kamili zipo hapa chini na kwenye ukurasa wa Mawasiliano."]}
      ]
    },
    {
      slug:"how-it-works",eyebrow:"Safari ya mzigo wako",title:"Mchakato ulio wazi kutoka ombi hadi makabidhiano",description:"Elewa hatua nane za TCAST za kupanga, kupokea, kuandaa, kusafirisha na kukabidhi mzigo.",image:"/images/how-it-works.webp",alt:"Mzigo ukikaguliwa na kuandaliwa",sections:[
        {title:"1. Omba makadirio",paragraphs:["Wasiliana na TCAST au jaza fomu ukitaja ulikotoka, unakoenda, aina, idadi, uzito na vipimo. Taarifa kamili husaidia makadirio ya awali."]},{title:"2. Tuma taarifa za mzigo",paragraphs:["Tuma orodha, picha inaposaidia, thamani na maelezo ya bidhaa. Taja betri, vimiminika, vitu dhaifu, mashine na bidhaa zilizodhibitiwa."]},{title:"3. Ukusanyaji au kuleta ofisini",paragraphs:["TCAST huthibitisha eneo la kuleta au kama ukusanyaji unaweza kupangwa. Kila kifurushi kiwe na rejea ya mteja."]},{title:"4. Ukaguzi na vipimo",paragraphs:["Timu hukagua hali inayoonekana na kurekodi uzito au vipimo. Vipimo vya mwisho vinaweza kutofautiana na makadirio ya mteja."]},{title:"5. Ufungashaji na uunganishaji",paragraphs:["Vifurushi vinavyofaa vinaweza kupangwa upya au kuunganishwa. Ufungashaji maalumu hujadiliwa kabla ya kazi."]},{title:"6. Mpango wa usafirishaji",paragraphs:["Anga au bahari huratibiwa kulingana na taarifa, njia inayopatikana na nyaraka zilizokubaliwa."]},{title:"7. Taratibu za forodha",paragraphs:["Nyaraka hutumika kwa tamko na kuachiliwa. Mamlaka zinaweza kuomba ufafanuzi, ukaguzi, ushuru au vibali."]},{title:"8. Kuchukua au kupelekewa",paragraphs:["Baada ya kuachiliwa, mteja hujulishwa kuhusu kuchukua au uwasilishaji uliokubaliwa. Kitambulisho na masharti lazima yakamilike."]},{title:"Vidokezo vya mteja",paragraphs:["Hifadhi nakala za orodha na ankara, tumia maelezo yanayofanana, weka lebo na usitume kitu kisichotajwa."],bullets:["Thibitisha kukubalika kabla ya kuleta","Piga picha vitu dhaifu","Usitegemee muda ambao haujathibitishwa","Julisha TCAST mara moja taarifa zikibadilika"]}
      ]
    },
    {
      slug:"privacy-policy",eyebrow:"Faragha",title:"Sera ya Faragha",description:"Namna TCAST Cargo inavyoshughulikia taarifa zinazotumwa kwenye tovuti na fomu.",image:"/images/privacy.webp",alt:"Rekodi salama za kidijitali za uratibu wa mizigo",sections:[
        {title:"Taarifa tunazopokea",paragraphs:["Unapowasiliana au kuomba makadirio unaweza kutoa majina, mawasiliano, anwani, maelezo ya mzigo, nyaraka na ujumbe. Rekodi za kiufundi zinaweza kuhifadhi muda, kivinjari na anwani ya mtandao kwa usalama."]},{title:"Matumizi ya taarifa",paragraphs:["Taarifa hutumika kujibu maombi, kutathmini mzigo, kuratibu huduma, kuwasiliana kuhusu hatua, kuzuia matumizi mabaya na kutimiza wajibu wa kisheria."]},{title:"Kushiriki taarifa",paragraphs:["Taarifa husika zinaweza kushirikiwa na wabebaji, mawakala wa forodha, wapelekaji, watoa huduma za teknolojia na mamlaka inapohitajika. TCAST haiuzi taarifa binafsi za tovuti."]},{title:"Uhifadhi na usalama",paragraphs:["Rekodi huhifadhiwa kwa mahitaji ya kazi, sheria na utatuzi wa migogoro. Hatua zinazofaa hutumika, ingawa hakuna mfumo wa mtandao unaoweza kuhakikishwa kuwa salama kabisa."]},{title:"Chaguo zako",paragraphs:["Unaweza kuomba kusahihisha mawasiliano yasiyo sahihi au kuuliza kuhusu faragha kupitia tahilcast@gmail.com. Baadhi ya rekodi lazima zihifadhiwe kwa usafirishaji, hesabu au sheria."]},{title:"Huduma za tovuti na mabadiliko",paragraphs:["Tovuti inaweza kutumia hifadhi muhimu za kiufundi na viungo vya ramani au mawasiliano vya wahusika wengine. Sera hii inaweza kusasishwa huduma au masharti yanapobadilika."]}
      ]
    },
    {
      slug:"terms-and-conditions",eyebrow:"Masharti ya tovuti",title:"Vigezo na Masharti",description:"Masharti ya jumla ya tovuti na maombi. Masharti ya mzigo maalumu huthibitishwa kwa maandishi.",image:"/images/terms.webp",alt:"Nyaraka za mizigo zikiandaliwa kabla ya usafiri",sections:[
        {title:"Taarifa za tovuti",paragraphs:["Tovuti hutoa maelezo ya jumla. Sio ahadi ya bei, ratiba au kukubali mzigo. Mpango unathibitishwa baada ya huduma, maelezo, gharama na masharti kukubaliwa kupitia mawasiliano rasmi ya TCAST."]},{title:"Wajibu wa mteja",paragraphs:["Mteja lazima atoe maelezo, idadi, thamani, vipimo, mawasiliano na nyaraka sahihi. Mtumaji lazima ataje bidhaa hatari, zilizodhibitiwa au dhaifu na awe na mamlaka ya kuzituma."]},{title:"Makadirio na mabadiliko",paragraphs:["Makadirio yanaweza kubadilika baada ya vipimo, ukaguzi, njia, forodha au maelekezo kubadilika. Uhalali, fedha, vilivyojumuishwa na malipo huandikwa kwenye makadirio."]},{title:"Wabebaji, forodha na muda",paragraphs:["Usafiri unaweza kuhusisha wabebaji na mamlaka huru. Ratiba na kuachiliwa vinaweza kuathiriwa na matukio ya nje. TCAST huratibu na kuwasiliana bila kutoa ahadi zisizo na msingi."]},{title:"Bidhaa zilizozuiliwa",paragraphs:["TCAST inaweza kukataa mzigo uliopigwa marufuku, usio salama, ulioelezwa vibaya, uliofungwa vibaya au usio na vibali. Uliza kabla ya kutuma bidhaa yenye shaka."]},{title:"Madai na masharti maalumu",paragraphs:["Masharti ya ufungashaji na madai hutegemea huduma na mbebaji. Hifadhi risiti, orodha na picha na toa taarifa mapema. Masharti ya maandishi ya mzigo yana kipaumbele."]},{title:"Mawasiliano",paragraphs:["Maswali yanaweza kutumwa tahilcast@gmail.com au kujadiliwa na ofisi kabla ya kukabidhi mzigo."]}
      ]
    }
  ]
};

export function getContentPage(locale: Locale, slug: string) {
  return pages[locale].find((page) => page.slug === slug);
}

export const routeMeta: Record<string, Record<Locale, { title: string; description: string; image: string }>> = {
  "": { en:{title:"Cargo from Dubai to Tanzania",description:"Air freight, sea freight, clearing, consolidation and door-to-door cargo support between Dubai and Tanzania.",image:"/images/home.webp"}, sw:{title:"Mizigo kutoka Dubai hadi Tanzania",description:"Huduma za anga, bahari, forodha, kuunganisha na mlango hadi mlango kati ya Dubai na Tanzania.",image:"/images/home.webp"} },
  about:{en:{title:"About TCAST Cargo",description:"Meet TCAST Cargo & Clearing Ltd and learn how our Dubai and Dar es Salaam offices support individuals and businesses.",image:"/images/about.webp"},sw:{title:"Kuhusu TCAST Cargo",description:"Fahamu TCAST Cargo & Clearing Ltd na namna ofisi za Dubai na Dar es Salaam zinavyosaidia watu na biashara.",image:"/images/about.webp"}},
  services:{en:{title:"Cargo & Logistics Services",description:"Compare air freight, sea freight, door-to-door cargo, customs clearing, consolidation, commercial cargo and personal parcel services.",image:"/images/services.webp"},sw:{title:"Huduma za Mizigo na Usafirishaji",description:"Linganisha huduma za anga, bahari, mlango hadi mlango, forodha, kuunganisha mizigo, biashara na vifurushi.",image:"/images/services.webp"}},
  tracking:{en:{title:"Shipment Tracking",description:"Enter your TCAST Cargo tracking number to request the latest available shipment status.",image:"/images/tracking.webp"},sw:{title:"Ufuatiliaji wa Mzigo",description:"Weka namba ya ufuatiliaji ya TCAST Cargo kupata hali ya mwisho inayopatikana.",image:"/images/tracking.webp"}},
  "request-quote":{en:{title:"Request a Cargo Quote",description:"Send cargo details securely for a TCAST Cargo air, sea, consolidation or door-to-door estimate.",image:"/images/request-quote.webp"},sw:{title:"Omba Makadirio ya Mzigo",description:"Tuma taarifa za mzigo kwa makadirio ya anga, bahari, kuunganisha au mlango hadi mlango.",image:"/images/request-quote.webp"}},
  "how-it-works":{en:{title:"How Cargo Shipping Works",description:"Follow the TCAST Cargo process from estimate and receiving to shipping, customs and handover.",image:"/images/how-it-works.webp"},sw:{title:"Jinsi Usafirishaji Unavyofanya Kazi",description:"Fuata hatua za TCAST kutoka makadirio na upokeaji hadi usafiri, forodha na makabidhiano.",image:"/images/how-it-works.webp"}},
  faq:{en:{title:"Cargo Shipping FAQs",description:"Answers about air and sea freight, customs, packaging, tracking, quotes, commercial cargo and personal parcels.",image:"/images/faq.webp"},sw:{title:"Maswali ya Usafirishaji wa Mizigo",description:"Majibu kuhusu anga, bahari, forodha, ufungashaji, ufuatiliaji, makadirio, biashara na vifurushi.",image:"/images/faq.webp"}},
  gallery:{en:{title:"Cargo & Logistics Gallery",description:"Illustrative licensed photography covering freight handling, containers, packing, warehousing and delivery.",image:"/images/gallery.webp"},sw:{title:"Picha za Mizigo na Usafirishaji",description:"Picha za mfano zilizo na leseni kuhusu ushughulikiaji, makontena, ufungashaji, maghala na uwasilishaji.",image:"/images/gallery.webp"}},
  contact:{en:{title:"Contact TCAST Cargo",description:"Contact TCAST Cargo offices in Dubai and Dar es Salaam by phone, WhatsApp, email or enquiry form.",image:"/images/contact.webp"},sw:{title:"Wasiliana na TCAST Cargo",description:"Wasiliana na ofisi za TCAST Cargo Dubai na Dar es Salaam kwa simu, WhatsApp, barua pepe au fomu.",image:"/images/contact.webp"}},
  "privacy-policy":{en:{title:"Privacy Policy",description:"How TCAST Cargo handles website, enquiry and shipment-related personal information.",image:"/images/privacy.webp"},sw:{title:"Sera ya Faragha",description:"Namna TCAST Cargo inavyoshughulikia taarifa za tovuti, maombi na mizigo.",image:"/images/privacy.webp"}},
  "terms-and-conditions":{en:{title:"Terms and Conditions",description:"General website and cargo enquiry terms for TCAST Cargo & Clearing Ltd.",image:"/images/terms.webp"},sw:{title:"Vigezo na Masharti",description:"Masharti ya jumla ya tovuti na maombi ya TCAST Cargo & Clearing Ltd.",image:"/images/terms.webp"}}
};
