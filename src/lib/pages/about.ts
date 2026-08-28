import type { EditorialPageData } from "./types";

export const aboutPages: EditorialPageData[] = [
  {
    path: "/about",
    title: "Who are these guys?",
    kicker: "About",
    description:
      "The Dive Pros have served Pensacola and Gulf Breeze since 1988, the #1 full-service recreational SCUBA and snorkeling shop on the Gulf Coast.",
    image: "/photos/shop-floor.jpg",
    imageAlt: "Retail floor at Dive Pros: cases, slatwall, and the service counter",
    intro:
      "The Dive Pros have been serving the greater Pensacola and Gulf Breeze communities since 1988 and are the #1 full-service recreational SCUBA and Snorkeling specialists on the Gulf Coast.",
    stats: [
      { value: "1988", label: "Year founded" },
      { value: "6×", label: "Best of the Bay" },
      { value: "54,000", label: "Gallon training tank" },
    ],
    sections: [
      {
        body: [
          "Dive Pros facilities feature over 2000 square feet of showroom, a full service repair & rental center, a 54,000 gallon heated training pool, two huge dedicated classrooms and the finest air fill & gas blending system in the southeast.",
          "Please check out our web site and browse through the many ways we can serve you:",
        ],
        cards: [
          {
            index: "01",
            title: "Training",
            body: "Award-winning SCUBA and snorkeling programs, from your first breath to Instructor Development.",
            href: "/courses",
            image: "/photos/facility-pool.jpg",
            imageAlt: "Indoor heated training tank at Dive Pros",
          },
          {
            index: "02",
            title: "Equipment service",
            body: "Factory-authorized repair for Scubapro, Aqua Lung, Apeks, Dive Rite, Sherwood, Genesis, and more.",
            href: "/shop/repairs",
            image: "/photos/tanks-wall.jpg",
            imageAlt: "Cylinders staged for service",
          },
          {
            index: "03",
            title: "Rentals",
            body: "Premium Scubapro and Aqua Lung kits, including dive computers.",
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
            body: "The Gulf Coast’s most complete SCUBA and snorkeling inventory: Scubapro and Aqua Lung.",
            href: "/shop",
            image: "/photos/shop-floor.jpg",
            imageAlt: "Dive Pros retail floor with gear cases and the service counter",
          },
        ],
        after: [
          "The beautiful emerald green waters of the Gulf of Mexico offer some of the most outstanding diving you can find off the U.S. Coast. Everything from Spanish Galleons and modern warships to WW II era aircraft and pristine natural bottom reefs, the diversity of dive sites and the abundance and variety of marine life are amazing. We invite you to take advantage of one of our many outstanding local charter services and see for yourself just how wonderful our local dives are. The Dive Pros are your gateway to all the amazing sites and experiences of our Gulf Coast underwater playground. We sincerely hope to see you soon!",
        ],
      },
      {
        heading: "Safety through education",
        body: [
          "We believe that good divers are always learning and that dive safety is the result of good diver education and preparation. You will always find an instructor in the store who can answer any question you might have or assist you with advice regarding training, equipment or local dives. We built our entire business on the idea that training is the single most important thing we do. We believe that divers need to be “Qualified” not just “Certified”. Simply put, we don’t believe in short cuts to SCUBA Diver training.",
        ],
      },
    ],
    map: {
      heading: "How to find us",
      body: "Located at 7203 West Highway 98, approximately ¼ mile west of the U.S. Naval Hospital and ½ mile west of the Navy Commissary and Exchange complex. The Dive Pros are open seven days a week to serve you.",
      name: "Dive Pros",
      lines: ["7203 US-98", "Pensacola, FL 32506"],
    },
    cta: { label: "Visit the shop", href: "/contact" },
    related: [
      { label: "Facilities", href: "/about/facilities" },
      { label: "Learn to dive", href: "/courses" },
    ],
  },
  {
    path: "/about/facilities",
    title: "Facilities",
    kicker: "About",
    description:
      "Dive Pros facilities: 2,000 sq ft retail, two classrooms, and a 54,000-gallon indoor heated 12′ training tank.",
    image: "/photos/facility-pool.jpg",
    imageAlt: "Indoor heated training tank at Dive Pros, looking down the length of the pool",
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
          src: "/photos/facility-pool.jpg",
          alt: "Indoor heated training tank with entry steps and depth markings",
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
          caption: "The finest gas blending and fill station in the southeast.",
        },
      ],
    },
    modules: [
      {
        index: "01",
        title: "Retail sales center",
        body: "Over 2,000 square feet of modern retail filled with SCUBA and snorkeling equipment we stand behind.",
        list: [
          "SCUBAPRO: full-line authorized dealer",
          "Aqua Lung / Apeks: full line, military / public safety / law enforcement",
          "SeaLife & Paralenz cameras",
          "Aqua Lung, Scubapro, Deep See & Pinnacle wetsuits",
          "Scubapro, Aqua Lung & Shearwater dive computers",
          "Armor, Scubapro, Aqua Lung bags",
          "Riffe, JBL, AB Biller, Spearfishing Specialties & Hammerhead spearguns",
        ],
      },
      {
        index: "02",
        title: "Training tank",
        body: "Designed and built for SCUBA training. Heated, indoor, behind the retail floor, a few steps from the classrooms. Large deck, seating, wide entry steps, 12′ deep training area. Open to students and customers during store hours.",
      },
      {
        index: "03",
        title: "Classrooms",
        body: "Two large rooms with teaching aids and media so instructors can actually teach science, equipment, and the environment. Quiet, focused, and a few steps from the water you will get in that same evening.",
      },
    ],
    cta: { label: "Come by", href: "/contact" },
    related: [
      { label: "Open Water", href: "/courses/open-water" },
      { label: "Contact", href: "/contact" },
    ],
  },
];
