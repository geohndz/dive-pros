import type { EditorialPageData } from "./types";

export const aboutPages: EditorialPageData[] = [
  {
    path: "/about",
    title: "Who are these guys?",
    kicker: "About",
    description:
      "Dive Pros in Pensacola: PADI training, a 54,000-gallon indoor pool, SCUBAPRO and Aqua Lung on the floor, and a factory-trained service bench.",
    image: "/photos/shop-floor.jpg",
    imageAlt: "Retail floor at Dive Pros: cases, slatwall, and the service counter",
    intro:
      "We're the shop at 7203 W. Hwy. 98. You can get certified here, kit out here, and get a boat pointed at Pensacola wrecks from the same counter.",
    stats: [
      { value: "1988", label: "Year founded" },
      { value: "6×", label: "Best of the Bay" },
      { value: "54,000", label: "Gallon training tank" },
    ],
    sections: [
      {
        body: [
          "2,000 square feet of showroom. A repair and rental bay. A 54,000-gallon heated indoor pool. Two classrooms. A blending station that fills air, Nitrox, and tech gas.",
          "Here's what you can do from this address:",
        ],
        cards: [
          {
            index: "01",
            title: "Training",
            body: "PADI from Discover Scuba through Instructor Development. New Open Water classes every week.",
            href: "/courses",
            image: "/photos/aqua-pair.jpg",
            imageAlt: "Buddy pair in clear water during a training dive",
          },
          {
            index: "02",
            title: "Equipment service",
            body: "Factory-authorized repair for SCUBAPRO, Aqua Lung, Apeks, Dive Rite, Sherwood, Genesis, and more.",
            href: "/shop/repairs",
            image: "/photos/tanks-wall.jpg",
            imageAlt: "Cylinders staged for service",
          },
          {
            index: "03",
            title: "Rentals",
            body: "SCUBAPRO and Aqua Lung kits, including dive computers. Cylinders in air or Nitrox.",
            href: "/shop/rentals",
            image: "/photos/boat-gear.jpg",
            imageAlt: "BCD kits lined up on a dive boat",
          },
          {
            index: "04",
            title: "Local charters",
            body: "Discovery dives on Pensacola wrecks and reefs, weather permitting.",
            href: "/dive/charters",
            image: "/photos/boat-fins.jpg",
            imageAlt: "Fins hanging on a charter boat rail",
          },
          {
            index: "05",
            title: "Travel",
            body: "Adventure trips beyond the local coast. Ask us where the water is calling.",
            href: "/contact",
            image: "/photos/godrays.jpg",
            imageAlt: "Divers silhouetted against sunlight at the surface",
          },
          {
            index: "06",
            title: "Gas fills",
            body: "Certified clean air, custom Nitrox and trimix blending, and oxygen fills.",
            href: "/shop/air-fills",
            image: "/photos/fill-station.jpg",
            imageAlt: "Enriched Air Nitrox blending panel at Dive Pros",
          },
          {
            index: "07",
            title: "Retail",
            body: "Authorized SCUBAPRO and Aqua Lung / Apeks dealer, plus Shearwater, SeaLife, and spearfishing.",
            href: "/shop",
            image: "/photos/shop-floor.jpg",
            imageAlt: "Dive Pros retail floor with gear cases and the service counter",
          },
        ],
        after: [
          "From the 911-foot Oriskany to shallow shore dives, Pensacola gives you wrecks, reefs, and plenty of reasons to get in the water. Spanish galleons, modern warships, WWII aircraft, and live-bottom reefs sit off this coast. We'll point you at the right boat.",
        ],
      },
      {
        heading: "Safety through education",
        body: [
          "You'll always find an instructor in the store. Ask about training, gear, or which wreck is running this week. We built the shop on one idea: qualified, not just certified. No shortcuts in SCUBA training.",
        ],
      },
    ],
    map: {
      heading: "How to find us",
      body: "7203 West Highway 98, about ¼ mile west of the U.S. Naval Hospital and ½ mile west of the Navy Commissary and Exchange. We're open seven days a week.",
      name: "Dive Pros",
      lines: ["7203 US-98", "Pensacola, FL 32506"],
    },
    staff: true,
    cta: { label: "Visit the shop", href: "/contact" },
    related: [
      { label: "Facilities", href: "/about/facilities" },
      { label: "Our staff", href: "/about/staff" },
      { label: "View courses", href: "/courses" },
    ],
  },
  {
    path: "/about/facilities",
    title: "Facilities",
    kicker: "About",
    description:
      "Dive Pros facilities: 2,000 sq ft retail, two classrooms, and a 54,000-gallon indoor heated 12′ training tank.",
    image: "/photos/aqua-pair.jpg",
    imageAlt: "Buddy pair in clear water, the kind of training the on-site tank is built for",
    intro:
      "Retail, classrooms, and the training tank sit on one lot. You park once. This on-site tank saves travel, and it lets instructors give you as much extra water time as you individually need.",
    stats: [
      { value: "54,000", label: "Gallon training tank" },
      { value: "12′", label: "Deep end" },
      { value: "2", label: "Classrooms" },
    ],
    gallery: {
      heading: "7203 W. Hwy. 98",
      images: [
        {
          src: "/photos/aqua-pair.jpg",
          alt: "Buddy pair in clear water during a training dive",
          caption: "54,000 gallons. Heated. Indoor. 12′ in the training area.",
        },
        {
          src: "/photos/shop-floor.jpg",
          alt: "Dive Pros retail floor with gear cases, wetsuits, and the service counter",
          caption: "Over 2,000 square feet of retail on the same lot.",
        },
        {
          src: "/photos/fill-station.jpg",
          alt: "Enriched Air Nitrox blending panel and fill whips at Dive Pros",
          caption: "Air to 4500 psi, premixed Nitrox, and an oxygen-clean Haskell booster.",
        },
      ],
    },
    modules: [
      {
        index: "01",
        title: "Retail sales center",
        body: "Over 2,000 square feet of retail. If we sell it, we can service it.",
        image: "/photos/shop-floor.jpg",
        imageAlt: "Retail floor at Dive Pros with cases, wetsuits, and the service counter",
        list: [
          "SCUBAPRO: full-line authorized dealer",
          "Aqua Lung / Apeks: full line, military / public safety / law enforcement",
          "SeaLife & Paralenz cameras",
          "Aqua Lung, SCUBAPRO, Deep See & Pinnacle wetsuits",
          "SCUBAPRO, Aqua Lung & Shearwater dive computers",
          "Armor, SCUBAPRO, Aqua Lung bags",
          "Riffe, JBL, AB Biller, Spearfishing Specialties & Hammerhead spearguns",
        ],
      },
      {
        index: "02",
        title: "Training tank",
        body: "Designed and built for SCUBA training. Heated, indoor, behind the retail floor, a few steps from the classrooms. Large deck, seating, wide entry steps, 12′ deep training area. Open to students and customers during store hours.",
        image: "/photos/aqua-pair.jpg",
        imageAlt: "Students in the water during a training session",
      },
      {
        index: "03",
        title: "Classrooms",
        body: "Two rooms with teaching aids and media for dive science, equipment, and the environment. Quiet, and a few steps from the water you'll get in that same evening.",
        image: "/photos/pool-overhead.jpg",
        imageAlt: "Student in the training tank a few steps from the classrooms",
      },
    ],
    cta: { label: "Come by", href: "/contact" },
    related: [
      { label: "Open Water", href: "/courses/open-water" },
      { label: "Our staff", href: "/about/staff" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    path: "/about/staff",
    title: "Our staff",
    kicker: "About",
    description:
      "Dive Pros instructors and staff: Kevin and Kerry Freeland, Gary Toms, Merrick VanLandingham, Heather Armstrong, and the teaching bench.",
    image: "/photos/shop-floor.jpg",
    imageAlt: "Dive Pros retail floor and service counter",
    intro:
      "The people at the counter are the same people in the water. Instructor team on the live roster: Kevin Freeland, Kerry Freeland, Kurtis Freeland, C.J. Salter, Gary Toms, Jason Painter, Merrick VanLandingham, and Heather Armstrong.",
    sections: [
      {
        heading: "Kerry Freeland",
        body: [
          "Vice President and co-owner. Certified late 1987. Full time here December 1988. NAUI Instructor in early 1989. PADI Instructor, NACD and NSS cave, DAN Oxygen Instructor, PSI and SDI Visual Cylinder Inspector Trainer, TDI semi-closed rebreather trainer, NAUI Instructor Trainer.",
          "Vice President of Friends of the Massachusetts while the wreck became Florida's fourth Underwater Archaeological Preserve. Repair tickets from SCUBAPRO, Aqua Lung, Sherwood, Beuchat, Oceanic, and more.",
        ],
      },
      {
        heading: "Gary Toms",
        body: [
          "Senior Instructor. Started diving in the mid-1990s. Taught in Arizona, California, and Mexico before Pensacola. NAUI Instructor Trainer, NAUI Open Water Instructor, SSI Instructor, EFR and NAUI first aid / CPR / AED Instructor, DAN and NAUI Oxygen Instructor.",
          "Local favorites: the YTD boats, Chevron Rig, and the Russian Freighter. California kelp and Bonaire when he's away.",
        ],
      },
      {
        heading: "Merrick VanLandingham",
        body: [
          "Manager since 2001. Started here in 1997 after working as a divemaster in Malaysia. NAUI Instructor #33639 (1999). Commercial diving for FEMA, EPA, and the U.S. Coast Guard. Founding member of O.R.G. search and recovery. PSI inspector. NAUI Instructor Trainer. EFR and DAN Oxygen Instructor. USCG boat captain. Chairman of the Escambia County Marine Advisory Committee.",
          "Local favorites: I-10 bridge rubble, Chevron, the Brass wreck, USS Oriskany, and the YDT boats.",
        ],
      },
      {
        heading: "Heather Armstrong",
        body: [
          "NAUI cave and technical instructor. Instructor in 1994 on Guam. Teaching cave and tech since 1998. Well over 1,000 cave dives and 1,000 trimix / decompression dives. WKPP, Association of Underwater Explorers, and other research groups.",
          "Courses: Intro to Tech, Advanced Nitrox / Deco / Helitrox, Trimix 1 and 2, wreck penetration, cavern, cave 1 and 2, DPV. Favorite course to teach: cavern.",
          "heatherarmstrong@mac.com · (850) 501-3347 · darksidediving.com",
        ],
      },
    ],
    staff: true,
    cta: { label: "Contact the shop", href: "/contact" },
    related: [
      { label: "Technical instruction", href: "/courses/technical" },
      { label: "About", href: "/about" },
    ],
  },
  {
    path: "/about/links",
    title: "Links",
    kicker: "Resources",
    description:
      "Weather, tides, PADI medical and liability forms, charter, manufacturers, and lionfish resources used by Dive Pros.",
    image: "/photos/storefront.jpg",
    imageAlt: "Dive Pros storefront on West Highway 98",
    intro:
      "The same forms, forecasts, and manufacturer pages we send people to from the counter.",
    sections: [
      {
        heading: "Weather & tides",
        body: ["Check the pass before you drive to a beach reef."],
        list: [
          "Pensacola area weather — weather.gov",
          "NOAA marine forecast",
          "Tide predictions — Fort McRee Breakwater (Pensacola Pass)",
        ],
      },
      {
        heading: "Training forms",
        body: ["Bring the medical questionnaire filled out. If any answer is yes, you need a physician signature."],
        list: [
          "PADI — padi.com",
          "PADI Medical Form",
          "PADI General Liability Release",
        ],
      },
      {
        heading: "Charters",
        body: ["Book the boat directly. Policies and prices are set by the operator."],
        list: ["Niuhi Dive Charters — niuhidivecharters.com"],
      },
      {
        heading: "Equipment manufacturers",
        body: ["The lines we sell and service."],
        list: [
          "SCUBAPRO, Aqua Lung, Apeks, Dive Rite, Shearwater, Sherwood, XS Scuba",
          "Armor Bags, SeaLife, Ikelite, Big Blue, Tovatec",
          "Riffe, JBL, Ocean Rhino / Spearfishing Specialties, A.B. Biller, Omer / Sporasub, Hammerhead",
          "Pinnacle Aquatics, Lavacore, Subgravity",
        ],
      },
      {
        heading: "Lionfish & reefs",
        body: ["Regulations and the wreck trail."],
        list: [
          "FWC Reef Rangers",
          "Lionfish University",
          "FWC saltwater fishing regulations",
          "Florida Panhandle Shipwreck Trail",
        ],
      },
    ],
    related: [
      { label: "Open Water", href: "/courses/open-water" },
      { label: "Shore dives", href: "/dive/shore-dives" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
