import { aboutPages } from "./about";
import { coursePages } from "./courses";
import { divePages } from "./dive";
import { shopPages } from "./shop";
import type { EditorialPageData } from "./types";

export type { EditorialPageData } from "./types";

const pages: EditorialPageData[] = [
  ...coursePages,
  ...divePages,
  ...shopPages,
  ...aboutPages,
];

const byPath = new Map(pages.map((page) => [page.path, page]));

export function getPage(path: string) {
  return byPath.get(path);
}

export function getChildSlugs(prefix: string) {
  return pages
    .filter((page) => page.path.startsWith(`${prefix}/`))
    .map((page) => page.path.slice(prefix.length + 1));
}

export function getAllPages() {
  return pages;
}
