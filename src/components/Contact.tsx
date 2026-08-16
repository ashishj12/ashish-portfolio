"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/resume";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s+/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "/ashish-kumar86j",
    href: profile.linkedin,
    icon: Linkedin,
  },
  { label: "GitHub", value: "/ashishj12", href: profile.github, icon: Github },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 border-t border-[var(--line)] blueprint-grid"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mono-eyebrow flex items-center gap-2 mb-4"
        >
          <span className="text-[var(--amber)]">POST</span>
          <span className="text-[var(--ink-faint)]">/contact</span>
          <span className="dashed-line w-10" />
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.05 }}
          className="font-[family-name:var(--font-display)] font-semibold text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-tight text-balance max-w-2xl"
        >
          Let&apos;s build something reliable.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-5 max-w-lg text-[var(--ink-dim)] text-lg leading-relaxed"
        >
          Looking for a backend or full-stack engineer role. Fastest reply is by
          email - usually within a day.
        </motion.p>

        <div className="mt-12 grid sm:grid-cols-2 gap-px bg-[var(--line)] border border-[var(--line)] rounded-lg overflow-hidden max-w-2xl">
          {links.map((l, i) => (
            <motion.a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel={
                l.href.startsWith("http") ? "noopener noreferrer" : undefined
              }
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="group bg-[var(--bg)] hover:bg-[var(--panel)] p-5 flex items-center justify-between gap-3 transition-colors focus-ring"
            >
              <span className="flex items-center gap-3">
                <l.icon size={18} className="text-[var(--accent)] shrink-0" />
                <span>
                  <span className="block mono-eyebrow text-[var(--ink-faint)]">
                    {l.label}
                  </span>
                  <span className="text-[var(--ink)] text-sm">{l.value}</span>
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-[var(--ink-faint)] group-hover:text-[var(--accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0"
              />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
