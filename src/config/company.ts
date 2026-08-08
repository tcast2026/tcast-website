export const company = {
  legalName: "TCAST Cargo & Clearing Ltd",
  brandName: "TCAST Cargo",
  website: "tcast.co.tz",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://tcast.co.tz",
  email: "tahilcast@gmail.com",
  quoteEmail: process.env.QUOTE_EMAIL_TO || "tahilcast@gmail.com",
  phones: {
    tanzania: { display: "+255 713 884 888", href: "+255713884888" },
    tanzaniaSecondary: { display: "+255 659 746 575", href: "+255659746575" },
    dubai: { display: "+971 54 2382399", href: "+971542382399" },
    whatsapp: { display: "+971 54 2382399", href: "971542382399" },
  },
  offices: {
    tanzania: {
      city: "Dar es Salaam, Tanzania",
      lines: [
        "KING PALACE Building, Near NBC Bank",
        "1st Floor",
        "Office No. 114",
        "Mnazi Mmoja",
        "Jamhuri Street",
        "Bibi Titi Mohamed Road & Uhuru Road Junction",
        "Dar es Salaam, Tanzania",
      ],
      linesSw: [
        "Jengo la KING PALACE, Karibu na Benki ya NBC",
        "Ghorofa ya Kwanza",
        "Ofisi Na. 114",
        "Mnazi Mmoja",
        "Mtaa wa Jamhuri",
        "Makutano ya Barabara ya Bibi Titi Mohamed na Uhuru",
        "Dar es Salaam, Tanzania",
      ],
      address:
        "KING PALACE Building, Near NBC Bank, 1st Floor, Office No. 114, Mnazi Mmoja, Jamhuri Street, Bibi Titi Mohamed Road & Uhuru Road Junction, Dar es Salaam, Tanzania",
      addressSw:
        "Jengo la KING PALACE, Karibu na Benki ya NBC, Ghorofa ya Kwanza, Ofisi Na. 114, Mnazi Mmoja, Mtaa wa Jamhuri, Makutano ya Barabara ya Bibi Titi Mohamed na Uhuru, Dar es Salaam, Tanzania",
      hours: "Please contact the office to confirm current opening hours.",
    },
    dubai: {
      city: "Dubai, United Arab Emirates",
      lines: [
        "Mezzanine Floor, Room No. 102",
        "Al-Daghal, Deira",
        "Dubai, United Arab Emirates",
      ],
      address:
        "Mezzanine Floor, Room No. 102, Al-Daghal, Deira, Dubai, United Arab Emirates",
      hours: "Please contact the office to confirm current opening hours.",
    },
  },
  social: {
    facebook: "",
    instagram: "",
    linkedin: "",
  },
  tracking: {
    configured: Boolean(process.env.TRACKING_API_URL && process.env.TRACKING_API_KEY),
  },
} as const;

export function mapsLink(address: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

export function mapsEmbed(address: string) {
  return `https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`;
}

export function whatsappLink(message = "Hello TCAST Cargo, I would like help with a shipment.") {
  return `https://wa.me/${company.phones.whatsapp.href}?text=${encodeURIComponent(message)}`;
}
