import type { Locale } from "@/i18n/config";

export type Service = {
  slug: string;
  title: string;
  short: string;
  overview: string[];
  image: string;
  alt: string;
  icon: "plane" | "ship" | "truck" | "file" | "warehouse" | "briefcase" | "package";
  suitable: string[];
  cargo: string[];
  benefits: string[];
  process: string[];
  documents: string[];
  tips: string[];
  faqs: { q: string; a: string }[];
  related: string[];
};

const en: Service[] = [
  {
    slug: "air-freight",
    title: "Air Freight",
    short: "Responsive air cargo support for urgent, smaller, time-sensitive and higher-value consignments.",
    overview: [
      "TCAST Cargo coordinates air freight between Dubai and Tanzania for shipments where timing, handling and clear communication matter. We help customers prepare cargo information, choose an appropriate routing option and understand the documents required before dispatch.",
      "Air freight suitability depends on weight, dimensions, cargo type, airline acceptance and current regulatory requirements. Our team reviews these details before confirming the available arrangement; no transit time is promised until the shipment has been assessed.",
    ],
    image: "/images/air-freight.webp",
    alt: "Cargo aircraft being prepared for an air freight operation",
    icon: "plane",
    suitable: ["Urgent business stock", "Smaller consolidated consignments", "Time-sensitive documents and parcels", "Higher-value goods requiring coordinated handling"],
    cargo: ["Electronics", "Clothing and textiles", "Auto spare parts", "Business samples", "Personal parcels", "Approved small equipment"],
    benefits: ["Dubai and Tanzania office coordination", "Route and document guidance", "Airline-ready cargo preparation support", "Shipment progress communication"],
    process: ["Share cargo details, origin and destination", "TCAST reviews dimensions, weight and acceptance requirements", "Cargo is received or collection is arranged where available", "Documentation and airline dispatch are coordinated", "Arrival, customs processing and collection or delivery are arranged"],
    documents: ["Shipper and receiver contact details", "Accurate packing list", "Commercial invoice where applicable", "Identification, permits or product documents when required"],
    tips: ["Use strong packaging suited to repeated handling", "Label every package clearly", "Declare batteries, liquids and fragile items before delivery", "Do not seal restricted goods into a shipment without approval"],
    faqs: [
      { q: "Is air freight suitable for every type of cargo?", a: "No. Acceptance depends on the item, packaging, dimensions, airline rules and customs requirements. Send the cargo details to TCAST for review first." },
      { q: "Can you confirm a delivery date before inspection?", a: "A firm date cannot be confirmed before the cargo and route are assessed. The team will share the available schedule and any conditions after review." },
      { q: "Can personal parcels travel by air?", a: "Many approved personal parcels can, provided their contents are fully declared and accepted for air transport." },
    ],
    related: ["door-to-door", "customs-clearing", "personal-effects"],
  },
  {
    slug: "sea-freight",
    title: "Sea Freight",
    short: "Practical ocean freight coordination for larger loads, commercial stock, furniture and machinery.",
    overview: [
      "Sea freight is often appropriate for heavier or bulkier cargo where planning and efficient use of space are more important than urgent arrival. TCAST Cargo supports customers moving goods from the UAE to Tanzania through consolidated or other suitable sea-freight arrangements.",
      "We coordinate cargo receiving, measurement, packing guidance, documentation and dispatch preparation. Sailing schedules, port conditions and customs processes vary, so timing and charges are confirmed only after the shipment details are reviewed.",
    ],
    image: "/images/sea-freight.webp",
    alt: "Container ship carrying sea freight near a commercial port",
    icon: "ship",
    suitable: ["Traders and wholesalers", "Furniture and household moves", "Machinery and equipment", "Larger non-urgent consignments"],
    cargo: ["Commercial stock", "Furniture", "Auto parts", "Machinery", "Household goods", "Approved building and shop supplies"],
    benefits: ["Space-efficient consolidation options", "Support for bulky cargo", "Receiving coordination in Dubai", "Customs and destination support in Tanzania"],
    process: ["Provide an item list and estimated dimensions", "Cargo is reviewed for sea-freight suitability", "Goods are received, measured and grouped as agreed", "Packing and shipping documents are prepared", "Cargo is dispatched and coordinated through arrival and release"],
    documents: ["Detailed packing list", "Commercial invoice for business goods", "Consignee identification and contacts", "Product permits or ownership documents where applicable"],
    tips: ["Protect goods from movement and moisture", "Use durable crates or cartons for fragile items", "Mark package counts consistently on all documents", "Tell TCAST about machinery, liquids or regulated products in advance"],
    faqs: [
      { q: "Is sea freight always cheaper than air freight?", a: "Not in every case. The total depends on volume, weight, handling, route and destination charges. TCAST compares the practical options after receiving cargo details." },
      { q: "Can goods from several suppliers be combined?", a: "Yes, cargo consolidation may be available when suppliers deliver to the agreed receiving point and every item is properly identified." },
      { q: "Are transit times fixed?", a: "No. Schedules and port processing can change. Current guidance is provided when a shipment is planned." },
    ],
    related: ["warehousing-consolidation", "commercial-cargo", "customs-clearing"],
  },
  {
    slug: "door-to-door",
    title: "Door-to-Door Cargo",
    short: "Coordinated collection, international transport, customs support and final delivery options.",
    overview: [
      "Door-to-door cargo brings several logistics stages into one coordinated plan. Depending on the addresses, cargo and service availability, TCAST may arrange collection, receiving, international transport, customs coordination and delivery to the agreed destination.",
      "The service scope is confirmed in writing before cargo moves. Some destinations, building access conditions or regulated items may require a collection point, extra documentation or a different final-mile arrangement.",
    ],
    image: "/images/door-to-door.webp",
    alt: "Delivery vehicle supporting a coordinated door-to-door cargo service",
    icon: "truck",
    suitable: ["Customers who need collection support", "Personal effects and parcels", "SMEs shipping stock", "Recipients who prefer coordinated final delivery"],
    cargo: ["Packed household goods", "Clothing", "Electronics", "Business stock", "Gifts and parcels", "Approved equipment"],
    benefits: ["One point of coordination", "Collection and final-mile options", "Air or sea freight planning", "Clear handover requirements"],
    process: ["Confirm collection and delivery addresses", "Share a complete cargo description", "TCAST checks service coverage and prepares an estimate", "Cargo is collected or delivered to the receiving office", "Transport, customs and final handover are coordinated"],
    documents: ["Full collection and delivery addresses", "Sender and recipient contacts", "Packing list and values", "Access instructions and required permits"],
    tips: ["Measure packages before requesting an estimate", "Ensure someone is available for arranged collection", "Pack items for international handling, not only local delivery", "Keep prohibited items out of every package"],
    faqs: [
      { q: "Does door-to-door include every customs charge?", a: "Only the items stated in the written quotation are included. Duties, taxes or inspections may depend on the cargo and customs assessment." },
      { q: "Can TCAST collect anywhere in the UAE or Tanzania?", a: "Coverage depends on the exact address and current operational availability. Share both addresses so the team can confirm." },
      { q: "What if my building has restricted access?", a: "Tell the team before booking. Loading access, lifts, parking and delivery windows can affect the arrangement." },
    ],
    related: ["air-freight", "sea-freight", "personal-effects"],
  },
  {
    slug: "customs-clearing",
    title: "Customs Clearing",
    short: "Documentation and coordination support for cargo declarations, assessment and release procedures.",
    overview: [
      "Customs clearance requires accurate cargo descriptions, values, ownership details and supporting documents. TCAST Cargo helps customers organize shipment information and coordinates with the relevant parties during declaration, assessment and release.",
      "Requirements differ by product and can change. TCAST does not replace a government authority and cannot guarantee approval, duty levels or release timing, but the team can help identify missing information and keep the process moving transparently.",
    ],
    image: "/images/customs-clearing.webp",
    alt: "Logistics professional reviewing cargo paperwork for customs processing",
    icon: "file",
    suitable: ["Importers and exporters", "Commercial cargo owners", "Customers unfamiliar with documentation", "Personal cargo requiring formal clearance"],
    cargo: ["General approved imports", "Commercial goods", "Personal effects", "Machinery and spare parts", "Electronics", "Documented household items"],
    benefits: ["Document checklist support", "Declaration coordination", "Clear requests for missing information", "Connection between shipment and destination handling"],
    process: ["Submit shipment and consignee documents", "Cargo descriptions and values are reviewed", "Declaration information is prepared and lodged through the appropriate channel", "Authorities may assess, inspect or request clarification", "Release and onward collection or delivery are coordinated"],
    documents: ["Transport document or shipment reference", "Packing list and invoice", "Importer or consignee identification", "Permits, tax details or product certificates when required"],
    tips: ["Use precise product descriptions", "Ensure invoices reflect the actual goods", "Keep original documents available", "Ask about regulated goods before purchase or dispatch"],
    faqs: [
      { q: "Can TCAST guarantee customs release?", a: "No. Release decisions belong to the relevant authorities. TCAST provides documentation and coordination support." },
      { q: "Who decides duties and taxes?", a: "Customs and other relevant authorities assess applicable charges using the declaration, classification, value and current rules." },
      { q: "What causes common delays?", a: "Incomplete descriptions, missing permits, inconsistent values and inspection requests can delay processing." },
    ],
    related: ["commercial-cargo", "sea-freight", "air-freight"],
  },
  {
    slug: "warehousing-consolidation",
    title: "Warehousing & Cargo Consolidation",
    short: "Organized receiving, temporary storage, grouping, measurement and dispatch preparation in Dubai.",
    overview: [
      "Customers buying from several suppliers need a controlled receiving point and a clear way to identify each delivery. TCAST Cargo can coordinate receipt, temporary holding, measurement and consolidation of approved goods before shipment.",
      "Every supplier delivery should carry the customer reference supplied by TCAST. Storage scope, free periods if any, packing work and dispatch timing are confirmed for each consignment rather than assumed.",
    ],
    image: "/images/warehousing.webp",
    alt: "Organized warehouse aisle used for cargo receiving and consolidation",
    icon: "warehouse",
    suitable: ["Customers buying from multiple UAE suppliers", "Online sellers and traders", "Consolidated air or sea cargo", "Shipments needing measurement and regrouping"],
    cargo: ["Supplier cartons", "Commercial stock", "Personal purchases", "Spare parts", "Furniture components", "Approved packaged equipment"],
    benefits: ["Single receiving coordination point", "Package identification", "Consolidation to reduce fragmented dispatches", "Measurement and dispatch preparation"],
    process: ["Receive a customer or shipment reference", "Suppliers deliver approved and labelled packages", "Items are checked against receiving information", "Cargo is measured, grouped and packed as agreed", "The consolidated consignment is prepared for dispatch"],
    documents: ["Supplier delivery details", "Customer reference on every package", "Item list and purchase invoices", "Special handling instructions"],
    tips: ["Tell suppliers to use the exact TCAST reference", "Send delivery notices before goods arrive", "Avoid unidentified loose packages", "Confirm storage and repacking charges before extended holding"],
    faqs: [
      { q: "Can several supplier orders be shipped together?", a: "Yes, when they are properly identified, accepted and suitable for the same shipment plan." },
      { q: "Is long-term storage included?", a: "Not automatically. Storage terms and availability must be confirmed for the specific cargo." },
      { q: "Will TCAST inspect product quality?", a: "Receiving checks do not replace a product-quality inspection unless a separate service is explicitly agreed." },
    ],
    related: ["sea-freight", "air-freight", "commercial-cargo"],
  },
  {
    slug: "commercial-cargo",
    title: "Commercial Cargo",
    short: "Planned logistics support for shops, traders, SMEs, importers, wholesalers and corporate consignments.",
    overview: [
      "Commercial shipments affect stock availability, customer commitments and cash flow. TCAST Cargo works with businesses to document goods clearly, select an appropriate freight method and coordinate the handovers between suppliers, carriers, customs and recipients.",
      "The service can support one-off imports or recurring consignments, subject to cargo acceptance and agreed terms. We do not publish fixed rates because commercial cargo varies widely by product, volume, packing and regulatory needs.",
    ],
    image: "/images/commercial-cargo.webp",
    alt: "Commercial goods and containers prepared for international transport",
    icon: "briefcase",
    suitable: ["Retailers and wholesalers", "SMEs and corporate teams", "Importers and exporters", "Online sellers and sourcing businesses"],
    cargo: ["Retail stock", "Textiles", "Auto spare parts", "Electronics", "Machinery", "Approved shop and office equipment"],
    benefits: ["Air and sea freight options", "Supplier receiving coordination", "Commercial document guidance", "Consolidation and customs support"],
    process: ["Share the product list and business requirements", "Select a suitable freight and handling plan", "Coordinate supplier deliveries and cargo references", "Prepare consolidated cargo and commercial documents", "Ship, clear and hand over to the business recipient"],
    documents: ["Commercial invoice", "Detailed packing list", "Business and consignee details", "Product permits, standards documents or origin information where required"],
    tips: ["Check import requirements before purchasing stock", "Keep product descriptions consistent across documents", "Build customs and handling costs into procurement decisions", "Avoid mixing undocumented personal items into business cargo"],
    faqs: [
      { q: "Can TCAST support repeat business shipments?", a: "Yes. The team can discuss a repeatable coordination process after reviewing products, suppliers and shipping patterns." },
      { q: "Do all products need permits?", a: "No, but some categories are controlled or require standards documentation. Confirm before dispatch." },
      { q: "Can commercial cargo be consolidated?", a: "Often yes, depending on compatibility, identification, timing and transport requirements." },
    ],
    related: ["warehousing-consolidation", "customs-clearing", "sea-freight"],
  },
  {
    slug: "personal-effects",
    title: "Personal Effects & Parcels",
    short: "Careful support for household goods, gifts, clothing, electronics and personal packages.",
    overview: [
      "Sending personal belongings internationally can feel complicated, especially when packages contain different item types. TCAST Cargo helps individuals prepare a clear inventory, choose air or sea transport and understand packaging and customs information.",
      "All contents must be declared. Used status, quantity, value and intended use may affect customs treatment. Fragile, powered, liquid or regulated items must be discussed before they are delivered to TCAST.",
    ],
    image: "/images/personal-effects.webp",
    alt: "Personal parcels and household boxes prepared for international cargo",
    icon: "package",
    suitable: ["Individuals and families", "Gift and parcel senders", "People moving household items", "Customers purchasing personal goods in Dubai"],
    cargo: ["Clothing", "Household items", "Gifts", "Approved electronics", "Books", "Personal parcels"],
    benefits: ["Plain-language preparation guidance", "Air or sea options", "Consolidation for multiple packages", "Collection and delivery options where available"],
    process: ["List every item and package", "Discuss fragile or regulated contents", "Choose the suitable freight arrangement", "Deliver cargo or arrange an available collection", "TCAST coordinates shipping, customs and handover"],
    documents: ["Sender and recipient identification", "Detailed personal-effects inventory", "Estimated or purchase values", "Receipts, ownership or permit documents when requested"],
    tips: ["Do not use vague labels such as miscellaneous goods", "Wrap fragile items individually", "Back up data before shipping electronics", "Keep valuables and irreplaceable documents with you unless specifically accepted"],
    faqs: [
      { q: "Can I send gifts to Tanzania?", a: "Many gifts can be shipped, but contents, values and restrictions must be declared and reviewed first." },
      { q: "Can I mix clothing and electronics in one shipment?", a: "Possibly, with appropriate packing and a complete inventory. Batteries and certain electronics need advance confirmation." },
      { q: "Are used household items duty-free?", a: "Do not assume so. Customs treatment depends on current rules and the circumstances of the shipment." },
    ],
    related: ["door-to-door", "air-freight", "sea-freight"],
  },
];

const sw: Service[] = [
  {
    slug: "air-freight", title: "Usafirishaji wa Anga", icon: "plane", image: "/images/air-freight.webp", alt: "Ndege ya mizigo ikiandaliwa kwa usafirishaji wa anga",
    short: "Uratibu wa mizigo ya dharura, midogo, yenye muda maalumu au thamani kubwa kwa njia ya anga.",
    overview: ["TCAST Cargo huratibu mizigo ya anga kati ya Dubai na Tanzania pale ambapo muda, utunzaji na mawasiliano ya wazi ni muhimu. Tunasaidia kuandaa taarifa za mzigo, kuchagua njia inayofaa na kuelewa nyaraka zinazohitajika kabla ya kusafirisha.", "Uwezekano wa kusafirisha kwa ndege hutegemea uzito, vipimo, aina ya mzigo, masharti ya shirika la ndege na kanuni husika. Muda wa usafiri huthibitishwa baada ya tathmini ya mzigo."],
    suitable: ["Bidhaa za biashara zinazohitajika haraka", "Mizigo midogo iliyounganishwa", "Nyaraka na vifurushi vya muda maalumu", "Bidhaa zenye thamani kubwa"], cargo: ["Elektroniki", "Nguo na vitambaa", "Vipuri vya magari", "Sampuli za biashara", "Vifurushi binafsi", "Vifaa vidogo vilivyoidhinishwa"],
    benefits: ["Uratibu wa ofisi za Dubai na Tanzania", "Mwongozo wa njia na nyaraka", "Msaada wa kuandaa mzigo kwa ndege", "Mawasiliano kuhusu hatua za mzigo"],
    process: ["Tuma maelezo ya mzigo, ulikotoka na unakoenda", "TCAST hukagua vipimo, uzito na masharti", "Mzigo hupokelewa au ukusanyaji hupangwa inapowezekana", "Nyaraka na safari ya ndege huratibiwa", "Kuwasili, forodha na makabidhiano huratibiwa"],
    documents: ["Mawasiliano ya mtumaji na mpokeaji", "Orodha sahihi ya vifurushi", "Ankara ya biashara inapohusika", "Kitambulisho, vibali au nyaraka za bidhaa inapohitajika"], tips: ["Tumia kifungashio imara", "Weka lebo wazi kila kifurushi", "Taja betri, vimiminika na vitu dhaifu mapema", "Usifungie bidhaa zilizodhibitiwa bila idhini"],
    faqs: [{q:"Je, kila aina ya mzigo inaweza kwenda kwa ndege?",a:"Hapana. Inategemea bidhaa, kifungashio, vipimo, sheria za ndege na forodha. Tuma maelezo kwa TCAST kwanza."},{q:"Mnaweza kuthibitisha tarehe ya kufika kabla ya ukaguzi?",a:"Tarehe ya uhakika haiwezi kutolewa kabla ya mzigo na njia kutathminiwa."},{q:"Vifurushi binafsi vinaweza kwenda kwa ndege?",a:"Vingi vinaweza ikiwa yaliyomo yametajwa kikamilifu na yamekubaliwa kwa usafiri wa anga."}], related: ["door-to-door","customs-clearing","personal-effects"]
  },
  {
    slug: "sea-freight", title: "Usafirishaji wa Baharini", icon: "ship", image: "/images/sea-freight.webp", alt: "Meli ya makontena ikisafirisha mizigo bandarini",
    short: "Uratibu wa mizigo mikubwa, bidhaa za biashara, samani na mashine kwa njia ya bahari.", overview: ["Usafiri wa baharini hufaa kwa mizigo mizito au mikubwa ambapo upangaji na matumizi bora ya nafasi ni muhimu kuliko uharaka. TCAST husaidia kusafirisha kutoka UAE hadi Tanzania kwa mzigo uliounganishwa au mpango mwingine unaofaa.","Tunaratibu upokeaji, vipimo, ufungashaji, nyaraka na maandalizi ya kutuma. Ratiba za meli, bandari na forodha hubadilika, hivyo muda na gharama huthibitishwa baada ya ukaguzi."],
    suitable:["Wafanyabiashara na wauzaji wa jumla","Samani na mizigo ya nyumbani","Mashine na vifaa","Mizigo mikubwa isiyo ya dharura"], cargo:["Bidhaa za biashara","Samani","Vipuri vya magari","Mashine","Vitu vya nyumbani","Vifaa vya duka vilivyoidhinishwa"], benefits:["Chaguo la kuunganisha mizigo","Msaada kwa mizigo mikubwa","Uratibu wa kupokea Dubai","Msaada wa forodha Tanzania"], process:["Toa orodha na vipimo vya makadirio","Kagua kufaa kwa usafiri wa bahari","Pokea, pima na unganisha mzigo","Andaa ufungashaji na nyaraka","Tuma na uratibu kuwasili na kuachiliwa"], documents:["Orodha ya vifurushi","Ankara ya biashara","Kitambulisho na mawasiliano ya mpokeaji","Vibali au nyaraka za umiliki inapohusika"], tips:["Linda bidhaa dhidi ya mtikisiko na unyevu","Tumia makasha imara kwa vitu dhaifu","Linganisha idadi ya vifurushi kwenye nyaraka","Taja mashine, vimiminika au bidhaa zilizodhibitiwa mapema"], faqs:[{q:"Bahari huwa nafuu kuliko ndege kila wakati?",a:"Si kila wakati. Gharama hutegemea ujazo, uzito, ushughulikiaji na njia."},{q:"Bidhaa za wasambazaji tofauti zinaweza kuunganishwa?",a:"Ndiyo, ikiwa zimewekewa utambulisho sahihi na zinakubalika."},{q:"Muda wa safari ni wa kudumu?",a:"Hapana. Ratiba na shughuli za bandari zinaweza kubadilika."}], related:["warehousing-consolidation","commercial-cargo","customs-clearing"]
  },
  {
    slug:"door-to-door",title:"Mzigo wa Mlango hadi Mlango",icon:"truck",image:"/images/door-to-door.webp",alt:"Gari la usafirishaji likisaidia huduma ya mlango hadi mlango",short:"Ukusanyaji, usafiri wa kimataifa, uratibu wa forodha na chaguo la kupeleka mwisho.", overview:["Huduma ya mlango hadi mlango huunganisha hatua kadhaa za usafirishaji katika mpango mmoja. Kulingana na anwani, aina ya mzigo na upatikanaji, TCAST inaweza kuratibu ukusanyaji, upokeaji, usafiri wa kimataifa, forodha na uwasilishaji.","Mipaka ya huduma huthibitishwa kwa maandishi kabla mzigo haujaondoka. Baadhi ya maeneo au bidhaa zilizodhibitiwa zinaweza kuhitaji mpango tofauti."], suitable:["Wanaohitaji msaada wa ukusanyaji","Vifurushi na mali binafsi","Biashara ndogo zinazosafirisha bidhaa","Wanaotaka uratibu wa uwasilishaji"],cargo:["Vitu vya nyumbani vilivyofungwa","Nguo","Elektroniki","Bidhaa za biashara","Zawadi na vifurushi","Vifaa vilivyoidhinishwa"],benefits:["Sehemu moja ya uratibu","Chaguo la ukusanyaji na uwasilishaji","Mpango wa anga au bahari","Masharti ya makabidhiano yaliyo wazi"],process:["Thibitisha anwani zote","Tuma maelezo kamili ya mzigo","TCAST hukagua eneo na kuandaa makadirio","Mzigo hukusanywa au kuletwa ofisini","Usafiri, forodha na makabidhiano huratibiwa"],documents:["Anwani kamili","Mawasiliano ya mtumaji na mpokeaji","Orodha na thamani ya bidhaa","Maelekezo ya kufikia na vibali"],tips:["Pima vifurushi kabla ya makadirio","Hakikisha mtu yupo wakati wa ukusanyaji","Funga kwa usafiri wa kimataifa","Ondoa bidhaa zilizopigwa marufuku"],faqs:[{q:"Huduma inajumuisha kila gharama ya forodha?",a:"Ni vipengele vilivyoandikwa kwenye makadirio pekee. Ushuru unaweza kutegemea tathmini ya forodha."},{q:"TCAST hukusanya popote UAE au Tanzania?",a:"Inategemea anwani na upatikanaji wa huduma. Tuma anwani zote kuthibitisha."},{q:"Jengo langu lina masharti ya kuingia; nifanye nini?",a:"Tujulishe kabla ya kuweka nafasi kwa sababu maegesho, lifti na muda vinaweza kuathiri mpango."}],related:["air-freight","sea-freight","personal-effects"]
  },
  {
    slug:"customs-clearing",title:"Uwakala wa Forodha",icon:"file",image:"/images/customs-clearing.webp",alt:"Mtaalamu wa usafirishaji akikagua nyaraka za forodha",short:"Msaada wa nyaraka na uratibu wa tamko, tathmini na kuachiliwa kwa mzigo.",overview:["Forodha inahitaji maelezo sahihi ya bidhaa, thamani, umiliki na nyaraka. TCAST husaidia kupanga taarifa na kuratibu wahusika wakati wa tamko, tathmini na kuachiliwa.","Masharti hutofautiana na yanaweza kubadilika. TCAST haiwezi kuahidi idhini, kiwango cha ushuru au muda wa kuachiliwa, lakini husaidia kubaini taarifa zinazokosekana."],suitable:["Waagizaji na wauzaji nje","Wamiliki wa mizigo ya biashara","Wanaohitaji mwongozo wa nyaraka","Mizigo binafsi inayohitaji taratibu rasmi"],cargo:["Bidhaa za jumla zilizoidhinishwa","Bidhaa za biashara","Mali binafsi","Mashine na vipuri","Elektroniki","Vitu vya nyumbani vyenye nyaraka"],benefits:["Orodha ya nyaraka","Uratibu wa tamko","Maombi wazi ya taarifa zinazokosekana","Muunganiko wa usafiri na ushughulikiaji"],process:["Wasilisha nyaraka za mzigo na mpokeaji","Kagua maelezo na thamani","Andaa na wasilisha taarifa za tamko","Mamlaka zinaweza kutathmini au kukagua","Ratibu kuachiliwa na makabidhiano"],documents:["Hati ya usafiri au rejea","Orodha na ankara","Kitambulisho cha mwagizaji/mpokeaji","Vibali au vyeti inapohitajika"],tips:["Tumia majina sahihi ya bidhaa","Hakikisha ankara zinaendana na bidhaa","Hifadhi nyaraka asili","Uliza kuhusu bidhaa zilizodhibitiwa kabla ya kununua"],faqs:[{q:"TCAST inaweza kuhakikisha mzigo unaachiliwa?",a:"Hapana. Maamuzi ni ya mamlaka; TCAST husaidia nyaraka na uratibu."},{q:"Nani huamua ushuru na kodi?",a:"Mamlaka husika hutathmini kwa kutumia tamko, aina, thamani na kanuni."},{q:"Nini husababisha ucheleweshaji?",a:"Maelezo pungufu, vibali vinavyokosekana, thamani zisizolingana au ukaguzi."}],related:["commercial-cargo","sea-freight","air-freight"]
  },
  {
    slug:"warehousing-consolidation",title:"Uhifadhi na Kuunganisha Mizigo",icon:"warehouse",image:"/images/warehousing.webp",alt:"Ghala lililopangwa kwa kupokea na kuunganisha mizigo",short:"Kupokea, kuhifadhi kwa muda, kuunganisha, kupima na kuandaa mizigo Dubai.",overview:["Wateja wanaonunua kwa wasambazaji kadhaa wanahitaji sehemu ya kupokea na utambulisho sahihi wa kila kifurushi. TCAST inaweza kuratibu upokeaji, uhifadhi wa muda, vipimo na uunganishaji kabla ya kutuma.","Kila kifurushi lazima kiwe na rejea ya mteja. Masharti ya uhifadhi, ufungashaji na muda wa kutuma huthibitishwa kwa kila mzigo."],suitable:["Wanaonunua kwa wasambazaji wengi UAE","Wauzaji mtandaoni na wafanyabiashara","Mizigo ya anga au bahari iliyounganishwa","Mizigo inayohitaji kupimwa na kupangwa upya"],cargo:["Katoni za wasambazaji","Bidhaa za biashara","Manunuzi binafsi","Vipuri","Sehemu za samani","Vifaa vilivyofungwa"],benefits:["Sehemu moja ya kupokea","Utambulisho wa vifurushi","Kupunguza utumaji uliotawanyika","Vipimo na maandalizi ya kutuma"],process:["Pata rejea ya mteja","Wasambazaji huleta vifurushi vilivyoandikwa","Linganisha bidhaa na taarifa","Pima, unganisha na funga","Andaa mzigo uliounganishwa kutumwa"],documents:["Taarifa za uwasilishaji wa msambazaji","Rejea kwenye kila kifurushi","Orodha na ankara","Maelekezo maalumu"],tips:["Mpe msambazaji rejea sahihi","Tuma taarifa kabla ya mzigo kufika","Epuka vifurushi visivyo na jina","Thibitisha gharama kabla ya uhifadhi mrefu"],faqs:[{q:"Oda za wasambazaji wengi zinaweza kutumwa pamoja?",a:"Ndiyo, ikiwa zimetambulishwa na zinafaa katika mpango mmoja."},{q:"Uhifadhi wa muda mrefu umejumuishwa?",a:"Sio moja kwa moja. Masharti lazima yathibitishwe."},{q:"TCAST hukagua ubora wa bidhaa?",a:"Ukaguzi wa kupokea si ukaguzi wa ubora isipokuwa huduma hiyo imekubaliwa tofauti."}],related:["sea-freight","air-freight","commercial-cargo"]
  },
  {
    slug:"commercial-cargo",title:"Mizigo ya Biashara",icon:"briefcase",image:"/images/commercial-cargo.webp",alt:"Bidhaa za biashara na makontena zikiandaliwa kwa usafiri",short:"Uratibu kwa maduka, wafanyabiashara, SME, waagizaji, wauzaji wa jumla na kampuni.",overview:["Mizigo ya biashara huathiri upatikanaji wa bidhaa na mtiririko wa fedha. TCAST husaidia biashara kueleza bidhaa, kuchagua njia ya usafirishaji na kuratibu wasambazaji, wabebaji, forodha na wapokeaji.","Huduma inaweza kusaidia mzigo mmoja au mizigo ya mara kwa mara kwa masharti yaliyokubaliwa. Bei za kudumu hazichapishwi kwa sababu bidhaa, ujazo na kanuni hutofautiana."],suitable:["Wauzaji rejareja na jumla","SME na kampuni","Waagizaji na wauzaji nje","Wauzaji mtandaoni"],cargo:["Bidhaa za duka","Vitambaa","Vipuri vya magari","Elektroniki","Mashine","Vifaa vya duka na ofisi"],benefits:["Chaguo la anga na bahari","Uratibu wa kupokea kwa msambazaji","Mwongozo wa nyaraka","Kuunganisha mizigo na forodha"],process:["Tuma orodha na mahitaji ya biashara","Chagua mpango unaofaa","Ratibu uwasilishaji wa wasambazaji","Andaa mzigo na nyaraka","Safirisha, pita forodha na kabidhi"],documents:["Ankara ya biashara","Orodha kamili","Taarifa za biashara na mpokeaji","Vibali au vyeti vya bidhaa"],tips:["Kagua masharti kabla ya kununua","Linganisha majina ya bidhaa kwenye nyaraka","Panga gharama za forodha mapema","Usichanganye vitu binafsi visivyo na nyaraka"],faqs:[{q:"TCAST inaweza kusaidia mizigo ya biashara ya mara kwa mara?",a:"Ndiyo, baada ya kukagua bidhaa, wasambazaji na mpangilio."},{q:"Kila bidhaa inahitaji kibali?",a:"Hapana, lakini baadhi ya aina zinadhibitiwa. Thibitisha mapema."},{q:"Mizigo ya biashara inaweza kuunganishwa?",a:"Mara nyingi ndiyo, kulingana na ulinganifu, utambulisho na muda."}],related:["warehousing-consolidation","customs-clearing","sea-freight"]
  },
  {
    slug:"personal-effects",title:"Mali Binafsi na Vifurushi",icon:"package",image:"/images/personal-effects.webp",alt:"Vifurushi binafsi na masanduku ya nyumbani yakiandaliwa",short:"Msaada kwa vitu vya nyumbani, zawadi, nguo, elektroniki na vifurushi binafsi.",overview:["Kutuma mali binafsi kimataifa kunaweza kuwa kugumu. TCAST husaidia watu kuandaa orodha, kuchagua anga au bahari na kuelewa ufungashaji na taarifa za forodha.","Yaliyomo yote lazima yatajewe. Hali ya bidhaa, idadi, thamani na matumizi vinaweza kuathiri forodha. Vitu dhaifu, vya betri, vimiminika au vilivyodhibitiwa vijadiliwe mapema."],suitable:["Watu binafsi na familia","Watumaji wa zawadi na vifurushi","Wanaohamisha vitu vya nyumbani","Wanaonunua bidhaa binafsi Dubai"],cargo:["Nguo","Vitu vya nyumbani","Zawadi","Elektroniki zilizoidhinishwa","Vitabu","Vifurushi binafsi"],benefits:["Mwongozo rahisi","Chaguo la anga au bahari","Kuunganisha vifurushi","Ukusanyaji na uwasilishaji inapopatikana"],process:["Orodhesha kila bidhaa","Jadili vitu dhaifu au vilivyodhibitiwa","Chagua njia inayofaa","Leta mzigo au panga ukusanyaji","TCAST huratibu usafiri, forodha na makabidhiano"],documents:["Vitambulisho vya mtumaji na mpokeaji","Orodha ya mali","Thamani za makadirio au manunuzi","Risiti, umiliki au vibali inapohitajika"],tips:["Usiandike tu vitu mchanganyiko","Funga vitu dhaifu kimoja kimoja","Hifadhi nakala ya data za elektroniki","Beba nyaraka zisizoweza kubadilishwa isipokuwa zimekubaliwa"],faqs:[{q:"Naweza kutuma zawadi Tanzania?",a:"Zawadi nyingi zinaweza kusafirishwa, lakini yaliyomo na thamani lazima zitajwe na kukaguliwa."},{q:"Naweza kuchanganya nguo na elektroniki?",a:"Inawezekana kwa ufungashaji mzuri na orodha kamili. Betri zihakikiwe mapema."},{q:"Vitu vilivyotumika havina ushuru?",a:"Usichukulie hivyo. Forodha hutegemea sheria za wakati huo na mazingira ya mzigo."}],related:["door-to-door","air-freight","sea-freight"]
  }
];

export function getServices(locale: Locale) {
  return locale === "sw" ? sw : en;
}

export function getService(locale: Locale, slug: string) {
  return getServices(locale).find((service) => service.slug === slug);
}
