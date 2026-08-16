import type { Metadata } from "next";
import { Space_Grotesk, Manrope, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const jbMono = JetBrains_Mono({
  variable: "--font-jbmono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "Ashish Kumar — Backend Software Engineer",
  description:
    "Backend software engineer building production-grade REST APIs with Spring Boot, Spring Security 6, and Node.js. JWT auth, database schema design, and AI-integrated backends.",
  metadataBase: new URL("https://ashishkumar.dev"),
  openGraph: {
    title: "Ashish Kumar — Backend Software Engineer",
    description:
      "REST APIs, JWT auth, database schema design, and AI-integrated backends — Spring Boot, Spring Security 6, Node.js.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${manrope.variable} ${jbMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-[var(--bg)] text-[var(--ink)] font-[family-name:var(--font-body)]">
        {children}
      </body>
    </html>
  );
}
