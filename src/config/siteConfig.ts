export const siteConfig = {
  businessName: "Dawelen Glass",
  legalBusinessName: "Dawelen Glass",
  tagline: "Glazing & Glass Repairs",
  primaryCategory: "Glass & Glazing Contractor",
  secondaryCategories: ["Window Installation Service", "Glass Repair Service"],
  phone: "+44-792-125-2768",
  whatsapp: "447921252768",
  email: "enquiries@dawelenglass.co.uk",
  website: "https://dawelenglass.co.uk",
  streetAddress: "Benllech Isaf Guesthouse and Cafe, Beach Road",
  city: "Benllech",
  state: "Anglesey",
  postalCode: "LL74 8SW",
  country: "UK",
  latitude: 53.318,
  longitude: -4.227,
  openingHours: [
    { day: "Monday", open: "08:00", close: "17:00" },
    { day: "Tuesday", open: "08:00", close: "17:00" },
    { day: "Wednesday", open: "08:00", close: "17:00" },
    { day: "Thursday", open: "08:00", close: "17:00" },
    { day: "Friday", open: "08:00", close: "17:00" },
    { day: "Saturday", open: "09:00", close: "13:00" },
    { day: "Sunday", open: "Closed", close: "Closed" }
  ],
  serviceAreas: [
    { name: "Benllech", slug: "benllech" },
    { name: "Llanfairpwllgwyngyll", slug: "llanfairpwllgwyngyll" },
    { name: "Beaumaris", slug: "beaumaris" },
    { name: "Menai Bridge", slug: "menai-bridge" },
    { name: "Amlwch", slug: "amlwch" },
    { name: "Llangefni", slug: "llangefni" },
    { name: "Red Wharf Bay", slug: "red-wharf-bay" },
    { name: "Pentraeth", slug: "pentraeth" },
    { name: "Holyhead", slug: "holyhead" }
  ],
  logo: "/logo.jpg",
  favicon: "/favicon.ico",
  heroImage: "https://vibe.filesafe.space/1780479504797776542/assets/a7c7a44b-7ea3-4136-9187-f810dc869652.png",
  aboutImage: "https://vibe.filesafe.space/1780479504797776542/assets/3851b8f6-00b2-49e1-aae1-903a37903f88.png",
  socialProfiles: [
    { platform: "facebook", url: "https://facebook.com/dawelenglass" },
  ],
  reviews: {
    // If you leave this empty (""), the entire Testimonial section and Google Badges will be hidden.
    googleBusinessProfileUrl: "https://maps.google.com/?q=Benllech+Anglesey+UK",
    aggregateRating: "5.0",
    totalReviews: "124",
    // Paste your Elfsight, Trustindex, or GHL Review Widget code here.
    reviewWidgetEmbedCode: ``
  },
  trustBadges: [
    // Add paths to any trust badges here. They will appear in the footer/homepage.
    // { name: "GGF Member", image: "/images/badges/ggf.png" },
    // { name: "FENSA Registered", image: "/images/badges/fensa.png" }
  ] as Array<{name: string, image: string}>,
  companyRegistrationNumber: "",
  yearEstablished: 2020,
  founder: "Local Glazing Specialist",
  description: "Dawelen Glass helps homeowners and local businesses across Benllech and Anglesey with misted double glazing, glass repairs, custom cutting, and shopfronts.",
  emergencyService: true,
  certifications: ["[CERTIFICATION 1]", "[CERTIFICATION 2]"],
  brands: ["[BRAND 1]", "[BRAND 2]"],
  services: [
    {
      id: "glass-repairs",
      name: "Glass Repairs",
      slug: "glass-repairs",
      shortDescription: "Fast glass repairs for cracked, chipped, and damaged panes.",
      longDescription: "Dawelen Glass provides glass repair and replacement services for customers who want a straightforward, dependable solution for damaged, misted, or outdated glazing.",
      image: "https://94444ce5-dawelen-glass.m7q4.temphost024.com/wp-content/uploads/2026/08/glass-repairs-768x512.jpg",
      applications: ["Cracked glass", "Chipped panes"],
    },
    {
      id: "window-glazing",
      name: "Window Glazing",
      slug: "window-glazing",
      shortDescription: "Reliable window glazing repairs and replacements for clearer views and better comfort.",
      longDescription: "We replace failed units neatly. If your double glazing has misted or lost its clarity, we can help restore the appearance and performance of the window without unnecessary disruption.",
      image: "https://94444ce5-dawelen-glass.m7q4.temphost024.com/wp-content/uploads/2026/08/window-glazing-768x512.jpg",
      applications: ["Misted double glazing", "Window replacement"],
    },
    {
      id: "emergency-glass-repair",
      name: "Emergency Glass Repair",
      slug: "emergency-glass-repair",
      shortDescription: "Broken, cracked, or unsafe glass dealt with quickly for homes and local businesses.",
      longDescription: "Broken, cracked, or unsafe glass dealt with quickly for homes and local businesses. We keep the process simple. You get clear advice, a free no obligation quote.",
      image: "https://94444ce5-dawelen-glass.m7q4.temphost024.com/wp-content/uploads/2026/08/emergency-glass-repair-768x512.jpg",
      applications: ["Shopfronts", "Homes", "Businesses"],
    },
    {
      id: "shopfront-glazing",
      name: "Shopfront Glazing",
      slug: "shopfront-glazing",
      shortDescription: "Commercial shopfront glazing and boarding up.",
      longDescription: "Professional shopfront glazing services for businesses across Anglesey and North Wales.",
      image: "https://vibe.filesafe.space/1780479504797776542/assets/ef1c56c3-f51b-4bb8-9a9a-ff30c95260e3.png",
      applications: ["Retail stores", "Commercial buildings"],
    },
    {
      id: "double-glazing",
      name: "Double Glazing",
      slug: "double-glazing",
      shortDescription: "Double glazing repair and unit replacements.",
      longDescription: "We replace failed double glazed units neatly to restore clarity and function.",
      image: "https://94444ce5-dawelen-glass.m7q4.temphost024.com/wp-content/uploads/2026/08/window-glazing-768x512.jpg",
      applications: ["Windows", "Doors", "Conservatories"],
    },
    {
      id: "mirror-installation",
      name: "Mirror Installation",
      slug: "mirror-installation",
      shortDescription: "Custom cut mirrors supplied and fitted.",
      longDescription: "Bespoke mirror installation for gyms, bathrooms, dance studios, and home interiors.",
      image: "https://vibe.filesafe.space/1780479504797776542/assets/3851b8f6-00b2-49e1-aae1-903a37903f88.png",
      applications: ["Bathrooms", "Gyms", "Living spaces"],
    },
    {
      id: "bespoke-glass-cutting",
      name: "Bespoke Glass Cutting",
      slug: "bespoke-glass-cutting",
      shortDescription: "Custom cut glass tailored to your specifications.",
      longDescription: "We offer bespoke glass cutting services for tabletops, shelves, and custom installations.",
      image: "https://94444ce5-dawelen-glass.m7q4.temphost024.com/wp-content/uploads/2026/08/glass-repairs-768x512.jpg",
      applications: ["Tabletops", "Shelving", "Custom fixtures"],
    },
    {
      id: "patio-door-glass",
      name: "Patio Door Glass",
      slug: "patio-door-glass",
      shortDescription: "Repairs and replacements for patio door glass.",
      longDescription: "Fast, secure replacement of patio door glass units, including toughened and safety glass.",
      image: "https://94444ce5-dawelen-glass.m7q4.temphost024.com/wp-content/uploads/2026/08/emergency-glass-repair-768x512.jpg",
      applications: ["Patio doors", "French doors", "Sliding doors"],
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Local Customer",
      text: "Excellent service. They replaced our broken shopfront glass the same day. Highly recommended.",
      date: "2023-10-15",
      service: "Glass Repairs"
    }
  ],
  projects: [
    {
      id: "project-1",
      title: "Local Shopfront Repair",
      type: "Commercial",
      location: "Benllech",
      service: "glass-repairs",
      description: "Fast response emergency repair to secure a damaged shopfront in the village center.",
      image: "https://vibe.filesafe.space/1780479504797776542/assets/ef1c56c3-f51b-4bb8-9a9a-ff30c95260e3.png"
    }
  ],
  faqs: [
    {
      question: "Do you replace misted double glazed units?",
      answer: "Yes, we replace failed units neatly. If your double glazing has misted or lost its clarity, we can help restore the appearance and performance of the window without unnecessary disruption."
    },
    {
      question: "Can you help if I only need one piece of glass cut?",
      answer: "Yes, we handle a wide range of glazing jobs including bespoke glass cutting."
    },
    {
      question: "What areas do you serve?",
      answer: "We proudly serve Benllech and nearby Anglesey communities including Llanfairpwllgwyngyll, Beaumaris, Menai Bridge, and Holyhead."
    }
  ],
  ghl: {
    enableChatWidget: false,
    chatWidgetEmbedCode: ``,
    heroFormEmbedCode: ``,
    contactFormEmbedCode: ``
  }
};
