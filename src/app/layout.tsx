import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata = {
  title: "GSAP + Next.js 10 projects",
  description: "Learn GSAP with 10 landing page demos in Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-slate-800">
            <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-4 ">
              <Link href="/" className="text-lg font-semibold">
                {" "}
                GSAP - Next.js - Tailwind Labs
              </Link>
              <div className="text-s text-slate-500">
                10 landing page animation projects
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-slate-800 text-center text-s text-slate-500 py-4">
            Built for GSAP practice - Next.js 16 + Tailwind
          </footer>
        </div>
      </body>
    </html>
  );
}
