import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cx("mx-auto w-full max-w-[1440px] px-5 lg:px-10", className)}>
      {children}
    </div>
  );
}

export function SectionIndex({
  index,
  label,
  tone = "light",
}: {
  index: string;
  label: string;
  tone?: "light" | "dark";
}) {
  const muted = tone === "light" ? "text-brand-white/55" : "text-brand-black/45";
  const rule = tone === "light" ? "bg-brand-white/30" : "bg-brand-black/20";
  const accent = tone === "light" ? "text-brand-yellow" : "text-brand-black";

  return (
    <div className="flex items-center gap-3 text-[0.7rem] font-medium uppercase tracking-[0.22em]">
      <span className={accent}>{index}</span>
      <span className={cx("h-px w-8", rule)} aria-hidden />
      <span className={muted}>{label}</span>
    </div>
  );
}
