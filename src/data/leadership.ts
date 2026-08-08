import type { Locale } from "@/i18n/config";

export type LeadershipContent = {
  eyebrow: string;
  role: string;
  heroTitle: string;
  heroDescription: string;
  ownershipLabel: string;
  profileEyebrow: string;
  profileTitle: string;
  profileParagraphs: string[];
  ownerStatement: string;
  founderMessageTitle: string;
  founderMessage: string[];
  visionTitle: string;
  vision: string;
  focusSections: { title: string; text: string }[];
  principlesEyebrow: string;
  principlesTitle: string;
  principles: { title: string; text: string }[];
  ctaTitle: string;
  ctaText: string;
};

export const leadershipContent: Record<Locale, LeadershipContent> = {
  en: {
    eyebrow: "Leadership & Ownership",
    role: "Founder, Owner & Managing Director",
    heroTitle: "Leadership grounded in trust and practical service",
    heroDescription:
      "Meet Twahil Salum Than, the founder and owner guiding TCAST Cargo & Clearing Ltd with a clear commitment to responsible cargo coordination between the UAE and Tanzania.",
    ownershipLabel: "Founder-led. Owner-managed.",
    profileEyebrow: "Founder profile",
    profileTitle: "Twahil Salum Than",
    profileParagraphs: [
      "Twahil Salum Than leads TCAST Cargo & Clearing Ltd as its Founder, Owner and Managing Director. His role connects the company’s direction with the everyday responsibility of serving customers, coordinating cargo and maintaining clear communication across each handover.",
      "His leadership approach keeps the business focused on what customers need most from a cargo partner: dependable guidance, transparent expectations, careful handling and practical follow-through.",
    ],
    ownerStatement:
      "TCAST Cargo & Clearing Ltd is founded and owned by Twahil Salum Than, who remains responsible for its leadership and service direction.",
    founderMessageTitle: "A message from the founder",
    founderMessage: [
      "Every shipment represents a personal plan, a family need or a business commitment. Our responsibility is to understand that purpose, communicate honestly and coordinate each stage with care.",
      "TCAST Cargo is built to make the UAE–Tanzania cargo journey clearer and more dependable. We aim to earn lasting trust through transparent service, cargo safety and consistent support as our customers and their businesses grow.",
    ],
    visionTitle: "A clear vision for the corridor",
    vision:
      "To strengthen TCAST Cargo as a trusted logistics link between the UAE and Tanzania—combining responsive local support, disciplined coordination and a customer experience that grows without losing accountability.",
    focusSections: [
      {
        title: "Operational perspective",
        text: "Leadership stays close to the practical realities of receiving, freight coordination, documentation, customs support and destination handover.",
      },
      {
        title: "Values in action",
        text: "Decisions are guided by honesty, care, accountability and respect for the requirements that protect customers, cargo and every service partner.",
      },
      {
        title: "Leadership responsibility",
        text: "The Managing Director sets service direction, supports the team and keeps customer communication and responsible cargo handling at the centre of company growth.",
      },
    ],
    principlesEyebrow: "Leadership principles",
    principlesTitle: "The standards behind every decision",
    principles: [
      { title: "Trust", text: "Build confidence through dependable actions and respectful customer care." },
      { title: "Transparency", text: "Explain requirements, responsibilities and next steps clearly." },
      { title: "Cargo safety", text: "Promote careful handling, accurate declarations and responsible coordination." },
      { title: "Service", text: "Stay responsive and focused on practical solutions for each customer." },
      { title: "Growth", text: "Develop the company sustainably while protecting quality and accountability." },
    ],
    ctaTitle: "Plan your cargo journey with a responsible team",
    ctaText: "Share your shipment details and let TCAST Cargo review the practical next steps with you.",
  },
  sw: {
    eyebrow: "Uongozi na Umiliki",
    role: "Mwanzilishi, Mmiliki na Mkurugenzi Mtendaji",
    heroTitle: "Uongozi unaojengwa juu ya uaminifu na huduma ya vitendo",
    heroDescription:
      "Mfahamu Twahil Salum Than, mwanzilishi na mmiliki anayeiongoza TCAST Cargo & Clearing Ltd kwa dhamira ya kuratibu mizigo kwa uwajibikaji kati ya UAE na Tanzania.",
    ownershipLabel: "Imeanzishwa na kuongozwa na mmiliki.",
    profileEyebrow: "Wasifu wa mwanzilishi",
    profileTitle: "Twahil Salum Than",
    profileParagraphs: [
      "Twahil Salum Than anaiongoza TCAST Cargo & Clearing Ltd akiwa Mwanzilishi, Mmiliki na Mkurugenzi Mtendaji. Nafasi yake inaunganisha mwelekeo wa kampuni na wajibu wa kila siku wa kuwahudumia wateja, kuratibu mizigo na kudumisha mawasiliano ya wazi katika kila hatua ya makabidhiano.",
      "Mtazamo wake wa uongozi unaifanya biashara ibaki makini kwa yale ambayo wateja wanahitaji zaidi kutoka kwa mshirika wa mizigo: mwongozo unaotegemewa, matarajio yaliyo wazi, uangalifu wa mizigo na ufuatiliaji wa vitendo.",
    ],
    ownerStatement:
      "TCAST Cargo & Clearing Ltd imeanzishwa na inamilikiwa na Twahil Salum Than, ambaye anaendelea kuwajibika kwa uongozi na mwelekeo wa huduma zake.",
    founderMessageTitle: "Ujumbe kutoka kwa mwanzilishi",
    founderMessage: [
      "Kila mzigo unawakilisha mpango binafsi, hitaji la familia au ahadi ya biashara. Wajibu wetu ni kuelewa kusudi hilo, kuwasiliana kwa uaminifu na kuratibu kila hatua kwa uangalifu.",
      "TCAST Cargo imejengwa ili kufanya safari ya mizigo kati ya UAE na Tanzania iwe wazi na yenye kutegemewa zaidi. Tunakusudia kujenga uaminifu wa kudumu kupitia huduma yenye uwazi, usalama wa mizigo na msaada thabiti kadiri wateja na biashara zao wanavyokua.",
    ],
    visionTitle: "Dira iliyo wazi kwa njia hii ya usafirishaji",
    vision:
      "Kuiimarisha TCAST Cargo kama kiungo cha usafirishaji kinachoaminika kati ya UAE na Tanzania—kwa kuunganisha msaada wa karibu, uratibu wenye nidhamu na huduma ya mteja inayokua bila kupunguza uwajibikaji.",
    focusSections: [
      {
        title: "Mtazamo wa kiutendaji",
        text: "Uongozi unabaki karibu na uhalisia wa kupokea mizigo, kuratibu usafirishaji, nyaraka, msaada wa forodha na makabidhiano ya mwisho.",
      },
      {
        title: "Maadili kwa vitendo",
        text: "Maamuzi yanaongozwa na uaminifu, uangalifu, uwajibikaji na kuheshimu masharti yanayolinda wateja, mizigo na washirika wa huduma.",
      },
      {
        title: "Wajibu wa uongozi",
        text: "Mkurugenzi Mtendaji anaweka mwelekeo wa huduma, anaiunga mkono timu na kuweka mawasiliano ya mteja pamoja na ushughulikiaji makini wa mizigo kuwa msingi wa ukuaji wa kampuni.",
      },
    ],
    principlesEyebrow: "Misingi ya uongozi",
    principlesTitle: "Viwango vinavyoongoza kila uamuzi",
    principles: [
      { title: "Uaminifu", text: "Kujenga imani kupitia vitendo vinavyotegemewa na huduma yenye heshima." },
      { title: "Uwazi", text: "Kueleza masharti, wajibu na hatua zinazofuata kwa lugha inayoeleweka." },
      { title: "Usalama wa mizigo", text: "Kuhimiza uangalifu, matamko sahihi na uratibu wenye uwajibikaji." },
      { title: "Huduma", text: "Kuwa tayari kujibu na kuzingatia suluhisho la vitendo kwa kila mteja." },
      { title: "Ukuaji", text: "Kuikuza kampuni kwa uendelevu huku tukilinda ubora na uwajibikaji." },
    ],
    ctaTitle: "Panga safari ya mzigo wako na timu yenye uwajibikaji",
    ctaText: "Tuma maelezo ya mzigo wako ili TCAST Cargo ikague hatua zinazofaa pamoja nawe.",
  },
};
