"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/resume";
import SectionHeading from "./SectionHeading";

const methodColor: Record<string, string> = {
  GET: "text-[var(--accent)] border-[var(--accent-dim)]",
  POST: "text-[var(--amber)] border-[var(--amber)]/50",
  PUT: "text-[var(--ink-dim)] border-[var(--line)]",
};

export default function Projects() {
  return (
    <section id="work" className="relative py-24 md:py-32 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          method="GET"
          path="/work"
          title="Featured projects."
          description="Three backends, each solving a different problem — AI-assisted coaching, computer-vision attendance, and full-stack commerce."
        />

        <div className="space-y-5">
          {projects.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group block frame-marks rounded-lg border border-[var(--line)] hover:border-[var(--accent-dim)] bg-[var(--panel)]/40 hover:bg-[var(--panel)] transition-colors p-6 md:p-8 focus-ring"
            >
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-center gap-3 mono-eyebrow">
                  <span className={`px-2 py-0.5 rounded border text-xs ${methodColor[p.method]}`}>
                    {p.method}
                  </span>
                  <span className="text-[var(--ink-faint)]">/projects/{p.slug}</span>
                </div>
                <ArrowUpRight
                  size={20}
                  className="text-[var(--ink-faint)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                />
              </div>

              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-semibold tracking-tight mb-1.5">
                {p.name}
              </h3>
              <p className="text-[var(--accent-dim)] text-sm mb-4">{p.tag}</p>
              <p className="text-[var(--ink-dim)] leading-relaxed mb-5 max-w-2xl">{p.description}</p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-2 mb-6">
                {p.highlights.map((h) => (
                  <li key={h} className="text-sm text-[var(--ink-dim)] flex gap-2.5">
                    <span className="text-[var(--accent)] shrink-0">▸</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="mono-eyebrow px-2.5 py-1 rounded border border-[var(--line)] text-[var(--ink-faint)]"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
