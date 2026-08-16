"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section
      id="experience"
      className="relative py-24 md:py-32 border-t border-[var(--line)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <SectionHeading
          method="GET"
          path="/experience"
          title="Where I've worked."
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-0 top-2 bottom-2 dashed-line-v" />

          {experience.map((job, i) => (
            <motion.div
              key={job.company}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative pb-4"
            >
              <span className="absolute -left-8 md:-left-10 top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--accent)] ring-4 ring-[var(--bg)]" />

              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-x-6 gap-y-2 mb-3">
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg sm:text-xl md:text-2xl font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="text-[var(--accent-dim)]">{job.company}</p>
                </div>
                <p className="mono-eyebrow text-xs sm:text-sm text-[var(--ink-faint)] break-words">
                  <span className="hidden sm:inline">
                    {job.period} · {job.location}
                  </span>
                  <span className="sm:hidden">{job.period}</span>
                  <span className="sm:hidden block text-xs">
                    {job.location}
                  </span>
                </p>
              </div>

              <ul className="space-y-2.5 max-w-2xl">
                {job.points.map((pt) => (
                  <li
                    key={pt}
                    className="text-[var(--ink-dim)] leading-relaxed flex gap-2.5"
                  >
                    <span className="text-[var(--accent)] shrink-0">▸</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
