import type { EditorialPageData } from "./types";

export const divePages: EditorialPageData[] = [
  {
    path: "/dive",
    title: "Dive the Gulf",
    kicker: "Dive",
    description:
      "Pensacola dive sites: shore, nearshore, midshore, offshore, and USS Oriskany, the world’s largest artificial reef.",
    image: "/photos/baitball.jpg",
    imageAlt: "Diver and a dense school of fish",
    intro:
      "Emerald water off the U.S. coast: Spanish galleons, modern warships, WWII aircraft, live-bottom reefs. We point you at the right charter, the right site, and the right training for the depth.",
    stats: [
      { value: "10–50′", label: "Shore / beach" },
      { value: "1–9 NM", label: "Nearshore" },
      { value: "20+ NM", label: "Offshore, including the Mighty O" },
    ],
    paths: [
      {
        index: "01",
        title: "Shore / beach",
        href: "/dive/shore-dives",
        note: "10′ – 50′",
      },
      {
        index: "02",
        title: "Nearshore",
        href: "/dive/nearshore",
        note: "1 – 9 NM",
      },
      {
        index: "03",
        title: "Midshore",
        href: "/dive/midshore",
        note: "10 – 19 NM",
      },
      {
        index: "04",
        title: "Offshore",
        href: "/dive/offshore",
        note: "20+ NM",
      },
      {
        index: "05",
        title: "USS Oriskany",
        href: "/dive/uss-oriskany",
        note: "The Mighty O · 212′",
      },
      {
        index: "06",
        title: "All dive sites",
        href: "/dive/all-sites",
        note: "Escambia inventory",
      },
    ],
    cta: { label: "Plan a charter", href: "/dive/charters" },
    related: [
      { label: "Charters", href: "/dive/charters" },
      { label: "Guided trips", href: "/dive/guided-trips" },
    ],
  },
  {
    path: "/dive/charters",
    title: "Dive charters",
    kicker: "Experiences",
    description:
      "Pensacola dive charters: wrecks, reefs, and snorkeling. Dive Pros does not own or operate the boats listed.",
    image: "/photos/boat-fins.jpg",
    imageAlt: "Fins staged on a charter boat rail",
    intro:
      "Wrecks, artificial reefs, live bottom. Dive Pros doesn't own or operate these charters. Policies and prices are set by the operators. Call them directly to book. There's always a dive professional aboard if you want a guide.",
    operators: [
      {
        name: "Niuhi Dive Charters",
        contact: "Capt. Andy Ross · (850) 529-2475",
        body: "30′ HydroCat, twin Suzuki 250s, six passengers. Quick, stable ride. Redundant electronics, VHF with DSC, EPIRB, freshwater shower, custom dive ladder, dry cabin, emergency oxygen and first aid. Water and snacks on every trip. Federal reef fishing permit covers spearfishing in federal and state waters, so you don't need your own fishing license.",
      },
      {
        name: "H2O Below Dive Charters",
        contact: "Capt. Douglas Hammock · (850) 291-3501",
        body: "36′ Newton custom dive boat, certified for 24, limited to 16 recreational or 10 tech divers. Spacious deck, large swim platform, sturdy ladder, travel line for descent and ascent. Coast Guard inspected annually. Life vests, emergency oxygen, first aid, AED. Enclosed changing area, dry storage, freshwater showers, marine head. Fresh fruit, snacks, water, and drinks.",
      },
      {
        name: "Jolly Sailing & Snorkeling",
        contact: "Jolly Sailing · (850) 723-6142",
        body: "Sailing, snorkeling, and dolphin tours from Pensacola Beach Marina, just past the Bob Sikes Bridge toll. Captained private vessels for 6–26 passengers. Year-round two-hour, half-day, or full-day trips on Santa Rosa Sound and Pensacola Bay. Seasonal snorkeling, swimming, and beachcombing. Birthdays, anniversaries, proposals: they will make it specific.",
      },
    ],
    cta: { label: "Ask us who is running", href: "/contact" },
    related: [
      { label: "USS Oriskany", href: "/dive/uss-oriskany" },
      { label: "Rentals", href: "/shop/rentals" },
    ],
  },
  {
    path: "/dive/guided-trips",
    title: "Guided trips",
    kicker: "Experiences",
    description:
      "Guided dives with Dive Pros: local sites, visiting divers, and referral checkouts.",
    image: "/photos/sand-team.jpg",
    imageAlt: "Guided group over sand",
    intro:
      "Visiting with a referral? Want a local in the water? We fit last-minute checkouts and guided dives around the shop's real schedule. Call and we'll tell you what's possible this week.",
    cta: { label: "Call the shop", href: "/contact" },
    related: [
      { label: "Charters", href: "/dive/charters" },
      { label: "Open Water", href: "/courses/open-water" },
    ],
  },
  {
    path: "/dive/spearfishing",
    title: "Spearfishing",
    kicker: "Experiences",
    description:
      "Spearfishing the northern Gulf from Dive Pros: snapper, grouper, amberjack, and more. Florida saltwater fishing permit required.",
    image: "/photos/reef-ascent.jpg",
    imageAlt: "Diver over a Gulf reef",
    intro:
      "The northern Gulf holds snapper, grouper, amberjack, flounder, triggerfish, wahoo, tuna, and cobia. Lobster and other shellfish too. This is a high-skill activity. New divers should not add hunting until gas management and buoyancy are solid. A specialty course is available and recommended.",
    sections: [
      {
        heading: "Before you take a fish",
        body: [
          "State and federal waters are managed separately. Size and bag limits change. Check them before every trip. A Florida saltwater fishing permit is required. Niuhi's federal reef permit covers spearfishing on that boat so you don't need your own license on those trips.",
        ],
        list: [
          "No spearfishing on Gulf Islands National Seashore, including Fort Pickens",
          "No spearfishing on Navarre Beach Marine Sanctuary",
          "Confirm current FWC saltwater regulations before you go",
        ],
      },
    ],
    cta: { label: "Ask about the specialty", href: "/courses/specialties" },
    related: [
      { label: "Charters", href: "/dive/charters" },
      { label: "Links & regulations", href: "/about/links" },
    ],
  },
  {
    path: "/dive/shore-dives",
    title: "Shore / beach dives",
    kicker: "Dive sites",
    description:
      "Gulf Coast shore dives near Pensacola: Fort Pickens jetties, beach reefs, Vortex and Morrison Springs.",
    image: "/photos/surface.jpg",
    imageAlt: "Diver at the surface, split-level",
    intro:
      "Sites you can reach without a boat. Depths generally 8′ to 50′. Park fees and beach tolls can apply. We'll tell you before you go.",
    stats: [
      { value: "8–50′", label: "Typical depth" },
      { value: "Beach", label: "Walk-in access" },
    ],
    sites: [
      {
        name: "Fort Pickens Jetties",
        depth: "10–50′",
        location: "Gulf Islands National Seashore, Pensacola Beach",
        body: "One of the main SCUBA training sites on the Panhandle. Access from the north seawall steps west of the fishing pier. Grouper, snapper, flounder, spadefish, guitarfish, sheepshead, red drum, stargazer, porcupine puffer, stingray. The rocks are a nursery for gobies, blennies, damselfish, jawfish. Currents get strong on the tide change. Conditions are usually best from one hour before to one hour after peak high tide. Check Fort McRee Breakwater. A dive flag / float is required by law. Carry a knife or line cutter. Gloves help. Always with a buddy. Seasonal jellyfish. No spearfishing on Gulf Islands National Seashore.",
      },
      {
        name: "Park East Reef",
        depth: "9–15′",
        location: "5 miles east of Casino Beach · Parking Lot H",
        body: "Built 2011. 19 pairs (38 modules) of Ecosystem by Reefmaker units from Gulf Shores: limestone-covered concrete discs on fiberglass pilings. Rows 20–25′ apart, about 500′ into the Gulf to the second sandbar. Module tops sit about 6–10′ below the surface. About 5.2 miles east of Casino / 1.5 miles east of Portofino. Range markers are a yellow triangle and a blue square on the dune. Modules start about 300′ from shore in about 14′. Visibility usually 10–20′, up to 30′ on a calm day.",
      },
      {
        name: "Perdido Key Reef",
        depth: "9–15′",
        location: "Public Beach Access #1, Sandy Key Dr. off Johnson’s Beach Rd.",
        body: "Built 2014. 24 Reefmaker modules, rows 20–25′ apart, about 280′ of reef. Tops about 6–8′ down. Same yellow-triangle / blue-square marker system. Modules start about 300′ from shore in about 10′. Visibility usually 10–20′, up to 30′ when it's calm. Tropical fish; sea turtles often rest in the sand around the modules.",
      },
      {
        name: "Park West Reef",
        depth: "8–14′",
        location: "Pensacola Bay, just before Fort Pickens entrance",
        body: "Reef balls, memorial reefs, and other concrete. Corners marked by pylons 100′ apart in a square. Tops about 6–8′ down. Visibility usually 5–10′, occasionally 15–20′. Generally not a current site.",
      },
      {
        name: "Charles Fennel Gonzalez, IV, Casino Beach Reef",
        depth: "10–15′",
        location: "Markers behind Crabs restaurant, Casino Beach parking lot",
        body: "Newest Escambia shore site, completed 2020. About 1,500′ east of the Pensacola Fishing Pier. 17 limestone, concrete, and fiberglass modules up to six feet off the sand, 650–700′ from shore. Blue square shoreward, yellow triangle seaward, behind Crabs. Line up the beach-ball water tower and the Verandas tower. Damselfish, schooling grunts, butterflyfish, sea turtles, octopuses. Pistol shrimp if you listen.",
      },
      {
        name: "Navarre Beach Marine Sanctuary",
        depth: "9–15′",
        location: "Navarre Beach · 2,000′ east of the fishing pier",
        body: "Gulf site south of the Sea Oat pavilion (dive flag on the pavilion). Two posts on the dune mark it on shore. 340′ south of mean tide, 78 structures about 20′ apart, just beyond the second sandbar. Visibility 5–40′. Surface markers sit on the reef. Turtles and stingrays. No spearfishing.",
      },
      {
        name: "Captain Bob Quarles Reef",
        depth: "13–15′",
        location: "~100 yards north of Park West Reef",
        coords: "30 19.738′N / 87 10.871′W",
        body: "270 tons of Gulf Breeze Fishing Pier decking on concrete anchors. About 200–250 yards from shore. Navigate due north from the center of Park West about 150 yards. Fly a dive flag. Boat traffic is common. Visibility usually 5–10′. If Park West is muddy, don't swim this one. Visibility rarely improves further out.",
      },
      {
        name: "Vortex Springs",
        depth: "10–45′ outside cavern (100′+ in cave)",
        location: "1517 Vortex Spring Lane, Ponce De Leon, FL 32455",
        body: "About 1.5 hours toward Tallahassee off I-10 exit 96. Basin is excellent for beginners. Cave system for trained cavern/cave divers only. 28 million gallons of 68° spring water a day. Bluegill, freshwater eels, bass, carp. Two underwater training platforms and a floating dock. Clarity drops fast if buoyancy is sloppy on a silty day.",
      },
      {
        name: "Morrison Springs",
        depth: "10–35′ outside cavern (up to 300′ in deepest cavity)",
        location: "874 Morrison Springs Rd., Ponce De Leon, FL 32455",
        body: "About 1.5 hours east, 6 miles south of I-10 exit 96. 250′ basin on a 161-acre Walton County park with boardwalks, pavilion, restrooms, and gear rinse. 48 million gallons a day, 66–68°. Large training platform. Cavern/cave for certified divers only. Check recent reports. Visibility tracks water level.",
      },
    ],
    sections: [
      {
        heading: "Before you get in",
        body: [
          "These rules apply to every beach reef, not just Fort Pickens.",
        ],
        list: [
          "Fly a Divers-Down flag and stay within 100′ of it",
          "No lifeguards on the reef. Boat traffic is real",
          "Waves and current can move you. Never dive alone",
          "Snorkelers should wear a PFD",
          "Read the beach flags: green, yellow, red, and purple for jellyfish / sea lice",
          "Tide station for the pass: Fort McRee Breakwater",
        ],
      },
    ],
    cta: { label: "Ask about conditions", href: "/contact" },
    related: [
      { label: "Nearshore", href: "/dive/nearshore" },
      { label: "All dive sites", href: "/dive/all-sites" },
      { label: "Links & tides", href: "/about/links" },
    ],
  },
  {
    path: "/dive/nearshore",
    title: "Nearshore",
    kicker: "1 – 9 NM",
    description:
      "Pensacola nearshore dives: USS Massachusetts, Joe Patti, Joseph L. Meek, San Pablo, Ocean Wind, and more.",
    image: "/photos/barracuda.jpg",
    imageAlt: "Divers under a school of barracuda",
    intro:
      "Inshore sites in state waters, up to 9 miles from Pensacola Pass. Typical depths 10′ to 95′. A natural next step after Open Water.",
    stats: [
      { value: "1–9 NM", label: "From Pensacola Pass" },
      { value: "10–95′", label: "Site range" },
    ],
    sites: [
      {
        name: "USS Massachusetts (BB-2)",
        depth: "10–30′",
        coords: "30 17.795′N / 87 18.720′W",
        body: "Launched 1893, commissioned 1896, the oldest American battleship still in existence. 350′ × 69′, Indiana-class, first U.S. ships with hull numbers. Decommissioned 1919, towed to Pensacola in 1921 as an artillery target. Dedicated as a Florida Underwater Archaeological Preserve on the 100th anniversary of her launch, June 10, 1993.",
      },
      {
        name: "Joe Patti Memorial Reef",
        depth: "35–50′",
        coords: "30 17.330′N / 87 13.755′W",
        body: "Sunk July 2013. Metal artwork welded to the barge is all Pensacola. Top of structure about 35′, sand about 50′. Popular for every experience level.",
      },
      {
        name: "Joseph L. Meek Liberty Ship",
        depth: "80–95′",
        coords: "30 16.384′N / 87 09.574′W",
        body: "480′ Liberty ship built 1942, launched November 16, sunk as a reef in 1976. About 9.5 miles out of Pensacola Pass, upright, sides rising 20′ off the bottom. Large game fish. A Panhandle Shipwreck Trail site.",
      },
      {
        name: "Tex Edwards Barge",
        depth: "65–75′",
        coords: "30 16.138′N / 87 10.157′W",
        body: "Sunk 1982, about 7 miles east of the Pass. Large sections remain intact with overhangs. All recreational levels.",
      },
      {
        name: "San Pablo / Russian Freighter",
        depth: "60–80′",
        coords: "30 11.333′N / 87 13.057′W",
        body: "Not Russian, not a freighter: a fruit transport sunk in August 1944 by a then-secret radio-controlled explosive boat. Wreckage spread about 300′ × 40′. One of 12 Panhandle Shipwreck Trail sites.",
      },
      {
        name: "Ocean Wind Tug",
        depth: "55–82′",
        coords: "30 10.995′N / 87 12.017′W",
        body: "Sunk January 2016. 87′ tug, upright and intact, just east of the Russian Freighter. She towed many of the reefs she now sits among.",
      },
      {
        name: "Lane Gilchrist Reef (Bridge Rubble)",
        depth: "40–50′",
        coords: "30 17.467′N / 87 13.773′W",
        body: "8,000 tons of concrete from the old Gulf Breeze Fishing Bridge, destroyed by Hurricane Ivan in 2004. About 3 miles southeast of the Pass on a 60-acre site.",
      },
      {
        name: "Three Coal Barges",
        depth: "40–50′",
        coords: "30 17.450′N / 87 13.257′W",
        body: "Sunk 1974 about 3 miles southeast of the Pass after breaking free in transit. Broken pieces now surrounded by bridge rubble placed to rejuvenate the site.",
      },
    ],
    cta: { label: "Charter introductions", href: "/dive/charters" },
    related: [
      { label: "Midshore", href: "/dive/midshore" },
      { label: "All dive sites", href: "/dive/all-sites" },
    ],
  },
  {
    path: "/dive/midshore",
    title: "Midshore",
    kicker: "10 – 19 NM",
    description:
      "Pensacola midshore dives: Pete Tide II, YDT-14, YDT-15, I-10 bridge rubble, Tug Heron, Tug Born Again.",
    image: "/photos/reef-ascent.jpg",
    imageAlt: "Diver looking up from a reef",
    intro:
      "Federal waters, 10–19 miles out. Typical depths 60′ to 100′. Advanced training and Nitrox start to matter here.",
    stats: [
      { value: "10–19 NM", label: "From the Pass" },
      { value: "60–100′", label: "Typical depths" },
    ],
    sites: [
      {
        name: "Pete Tide II",
        depth: "60–100′",
        coords: "30 08.760′N / 87 14.020′W",
        body: "180′ former oil-field supply boat, sunk 1993. Fully intact. Pilot house about 60′, sand about 100′. Local favorite and a Panhandle Shipwreck Trail site.",
      },
      {
        name: "YDT-14 (Navy Dive Tender)",
        depth: "65–100′",
        coords: "30 05.330′N / 87 09.640′W",
        body: "132′ × 30′ Navy tender sunk April 2000. Mostly intact. About 18 miles southeast of the Pass. Panhandle Shipwreck Trail.",
      },
      {
        name: "YDT-15 (Navy Dive Tender)",
        depth: "75–100′",
        coords: "30 05.267′N / 87 09.550′W",
        body: "Sister to YDT-14, about 500′ away. Roof and pilot house largely gone; plenty of structure remains.",
      },
      {
        name: "I-10 Bridge Rubble",
        depth: "75–93′",
        body: "Six reefs in an east–west line of Interstate 10 material from Hurricane Ivan. Over 100,000 tons of spans and pilings. Stacked up to 30′ high in places. Seafloor coverage on the order of a Super Walmart. If you want marine life, this is the place.",
      },
      {
        name: "Tug Heron & LCM",
        depth: "75–95′",
        coords: "30 08.187′N / 87 13.684′W",
        body: "Sunk together in 1990. 53′ steel tug upright beside remnants of a 51′ LCM. Hurricane Opal separated them in 1995; the tug had sat upside-down on the landing craft.",
      },
      {
        name: "Tug Born Again",
        depth: "70–95′",
        coords: "30 08.222′N / 87 14.218′W",
        body: "Sunk January 1991, about 13.5 miles from the Pass. 65′ tug, mostly intact, subsided. Hold filled with 21 steel pipes about 18′ long that extend over the decking. Lobster and critters hide there.",
      },
    ],
    cta: { label: "Ask about a boat", href: "/dive/charters" },
    related: [
      { label: "Offshore", href: "/dive/offshore" },
      { label: "Nitrox", href: "/courses/nitrox" },
    ],
  },
  {
    path: "/dive/offshore",
    title: "Offshore",
    kicker: "20+ NM",
    description:
      "Pensacola offshore dives: Antares, Avocet, Tenneco Rig, Chevron Rig. Advanced and technical water.",
    image: "/photos/lime-diver.jpg",
    imageAlt: "Diver hovering in deep water",
    intro:
      "Twenty miles and further. Typical depths 80′ to 175′. Wreck country, including the path out to the Mighty O.",
    stats: [
      { value: "20+ NM", label: "From the Pass" },
      { value: "80–175′", label: "Site range" },
    ],
    sites: [
      {
        name: "Antares M/S",
        depth: "90–130′",
        coords: "30 00.582′N / 87 07.774′W",
        body: "347′ freighter sunk as a reef in 1995, 24 miles SE of the Pass. Hurricane Opal broke the hull. Stern remains intact; the rest is spread.",
      },
      {
        name: "Avocet",
        depth: "80–115′",
        coords: "29 58.399′N / 87 12.630′W",
        body: "247′ × 52′ clam-shell dredge sunk 1991, about 24 miles SSE. Upper section broken and scattered; hull in two sections about 10′ apart.",
      },
      {
        name: "Tenneco Rig",
        depth: "90–175′",
        coords: "29 59.733′N / 87 05.111′W",
        body: "Two 500-ton structures donated by Tenneco Oil, deployed 1982, the first complete platform in the Rigs to Reefs program. About 26 miles SSE. Advanced and technical. Large game fish; popular for spearfishing.",
      },
      {
        name: "Chevron Oil Rig",
        depth: "80–137′",
        coords: "30 04.244′N / 87 02.118′W",
        body: "Two platform jackets donated and deployed in 1993. Open structure holds fish and lobster. Spearfishing favorite.",
      },
    ],
    cta: { label: "USS Oriskany", href: "/dive/uss-oriskany" },
    related: [
      { label: "Advanced Open Water", href: "/courses/advanced-open-water" },
      { label: "All dive sites", href: "/dive/all-sites" },
    ],
  },
  {
    path: "/dive/artificial-reefs",
    title: "Artificial reefs",
    kicker: "Dive sites",
    description:
      "Pensacola artificial reefs and wrecks: barges, bridges, tanks, and USS Oriskany.",
    image: "/photos/wreck-hatch.jpg",
    imageAlt: "Two divers silhouetted inside a wreck hatch",
    intro:
      "The Gulf off Pensacola is an engineered reef system: Liberty ships, Navy tenders, bridge spans, battle tanks, and the 911′ carrier that became the Great Carrier Reef. Match site to certification and recent dive history.",
    paths: [
      {
        index: "01",
        title: "Nearshore wrecks",
        href: "/dive/nearshore",
        note: "Massachusetts to Ocean Wind",
      },
      {
        index: "02",
        title: "Midshore wrecks",
        href: "/dive/midshore",
        note: "Pete Tide II, YDTs, I-10",
      },
      {
        index: "03",
        title: "Offshore & rigs",
        href: "/dive/offshore",
        note: "Antares, Tenneco, Chevron",
      },
      {
        index: "04",
        title: "Full inventory",
        href: "/dive/all-sites",
        note: "Wrecks, rubble, tanks",
      },
    ],
    cta: { label: "USS Oriskany", href: "/dive/uss-oriskany" },
    related: [{ label: "Charters", href: "/dive/charters" }],
  },
  {
    path: "/dive/uss-oriskany",
    title: "USS Oriskany",
    kicker: "The Mighty O",
    description:
      "Dive USS Oriskany (CV-34), the world’s largest intentionally created artificial reef, 26.5 miles southeast of Pensacola Pass.",
    image: "/photos/wreck-hatch.jpg",
    imageAlt: "Divers silhouetted in a wreck opening, blue water beyond",
    intro:
      "On May 17, 2006 the 911′ Essex-class carrier was sunk about 26.5 miles southeast of Pensacola Pass. She sits in 212′ of water. The top of the island is around 84′. She's about 150′ tall and 146′ wide. Nickname: the Mighty O. This is not a beginner dive. Be honest with yourself and with the crew. Currents can be serious. It isn't worth hurting yourself to see her.",
    stats: [
      { value: "911′", label: "Essex-class carrier" },
      { value: "84′", label: "Top of the island" },
      { value: "212′", label: "Sand" },
    ],
    gallery: {
      heading: "May 17, 2006",
      images: [
        {
          src: "/photos/oriskany/01-afloat.jpg",
          alt: "USS Oriskany afloat on open water, rusted flight deck and island intact",
          caption: "On station. 26.5 NM southeast of Pensacola Pass.",
        },
        {
          src: "/photos/oriskany/02-waiting.jpg",
          alt: "Aerial of USS Oriskany sitting low in calm blue water before scuttling",
          caption: "Stripped and waiting. Flight deck rusted. Island intact.",
        },
        {
          src: "/photos/oriskany/03-aerial.jpg",
          alt: "High-angle aerial of the Essex-class carrier on the Gulf",
          caption: "911 feet of Essex-class carrier. Last hours on the surface.",
        },
        {
          src: "/photos/oriskany/04-charges.jpg",
          alt: "Charges detonating along USS Oriskany as smoke rises from the island",
          caption: "Charges fire.",
        },
        {
          src: "/photos/oriskany/05-listing.jpg",
          alt: "USS Oriskany listing to starboard with the stern beginning to sink",
          caption: "Stern going. Island still proud of the water.",
        },
        {
          src: "/photos/oriskany/06-angle.jpg",
          alt: "USS Oriskany sinking at a steep angle with foam and smoke at the waterline",
          caption: "The Mighty O takes her last angle.",
        },
        {
          src: "/photos/oriskany/07-descent.jpg",
          alt: "Aerial of the carrier going under in a ring of white foam",
          caption: "Descent. A small boat for scale.",
        },
        {
          src: "/photos/oriskany/08-surface.jpg",
          alt: "The surface after USS Oriskany sank, white foam on deep blue water",
          caption: "The surface closes. She sits in 212′.",
        },
      ],
    },
    modules: [
      {
        index: "01",
        title: "The wreck",
        body: "Commissioned September 25, 1950; recommissioned March 7, 1959; decommissioned September 30, 1975. Two battle stars in Korea, five in Vietnam. Dedicated as a memorial reef for the thousands who served her 25 years. Habitat from blennies and angelfish to snapper, grouper, and massive amberjack. Whale sharks and manta rays have been seen on the tower.",
        image: "/photos/oriskany/03-aerial.jpg",
        imageAlt: "Aerial of USS Oriskany on the day she was sunk as a reef",
      },
      {
        index: "02",
        title: "Depths",
        body: "Approximate, and they move. A section of the island collapsed after Tropical Storm Ida in 2009, opening a roughly 50′ swim-through in the tower. Do not enter the interior.",
        image: "/photos/oriskany/07-descent.jpg",
        imageAlt: "USS Oriskany going under, the drop that left her in 212 feet",
        list: [
          "Top of Oriskany: 84′ (26 m)",
          "Primary flight bridge: 105′ (32 m)",
          "Navigation bridge: 124′ (38 m)",
          "Flag bridge: 134′ (41 m)",
          "Flight deck: 146′ (45 m)",
          "Hangar bay: 175′ (53 m)",
          "Sand: 212′ (65 m)",
        ],
      },
      {
        index: "03",
        title: "Who goes",
        body: "Without a divemaster guide: Advanced or Deep specialty, 20+ dives, two logged dives below 80′ in the past year. With a guide: Open Water or above, 20 logged dives, two dives in the past year or a refresher. Carry a visual and audible signaling device (SMB and whistle). Most charters provide those at no extra cost. Computers strongly recommended; some operators require them. Complete, well-maintained kit.",
        image: "/photos/wreck-team.jpg",
        imageAlt: "Experienced team on a wreck with a dive light",
      },
    ],
    cta: { label: "Charter introductions", href: "/dive/charters" },
    related: [
      { label: "Offshore sites", href: "/dive/offshore" },
      { label: "Advanced Open Water", href: "/courses/advanced-open-water" },
    ],
    footnote:
      "GPS: 30 02.555′N / 87 00.397′W. Dive Pros does not own or operate charter boats. Policies and prices are set by the operators. A divemaster is aboard to serve as a guide if wanted or required. Operators here do not mix recreational divers with technical divers on the same trip.",
  },
  {
    path: "/dive/all-sites",
    title: "All dive sites",
    kicker: "Catalog",
    description:
      "Pensacola and Escambia County public artificial reefs: wrecks, oil rigs, bridge rubble, and military tanks with GPS.",
    image: "/photos/baitball.jpg",
    imageAlt: "Diver approaching a dense school of fish",
    intro:
      "Escambia County’s public artificial reef inventory. Coordinates are as published for navigation planning. Always verify with a current local briefing. Sites marked with history in state waters sit inside 9 NM. Do not enter wreck interiors unless trained and it is appropriate.",
    stats: [
      { value: "Wrecks", label: "Liberty ships to the Mighty O" },
      { value: "Rigs", label: "Tenneco & Chevron" },
      { value: "Rubble", label: "I-10, bridges, piers" },
    ],
    tables: [
      {
        heading: "Wrecks",
        caption: "Escambia County public artificial reefs: wrecks",
        rows: [
          { name: "Antares", notes: "347′ freighter, broken up", depth: "130′", coords: "30 00.582′N / 87 07.774′W" },
          { name: "Avocet Dredge", notes: "247′ dredge Avocet", depth: "115′", coords: "29 58.399′N / 87 12.630′W" },
          { name: "Born Again Tug", notes: "65′ tug & steel pipes", depth: "95′", coords: "30 08.222′N / 87 14.218′W" },
          { name: "Knicklebine Barge", notes: "117′ barge with 14 large concrete pieces", depth: "122′", coords: "30 01.970′N / 87 11.495′W" },
          { name: "Don Phillips Barge & Parks", notes: "120′ barge & 14 merry-go-rounds", depth: "100′", coords: "30 05.750′N / 87 10.600′W" },
          { name: "Joe Patti Memorial Reef*", notes: "175′ barge with steel figures on deck", depth: "50′", coords: "30 17.330′N / 87 13.755′W" },
          { name: "Kingry Barge", notes: "Upside down on crushed steel tanks", depth: "90′", coords: "30 09.577′N / 87 13.902′W" },
          { name: "Liberty Ship Reef*", notes: "Joseph L. Meek", depth: "95′", coords: "30 16.384′N / 87 09.574′W" },
          { name: "Navy Barge*", notes: "12 m south of Camel", depth: "82′", coords: "30 11.180′N / 87 14.750′W" },
          { name: "Navy Camel*", notes: "12 m north of barge", depth: "82′", coords: "30 11.194′N / 87 14.764′W" },
          { name: "Navy YDT-14", notes: "132′ dive tender, good condition", depth: "95′", coords: "30 05.330′N / 87 09.640′W" },
          { name: "Navy YDT-15", notes: "Roof gone; wires in pilot house", depth: "96′", coords: "30 05.267′N / 87 09.550′W" },
          { name: "Ocean Wind Tug*", notes: "87′ steel tug, reefed 13 Jan 2016", depth: "82′", coords: "30 10.995′N / 87 12.017′W" },
          { name: "Oops Barge*", notes: "Small barge", depth: "75′", coords: "30 13.233′N / 87 13.992′W" },
          { name: "PC Barge & Towers*", notes: "Holes along sides; two sets of towers", depth: "82′", coords: "30 11.190′N / 87 14.070′W" },
          { name: "Pete Tide II", notes: "180′ steel vessel, faces NNW", depth: "102′", coords: "30 08.760′N / 87 14.020′W" },
          { name: "Russian Freighter*", notes: "San Pablo", depth: "84′", coords: "30 11.333′N / 87 13.057′W" },
          { name: "Santa Rosa County Tug", notes: "Superstructure torn off", depth: "98′", coords: "30 05.950′N / 87 10.950′W" },
          { name: "Soule Barge & Towers*", notes: "Upside-down / ~15% subsided", depth: "83′", coords: "30 10.888′N / 87 14.566′W" },
          { name: "Tessie*", notes: "Very small mark", depth: "77′", coords: "30 11.637′N / 87 14.452′W" },
          { name: "Tex Edwards Barge*", notes: "Broken up", depth: "75′", coords: "30 16.138′N / 87 10.157′W" },
          { name: "Three Barges*", notes: "3 coal barges + storms", depth: "54′", coords: "30 17.450′N / 87 13.257′W" },
          { name: "Tug Deliverance*", notes: "Midships gone except engine", depth: "83′", coords: "30 10.907′N / 87 14.618′W" },
          { name: "Tug Herron & LCM", notes: "53′ tug + 51′ LCM", depth: "92′", coords: "30 08.187′N / 87 13.684′W" },
          { name: "Tug Philip", notes: "60′ steel tug, ~20% subsided", depth: "97′", coords: "30 07.973′N / 87 13.332′W" },
          { name: "Tug Sylvia*", notes: "Wheelhouse & upper deck gone", depth: "82′", coords: "30 11.100′N / 87 14.200′W" },
          { name: "USS Massachusetts*", notes: "340′ battleship, FL archaeological preserve", depth: "30′", coords: "30 17.795′N / 87 18.720′W" },
          { name: "USS Oriskany Memorial Reef", notes: "911′ Essex-class. Do not enter interior.", depth: "212′", coords: "30 02.555′N / 87 00.397′W" },
        ],
      },
      {
        heading: "Oil rigs",
        rows: [
          { name: "Chevron Oil Rig", notes: "Two jackets side-by-side", depth: "137′", coords: "30 04.244′N / 87 02.118′W" },
          { name: "Tenneco Oil Rig", notes: "Dismantled platform, jacket portion", depth: "175′", coords: "29 59.733′N / 87 05.111′W" },
        ],
      },
      {
        heading: "Bridge rubble",
        rows: [
          { name: "Bayou Chico Bridge Rubble", notes: "Small mark", depth: "89′", coords: "30 09.335′N / 87 13.860′W" },
          { name: "Blackwater Bridge Rubble", notes: "50 concrete pilings stacked & scattered", depth: "91′", coords: "30 09.115′N / 87 13.575′W" },
          { name: "Bridge Rubble*", notes: "Concrete rubble", depth: "80′", coords: "30 13.954′N / 87 12.124′W" },
          { name: "Capt Bob Quarles Reef*", notes: "270 tons of concrete", depth: "13′", coords: "30 19.738′N / 87 10.871′W" },
          { name: "Capt John A. Racine Reef", notes: "8,000 tons Pensacola Bay fishing-bridge rubble", depth: "85′", coords: "30 05.900′N / 87 09.027′W" },
          { name: "Casino Fishing Reef*", notes: "Concrete rubble", depth: "60′", coords: "30 18.722′N / 87 07.331′W" },
          { name: "David Bogan Reef (I-10 #1)", notes: "I-10 bridge rubble", depth: "75′", coords: "30 06.750′N / 87 24.250′W" },
          { name: "I-10 Bridge Rubble Reef #2", notes: "I-10 bridge rubble", depth: "78′", coords: "30 06.700′N / 87 25.300′W" },
          { name: "I-10 Bridge Rubble Reef #3", notes: "I-10 bridge rubble", depth: "86′", coords: "30 06.700′N / 87 26.300′W" },
          { name: "I-10 Bridge Rubble Reef #4", notes: "I-10 bridge rubble", depth: "90′", coords: "30 06.600′N / 87 27.500′W" },
          { name: "I-10 Bridge Rubble Reef #5", notes: "I-10 bridge rubble", depth: "93′", coords: "30 06.600′N / 87 28.600′W" },
          { name: "I-10 Bridge Rubble Reef #6", notes: "I-10 bridge rubble", depth: "83′", coords: "30 06.550′N / 87 29.550′W" },
          { name: "Mary Hartshorn Reef (I-10 #7)", notes: "I-10 bridge rubble", depth: "83′", coords: "30 05.950′N / 87 25.950′W" },
          { name: "I-10 Br. Rubble / Culverts*", notes: "Bridge rubble & concrete pipes", depth: "80′", coords: "30 11.768′N / 87 14.328′W" },
          { name: "Joseph L. & Jane Watts Reef*", notes: "Two concrete deck T spans", depth: "46′", coords: "30 18.020′N / 87 12.797′W" },
          { name: "Mayor Lane Gilchrist Reef*", notes: "8,000 tons Gulf Breeze Fishing Bridge", depth: "50′", coords: "30 17.467′N / 87 13.773′W" },
          { name: "NPR#1 Navarre Pier Rubble*", notes: "59 concrete pieces", depth: "45′", coords: "30 18.000′N / 87 12.600′W" },
          { name: "NPR#3 Navarre Pier Rubble*", notes: "Two concrete deck T spans", depth: "49′", coords: "30 17.995′N / 87 12.870′W" },
          { name: "NPR#4 Navarre Pier Rubble*", notes: "Two concrete deck T spans", depth: "46′", coords: "30 17.991′N / 87 13.068′W" },
          { name: "Pat Doman Reef*", notes: "Pilings from Gulf Breeze Fishing Bridge", depth: "50′", coords: "30 17.435′N / 87 13.305′W" },
          { name: "Penhall Reef", notes: "5,700 tons concrete bridge rubble", depth: "92′", coords: "30 05.523′N / 87 11.497′W" },
          { name: "Penhall II", notes: "4,500 tons rubble; steel water pipe added ~2008", depth: "94′", coords: "30 05.000′N / 87 11.000′W" },
          { name: "Pensacola Bay Fishing Bridge #2", notes: "4,500 tons fishing-bridge rubble", depth: "113′", coords: "30 06.723′N / 87 09.673′W" },
          { name: "Rich Sleppy Memorial Reef*", notes: "Two concrete deck T spans", depth: "45′", coords: "30 17.978′N / 87 13.108′W" },
          { name: "Will Davis Reef", notes: "44′ shrimp boat + ~100 tons rubble", depth: "100′", coords: "30 05.864′N / 87 10.510′W" },
          { name: "Yancy Spencer III Reef*", notes: "Piling caps from Gulf Breeze Fishing Bridge", depth: "50′", coords: "30 17.485′N / 87 13.295′W" },
        ],
      },
      {
        heading: "Military tanks",
        rows: [
          { name: "Battle Tank 7A", notes: "Upside down; ~20% subsided", depth: "83′", coords: "30 09.738′N / 87 14.461′W" },
          { name: "Battle Tank 7B", notes: "Upside down on left side", depth: "92′", coords: "30 09.370′N / 87 14.437′W" },
          { name: "Battle Tank 7G2", notes: "Upright; ~10% subsided", depth: "82′", coords: "30 09.671′N / 87 14.435′W" },
          { name: "Battle Tank 7G3", notes: "Upside down on left side", depth: "84′", coords: "30 09.610′N / 87 14.427′W" },
          { name: "Battle Tank 7G4", notes: "Buried?", depth: "81′", coords: "30 09.087′N / 87 14.341′W" },
          { name: "Battle Tank 7H", notes: "Upside down; subsided past turret", depth: "91′", coords: "30 09.190′N / 87 14.370′W" },
          { name: "Battle Tank 7M1", notes: "Upside down on left side", depth: "85′", coords: "30 09.431′N / 87 14.341′W" },
          { name: "Battle Tank 7M2", notes: "On right side; ~20% subsided", depth: "85′", coords: "30 09.375′N / 87 14.293′W" },
          { name: "M60 Battle tank 1", notes: "On right side", depth: "107′", coords: "30 06.685′N / 87 11.951′W" },
          { name: "M60 Battle tank 2", notes: "On left side", depth: "110′", coords: "30 06.693′N / 87 11.921′W" },
          { name: "M60 Battle tank 3", notes: "75′ NE of tank 2", depth: "110′", coords: "30 06.702′N / 87 11.901′W" },
          { name: "M60 Battle tank 4", notes: "Good ledge under tank", depth: "113′", coords: "30 06.711′N / 87 11.873′W" },
          { name: "M60 Battle tank 5", notes: "More subsided", depth: "109′", coords: "30 06.741′N / 87 11.804′W" },
        ],
      },
    ],
    cta: { label: "Talk sites at the counter", href: "/contact" },
    related: [
      { label: "Shore / beach", href: "/dive/shore-dives" },
      { label: "Charters", href: "/dive/charters" },
    ],
    footnote:
      "* Reef in state waters. Additional reef balls, pyramids, limestone modules, and culverts are on the Escambia inventory. Ask the counter for a current briefing. Coordinates are historical survey data and should not be used as the sole source of navigation.",
  },
];
