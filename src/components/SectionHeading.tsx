"use client";

import { motion } from "framer-motion";

export default function SectionHeading({
  method,
  path,
  title,
  description,
}: {
  method: "GET" | "POST" | "PUT";
  path: string;
  title: string;
  description?: string;
}) {
  const methodColor =
    method === "GET" ? "text-[var(--accent)]" : method === "POST" ? "text-[var(--amber)]" : "text-[var(--ink-dim)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 md:mb-16"
    >
      <p className="mono-eyebrow flex items-center gap-2 mb-4">
        <span className={methodColor}>{method}</span>
        <span className="text-[var(--ink-faint)]">{path}</span>
        <span className="dashed-line w-10" />
      </p>
      <h2 className="font-[family-name:var(--font-display)] font-semibold text-3xl md:text-4xl tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-lg text-[var(--ink-dim)] leading-relaxed">{description}</p>
      )}
    </motion.div>
  );
}
