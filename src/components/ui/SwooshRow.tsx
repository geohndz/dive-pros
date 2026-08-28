import Link from "next/link";
import type { ReactNode } from "react";
import { cx } from "@/lib/cx";

export function SwooshRow({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link href={href} className={cx("swoosh-row group", className)}>
      <span className="btn-swoosh" aria-hidden>
        <span className="btn-swoosh-fill" />
        <span className="btn-swoosh-gap" />
        <span className="btn-swoosh-line" />
      </span>
      <span className="relative z-10 flex w-full min-w-0 items-baseline justify-between gap-4">
        {children}
      </span>
    </Link>
  );
}
