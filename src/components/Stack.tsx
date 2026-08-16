"use client";

import { motion } from "framer-motion";
import { stack } from "@/data/resume";
import SectionHeading from "./SectionHeading";

export default function Stack() {
  return (
    <section
      id="stack"
      className="relative py-24 md:py-32 border-t border-[var(--line)] blueprint-grid-fine"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          method="GET"
          path="/stack"
          title="What I build with."
          description="Grouped the way I'd document a schema — each table is a category, each row a tool I use regularly."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--line)] border border-[var(--line)] rounded-lg overflow-hidden">
          {stack.map((group, i) => (
            <motion.div
              key={group.group}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: (i % 3) * 0.06 }}
              className="bg-[var(--bg)] p-6 hover:bg-[var(--panel)] transition-colors"
            >
              <p className="mono-eyebrow text-[var(--accent-dim)] mb-4">
                {group.group}
              </p>
              <ul className="space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="text-[var(--ink)] flex items-baseline gap-2.5"
                  >
                    <span className="text-[var(--accent)] text-xs">▸</span>
                    <span>{item}</span>
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
