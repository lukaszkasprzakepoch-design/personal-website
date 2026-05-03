"use client";

import Link from "next/link";
import dynamic from "next/dynamic";

const { PolandMap, NetherlandsMap, AustraliaMap } = {
  PolandMap: dynamic(() => import("./JourneyMap").then((m) => m.PolandMap), { ssr: false }),
  NetherlandsMap: dynamic(() => import("./JourneyMap").then((m) => m.NetherlandsMap), { ssr: false }),
  AustraliaMap: dynamic(() => import("./JourneyMap").then((m) => m.AustraliaMap), { ssr: false }),
};

export default function JourneyClient() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">

      {/* ── Header ────────────────────────────────────────── */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 h-14 bg-zinc-950/80 backdrop-blur border-b border-zinc-800/50">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          ← Back
        </Link>
        <span className="font-semibold tracking-tight">My Journey</span>
        <span className="text-xs text-zinc-600 font-mono hidden sm:block">3 countries · 1 path</span>
      </header>

      {/* ── Intro ─────────────────────────────────────────── */}
      <div className="max-w-2xl mx-auto px-8 pt-20 pb-8 text-center">
        <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4">The path so far</p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">My Journey</h1>
        <p className="text-zinc-400 leading-relaxed">
          From a small town in Poland to the other side of the world —
          three chapters, one continuous path forward.
        </p>
      </div>

      {/* ── Sections ──────────────────────────────────────── */}
      <div className="max-w-5xl mx-auto px-8 pb-24 space-y-4">

        {/* 1 · Poland — map LEFT, text RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-zinc-800/50">
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <PolandMap />
          </div>
          <div className="md:pl-8">
            <p className="text-[11px] font-mono tracking-widest text-indigo-400 uppercase mb-3">
              🇵🇱 Poland · 2004 – 2024
            </p>
            <h2 className="text-3xl font-bold mb-4">Origins</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Born and raised in Bełchatów — a small industrial city in central Poland.
              The kind of place that teaches you to work hard and think bigger.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Attended <span className="text-zinc-200 font-medium">Technikum Nowoczesnych Technologii</span> in
              nearby Kleszczów, where I first got serious about engineering and programming.
              It was the spark that set everything in motion.
            </p>
          </div>
        </div>

        {/* 2 · Netherlands — text LEFT, map RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-zinc-800/50">
          <div className="md:pr-8 order-2 md:order-1">
            <p className="text-[11px] font-mono tracking-widest text-green-400 uppercase mb-3">
              🇳🇱 Netherlands · 2024 – present
            </p>
            <h2 className="text-3xl font-bold mb-4">Current Chapter</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              2nd year of a <span className="text-zinc-200 font-medium">BSc Computer Science & Engineering</span> at{" "}
              <span className="text-zinc-200 font-medium">TU Delft</span> — one of Europe's
              leading technical universities.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Specialising in AI and machine learning. Working at Epoch, TU Delft's
              student AI research organisation. Building things that matter.
            </p>
          </div>
          <div className="w-full max-w-sm mx-auto md:mx-0 order-1 md:order-2">
            <NetherlandsMap />
          </div>
        </div>

        {/* 3 · Australia — map LEFT, text RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="w-full max-w-sm mx-auto md:mx-0">
            <AustraliaMap />
          </div>
          <div className="md:pl-8">
            <p className="text-[11px] font-mono tracking-widest text-amber-400 uppercase mb-3">
              🇦🇺 Australia · Aug 2026
            </p>
            <h2 className="text-3xl font-bold mb-4">Next Destination</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              Heading to <span className="text-zinc-200 font-medium">UNSW Sydney</span> for
              an exchange semester in August 2026 — the other side of the world, the next
              step forward.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              Every chapter so far has been a deliberate leap. This one is no different.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
