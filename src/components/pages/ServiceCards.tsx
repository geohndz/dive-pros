import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { objectPosition } from "@/lib/image-focus";
import type { PageCard } from "@/lib/pages/types";

export function ServiceCards({ cards }: { cards: PageCard[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {cards.map((card) => (
        <li key={card.href}>
          <Link
            href={card.href}
            className="group flex h-full overflow-hidden border border-white/10 transition-colors duration-300 hover:border-brand-yellow"
          >
            <div className="relative w-[7.5rem] shrink-0 sm:w-32 lg:w-36">
              <Image
                src={card.image}
                alt={card.imageAlt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                style={{ objectPosition: objectPosition(card.image) }}
                sizes="144px"
              />
            </div>
            <div className="flex min-w-0 flex-1 flex-col justify-center px-4 py-4 lg:px-5">
              <h3 className="flex items-center justify-between gap-2 text-sm font-bold uppercase tracking-wide text-brand-white sm:text-base">
                {card.title}
                <ArrowUpRight className="size-4 shrink-0 text-brand-white/40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-brand-yellow" />
              </h3>
              <p className="mt-1.5 line-clamp-3 text-xs leading-relaxed text-brand-white/55">
                {card.body}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
