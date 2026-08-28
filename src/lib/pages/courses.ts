import type { EditorialPageData } from "./types";

export const coursePages: EditorialPageData[] = [
  {
    path: "/courses",
    title: "Learn to dive",
    kicker: "Training",
    description:
      "PADI training at Dive Pros in Pensacola, from Discover Scuba to Divemaster. On-site 12′ indoor heated tank. New classes every week.",
    image: "/photos/pool-check.jpg",
    imageAlt: "Diver checking inflator hose in the training pool",
    intro:
      "SCUBA training. It’s what we do. Since 1988 the Dive Pros have raised the bar for every program on the Gulf Coast. The goal is not a card. It is a diver who is competent, confident, and comfortable. Certification never expires. Get everything you can from the course while you are in it.",
    stats: [
      { value: "1988", label: "Training since" },
      { value: "12′", label: "Indoor heated tank" },
      { value: "Weekly", label: "New Open Water classes" },
    ],
    sections: [
      {
        heading: "Safety through education",
        body: [
          "Some programs sell speed. We do not. You would not pick a pilot school because it was quicker. You will find this program thorough and efficient, and as fun as it is serious.",
          "Instruction is delivered by professional instructors bound to that standard. Each is selected for knowledge, skill, and a love of diving. The team works past the minimums required by agency standards.",
        ],
      },
    ],
    paths: [
      {
        index: "01",
        title: "Discover Scuba",
        href: "/courses/discover-scuba",
        note: "$99 · pool intro",
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
        note: "$379.95 · incl. boat dive",
      },
      {
        index: "04",
        title: "Nitrox",
        href: "/courses/nitrox",
        note: "$179.95 · enriched air",
      },
      {
        index: "05",
        title: "Rescue Diver",
        href: "/courses/rescue-diver",
        note: "$279.95 · the turning point",
      },
      {
        index: "06",
        title: "Specialties",
        href: "/courses/specialties",
        note: "$129.95–$249.95",
      },
      {
        index: "07",
        title: "Master Scuba Diver",
        href: "/courses/master-diver",
        note: "Fewer than 2% of divers",
      },
      {
        index: "08",
        title: "Divemaster / Instructor",
        href: "/courses/divemaster",
        note: "Go pro · call for pricing",
      },
    ],
    cta: { label: "Start with Open Water", href: "/courses/open-water" },
    related: [
      { label: "Schedule a class", href: "/courses/schedule" },
      { label: "Facilities", href: "/about/facilities" },
    ],
    footnote:
      "Technical training (decompression, advanced nitrox / trimix, cavern and cave) lives outside recreational limits. Call the shop if that is the path.",
  },
  {
    path: "/courses/discover-scuba",
    title: "Discover Scuba",
    kicker: "Getting started",
    description:
      "PADI Discover Scuba at Dive Pros: $99 in our on-site heated pool. No certification required.",
    image: "/photos/facility-pool.jpg",
    imageAlt: "On-site indoor heated training tank at Dive Pros",
    intro:
      "A quick briefing with a professional instructor and you will be underwater blowing bubbles. Discover Scuba is how you feel the sport before you commit to a card, in the same 12′ indoor heated tank your Open Water classmates will train in.",
    stats: [
      { value: "$99", label: "Session" },
      { value: "2 hrs", label: "Typical length" },
      { value: "Pool", label: "On-site heated tank" },
    ],
    modules: [
      {
        index: "01",
        title: "Classroom",
        body: "About 20–30 minutes covering the safety basics before you get wet.",
      },
      {
        index: "02",
        title: "Pool time",
        body: "About 1.5 hours learning basic dive skills and trying SCUBA with an instructor in the water.",
      },
      {
        index: "03",
        title: "What to bring",
        body: "Bathing suit and a towel. All equipment is provided. You need a completed medical questionnaire and liability release.",
      },
    ],
    sections: [
      {
        heading: "Private sessions",
        body: [
          "Available by request, subject to instructor availability. $149 for one-on-one, or $129 per person for groups of two or more.",
        ],
      },
    ],
    cta: { label: "Check the schedule", href: "/courses/schedule" },
    related: [
      { label: "Open Water", href: "/courses/open-water" },
      { label: "Contact the shop", href: "/contact" },
    ],
  },
  {
    path: "/courses/open-water",
    title: "Open Water",
    kicker: "The foundation",
    description:
      "PADI Open Water Diver at Dive Pros: $389 ($359 military). eLearning, on-site pool, four Gulf dives. Classes every week.",
    image: "/photos/pool-orange.jpg",
    imageAlt: "Diver standing in shallow water in full kit, orange wetsuit panels",
    intro:
      "The foundation to a lifetime of adventure. Quality training by caring professionals. Course tuition and PADI eLearning included. Lifetime, internationally recognized certification.",
    stats: [
      { value: "$389", label: "Course tuition + eLearning" },
      { value: "$359", label: "Active duty / veterans" },
      { value: "4", label: "Open water dives" },
    ],
    modules: [
      {
        index: "01",
        title: "Academics",
        body: "eLearning at your own pace, then dive science and safety, equipment, the aquatic environment, the buddy system, and computers. Dive tables are optional.",
        list: [
          "PADI eLearning access and materials",
          "Student record file",
          "Lifetime / internationally recognized certification",
        ],
      },
      {
        index: "02",
        title: "Pool training",
        body: "Custom-built 12′ indoor heated tank on site. No travel to a rec center. Multiple sessions to build confidence, competence, and comfort in a controlled environment.",
        list: [
          "Equalization",
          "Neutral buoyancy",
          "Controlled descents and ascents",
          "Emergency ascents",
        ],
      },
      {
        index: "03",
        title: "Open water dives",
        body: "Four dives over two days on local sites. Apply the pool skills. Gear provided. Gradual transition to independence. We will not rush a skill to keep a calendar.",
      },
    ],
    sections: [
      {
        heading: "You provide",
        body: ["Mask, fins, snorkel, bathing suit, and a towel. Booties, gloves, and a gear bag are recommended, not required."],
      },
      {
        heading: "We provide",
        body: [
          "Cylinders, regulator system, BCD, a dive computer you wear yourself (no sharing), wetsuits, weight belts and weights.",
        ],
      },
      {
        heading: "Additional fees",
        body: [
          "Some may apply: park entrance (Fort Pickens National Seashore, Vortex Springs), optional charter boat fees, Pensacola Beach tolls.",
        ],
      },
    ],
    cta: { label: "See class schedules", href: "/courses/schedule" },
    related: [
      { label: "Advanced Open Water", href: "/courses/advanced-open-water" },
      { label: "Discover Scuba", href: "/courses/discover-scuba" },
    ],
    footnote:
      "Military discount is for active duty and veterans. Dependents do not qualify. All students complete the PADI medical form and a swim evaluation. Open-water times depend on weather, tides, events, and site access.",
  },
  {
    path: "/courses/schedule",
    title: "Schedule a class",
    kicker: "Training",
    description:
      "New Open Water scuba classes start every week at Dive Pros in Pensacola. One-week, two-weekend, and private schedules.",
    image: "/photos/godrays.jpg",
    imageAlt: "Divers ascending toward the surface",
    intro:
      "PADI eLearning must be finished before your first in-shop session. New classes start every week. Open-water dives depend on weather, tides, and site access, so build slack into travel plans.",
    stats: [
      { value: "Weekly", label: "New classes start" },
      { value: "2", label: "Schedule tracks" },
      { value: "Private", label: "1:1, families, groups" },
    ],
    modules: [
      {
        index: "01",
        title: "One-week track",
        body: "Evenings plus a weekend on the Gulf. eLearning done before Wednesday.",
        list: [
          "Wednesday 6–9p: orientation / review",
          "Thursday 6–9p: pool",
          "Friday 6–9p: pool",
          "Saturday: open water dives",
          "Sunday: open water dives",
        ],
      },
      {
        index: "02",
        title: "Two-weekend track",
        body: "Pool one weekend, open water the next. Pick up rental gear Friday afternoon or evening before the dives.",
        list: [
          "Saturday 1, 9a–2p: orientation, review, and pool",
          "Sunday 1, 9a–2p: pool",
          "Friday before OW: pick up rental gear",
          "Saturday 2: open water dives",
          "Sunday 2: open water dives",
        ],
      },
      {
        index: "03",
        title: "Private classes",
        body: "Instruction that fits your calendar. One-on-one, families, or small groups. Groups of six or more can receive a private course at no additional charge.",
      },
    ],
    cta: { label: "Contact the shop", href: "/contact" },
    related: [
      { label: "Open Water details", href: "/courses/open-water" },
      { label: "Discover Scuba", href: "/courses/discover-scuba" },
    ],
  },
  {
    path: "/courses/advanced-open-water",
    title: "Advanced Open Water",
    kicker: "Continue learning",
    description:
      "PADI Advanced Open Water at Dive Pros: $379.95 including a boat dive. Deep, navigation, and Gulf specialties.",
    image: "/photos/lime-diver.jpg",
    imageAlt: "Diver in deep blue water",
    intro:
      "Build confidence and expand your skills by diving different specialties under an instructor. You develop as a diver while you find new ways to have fun in the Gulf. Course price includes tuition, learning materials, and a boat dive.",
    stats: [
      { value: "$379.95", label: "Tuition, materials, boat dive" },
      { value: "5", label: "Adventure dives" },
      { value: "3 hrs", label: "Academics" },
    ],
    modules: [
      {
        index: "01",
        title: "Required dives",
        body: "Deep and underwater navigation are required. The rest of the slate is how we actually dive Pensacola.",
        list: ["Deep dive", "Underwater navigation"],
      },
      {
        index: "02",
        title: "Electives",
        body: "Search and recovery, night, wreck, peak buoyancy, boat, and more, chosen with your instructor.",
      },
      {
        index: "03",
        title: "How it runs",
        body: "About three hours of academics, typically a weeknight 6–9p. Five open-water dives, typically Saturday and Sunday, times TBD.",
      },
    ],
    sections: [
      {
        heading: "Gear & fees",
        body: [
          "Rental equipment is not included. Students in training get 25% off rentals. Park entrance (Fort Pickens, Vortex Springs) and Pensacola Beach tolls may apply.",
        ],
        list: [
          "Compass: required",
          "Dive knife or line cutter: required",
          "Dive light / marker light: required for optional night dive (lights available to rent)",
        ],
      },
    ],
    cta: { label: "Ask about the next course", href: "/contact" },
    related: [
      { label: "Nitrox", href: "/courses/nitrox" },
      { label: "Rescue Diver", href: "/courses/rescue-diver" },
    ],
  },
  {
    path: "/courses/nitrox",
    title: "Nitrox",
    kicker: "Continue learning",
    description:
      "PADI Enriched Air (Nitrox) Diver at Dive Pros: $179.95. Longer no-stop time on Pensacola reefs and wrecks.",
    image: "/photos/fill-station.jpg",
    imageAlt: "Enriched Air Nitrox blending panel at Dive Pros",
    intro:
      "Standard air is about 21% oxygen. Mixes with more oxygen are Enriched Air Nitrox (EANx), or Nitrox. It is the most popular PADI specialty because it gives you more no-stop time, especially on repetitive dives. Stay down longer. Get back in sooner.",
    stats: [
      { value: "$179.95", label: "Tuition + eLearning" },
      { value: "1–2 hrs", label: "Practical session" },
      { value: "12+", label: "Minimum age" },
    ],
    modules: [
      {
        index: "01",
        title: "Why Nitrox",
        body: "Higher oxygen, lower nitrogen, longer no-decompression limits, shorter surface intervals, less nitrogen absorbed.",
      },
      {
        index: "02",
        title: "What you learn",
        body: "Managing oxygen exposure limits, enriched-air equipment, and how to plan the dive you actually want to do.",
        list: [
          "Analyze oxygen content in your cylinder",
          "Filling, logging, and labeling procedures",
          "Set and plan dives on a computer with enriched air",
        ],
      },
      {
        index: "03",
        title: "How it runs",
        body: "Finish the online portion, then schedule a 1–2 hour practical with an Enriched Air instructor. No additional training dives are required to earn the rating. You need a current Open Water certification or higher.",
      },
    ],
    cta: { label: "Book a practical", href: "/contact" },
    related: [
      { label: "Gas fills", href: "/shop/air-fills" },
      { label: "Advanced Open Water", href: "/courses/advanced-open-water" },
    ],
  },
  {
    path: "/courses/rescue-diver",
    title: "Rescue Diver",
    kicker: "Continue learning",
    description:
      "PADI Rescue Diver at Dive Pros: $279.95. Includes tuition and learning materials. Minor and major dive emergencies.",
    image: "/photos/shaka.jpg",
    imageAlt: "Diver silhouetted in deep blue, making a shaka sign",
    intro:
      "The Rescue Diver course is designed to prepare you to deal with both minor and major dive emergencies. Rescue divers are trained to recognize and respond to emergency situations should they arise and provide immediate first aid and life support. You will become more confident in your skills as a diver through knowledge development and several rescue scenarios and exercises.",
    stats: [
      { value: "$279.95", label: "Tuition + learning materials" },
    ],
    sections: [
      {
        heading: "Topics and scenarios",
        body: [
          "Self-rescue, emergency management, and first aid, in the classroom and in the water.",
        ],
        list: [
          "Self-rescue",
          "Recognizing and managing stress in other divers",
          "Emergency management and equipment",
          "Rescuing panicked divers",
          "Rescuing unresponsive divers",
          "Dive first aid",
        ],
      },
    ],
    video: {
      heading: "The course",
      youtubeId: "YNdo9tcgzpM",
      title: "PADI Rescue Diver course",
    },
    cta: { label: "Talk to an instructor", href: "/contact" },
    related: [
      { label: "Specialties", href: "/courses/specialties" },
      { label: "Divemaster", href: "/courses/divemaster" },
    ],
  },
  {
    path: "/courses/specialties",
    title: "Specialty diver",
    kicker: "Continue learning",
    description:
      "PADI specialty courses at Dive Pros: $129.95–$249.95. Wreck, deep, night, navigation, and more.",
    image: "/photos/baitball.jpg",
    imageAlt: "Diver approaching a school of fish",
    intro:
      "Expand knowledge, skills, and interest. Time, dive count, and price vary by course, so call if you need the exact slate. Specialties count toward Master Scuba Diver.",
    stats: [
      { value: "$129.95", label: "From" },
      { value: "$249.95", label: "To" },
    ],
    sections: [
      {
        heading: "Courses we run",
        body: ["Tuition and learning materials included. Prices vary by course."],
        list: [
          "Deep Diver",
          "Enriched Air Diver",
          "Night Diver",
          "Wreck Diver",
          "Underwater Navigation",
          "Search & Recovery",
          "Digital Underwater Photo / Video",
          "Peak Performance Buoyancy",
          "Emergency Oxygen Provider",
          "Equipment Specialist",
          "Dry Suit Diver",
          "Sidemount Diver",
          "Dive Against Debris",
          "Emergency First Response: CPR / First Aid",
        ],
      },
    ],
    cta: { label: "Call to sign up", href: "/contact" },
    related: [
      { label: "Master Scuba Diver", href: "/courses/master-diver" },
      { label: "Nitrox", href: "/courses/nitrox" },
    ],
  },
  {
    path: "/courses/master-diver",
    title: "Master Scuba Diver",
    kicker: "The rating",
    description:
      "PADI Master Scuba Diver at Dive Pros: fewer than 2% of divers earn it. Experience plus thorough training.",
    image: "/photos/silhouette.jpg",
    imageAlt: "Diver silhouette under sunlight",
    intro:
      "An elite recreational rating earned through significant experience and training. When you show the card, people know you have spent time underwater in a variety of environments.",
    stats: [
      { value: "<2%", label: "Of divers earn this" },
      { value: "50", label: "Logged dives required" },
      { value: "5", label: "Specialty certifications" },
    ],
    modules: [
      {
        index: "01",
        title: "Requirements",
        body: "Stack the certifications, then prove the hours in the logbook.",
        list: [
          "Open Water certification",
          "Advanced Open Water certification",
          "Rescue Diver certification",
          "Five PADI specialty certifications",
          "50 logged dives",
        ],
      },
    ],
    cta: { label: "Map your path", href: "/contact" },
    related: [
      { label: "Specialties", href: "/courses/specialties" },
      { label: "Divemaster", href: "/courses/divemaster" },
    ],
  },
  {
    path: "/courses/divemaster",
    title: "Leadership",
    kicker: "Professional",
    description:
      "PADI Divemaster and Instructor Development at Dive Pros, from avocation to vocation. Call for professional-level pricing.",
    image: "/photos/wreck-team.jpg",
    imageAlt: "Diver giving OK on a wreck",
    intro:
      "The jump from diver to dive leader takes skill and comfort in the water, plus real familiarity with the sciences of diving. Divemaster is the first professional rating. Instructor is the job that lets you share the water for a living.",
    stats: [
      { value: "Call", label: "Professional pricing" },
      { value: "18+", label: "Divemaster minimum age" },
    ],
    modules: [
      {
        index: "01",
        title: "PADI Divemaster",
        body: "Fine-tune dive skills and rescue skills until you anticipate problems. Gain knowledge, management, and supervision so you become a role model. Lead activities. Assist with training. Rescue Divers 18 or older may enroll.",
        list: [
          "Emergency First Response Primary and Secondary Care within 24 months",
          "Medical statement signed by a physician within 12 months",
          "40 logged dives to begin, 60 to certify",
          "Qualifying certifications from other agencies may apply",
        ],
      },
      {
        index: "02",
        title: "Instructor Development Course",
        body: "The IDC is two parts: Assistant Instructor and Open Water Scuba Instructor. Most professionals complete the full IDC, then an Instructor Examination. Completing AI alone yields an Assistant Instructor qualification. Instructors from other agencies may be eligible to enter OWSI directly.",
        list: [
          "PADI Divemaster, certified diver for six months",
          "60 logged dives to enroll; 100 to attend an IE",
          "EFR Primary and Secondary Care within 24 months",
          "Physician-signed medical within 12 months",
          "EFR Instructor: can be earned during instructor training",
        ],
      },
    ],
    cta: { label: "Start a conversation", href: "/contact" },
    related: [{ label: "All courses", href: "/courses" }],
    footnote:
      "Call for professional-level pricing and scheduling. Healthcare, legal, and ministry professionals follow a different commissioning path at the agency level. We will tell you which conversation to have.",
  },
];
