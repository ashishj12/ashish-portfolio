"use client";

import { motion } from "framer-motion";
import { profile, education } from "@/data/resume";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 border-t border-[var(--line)]">
      <div className="mx-auto max-w-6xl px-6 md:px-8 grid md:grid-cols-[0.9fr_1.1fr] gap-12 md:gap-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="mono-eyebrow flex items-center gap-2 mb-4">
            <span className="text-[var(--accent)]">GET</span>
            <span className="text-[var(--ink-faint)]">/about</span>
            <span className="dashed-line w-10" />
          </p>
          <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl tracking-tight mb-2">
            Hey, I&apos;m Ashish.
          </h2>
          <p className="text-[var(--ink-dim)]">{profile.location}</p>

          <div className="mt-10 border border-[var(--line)] rounded-lg p-5 bg-[var(--panel)]/60">
            <p className="mono-eyebrow text-[var(--ink-faint)] mb-3">education</p>
            <p className="font-medium text-[var(--ink)]">{education.degree}</p>
            <p className="text-sm text-[var(--ink-dim)] mt-1">{education.school}</p>
            <div className="mt-3 flex items-center justify-between text-xs mono-eyebrow text-[var(--ink-faint)]">
              <span>{education.period}</span>
              <span className="text-[var(--accent)]">{education.detail}</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-5"
        >
          {profile.bio.map((p, i) => (
            <p key={i} className="text-lg leading-relaxed text-[var(--ink-dim)]">
              {p}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
