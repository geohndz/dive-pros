export type PageStat = {
  value: string;
  label: string;
};

export type PageModule = {
  index: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  list?: string[];
  tags?: string[];
};

export type PageSite = {
  name: string;
  depth: string;
  location?: string;
  coords?: string;
  body?: string;
};

export type PageRate = {
  item: string;
  price: string;
  note?: string;
};

export type PageRateGroup = {
  heading: string;
  rates: PageRate[];
};

export type PageOperator = {
  name: string;
  contact: string;
  body: string;
};

export type PageDetailCard = {
  title: string;
  meta?: string;
  body: string;
  tags?: string[];
};

export type PagePath = {
  index: string;
  title: string;
  href: string;
  note: string;
};

export type PageGalleryImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type PageCard = {
  index: string;
  title: string;
  body: string;
  href: string;
  image: string;
  imageAlt: string;
};

export type EditorialPageData = {
  path: string;
  title: string;
  kicker: string;
  description: string;
  image: string;
  imageAlt: string;
  intro: string;
  stats?: PageStat[];
  modules?: PageModule[];
  sections?: Array<{
    heading?: string;
    body?: string[];
    list?: string[];
    cards?: PageCard[];
    after?: string[];
    tags?: string[];
  }>;
  sites?: PageSite[];
  rateGroups?: PageRateGroup[];
  operators?: PageOperator[];
  catalog?: {
    heading?: string;
    items: PageDetailCard[];
  };
  paths?: PagePath[];
  tables?: Array<{
    heading: string;
    caption?: string;
    rows: Array<{ name: string; notes: string; depth: string; coords: string }>;
  }>;
  cta?: { label: string; href: string };
  related?: Array<{ label: string; href: string }>;
  footnote?: string;
  staff?: boolean;
  gallery?: {
    heading?: string;
    images: PageGalleryImage[];
  };
  video?: {
    heading?: string;
    youtubeId: string;
    title: string;
  };
  map?: {
    heading: string;
    body: string;
    name: string;
    lines: string[];
  };
};
