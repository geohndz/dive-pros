/** Focal points as CSS `object-position`. The subject’s location in the source. */
export const imageFocus: Record<string, string> = {
  // Portrait: diver head/chest sit ~40% down; top-align showed only empty water.
  "/photos/lime-diver.jpg": "50% 42%",
  "/photos/portrait.jpg": "50% 38%",
  "/photos/sand-team.jpg": "48% 48%",
  "/photos/godrays.jpg": "58% 48%",
  "/photos/baitball.jpg": "55% 52%",
  "/photos/silhouette.jpg": "42% 52%",
  "/photos/surface.jpg": "45% 40%",
  "/photos/barracuda.jpg": "52% 48%",
  "/photos/reef-ascent.jpg": "42% 46%",
  "/photos/wreck-team.jpg": "50% 40%",
  "/photos/boat-gear.jpg": "50% 62%",
  "/photos/pier-tank.jpg": "50% 45%",
  "/photos/aqua-pair.jpg": "50% 58%",
  "/photos/reef-pair.jpg": "64% 46%",
  "/photos/yellow-fins.jpg": "52% 48%",
  "/photos/storefront.jpg": "50% 35%",
  "/photos/pool-check.jpg": "42% 38%",
  "/photos/pool-orange.jpg": "50% 38%",
  "/photos/pool-overhead.jpg": "50% 48%",
  "/photos/tank-valves.jpg": "50% 42%",
  "/photos/tanks-wall.jpg": "50% 45%",
  "/photos/boat-fins.jpg": "48% 50%",
  "/photos/shaka.jpg": "52% 42%",
  "/photos/wreck-hatch.jpg": "58% 48%",
  "/photos/facility-pool.jpg": "48% 55%",
  "/photos/shop-floor.jpg": "50% 42%",
  "/photos/fill-station.jpg": "50% 45%",
};

export function objectPosition(src: string) {
  return imageFocus[src] ?? "50% 50%";
}
