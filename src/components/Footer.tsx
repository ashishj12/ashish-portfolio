import { navLinks, profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="relative border-t border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10">
          <div>
            <p className="mono-eyebrow text-[var(--ink-faint)] mb-3">
              {"// end of response"}
            </p>
            <p className="font-[family-name:var(--font-display)] font-semibold text-2xl md:text-3xl tracking-tight max-w-md">
              Building backend systems that don&apos;t page you at 3am.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 mono-eyebrow text-[var(--ink-dim)]">
            {navLinks.map((l) => (
              <a
                key={l.path}
                href={l.href}
                className="hover:text-[var(--accent)] transition-colors focus-ring rounded"
              >
                {l.path}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-[var(--line)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs mono-eyebrow text-[var(--ink-faint)]">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span>Built by {profile.name}</span>
        </div>
      </div>
    </footer>
  );
}
