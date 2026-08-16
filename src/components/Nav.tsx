"use client";

import { useEffect, useState } from "react";
import { navLinks, profile } from "@/data/resume";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-[var(--bg)]/85 backdrop-blur-md border-b border-[var(--line)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-[family-name:var(--font-display)] font-semibold text-lg tracking-tight text-[var(--ink)] focus-ring rounded"
        >
          {profile.initials}
          <span className="text-[var(--accent)]">/</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 mono-eyebrow text-[var(--ink-dim)]">
          {navLinks.map((l) => (
            <a
              key={l.path}
              href={l.href}
              className="px-3 py-2 rounded hover:text-[var(--accent)] transition-colors focus-ring"
            >
              {l.path}
            </a>
          ))}
        </nav>

        <div className="hidden sm:flex items-center gap-2 mono-eyebrow text-[var(--ink-dim)]">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
          </span>
          200 — {profile.status}
        </div>
      </div>
    </header>
  );
}
