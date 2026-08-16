"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/resume";
import JsonResponse from "./JsonResponse";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden blueprint-grid"
    >
      {/* Ambient blueprint glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-20 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, var(--accent-dim), transparent 65%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-6 md:px-8">
        <div className="grid md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-8 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mono-eyebrow text-[var(--accent)] mb-6 flex items-center gap-2"
            >
              <span className="text-[var(--ink-faint)]">GET</span> /about
              <span className="dashed-line w-10" />
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="font-[family-name:var(--font-display)] font-semibold text-[13vw] leading-[0.95] tracking-tight text-balance md:text-[5.2rem] lg:text-[5.8rem]"
            >
              Backend
              <br />
              Software
              <br />
              <span className="text-[var(--accent)]">Engineer.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 max-w-md text-[var(--ink-dim)] text-lg leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <a
                href="#work"
                className="px-5 py-3 rounded-md bg-[var(--accent)] text-[#0a1119] font-medium text-sm hover:opacity-90 transition-opacity focus-ring"
              >
                View projects
              </a>
              <a
                href="/Ashish_Kumar_Resume.pdf"
                download
                className="px-5 py-3 rounded-md border border-[var(--line)] text-sm text-[var(--ink)] hover:border-[var(--accent-dim)] transition-colors focus-ring"
              >
                Download résumé
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <JsonResponse />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
