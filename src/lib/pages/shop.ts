import type { EditorialPageData } from "./types";

export const shopPages: EditorialPageData[] = [
  {
    path: "/shop",
    title: "Shop & service",
    kicker: "Retail",
    description:
      "Dive Pros retail, rentals, repairs, and gas fills. SCUBAPRO and Aqua Lung dealer in Pensacola.",
    image: "/photos/shop-floor.jpg",
    imageAlt: "Dive Pros retail floor: display cases, wetsuits, and the service counter",
    intro:
      "Over 2,000 square feet of retail. Authorized dealer for SCUBAPRO and Aqua Lung / Apeks, including military, public safety, and law enforcement, plus computers, wetsuits, cameras, bags, and spearfishing. If we sell it, we can service it.",
    stats: [
      { value: "2,000+", label: "Sq ft of retail" },
      { value: "4500", label: "PSI fill capability" },
      { value: "Full-time", label: "Factory-trained techs" },
    ],
    paths: [
      {
        index: "01",
        title: "Gas fills",
        href: "/shop/air-fills",
        note: "Air, Nitrox, tech gas",
      },
      {
        index: "02",
        title: "Equipment service",
        href: "/shop/repairs",
        note: "Regs, BCDs, cylinders",
      },
      {
        index: "03",
        title: "Rentals",
        href: "/shop/rentals",
        note: "Kits, cylinders, packages",
      },
      {
        index: "04",
        title: "Tank inspection",
        href: "/shop/tank-inspection",
        note: "VIP + hydro",
      },
    ],
    cta: { label: "See fill rates", href: "/shop/air-fills" },
    staff: true,
    related: [
      { label: "Facilities", href: "/about/facilities" },
      { label: "Visit the shop", href: "/contact" },
    ],
  },
  {
    path: "/shop/air-fills",
    title: "Gas fills",
    kicker: "Services",
    description:
      "Air, Nitrox, and oxygen fills at Dive Pros: custom blending station, fills while you wait for most Nitrox 36% and below.",
    image: "/photos/fill-station.jpg",
    imageAlt: "Enriched Air Nitrox blending panel and fill whips at Dive Pros",
    intro:
      "The finest gas blending and fill station in the southeast. Multiple large-volume compressors, hyper filtration, and huge storage. Clean air to 4500 psi, plus the base gas for custom Enriched Air. An oxygen-clean Haskell booster handles technical blends and 100% oxygen for emergency supplies.",
    stats: [
      { value: "10,000+", label: "Cu ft premixed Nitrox on hand" },
      { value: "4500", label: "PSI capability" },
      { value: "300", label: "PSI per minute dry fills" },
    ],
    sections: [
      {
        heading: "How we fill",
        body: [
          "With large banks of premixed Nitrox, cylinders are not required to be oxygen-cleaned for mixes 36% and below. Multiple fill whips, standard and DIN. Quarterly air samples go to independent Florida-approved labs. Current results and certifications are posted at the fill station.",
          "We support firefighters and emergency services and can fill SCBA life-support equipment as needed. We also fill HPA air-rifle and paintball cylinders up to 4500 psi for composite tanks (air only, no CO2).",
        ],
      },
    ],
    rateGroups: [
      {
        heading: "Air fills",
        rates: [
          { item: "Standard air (up to 120 cf / 3500 psi)", price: "$6.95" },
          { item: "Pony bottle (up to 40 cf / 3000 psi)", price: "$5.50" },
          { item: "High volume / pressure (up to 150 cf / 4500 psi)", price: "$8.50" },
        ],
      },
      {
        heading: "Nitrox fills up to 36%",
        rates: [
          { item: "Standard Nitrox (up to 130 cf / 3500 psi)", price: "$12.95" },
          { item: "Pony bottle (up to 40 cf / 3500 psi)", price: "$9.25" },
          { item: "High volume Nitrox (up to 150 cf / 4500 psi)", price: "$14.25" },
        ],
      },
      {
        heading: "Tech gas fills",
        rates: [
          { item: "100% oxygen (up to 3500 psi)", price: "$0.75 / ft³" },
          { item: "40%–80% (up to 40 cf / 3500 psi)", price: "$16" },
          { item: "40%–80% (up to 80 cf / 3500 psi)", price: "$20" },
        ],
      },
    ],
    cta: { label: "Hours & visit", href: "/contact" },
    related: [
      { label: "Nitrox course", href: "/courses/nitrox" },
      { label: "Equipment service", href: "/shop/repairs" },
    ],
    footnote:
      "Air and Nitrox fill cards available. Rates effective 02/01/2023. Prices subject to change without notice.",
  },
  {
    path: "/shop/repairs",
    title: "Equipment service",
    kicker: "Services",
    description:
      "Factory-trained SCUBA technicians at Dive Pros: regulators, BCDs, cylinders. Usually back in the water in under a week.",
    image: "/photos/fill-station.jpg",
    imageAlt: "Fill station and Nitrox tanks in the service bay",
    intro:
      "SCUBA equipment is life support. Full-time factory-trained, authorized technicians service most major brands to manufacturer spec, with test gear, specialty tools, and an extensive parts inventory. Honest assessment. Options that usually have you back in the water in less than a week.",
    stats: [
      { value: "<1 wk", label: "Typical turnaround" },
      { value: "$50/hr", label: "General labor, 1 hr min" },
    ],
    rateGroups: [
      {
        heading: "Cylinders",
        rates: [
          { item: "Visual inspection (includes air fill)", price: "$17", note: "+$6 Nitrox" },
          { item: "Hydro / visual inspection", price: "$45", note: "+$6 Nitrox" },
          { item: "Cylinder tumbling (steel)", price: "$40" },
          { item: "Oxygen cleaning: includes VIP (cylinder & valve)", price: "$50" },
          { item: "Cylinder valve overhaul", price: "$15", note: "Parts not included" },
        ],
      },
      {
        heading: "Regulator / BC annual maintenance",
        rates: [
          {
            item: "Regulator overhaul (1st, 2nd, octopus)",
            price: "$80",
            note: "Parts not included",
          },
          { item: "Regulator overhaul (1st / 2nd only)", price: "$60" },
          { item: "Regulator overhaul (1st stage only)", price: "$40" },
          { item: "Regulator overhaul (2nd stage only)", price: "$20" },
          { item: "Oxygen-clean 1st stage (includes overhaul)", price: "$65" },
          { item: "Buoyancy compensator safety inspection", price: "$20" },
          { item: "BCD inflator overhaul", price: "$15", note: "Parts not included" },
          { item: "Regulator safety inspection", price: "$20" },
        ],
      },
      {
        heading: "Rush service",
        rates: [
          { item: "72-hour guarantee", price: "$15" },
          { item: "48-hour guarantee", price: "$20" },
          { item: "24-hour guarantee", price: "$25", note: "Manager approval" },
          {
            item: "Same-day guarantee",
            price: "$40",
            note: "In by noon / out by 6p · manager approval",
          },
        ],
      },
    ],
    cta: { label: "Drop gear at the shop", href: "/contact" },
    related: [
      { label: "Tank inspection", href: "/shop/tank-inspection" },
      { label: "Rentals", href: "/shop/rentals" },
    ],
    footnote:
      "Prices include lubricants, cleaning solutions, and incidental repair materials. Replacement parts are not included. Brands we service include Scubapro, Aqua Lung, Apeks, Dive Rite, Sherwood, Genesis, and more.",
  },
  {
    path: "/shop/rentals",
    title: "Equipment rental",
    kicker: "Services",
    description:
      "SCUBA rentals at Dive Pros: Scubapro and Aqua Lung kits, air or Nitrox cylinders, and packages for charters.",
    image: "/photos/boat-fins.jpg",
    imageAlt: "Rental fins hanging on a dive boat rail",
    intro:
      "Traveling for a local charter, or still deciding what to buy? The rental locker is Scubapro and Aqua Lung across a wide size range. Cylinders in air or Nitrox, 63 to 120 cubic feet, steel or aluminum, yoke or DIN.",
    stats: [
      { value: "$44.95", label: "Standard SCUBA package" },
      { value: "$69.95", label: "Premium package" },
    ],
    sections: [
      {
        heading: "To rent",
        body: [
          "Proof of certification and a valid driver’s license or ID. Signed liability waiver. A parent or guardian signs for minors. Rates subject to change without notice.",
        ],
      },
    ],
    rateGroups: [
      {
        heading: "Items",
        rates: [
          { item: "Buoyancy compensator", price: "$18" },
          { item: "Regulator system", price: "$18" },
          { item: "Dive computer (wrist)", price: "$20" },
          { item: "Wetsuit fullsuit", price: "$16" },
          { item: "Wetsuit shorty", price: "$9" },
          { item: "Hood", price: "$5" },
          { item: "Dive mask & snorkel", price: "$12" },
          { item: "Dive fins (full foot or open heel)", price: "$12" },
          { item: "Weights", price: "$.50 / lb" },
          { item: "Dive light", price: "$10" },
          { item: "Dive flag / float", price: "$10" },
        ],
      },
      {
        heading: "Cylinders",
        rates: [
          { item: "Aluminum 80 cf air", price: "$10" },
          { item: "Aluminum 63 cf air", price: "$9" },
          { item: "Aluminum 80 cf Nitrox", price: "$16.50" },
          { item: "Steel HP 100 cf air", price: "$12.50" },
          { item: "Steel HP 100 cf Nitrox", price: "$20" },
          { item: "Steel HP 120 cf Nitrox", price: "$21.50" },
        ],
      },
      {
        heading: "Packages",
        rates: [
          {
            item: "Standard SCUBA package",
            price: "$44.95",
            note: "(2) AL80 air, BCD, regulator, weights",
          },
          {
            item: "Premium SCUBA package",
            price: "$69.95",
            note: "(2) AL80 air, premium BCD, premium balanced regulator, weights",
          },
          {
            item: "Snorkeling package",
            price: "$25",
            note: "Mask, snorkel, fins: premium dive quality",
          },
        ],
      },
      {
        heading: "Package add-ons",
        rates: [
          { item: "Wetsuit", price: "$10", note: "Men’s or women’s 3mm, 5mm, or shorty" },
          { item: "Computer", price: "$10", note: "Wrist air / Nitrox computer" },
          { item: "Nitrox upgrade", price: "$10", note: "(2) AL80 Nitrox cylinders" },
        ],
      },
    ],
    cta: { label: "Call for availability", href: "/contact" },
    related: [
      { label: "Charters", href: "/dive/charters" },
      { label: "Gas fills", href: "/shop/air-fills" },
    ],
  },
  {
    path: "/shop/tank-inspection",
    title: "Tank inspection",
    kicker: "Services",
    description:
      "Visual and hydro cylinder inspections at Dive Pros: $17 VIP including air fill.",
    image: "/photos/fill-station.jpg",
    imageAlt: "Nitrox cylinders at the Dive Pros fill station",
    intro:
      "Visual cylinder inspection is $17 and includes an air fill. Add $6 for Nitrox. Hydro with visual is $45. Oxygen cleaning and valve overhauls happen in the same bay.",
    stats: [
      { value: "$17", label: "VIP + air fill" },
      { value: "$45", label: "Hydro / visual" },
    ],
    rateGroups: [
      {
        heading: "Cylinder work",
        rates: [
          { item: "Visual inspection (includes air fill)", price: "$17", note: "+$6 Nitrox" },
          { item: "Hydro / visual inspection", price: "$45", note: "+$6 Nitrox" },
          { item: "Steel tumbling", price: "$40" },
          { item: "Oxygen cleaning: VIP cylinder & valve", price: "$50" },
          { item: "Valve overhaul", price: "$15", note: "Parts extra" },
        ],
      },
    ],
    cta: { label: "Drop cylinders", href: "/contact" },
    related: [{ label: "Full service menu", href: "/shop/repairs" }],
  },
  {
    path: "/shop/gear-service",
    title: "Gear service",
    kicker: "Services",
    description:
      "Regulator, BCD, and cylinder service at Dive Pros by factory-trained technicians.",
    image: "/photos/fill-station.jpg",
    imageAlt: "Gas blending panel and service bay at Dive Pros",
    intro:
      "Annual regulator service, BCD inspections, inflator overhauls, oxygen cleaning. Same-day rush exists: in by noon, out by 6, with the service manager’s approval.",
    stats: [
      { value: "$80", label: "Full regulator overhaul" },
      { value: "$40", label: "Same-day rush" },
    ],
    cta: { label: "See the full menu", href: "/shop/repairs" },
    related: [{ label: "Equipment service", href: "/shop/repairs" }],
  },
];
