import { marqueeItems } from "@/lib/site";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="overflow-hidden border-y border-brand-black bg-brand-yellow py-3 text-brand-black">
      <div className="marquee-track flex w-max items-center gap-0">
        {items.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="flex items-center text-sm font-medium uppercase tracking-[0.18em]"
          >
            <span className="px-6">{item}</span>
            <span aria-hidden className="text-brand-black/40">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
