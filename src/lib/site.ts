export const site = {
  name: "Dive Pros",
  tagline: "Pensacola's dive community since 1988.",
  phone: "(850) 456-8845",
  phoneHref: "tel:+18504568845",
  tollFree: "1.866.DIVEPRO",
  fax: "(850) 456-0025",
  email: "info@florida-divepros.com",
  emailHref: "mailto:info@florida-divepros.com",
  address: "7203 W. Hwy. 98",
  city: "Pensacola, FL 32506",
  latitude: 30.397862,
  longitude: -87.307355,
  mapsQuery: "Dive Pros, 7203 US-98, Pensacola, FL 32506",
  mapsHref:
    "https://maps.google.com/?q=Dive+Pros,+7203+US-98,+Pensacola,+FL+32506",
  googleReviewsHref:
    "https://www.google.com/maps/search/?api=1&query=Dive+Pros+7203+US-98+Pensacola",
  googleRating: "4.9",
  googleReviewCount: "248",
  facebook: "https://www.facebook.com/floridadivepros",
} as const;

export const hours = {
  summer: {
    label: "Summer",
    range: "April 1 – October 31",
    days: [
      { days: "Mon – Fri", time: "9a – 7p" },
      { days: "Saturday", time: "7a – 7p" },
      { days: "Sunday", time: "9a – 5p" },
    ],
  },
  winter: {
    label: "Winter",
    range: "November 1 – March 31",
    days: [
      { days: "Mon – Fri", time: "9a – 6p" },
      { days: "Saturday", time: "8a – 6p" },
      { days: "Sunday", time: "9a – 5p" },
    ],
  },
} as const;

export const marqueeItems = [
  "Open Water",
  "Advanced Open Water",
  "Nitrox",
  "Rescue Diver",
  "Specialties",
  "Divemaster",
  "Gas fills",
  "Equipment service",
  "Rentals",
  "Charters",
  "USS Oriskany",
  "54,000 gallons",
];

export const stats = [
  { value: "1988", label: "Year founded" },
  { value: "38+", label: "Years on the Gulf" },
  { value: "12′", label: "Indoor heated training tank" },
  { value: "6×", label: "Best of the Bay" },
];

export const offerings = [
  {
    title: "Training",
    href: "/courses",
    cta: "View courses",
    image: "/photos/aqua-pair.jpg",
    imageAlt: "Buddy pair in clear water during a training dive",
    body: "You start in a 12′ indoor heated tank. Classrooms are a few steps away. New Open Water classes start every week.",
  },
  {
    title: "Service",
    href: "/shop/repairs",
    cta: "View service pricing",
    image: "/photos/fill-station.jpg",
    imageAlt: "Enriched Air Nitrox fill station at Dive Pros",
    body: "SCUBA is life support. Factory-trained technicians service most major lines. Most kits are back in the water in under a week.",
  },
  {
    title: "Charters",
    href: "/dive/charters",
    cta: "Plan a charter",
    image: "/photos/boat-fins.jpg",
    imageAlt: "Fins hanging on a charter boat rail over the Gulf",
    body: "Local boats run wrecks and reefs when the weather allows. That includes the 911-foot USS Oriskany.",
  },
  {
    title: "Dive sites",
    href: "/dive",
    cta: "See dive sites",
    image: "/photos/baitball.jpg",
    imageAlt: "Diver approaching a dense school of fish in open water",
    body: "Shore dives to 50′, nearshore wrecks, midshore reefs, and 20+ miles offshore. From Fort Pickens to the Mighty O.",
  },
];

export const courses = [
  {
    index: "01",
    title: "Discover Scuba",
    href: "/courses/discover-scuba",
    note: "Pool intro",
  },
  {
    index: "02",
    title: "Open Water",
    href: "/courses/open-water",
    note: "$389 · the foundation",
  },
  {
    index: "03",
    title: "Advanced Open Water",
    href: "/courses/advanced-open-water",
    note: "Go deeper",
  },
  {
    index: "04",
    title: "Nitrox",
    href: "/courses/nitrox",
    note: "Enriched air",
  },
  {
    index: "05",
    title: "Rescue Diver",
    href: "/courses/rescue-diver",
    note: "The turning point",
  },
  {
    index: "06",
    title: "Specialties",
    href: "/courses/specialties",
    note: "Your niche",
  },
  {
    index: "07",
    title: "Master Scuba Diver",
    href: "/courses/master-diver",
    note: "The highest non-pro",
  },
  {
    index: "08",
    title: "Divemaster",
    href: "/courses/divemaster",
    note: "Go pro",
  },
];

export const diveSites = [
  {
    index: "01",
    title: "Shore / beach",
    href: "/dive/shore-dives",
    range: "From the sand",
    depth: "10′ – 50′",
    image: "/photos/surface.jpg",
    imageAlt: "Diver at the surface with SCUBAPRO kit, split above and below the waterline",
  },
  {
    index: "02",
    title: "Nearshore",
    href: "/dive/nearshore",
    range: "1 – 9 NM",
    depth: "30′ – 80′",
    image: "/photos/barracuda.jpg",
    imageAlt: "Divers with yellow fins under a school of barracuda",
  },
  {
    index: "03",
    title: "Midshore",
    href: "/dive/midshore",
    range: "10 – 19 NM",
    depth: "70′ – 110′",
    image: "/photos/reef-ascent.jpg",
    imageAlt: "Diver looking up from a reef toward the surface",
  },
  {
    index: "04",
    title: "Offshore",
    href: "/dive/offshore",
    range: "20+ NM",
    depth: "80′ – 130′+",
    image: "/photos/lime-diver.jpg",
    imageAlt: "Diver hovering in deep blue water with lime fins",
  },
];

export const processSteps = [
  {
    index: "1",
    title: "Talk to us",
    body: "Walk in or call. Tell us your goals, your schedule, and whether you've ever been underwater.",
  },
  {
    index: "2",
    title: "Learn on site",
    body: "eLearning at your pace. Then pool and classroom here: 54,000 gallons, 12′ deep, heated, indoor.",
  },
  {
    index: "3",
    title: "Dive the Gulf",
    body: "Four open-water dives over two days on local sites. Gear is provided. Weather and tides set the clock.",
  },
  {
    index: "4",
    title: "Keep diving",
    body: "Fills, service, rentals, charters, specialties. The shop that certified you is still here when you need a wrench or a boat.",
  },
];

export const reviews = [
  {
    quote:
      "Best dive shop in the area! Staff is very knowledgeable, and friendly.",
    name: "H2O Below",
    source: "Google · 2026",
  },
  {
    quote:
      "I just moved here from Tennessee and am a SCUBA instructor, I can't brag on this dive shop enough! Their prices are great, the servicing of equipment is lightning fast and they carry the best of the best gear.",
    name: "Grant Chapman",
    source: "Google · 2026",
  },
  {
    quote:
      "Always a pleasure visiting Dive Pros. They are always willing to answer my multitude of questions.",
    name: "Robert Booth",
    source: "Google · 2026",
  },
  {
    quote:
      "I received my open water certification. Dive Pros provided ongoing communication for class. The training was excellent, detailed and accommodating to each person’s level. Gracie is an amazing instructor with so much patience.",
    name: "Katie Bergeron",
    source: "Google · 2026",
  },
  {
    quote:
      "Amazing! My entire family became scuba certified at Dive Pros with Clay. It was such a great class and experience, I came back for the advance certification. Instructor Jamie Robbins was beyond patient and kind! He helped me so much. I have gained the confidence I need for advance diving and nitrox!",
    name: "Maureen Harden",
    source: "Google · 2026",
  },
  {
    quote:
      "Great experience getting certified for scuba here. Mr. Sims is very knowledgeable and patient with us students. A+",
    name: "Brian McCullough",
    source: "Google · 2026",
  },
  {
    quote:
      "Greg and Patricia are amazing dive instructors! If you happen to get them for your open water dive class you are blessed indeed. They will set you up with a solid foundation from which to start your journey as a diver. Truly great people!",
    name: "Alex",
    source: "Google · 2026",
  },
  {
    quote: "Friendly staff. Great shop, good prices.",
    name: "Tom Liberty",
    source: "Google · 2026",
  },
  {
    quote:
      "As a former dive shop co-owner and assistant instructor I was careful choosing a shop for a friend’s certification and was very pleased with the thoroughness, safety and pleasure of the entire experience. No high pressure on sales or classes.",
    name: "Ann H.",
    source: "Google · 2021",
  },
  {
    quote:
      "We took a group trip to Pensacola to dive the USS Oriskany and Dive Pros took care of us like we were family. Their staff is amazing and the facility is unbelievable.",
    name: "Joshua H.",
    source: "Facebook · 2016",
  },
  {
    quote:
      "This is by far the best dive shop on the Gulf Coast. The most professional employees, the nicest facility, and they care about the community and our beaches.",
    name: "Megan L.",
    source: "Google · 2021",
  },
  {
    quote:
      "My 10 year old and I attended the open water class and it was nothing but amazing. We both came out with confidence and knowledge.",
    name: "John C.",
    source: "Facebook · 2020",
  },
];
