# Ashish Kumar — Portfolio

A minimal, motion-driven portfolio built for a backend software engineer. Design direction:
a "blueprint / API schema" identity — endpoint-style navigation (/about, /stack, /work),
a live-typed JSON response as the hero's signature element, and section eyebrows styled as
HTTP methods (GET /work, POST /contact), all drawn from the resume content in
src/data/resume.ts.

## Stack

- Next.js 16 (App Router, TypeScript)
- Tailwind CSS v4
- Framer Motion for scroll reveals and the hero's typing animation
- Bun as package manager / runtime

## Getting started

    bun install
    bun run dev

Open http://localhost:3000.

Note: the site uses next/font/google (Space Grotesk, Manrope, JetBrains Mono), so the
first `bun run dev` / `bun run build` needs an internet connection to fetch the fonts once.

## Editing content

Everything text-based — name, bio, stack, projects, experience, education, contact links —
lives in src/data/resume.ts. Update that file and the whole site updates; you shouldn't
need to touch component files for a content change.

To swap the résumé PDF behind the "Download résumé" button, replace
public/Ashish_Kumar_Resume.pdf (keep the filename, or update the href in
src/components/Hero.tsx).

## Structure

    src/
      app/
        layout.tsx      fonts + metadata
        page.tsx        assembles all sections
        globals.css     design tokens (colors, grid, marquee, etc.)
      components/
        Nav.tsx           fixed header, endpoint-style links
        Hero.tsx          headline + CTA
        JsonResponse.tsx  the typed JSON "GET /me" signature panel
        Marquee.tsx       scrolling tech-stack ticker
        About.tsx         bio + education
        Stack.tsx         tech stack, grouped like a schema
        Projects.tsx      MockMate / EduTrack / BookNest
        Experience.tsx    OctaNet internship, timeline style
        Contact.tsx       email / phone / LinkedIn / GitHub
        Footer.tsx        quick links + credit line
      data/
        resume.ts         all résumé content in one place
    public/
      Ashish_Kumar_Resume.pdf  downloadable résumé

## Deploying

Works out of the box on Vercel (vercel deploy) or anywhere that supports Next.js. Run
`bun run build && bun run start` to test a production build locally.
