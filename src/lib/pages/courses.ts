import type { EditorialPageData } from "./types";

export const coursePages: EditorialPageData[] = [
  {
    path: "/courses",
    title: "Courses",
    kicker: "Training",
    description:
      "PADI training at Dive Pros in Pensacola, from Discover Scuba to Divemaster. On-site 12′ indoor heated tank. New classes every week.",
    image: "/photos/pool-check.jpg",
    imageAlt: "Diver checking inflator hose in the training pool",
    intro:
      "The goal isn't a card. It's a diver who is competent, confident, and comfortable. Certification never expires, so get everything you can from the course while you're in it.",
    stats: [
      { value: "$389", label: "Open Water tuition" },
      { value: "12′", label: "Indoor heated tank" },
      { value: "Weekly", label: "New Open Water classes" },
    ],
    sections: [
      {
        heading: "Safety through education",
        body: [
          "Some programs sell speed. We don't. You wouldn't pick a pilot school because it was quicker. This program is thorough, efficient, and as fun as it is serious.",
          "Instructors here are bound to that standard. They're picked for knowledge, skill, and a love of diving. The team works past the agency minimums.",
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
      {
        index: "09",
        title: "Technical",
        href: "/courses/technical",
        note: "Intro to Tech through Trimix",
      },
      {
        index: "10",
        title: "Adaptive SCUBA",
        href: "/courses/adaptive",
        note: "HSA levels A / B / C",
      },
    ],
    cta: { label: "Start with Open Water", href: "/courses/open-water" },
    related: [
      { label: "Schedule a class", href: "/courses/schedule" },
      { label: "Facilities", href: "/about/facilities" },
    ],
    footnote:
      "Technical training (decompression, advanced nitrox / trimix, cavern and cave) lives outside recreational limits. Call the shop if that's the path.",
  },
  {
    path: "/courses/discover-scuba",
    title: "Discover Scuba",
    kicker: "Getting started",
    description:
      "PADI Discover Scuba at Dive Pros: $99 in our on-site heated pool. No certification required.",
    image: "/photos/aqua-pair.jpg",
    imageAlt: "Buddy pair in clear water on a Discover Scuba session",
    intro:
      "A short briefing, then you're underwater blowing bubbles. Discover Scuba is how you feel the sport before you commit to a card, in the same 12′ indoor heated tank your Open Water classmates will train in.",
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
        image: "/photos/shop-floor.jpg",
        imageAlt: "Dive Pros retail floor and counter, where the Discover Scuba briefing happens",
      },
      {
        index: "02",
        title: "Pool time",
        body: "About 1.5 hours learning basic dive skills and trying SCUBA with an instructor in the water.",
        image: "/photos/pool-check.jpg",
        imageAlt: "Student checking an inflator hose during a pool session",
      },
      {
        index: "03",
        title: "What to bring",
        body: "Bathing suit and a towel. All equipment is provided.",
        image: "/photos/pier-tank.jpg",
        imageAlt: "Assembled tank, BCD, and regulator staged and ready",
        tags: ["Medical questionnaire", "Liability release"],
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
      "eLearning at your pace. Pool work in our 12′ indoor heated tank. Four open-water dives on local sites. Tuition is $389, or $359 for active duty and veterans.",
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
        image: "/photos/shop-floor.jpg",
        imageAlt: "Training materials and the service counter at Dive Pros",
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
        image: "/photos/aqua-pair.jpg",
        imageAlt: "Buddy pair practicing in open water after pool training",
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
        body: "Four dives over two days on local sites. Apply the pool skills. Gear is provided. We won't rush a skill to keep a calendar.",
        image: "/photos/sand-team.jpg",
        imageAlt: "Buddy team swimming over sand on a local open-water dive",
      },
    ],
    sections: [
      {
        heading: "You provide",
        body: [
          "The basic kit for class is personal snorkeling gear: mask, fins, snorkel, and booties, plus a bathing suit and towel. Buy it here or bring your own. If you're not sure what you have is adequate, ask at the counter.",
          "Gloves and a gear bag are recommended, not required.",
        ],
      },
      {
        heading: "We provide",
        body: [
          "Cylinders, regulator system, BCD, a dive computer you wear yourself (no sharing), wetsuits, weight belts and weights. Tuition covers materials, classroom, pool, open-water dives, registration, and that rental kit.",
        ],
      },
      {
        heading: "Additional fees",
        body: [
          "Some may apply: park entrance (Fort Pickens National Seashore, Vortex Springs), optional charter boat fees, Pensacola Beach tolls, travel to local sites. Those costs are usually small and sometimes don't apply at all.",
        ],
      },
      {
        heading: "If you miss a session",
        body: [
          "There is no makeup fee. Come to every scheduled session if you can. If something comes up, your instructor sets a makeup. You may join another class. Private instruction, home-based eLearning, and referral checkouts are also available.",
        ],
      },
      {
        heading: "Health requirements",
        body: [
          "You should be in good general health and comfortable in the water. You don't have to be a Navy SEAL. If anything on the medical questionnaire is a yes, your instructor will ask you to see a physician. Download the PADI Medical Evaluation and Physician Approval Form from the Links page. All students complete that form and a swim evaluation.",
        ],
      },
      {
        heading: "Purchase Assurance",
        body: [
          "We guarantee the fit, function, and comfort of what you buy here. If a product is uncomfortable or doesn't work, we take it back and replace it with something that does. If you choose not to finish your certification dives, you can return the diving package for a refund. You can try anything in the store in the heated pool before you buy.",
        ],
      },
      {
        heading: "After the card",
        body: [
          "Certification does not expire. Stay current with your skills and dive in conditions similar to those you trained in. This course is a license to learn. Keep going.",
        ],
      },
    ],
    cta: { label: "See class schedules", href: "/courses/schedule" },
    related: [
      { label: "Advanced Open Water", href: "/courses/advanced-open-water" },
      { label: "Discover Scuba", href: "/courses/discover-scuba" },
      { label: "Links & forms", href: "/about/links" },
    ],
    footnote:
      "Military discount is for active duty and veterans. Dependents do not qualify. Open-water times depend on weather, tides, events, and site access.",
  },
  {
    path: "/courses/schedule",
    title: "Schedule a class",
    kicker: "Training",
    description:
      "New Open Water classes start every week at Dive Pros in Pensacola. One-week, two-weekend, and private schedules.",
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
        image: "/photos/pool-orange.jpg",
        imageAlt: "Diver in full kit during an evening pool session",
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
        image: "/photos/godrays.jpg",
        imageAlt: "Divers in open water after the pool weekends",
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
        image: "/photos/portrait.jpg",
        imageAlt: "A single diver in open water, facing camera",
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
        image: "/photos/lime-diver.jpg",
        imageAlt: "Diver in deep blue water on a required adventure dive",
        tags: ["Deep dive", "Underwater navigation"],
      },
      {
        index: "02",
        title: "Electives",
        body: "Search and recovery, night, wreck, peak buoyancy, boat, and more, chosen with your instructor.",
        image: "/photos/wreck-hatch.jpg",
        imageAlt: "Divers silhouetted in a wreck opening, one of the elective sites",
      },
      {
        index: "03",
        title: "How it runs",
        body: "About three hours of academics, typically a weeknight 6–9p. Five open-water dives, typically Saturday and Sunday, times TBD.",
        image: "/photos/boat-fins.jpg",
        imageAlt: "Fins on a charter rail before a weekend of adventure dives",
      },
    ],
    sections: [
      {
        heading: "Gear & fees",
        body: [
          "Rental equipment is not included. Students in training get 25% off rentals. Park entrance (Fort Pickens, Vortex Springs) and Pensacola Beach tolls may apply. Lights for the night elective are available to rent.",
        ],
        tags: ["Compass", "Dive knife or line cutter", "Dive light / marker light"],
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
      "Standard air is about 21% oxygen. Mixes with more oxygen are Enriched Air Nitrox (EANx). More oxygen means more no-stop time, especially on repetitive dives. You stay down longer and get back in sooner.",
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
        image: "/photos/fill-station.jpg",
        imageAlt: "Enriched Air Nitrox blending panel at Dive Pros",
      },
      {
        index: "02",
        title: "What you learn",
        body: "Managing oxygen exposure limits, enriched-air equipment, and how to plan the dive you actually want to do.",
        image: "/photos/tank-valves.jpg",
        imageAlt: "Cylinder valves ready to analyze and label for enriched air",
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
        image: "/photos/tanks-wall.jpg",
        imageAlt: "Cylinders staged for a Nitrox practical session",
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
      "Rescue Diver prepares you for minor and major dive emergencies. You learn to recognize stress, manage a scene, and give first aid and life support. Confidence comes from running those scenarios in the water, not from sitting through a lecture. Typical slate is about 9 hours plus two dives. CPR / First Aid is a prerequisite; Emergency Oxygen Provider is often run the week before.",
    stats: [
      { value: "$279.95", label: "Tuition + learning materials" },
      { value: "9 hrs", label: "Typical class time" },
      { value: "2", label: "Dives" },
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
      "Expand knowledge, skills, and interest. Specialties count toward Master Scuba Diver. Any course can be upgraded to private for an additional $200 if you need a personal schedule or more one-on-one time.",
    stats: [
      { value: "$129.95", label: "From" },
      { value: "$249.95", label: "To" },
      { value: "$200", label: "Private upgrade" },
    ],
    sections: [
      {
        heading: "Courses we run",
        body: [
          "Tuition and learning materials included. Prices vary by course. Hours and dive counts below are the usual slate. Call if you need the exact date.",
        ],
      },
    ],
    catalog: {
      heading: "Specialties",
      items: [
        {
          title: "Deep Diver",
          meta: "3 hours academics · 4 dives · 60′–130′",
          body: "Plan and run deep dives with an instructor. Gas, narcosis, and how you actually spend time at those depths on Pensacola wrecks.",
          tags: ["Dive computer"],
        },
        {
          title: "Enriched Air Diver (Nitrox)",
          meta: "1–2 hour practical · no extra training dives",
          body: "Longer no-stop time on reefs and wrecks. Analyze the mix, label the cylinder, and set the computer. Full details on the Nitrox page.",
        },
        {
          title: "Night Diver",
          meta: "3 hours academics · 3 dives",
          body: "Plan and conduct recreational dives after dark. Lights, signals, and how the Gulf changes when the sun is gone.",
          tags: ["Dive light", "Marker light"],
        },
        {
          title: "Wreck Diver",
          meta: "4 hours academics · 2–4 dives",
          body: "Plan and dive sunken vessels, aircraft, and other artificial structure. Navigation around the wreck, and how not to go inside unless you're trained for it.",
          tags: ["Dive light", "Line cutter"],
        },
        {
          title: "Underwater Navigation",
          meta: "Typical adventure / specialty slate",
          body: "Compass work, natural navigation, and getting back to the boat or the beach without guessing.",
          tags: ["Compass"],
        },
        {
          title: "Search & Recovery",
          meta: "8 hours academics · 4 water hours",
          body: "Search patterns, light salvage, limited visibility, and the navigation that makes recovery possible.",
          tags: ["Compass", "Lift bag"],
        },
        {
          title: "Digital Underwater Photo / Video",
          meta: "4 hours academics · 2 dives",
          body: "How to actually use the camera you brought. Exposure, buoyancy so you don't silt the shot, and what works in Gulf visibility.",
          tags: ["Camera"],
        },
        {
          title: "Peak Performance Buoyancy",
          meta: "Pool and open water",
          body: "Hover without using your hands. The skill that makes every other dive cheaper on air and easier on the reef.",
        },
        {
          title: "Emergency Oxygen Provider",
          meta: "3 hour class",
          body: "The first aid that matters in a diving injury: 100% oxygen on a demand valve. Required if you're headed toward leadership.",
        },
        {
          title: "Equipment Specialist",
          meta: "4 hour seminar",
          body: "Routine care and maintenance for recreational SCUBA gear. What you can do on the bench at home, and what belongs at the shop.",
        },
        {
          title: "Dry Suit Diver",
          meta: "Pool and open water",
          body: "How to dive a dry suit without becoming a balloon. Valves, undergarments, and the extra buoyancy work.",
          tags: ["Dry suit"],
        },
        {
          title: "Sidemount Diver",
          meta: "Pool and open water",
          body: "Cylinders on the sides instead of the back. Streamlined, redundant, and useful on wrecks and for people who prefer that trim.",
          tags: ["Sidemount harness"],
        },
        {
          title: "Dive Against Debris",
          meta: "Conservation specialty",
          body: "How to pick up what doesn't belong without making a mess of the site. Counts toward Master Scuba Diver.",
        },
        {
          title: "Spearfishing / Hunting & Collecting",
          meta: "Specialty · FWC rules apply",
          body: "Skills and judgment for taking game in the northern Gulf. New divers should wait until gas and buoyancy are solid. A Florida saltwater fishing permit is required in state waters.",
          tags: ["Saltwater fishing permit", "Speargun"],
        },
        {
          title: "Emergency First Response: CPR / First Aid",
          meta: "3–4 hour class",
          body: "Primary and secondary care. Meets the first-aid requirement for Rescue and leadership. Often run the week before Rescue.",
        },
      ],
    },
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
      "Fewer than 2% of divers hold this card. You need Rescue, five specialties, and 50 logged dives. When you show it, people know you've spent time in the water.",
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
        image: "/photos/silhouette.jpg",
        imageAlt: "Experienced diver silhouetted under the sun",
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
        image: "/photos/wreck-team.jpg",
        imageAlt: "Dive team on a wreck, the kind of water a Divemaster leads",
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
        image: "/photos/shaka.jpg",
        imageAlt: "Diver giving a shaka in blue water during professional training",
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
      "Call for professional-level pricing and scheduling. Healthcare, legal, and ministry professionals follow a different commissioning path at the agency level. We'll tell you which conversation to have.",
  },
  {
    path: "/courses/technical",
    title: "Technical instruction",
    kicker: "Professional",
    description:
      "Technical diving at Dive Pros: Intro to Tech, Advanced Nitrox, decompression, Helitrox, Trimix, and advanced wreck. On demand, small classes.",
    image: "/photos/lime-diver.jpg",
    imageAlt: "Diver in deep blue water on a technical profile",
    intro:
      "These courses expand planning, in-water skill, and gear beyond recreational limits. Class sizes stay small. Offered on demand. Heather Armstrong runs cave and tech through Dark Side Diving; the shop can put you in that conversation.",
    stats: [
      { value: "130′", label: "Advanced Nitrox MOD" },
      { value: "150′", label: "Deco / Helitrox MOD" },
      { value: "200′", label: "Trimix MOD" },
    ],
    modules: [
      {
        index: "01",
        title: "Intro to Tech",
        body: "Improves dive planning, in-water skills, and gear configuration in a controlled environment. For Open Water divers who want more, divers considering tech, or certified tech divers who want a refresher.",
        image: "/photos/boat-gear.jpg",
        imageAlt: "Technical kits staged on a boat",
        list: [
          "Minimum age 18, or 15 with a parent",
          "Open Water certification",
          "25 logged dives",
          "Planning, buoyancy, gas management, trim, gear configuration",
        ],
      },
      {
        index: "02",
        title: "Advanced Nitrox",
        body: "EAN 21 through 100% within your current certification, to 130′, on dives that do not require staged decompression. Often taught with Decompression Procedures. Required for SCR or CCR divers.",
        image: "/photos/fill-station.jpg",
        imageAlt: "Blending panel used for mixes above 40% oxygen",
        list: [
          "Minimum age 18, or 15 with a parent",
          "Nitrox certification, 25 logged dives",
          "Physics and physiology above 40% oxygen",
          "Analyzing, labeling, blending, oxygen-service ratings",
        ],
      },
      {
        index: "03",
        title: "Decompression procedures",
        body: "First step past sport-diving NDLs. Planned staged decompression to a maximum operating depth of 150′. Combined with Advanced Nitrox, this is the foundation for the rest of tech.",
        image: "/photos/silhouette.jpg",
        imageAlt: "Diver on a decompression profile",
        list: [
          "Minimum age 18",
          "Advanced Open Water, 25 logged dives",
          "Gas switching, SMB / lift bag, omitted deco",
          "Emergency and contingency planning",
        ],
      },
    ],
    sections: [
      {
        heading: "Helitrox",
        body: [
          "Staged decompression to 150′ using helium to cut inert-gas narcosis. Mixes with no more than 20% helium, and up to 100% oxygen for deco.",
        ],
        list: [
          "Minimum age 18",
          "Advanced with Deep, or Intro to Tech",
          "Advanced Nitrox (unless taught concurrently)",
          "50 logged dives",
          "HPNS, counter diffusion, helium as a breathing gas",
        ],
      },
      {
        heading: "Trimix",
        body: [
          "Deeper wrecks and caves with less narcosis. Plan and run dives using as little as 18% oxygen to a maximum of 200′, with a helium blend appropriate for the depth.",
        ],
        list: [
          "Minimum age 18",
          "Advanced Nitrox and Decompression Procedures",
          "100 logged dives",
          "END planning, CNS / OTU limits, multiple stage cylinders",
        ],
      },
      {
        heading: "Advanced wreck",
        body: [
          "Penetration after Wreck or Cavern. Locating and planning an advanced penetration dive. Often taught with Advanced Nitrox, Deco, or Trimix.",
        ],
        list: [
          "Minimum age 18",
          "Advanced certification or equivalent",
          "Wreck or Cavern certification",
          "50 logged dives",
          "Dual outlets or isolator, redundant lights, reels, stage cylinders",
        ],
      },
      {
        heading: "Also available on demand",
        body: [
          "Gas blending, oxygen cleaning and equipment preparation, cavern, cave I / II / III, extended range, rebreathers, full face masks, and dry suit. Ask which instructor is running the course you want.",
        ],
      },
    ],
    cta: { label: "Ask about the next course", href: "/contact" },
    related: [
      { label: "Nitrox", href: "/courses/nitrox" },
      { label: "Our staff", href: "/about/staff" },
    ],
  },
  {
    path: "/courses/adaptive",
    title: "Adaptive SCUBA",
    kicker: "Training",
    description:
      "HSA adaptive Open Water at Dive Pros. Levels A, B, and C. Dive Buddy course for certified divers.",
    image: "/photos/pool-check.jpg",
    imageAlt: "Student working skills in the training tank",
    intro:
      "About 15% of people are classified as handicapped by accident or disease. Many of them can dive. We teach to Handicapped Scuba Association Physical Performance Standards and a multilevel certification system that covers paraplegia, quadriplegia, blindness, and high-functioning brain injury.",
    stats: [
      { value: "12+", label: "Minimum age" },
      { value: "A / B / C", label: "HSA levels" },
    ],
    sections: [
      {
        heading: "How levels work",
        body: [
          "Proficiency is based on your ability to assist another diver.",
        ],
        list: [
          "Level A — certified to dive with one other person",
          "Level B — dive with two able-bodied divers",
          "Level C — two buddies, and one of them must be rescue-trained",
          "The extra buddy on B and C is there for the A-level (or above) diver that a B or C diver cannot assist",
          "Marine life ID: describe and identify one form on each of five certifying dives",
        ],
      },
      {
        heading: "Prerequisites",
        body: ["Completed medical questionnaire. Minimum age 12. Level A, B, and C divers can continue to Advanced after Open Water."],
      },
      {
        heading: "Dive Buddy course",
        body: [
          "For certified divers who want to learn disabilities, accessibility, and how to dive with people who have disabilities.",
        ],
        list: [
          "Open Water certification",
          "40 logged dives in the two years before the course",
          "HSA rescue and air-sharing performance standards, or equivalent",
        ],
      },
    ],
    cta: { label: "Talk to an instructor", href: "/contact" },
    related: [
      { label: "Open Water", href: "/courses/open-water" },
      { label: "Links & forms", href: "/about/links" },
    ],
  },
];
