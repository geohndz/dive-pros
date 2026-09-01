export type NavLink = {
  label: string;
  href: string;
};

export type NavColumn = {
  title: string;
  links: NavLink[];
};

export type NavFeatured = {
  label: string;
  title: string;
  description: string;
  cta: NavLink;
  image: string;
  imageAlt: string;
};

export type NavItem = {
  id: string;
  label: string;
  href: string;
  viewAll?: string;
  columns?: NavColumn[];
  featured?: NavFeatured;
};

export const navItems: NavItem[] = [
  {
    id: "courses",
    label: "Courses",
    href: "/courses",
    viewAll: "All courses",
    columns: [
      {
        title: "Getting started",
        links: [
          { label: "Discover Scuba", href: "/courses/discover-scuba" },
          { label: "Open Water", href: "/courses/open-water" },
          { label: "Schedule a class", href: "/courses/schedule" },
        ],
      },
      {
        title: "Continue learning",
        links: [
          { label: "Advanced Open Water", href: "/courses/advanced-open-water" },
          { label: "Rescue Diver", href: "/courses/rescue-diver" },
          { label: "Nitrox", href: "/courses/nitrox" },
        ],
      },
      {
        title: "Professional",
        links: [
          { label: "Specialties", href: "/courses/specialties" },
          { label: "Master Diver", href: "/courses/master-diver" },
          { label: "Divemaster", href: "/courses/divemaster" },
          { label: "Technical", href: "/courses/technical" },
        ],
      },
    ],
    featured: {
      label: "Start here",
      title: "Open Water",
      description: "$389. New classes every week. 12′ indoor tank on site.",
      cta: { label: "View Open Water", href: "/courses/open-water" },
      image: "/photos/pool-orange.jpg",
      imageAlt: "Open water student standing in kit in the pool",
    },
  },
  {
    id: "dive",
    label: "Dive",
    href: "/dive",
    viewAll: "All dive sites",
    columns: [
      {
        title: "Dive experiences",
        links: [
          { label: "Charters", href: "/dive/charters" },
          { label: "Guided Trips", href: "/dive/guided-trips" },
          { label: "Spearfishing", href: "/dive/spearfishing" },
        ],
      },
      {
        title: "Dive sites",
        links: [
          { label: "Shore Dives", href: "/dive/shore-dives" },
          { label: "USS Oriskany", href: "/dive/uss-oriskany" },
          { label: "All dive sites", href: "/dive/all-sites" },
        ],
      },
      {
        title: "Explore",
        links: [
          { label: "Nearshore", href: "/dive/nearshore" },
          { label: "Midshore", href: "/dive/midshore" },
          { label: "Offshore", href: "/dive/offshore" },
          { label: "Artificial reefs", href: "/dive/artificial-reefs" },
        ],
      },
    ],
    featured: {
      label: "The Mighty O",
      title: "USS Oriskany",
      description: "The world’s largest artificial reef. 26.5 NM out. Island at 84′.",
      cta: { label: "Dive the Oriskany", href: "/dive/uss-oriskany" },
      image: "/photos/wreck-hatch.jpg",
      imageAlt: "Divers silhouetted inside a wreck hatch",
    },
  },
  {
    id: "shop",
    label: "Shop",
    href: "/shop",
    viewAll: "The shop",
    columns: [
      {
        title: "Equipment",
        links: [
          { label: "Rentals", href: "/shop/rentals" },
          { label: "Repairs", href: "/shop/repairs" },
          { label: "Air Fills", href: "/shop/air-fills" },
        ],
      },
      {
        title: "Services",
        links: [
          { label: "Tank Inspection", href: "/shop/tank-inspection" },
          { label: "Gear Service", href: "/shop/gear-service" },
        ],
      },
    ],
    featured: {
      label: "The bench",
      title: "Equipment service",
      description: "Factory-trained techs. Usually back in the water in under a week.",
      cta: { label: "View service pricing", href: "/shop/repairs" },
      image: "/photos/fill-station.jpg",
      imageAlt: "Nitrox blending panel in the service bay",
    },
  },
  {
    id: "about",
    label: "About",
    href: "/about",
    viewAll: "About Dive Pros",
    columns: [
      {
        title: "About Dive Pros",
        links: [
          { label: "Our story", href: "/about" },
          { label: "Facilities", href: "/about/facilities" },
          { label: "Our staff", href: "/about/staff" },
          { label: "Links", href: "/about/links" },
        ],
      },
    ],
    featured: {
      label: "The shop",
      title: "Who are these guys?",
      description: "2,000 sq ft of retail, two classrooms, and a 54,000-gallon indoor pool.",
      cta: { label: "Our story", href: "/about" },
      image: "/photos/shop-floor.jpg",
      imageAlt: "Dive Pros retail floor from the front of the shop",
    },
  },
  {
    id: "gallery",
    label: "Gallery",
    href: "/gallery",
  },
];
