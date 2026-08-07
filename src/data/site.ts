import type { Locale } from "@/i18n/config";

export type FaqGroup = { group: string; items: { q: string; a: string }[] };

export const homeCopy = {
  en: {
    eyebrow: "Dubai • Dar es Salaam",
    title: "Reliable Cargo Solutions Between Dubai and Tanzania",
    intro: "From air and sea freight to customs clearing and door-to-door delivery, TCAST Cargo provides dependable logistics support for individuals and businesses.",
    routeLabel: "UAE → Tanzania logistics corridor",
    servicesTitle: "One cargo partner, multiple ways to move",
    servicesIntro: "Choose a service around the cargo you have—not a generic package. We will help confirm the practical route after reviewing the details.",
    corridorTitle: "Built around Dubai-to-Tanzania cargo needs",
    corridorText: ["Buying stock from UAE suppliers? Sending household goods home? Coordinating spare parts for a business? TCAST provides a receiving and communication link in Dubai and destination support in Tanzania.", "Cargo can be received, identified, measured and consolidated before dispatch. The right plan depends on the item, size, urgency, documentation and destination requirements."],
    whyTitle: "Why customers choose TCAST Cargo",
    why: ["Office presence in Dubai and Tanzania", "Air and sea freight options", "Cargo consolidation support", "Clear communication at key stages", "Shipment and document guidance", "Customs clearing assistance", "Solutions for individuals and businesses"],
    processTitle: "How your cargo moves",
    process: ["Contact TCAST or request a quote", "Share complete cargo details", "Deliver cargo or arrange collection", "Inspection, measurement and consolidation", "Shipping and customs processing", "Collection or final delivery"],
    cargoTitle: "Cargo we can assess",
    cargo: ["Household goods", "Clothing and textiles", "Electronics", "Auto spare parts", "Furniture", "Business stock", "Machinery and equipment", "Personal parcels"],
    officesTitle: "Support at both ends of the route",
    faqTitle: "Questions before you ship",
    finalTitle: "Ready to Ship with TCAST Cargo?",
    finalText: "Tell us what you need to move. Our team will review the cargo and explain the available next step.",
  },
  sw: {
    eyebrow: "Dubai • Dar es Salaam",
    title: "Suluhisho za Mizigo Zinazoaminika Kati ya Dubai na Tanzania",
    intro: "Kuanzia mizigo ya anga na bahari hadi forodha na uwasilishaji wa mlango hadi mlango, TCAST Cargo hutoa msaada wa usafirishaji kwa watu na biashara.",
    routeLabel: "Njia ya usafirishaji UAE → Tanzania",
    servicesTitle: "Mshirika mmoja, njia mbalimbali za kusafirisha",
    servicesIntro: "Chagua huduma kulingana na mzigo wako. Tutasaidia kuthibitisha njia inayofaa baada ya kukagua maelezo.",
    corridorTitle: "Imejengwa kwa mahitaji ya mizigo Dubai–Tanzania",
    corridorText: ["Unanunua bidhaa kwa wasambazaji wa UAE? Unatuma vitu vya nyumbani? Unaratibu vipuri vya biashara? TCAST hutoa kiungo cha upokeaji Dubai na msaada wa mwisho Tanzania.", "Mzigo unaweza kupokelewa, kutambulishwa, kupimwa na kuunganishwa kabla ya kutumwa. Mpango sahihi hutegemea bidhaa, ukubwa, uharaka, nyaraka na masharti ya mwisho."],
    whyTitle: "Kwa nini wateja huchagua TCAST Cargo",
    why: ["Ofisi Dubai na Tanzania", "Chaguo la anga na bahari", "Msaada wa kuunganisha mizigo", "Mawasiliano wazi katika hatua muhimu", "Mwongozo wa mzigo na nyaraka", "Msaada wa forodha", "Suluhisho kwa watu na biashara"],
    processTitle: "Jinsi mzigo wako unavyosafiri",
    process: ["Wasiliana na TCAST au omba makadirio", "Tuma maelezo kamili ya mzigo", "Leta mzigo au panga ukusanyaji", "Ukaguzi, vipimo na uunganishaji", "Usafirishaji na forodha", "Kuchukua au kupelekewa"],
    cargoTitle: "Mizigo tunayoweza kutathmini",
    cargo: ["Vitu vya nyumbani", "Nguo na vitambaa", "Elektroniki", "Vipuri vya magari", "Samani", "Bidhaa za biashara", "Mashine na vifaa", "Vifurushi binafsi"],
    officesTitle: "Msaada pande zote mbili za safari",
    faqTitle: "Maswali kabla ya kutuma",
    finalTitle: "Uko Tayari Kusafirisha na TCAST Cargo?",
    finalText: "Tueleze unachotaka kusafirisha. Timu yetu itakagua mzigo na kueleza hatua inayopatikana.",
  },
} as const;

export const faqGroups: Record<Locale, FaqGroup[]> = {
  en: [
    { group: "General cargo", items: [
      { q: "What information should I send for an estimate?", a: "Provide origin, destination, item descriptions, package count, estimated weight and dimensions, value and photos when useful. Mention fragile, powered, liquid or regulated items." },
      { q: "Does TCAST accept every kind of cargo?", a: "No. Acceptance depends on safety, carrier rules, law, documentation and available handling. Ask before delivering uncertain goods." },
    ] },
    { group: "Air freight", items: [
      { q: "When should I consider air freight?", a: "Air freight is commonly considered for smaller, urgent or time-sensitive cargo, subject to airline acceptance and budget." },
      { q: "Can batteries travel by air?", a: "Some batteries are restricted or require specific packaging and documentation. Send exact battery and device details before delivery." },
    ] },
    { group: "Sea freight", items: [
      { q: "What cargo is suited to sea freight?", a: "Larger loads, furniture, machinery, stock and non-urgent consignments may be practical by sea after volume and handling are reviewed." },
      { q: "Can my cargo be consolidated?", a: "Eligible cargo can often be grouped with other consignments or supplier deliveries. Compatibility, timing and identification must be confirmed." },
    ] },
    { group: "Customs clearing", items: [
      { q: "Which customs documents are commonly needed?", a: "A packing list, invoice, transport reference and consignee details are common. Product permits, tax details or certificates may also be required." },
      { q: "Can duties be confirmed before shipping?", a: "TCAST can help identify likely requirements, but the final assessment belongs to the authorities and depends on current rules and declared goods." },
    ] },
    { group: "Packaging", items: [
      { q: "Who is responsible for packaging?", a: "The sender must ensure cargo is suitably packed unless a specific packing service is agreed. TCAST can advise on obvious preparation concerns." },
      { q: "Should every carton be labelled?", a: "Yes. Use the customer reference and package numbering provided, and ensure the packing list matches." },
    ] },
    { group: "Cargo restrictions", items: [
      { q: "How do I check if an item is restricted?", a: "Send the exact product name, use, composition and supporting documents to TCAST before purchase or delivery. Rules can vary by carrier and authority." },
      { q: "Can I send liquids, food or medicine?", a: "These categories may be restricted or require approvals. Do not deliver them until TCAST confirms the current requirements." },
    ] },
    { group: "Shipment tracking", items: [
      { q: "Where do I find my tracking number?", a: "Use the reference supplied by TCAST. If it is missing, contact the office with sender, receiver and cargo details." },
      { q: "Why might tracking show no result?", a: "The number may be mistyped, the system connection may be unavailable or the shipment may not yet have a digital update. Contact support for assistance." },
    ] },
    { group: "Quotes and payment", items: [
      { q: "Why is the first estimate not always final?", a: "Actual weight, dimensions, packing, route, customs or changed cargo details can affect charges. Final scope is confirmed in writing." },
      { q: "When is payment required?", a: "Payment stages and accepted methods are stated in the specific quotation or shipment instruction. Confirm before handing over cargo." },
    ] },
    { group: "Dubai cargo receiving", items: [
      { q: "Can my supplier deliver directly to the Dubai office?", a: "Only after TCAST confirms the receiving instruction and customer reference. Unannounced or unidentified cargo may not be accepted." },
      { q: "What should the supplier put on the package?", a: "Use the exact customer or shipment reference, recipient name and any delivery instruction supplied by TCAST." },
    ] },
    { group: "Tanzania cargo collection", items: [
      { q: "What is needed to collect cargo?", a: "The required identification, authorization, payment status and release information are confirmed for the shipment before collection." },
      { q: "Can someone collect on my behalf?", a: "An authorized person may be possible with prior confirmation and the required identification. Do not send someone before TCAST approves the arrangement." },
    ] },
    { group: "Commercial shipments", items: [
      { q: "Can TCAST work with several suppliers?", a: "Yes. Use the receiving and package-reference process so deliveries can be identified and consolidated correctly." },
      { q: "Should I confirm import rules before buying?", a: "Yes. Product standards, permits and customs treatment should be checked before committing to a purchase or shipment." },
    ] },
    { group: "Personal parcels", items: [
      { q: "Do I need to list used personal items?", a: "Yes. Every item should be described with quantity, condition and reasonable value information." },
      { q: "Can fragile items be sent?", a: "Some can, with appropriate packaging and prior declaration. Ask about handling and carrier limitations before delivery." },
    ] },
  ],
  sw: [
    {group:"Mizigo kwa ujumla",items:[{q:"Nitumie taarifa gani kwa makadirio?",a:"Taja ulikotoka, unakoenda, bidhaa, idadi, uzito, vipimo, thamani na picha inaposaidia. Taja vitu dhaifu, vya betri, vimiminika au vilivyodhibitiwa."},{q:"TCAST inakubali kila aina ya mzigo?",a:"Hapana. Inategemea usalama, sheria za mbebaji, nyaraka na uwezo wa ushughulikiaji."}]},
    {group:"Usafirishaji wa anga",items:[{q:"Ni lini nitumie ndege?",a:"Ndege hufaa kwa mizigo midogo, ya haraka au yenye muda maalumu, kulingana na kukubalika na bajeti."},{q:"Betri zinaweza kwenda kwa ndege?",a:"Baadhi zina masharti ya ufungashaji na nyaraka. Tuma maelezo kamili kabla ya kuleta."}]},
    {group:"Usafirishaji wa bahari",items:[{q:"Ni mizigo gani inafaa baharini?",a:"Mizigo mikubwa, samani, mashine na bidhaa zisizo za dharura zinaweza kufaa baada ya ujazo kukaguliwa."},{q:"Mzigo wangu unaweza kuunganishwa?",a:"Mizigo inayofaa inaweza kuunganishwa ikiwa muda, utambulisho na ulinganifu vimethibitishwa."}]},
    {group:"Forodha",items:[{q:"Nyaraka gani huhitajika?",a:"Orodha, ankara, rejea ya usafiri na taarifa za mpokeaji ni za kawaida. Vibali au vyeti vinaweza kuhitajika."},{q:"Ushuru unaweza kuthibitishwa mapema?",a:"TCAST inaweza kueleza masharti yanayowezekana, lakini tathmini ya mwisho ni ya mamlaka."}]},
    {group:"Ufungashaji",items:[{q:"Nani anawajibika kufunga mzigo?",a:"Mtumaji anawajibika isipokuwa huduma maalumu imekubaliwa."},{q:"Kila katoni iwe na lebo?",a:"Ndiyo. Tumia rejea na namba za vifurushi zinazolingana na orodha."}]},
    {group:"Vizuizi vya mizigo",items:[{q:"Nitajuaje bidhaa imezuiliwa?",a:"Tuma jina, matumizi, muundo na nyaraka kwa TCAST kabla ya kununua au kuleta."},{q:"Naweza kutuma vimiminika, chakula au dawa?",a:"Vinaweza kuhitaji vibali au kukatazwa. Usilete kabla ya uthibitisho."}]},
    {group:"Ufuatiliaji",items:[{q:"Namba ya ufuatiliaji iko wapi?",a:"Tumia rejea uliyopewa na TCAST. Ikiwa haipo, wasiliana na ofisi."},{q:"Kwa nini hakuna matokeo?",a:"Namba inaweza kuwa na kosa, mfumo kutopatikana au hakuna sasisho jipya. Wasiliana na msaada."}]},
    {group:"Makadirio na malipo",items:[{q:"Kwa nini makadirio yanaweza kubadilika?",a:"Uzito halisi, vipimo, ufungashaji, njia au forodha vinaweza kuathiri gharama."},{q:"Malipo yanahitajika lini?",a:"Hatua na njia za malipo huandikwa kwenye makadirio ya mzigo husika."}]},
    {group:"Kupokea Dubai",items:[{q:"Msambazaji anaweza kuleta moja kwa moja?",a:"Baada ya TCAST kuthibitisha maelekezo na rejea. Mizigo isiyotangazwa inaweza kukataliwa."},{q:"Aandike nini kwenye kifurushi?",a:"Andika rejea kamili, jina la mpokeaji na maelekezo uliyopewa."}]},
    {group:"Kuchukua Tanzania",items:[{q:"Nahitaji nini kuchukua mzigo?",a:"Kitambulisho, ruhusa, hali ya malipo na taarifa ya kuachiliwa huthibitishwa kabla."},{q:"Mtu mwingine anaweza kuchukua?",a:"Inawezekana kwa idhini ya mapema na kitambulisho kinachohitajika."}]},
    {group:"Mizigo ya biashara",items:[{q:"TCAST inaweza kushughulikia wasambazaji wengi?",a:"Ndiyo, kwa kutumia mchakato wa rejea ili kutambua na kuunganisha vizuri."},{q:"Nikague sheria kabla ya kununua?",a:"Ndiyo. Viwango, vibali na forodha vikaguliwe kabla ya manunuzi."}]},
    {group:"Vifurushi binafsi",items:[{q:"Niorodheshe vitu vilivyotumika?",a:"Ndiyo. Kila kitu kitajwe kwa idadi, hali na thamani ya kawaida."},{q:"Vitu dhaifu vinaweza kutumwa?",a:"Baadhi vinaweza kwa ufungashaji sahihi na taarifa ya mapema."}]}
  ]
};

export const galleryItems = [
  { image: "/images/gallery.webp", en: "Container handling at an international port", sw: "Ushughulikiaji wa makontena bandarini" },
  { image: "/images/air-freight.webp", en: "Air cargo transport", sw: "Usafirishaji wa mizigo kwa ndege" },
  { image: "/images/sea-freight.webp", en: "Sea freight operations", sw: "Shughuli za usafirishaji baharini" },
  { image: "/images/warehousing.webp", en: "Warehouse receiving and storage", sw: "Upokeaji na uhifadhi ghalani" },
  { image: "/images/personal-effects.webp", en: "Parcels prepared for dispatch", sw: "Vifurushi vikiandaliwa kutumwa" },
  { image: "/images/commercial-cargo.webp", en: "Commercial cargo preparation", sw: "Maandalizi ya mizigo ya biashara" },
  { image: "/images/door-to-door.webp", en: "Final-mile delivery vehicle", sw: "Gari la uwasilishaji wa mwisho" },
  { image: "/images/how-it-works.webp", en: "Cargo inspection and handover", sw: "Ukaguzi na makabidhiano ya mzigo" },
] as const;
