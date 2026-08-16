import { marqueeItems } from "@/data/resume";

export default function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <div className="relative border-y border-[var(--line)] bg-[var(--bg-soft)] py-4 overflow-hidden">
      <div className="flex w-max animate-marquee">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-6 mono-eyebrow text-[var(--ink-faint)] px-6 whitespace-nowrap"
          >
            <span className="text-[var(--ink)]">{item}</span>
            <span className="text-[var(--accent-dim)]">{"///"}</span>
          </div>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg-soft)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg-soft)] to-transparent" />
    </div>
  );
}
