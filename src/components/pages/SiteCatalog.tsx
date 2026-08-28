"use client";

import { useMemo, useState } from "react";
import { ArrowDown, ArrowUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { cx } from "@/lib/cx";

export type CatalogRow = {
  name: string;
  notes: string;
  depth: string;
  coords: string;
};

export type CatalogTable = {
  heading: string;
  caption?: string;
  rows: CatalogRow[];
};

type DepthRange = {
  id: string;
  label: string;
  min: number;
  max: number;
};

type DepthSort = "catalog" | "asc" | "desc";

const RANGES: DepthRange[] = [
  { id: "all", label: "All depths", min: 0, max: Infinity },
  { id: "to50", label: "≤ 50′", min: 0, max: 50 },
  { id: "51-100", label: "51′ – 100′", min: 51, max: 100 },
  { id: "101-150", label: "101′ – 150′", min: 101, max: 150 },
  { id: "deep", label: "150′+", min: 151, max: Infinity },
];

function ColGroup() {
  return (
    <colgroup>
      <col style={{ width: "28%" }} />
      <col style={{ width: "36%" }} />
      <col style={{ width: "12%" }} />
      <col style={{ width: "24%" }} />
    </colgroup>
  );
}

function depthFeet(depth: string) {
  const match = depth.replace(/,/g, "").match(/(\d+)/);
  return match ? Number(match[1]) : 0;
}

function nextSort(current: DepthSort): DepthSort {
  if (current === "catalog") return "asc";
  if (current === "asc") return "desc";
  return "catalog";
}

export function SiteCatalog({ tables }: { tables: CatalogTable[] }) {
  const [rangeId, setRangeId] = useState("all");
  const [sort, setSort] = useState<DepthSort>("catalog");
  const range = RANGES.find((item) => item.id === rangeId) ?? RANGES[0];

  const groups = useMemo(() => {
    return tables
      .map((table) => {
        const rows = table.rows.filter((row) => {
          const feet = depthFeet(row.depth);
          return feet >= range.min && feet <= range.max;
        });

        const ordered =
          sort === "catalog"
            ? rows
            : [...rows].sort((a, b) => {
                const delta = depthFeet(a.depth) - depthFeet(b.depth);
                return sort === "asc" ? delta : -delta;
              });

        return { ...table, rows: ordered };
      })
      .filter((table) => table.rows.length > 0);
  }, [range.max, range.min, sort, tables]);

  const visibleCount = groups.reduce((sum, table) => sum + table.rows.length, 0);
  const totalCount = tables.reduce((sum, table) => sum + table.rows.length, 0);

  return (
    <section className="border-t border-white/10">
      <Container className="py-12 lg:py-16">
        <div className="flex flex-col gap-8 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-white/40">
              Filter by depth
            </p>
            <div className="mt-4 flex flex-wrap gap-2" role="group" aria-label="Depth range">
              {RANGES.map((item) => {
                const active = item.id === rangeId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setRangeId(item.id)}
                    className={cx(
                      "h-10 px-4 text-xs font-medium uppercase tracking-[0.16em] transition-colors",
                      active
                        ? "bg-brand-yellow text-brand-black"
                        : "border border-white/20 text-brand-white hover:border-brand-yellow hover:text-brand-yellow",
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
          <p className="text-xs font-medium uppercase tracking-[0.2em] text-brand-white/40">
            {visibleCount} of {totalCount} sites
          </p>
        </div>

        {groups.length === 0 ? (
          <p className="mt-10 text-base text-brand-white/60">
            No sites in this depth range. Choose another filter.
          </p>
        ) : (
          groups.map((table) => (
            <div key={table.heading} className="mt-12 first:mt-10">
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-brand-yellow">
                {table.heading}
              </h2>
              {table.caption ? (
                <p className="mt-3 text-sm text-brand-white/50">{table.caption}</p>
              ) : null}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[720px] table-fixed border-collapse text-left">
                  <ColGroup />
                  <thead>
                    <tr className="border-b border-white/20 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-brand-white/40">
                      <th className="py-3 pr-4 font-medium">Name</th>
                      <th className="py-3 pr-4 font-medium">Notes</th>
                      <th
                        className="py-3 pr-4 font-medium"
                        aria-sort={
                          sort === "asc"
                            ? "ascending"
                            : sort === "desc"
                              ? "descending"
                              : "none"
                        }
                      >
                        <button
                          type="button"
                          onClick={() => setSort(nextSort)}
                          aria-label={
                            sort === "asc"
                              ? "Sort depth deepest first"
                              : sort === "desc"
                                ? "Clear depth sort"
                                : "Sort depth shallowest first"
                          }
                          className="inline-flex items-center gap-1.5 text-left uppercase tracking-[0.18em] text-brand-yellow hover:text-brand-white"
                        >
                          Depth
                          {sort === "asc" ? (
                            <ArrowUp className="size-3.5" aria-hidden />
                          ) : sort === "desc" ? (
                            <ArrowDown className="size-3.5" aria-hidden />
                          ) : null}
                        </button>
                      </th>
                      <th className="py-3 font-medium">Coordinates</th>
                    </tr>
                  </thead>
                  <tbody>
                    {table.rows.map((row) => (
                      <tr
                        key={`${row.name}-${row.coords}`}
                        className="border-b border-white/10"
                      >
                        <td className="break-words py-4 pr-4 text-sm font-medium uppercase tracking-wide text-brand-white">
                          {row.name}
                        </td>
                        <td className="break-words py-4 pr-4 text-sm text-brand-white/60">
                          {row.notes}
                        </td>
                        <td className="whitespace-nowrap py-4 pr-4 text-sm font-medium text-brand-yellow">
                          {row.depth}
                        </td>
                        <td className="break-words py-4 text-xs uppercase tracking-wide text-brand-white/50">
                          {row.coords}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </Container>
    </section>
  );
}
