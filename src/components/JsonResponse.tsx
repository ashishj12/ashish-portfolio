"use client";

import { useEffect, useState } from "react";

const lines = [
  { k: "name", v: '"Ashish Kumar"' },
  { k: "role", v: '"Backend Software Engineer"' },
  { k: "location", v: '"Jaipur, India"' },
  { k: "status", v: '"open_to_opportunities"' },
  { k: "stack", v: '["Java", "Spring Boot", "Node.js", "PostgreSQL"]' },
  { k: "response_time", v: '"< 24h"' },
];

export default function JsonResponse() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [typedChars, setTypedChars] = useState(0);

  useEffect(() => {
    if (visibleLines >= lines.length) return;
    const current = lines[visibleLines].v.length + lines[visibleLines].k.length;

    if (typedChars < current) {
      const t = setTimeout(() => setTypedChars((c) => c + 1), 14);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setVisibleLines((l) => l + 1);
      setTypedChars(0);
    }, 220);
    return () => clearTimeout(t);
  }, [typedChars, visibleLines]);

  return (
    <div className="frame-marks rounded-lg border border-[var(--line)] bg-[var(--panel)]/80 backdrop-blur-sm p-5 md:p-6 font-[family-name:var(--font-mono)] text-[13px] leading-relaxed shadow-[0_0_0_1px_rgba(127,224,211,0.03)]">
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-[var(--line)]">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--line)]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[var(--accent-dim)]" />
        </div>
        <span className="text-[var(--ink-faint)] text-xs">GET /me → 200 OK</span>
      </div>

      <div className="text-[var(--ink-dim)]">
        {"{"}
        <div className="pl-4">
          {lines.map((line, i) => {
            if (i > visibleLines) return null;
            const isCurrent = i === visibleLines;
            const fullText = `"${line.k}": ${line.v}`;
            const shown = isCurrent ? fullText.slice(0, typedChars) : fullText;
            return (
              <div key={line.k} className="min-h-[1.5em]">
                <span className="text-[var(--accent)]">{shown.split(":")[0]}</span>
                {shown.includes(":") && (
                  <>
                    :<span className="text-[var(--ink)]">{shown.split(":").slice(1).join(":")}</span>
                  </>
                )}
                {isCurrent && typedChars < fullText.length && (
                  <span className="inline-block w-[7px] h-[13px] bg-[var(--accent)] ml-0.5 align-middle animate-pulse" />
                )}
                {i < lines.length - 1 && !isCurrent ? "," : ""}
                {i < lines.length - 1 && isCurrent && typedChars >= fullText.length ? "," : ""}
              </div>
            );
          })}
        </div>
        {"}"}
      </div>
    </div>
  );
}
