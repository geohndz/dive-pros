export const legacyRedirects = [
  { source: "/learn-to-dive", destination: "/courses" },
  { source: "/learn-to-dive/open-water-scuba", destination: "/courses/open-water" },
  { source: "/learn-to-dive/leadership-2", destination: "/courses/divemaster" },
  { source: "/facilities", destination: "/about/facilities" },
  { source: "/dive-charters", destination: "/dive/charters" },
  { source: "/dive-sites", destination: "/dive" },
  { source: "/dive-sites/uss-oriskany", destination: "/dive/uss-oriskany" },
  { source: "/dive-sites/inshore-dives", destination: "/dive/nearshore" },
  { source: "/dive-sites/offshore-dives", destination: "/dive/offshore" },
  { source: "/dive-sites/all-dive-sites", destination: "/dive/all-sites" },
  { source: "/joe-patti-memorial-reef", destination: "/dive/nearshore" },
] as const;
