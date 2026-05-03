"use client";

import Link from "next/link";
import { useLanguage } from "../contexts/LanguageContext";
import { PolandMap, NetherlandsMap, AustraliaMap } from "./JourneyMap";

export default function JourneyClient() {
  const { t } = useLanguage();
  const j = t.journey;
  const jp = t.journeyPage;

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      {/* Header */}
      <header className="sticky top-0 z-50 flex items-center justify-between px-8 h-14 bg-zinc-950/80 backdrop-blur border-b border-zinc-800/50">
        <Link href="/" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">
          {jp.back}
        </Link>
        <span className="font-semibold tracking-tight">{jp.title}</span>
        <span className="text-xs text-zinc-600 font-mono hidden sm:block">{jp.badge}</span>
      </header>

      {/* Intro */}
      <div className="max-w-2xl mx-auto px-8 pt-20 pb-8 text-center">
        <p className="text-xs font-mono tracking-widest text-zinc-500 uppercase mb-4">
          {jp.thePath}
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">{jp.title}</h1>
        <p className="text-zinc-400 leading-relaxed">{jp.intro}</p>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-8 pb-24 space-y-4">
        {/* Poland — map LEFT, text RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-zinc-800/50">
          <div className="w-full max-w-xl mx-auto md:mx-0">
            <PolandMap />
          </div>
          <div className="md:pl-8">
            <p className={`text-[11px] font-mono tracking-widest ${j.poland.tagColor} uppercase mb-3`}>
              {j.poland.tag}
            </p>
            <h2 className="text-3xl font-bold mb-4">{j.poland.heading}</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">{j.poland.p1}</p>
            <p className="text-zinc-400 leading-relaxed">
              {j.poland.p2pre}
              <span className="text-zinc-200 font-medium">{j.poland.p2school}</span>
              {j.poland.p2post}
            </p>
          </div>
        </div>

        {/* Netherlands — text LEFT, map RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-zinc-800/50">
          <div className="md:pr-8 order-2 md:order-1">
            <p className={`text-[11px] font-mono tracking-widest ${j.netherlands.tagColor} uppercase mb-3`}>
              {j.netherlands.tag}
            </p>
            <h2 className="text-3xl font-bold mb-4">{j.netherlands.heading}</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              {j.netherlands.p1pre}
              <span className="text-zinc-200 font-medium">{j.netherlands.p1degree}</span>
              {j.netherlands.p1mid}
              <span className="text-zinc-200 font-medium">{j.netherlands.p1uni}</span>
              {j.netherlands.p1post}
            </p>
            <p className="text-zinc-400 leading-relaxed">{j.netherlands.p2}</p>
          </div>
          <div className="w-full max-w-xl mx-auto md:mx-0 order-1 md:order-2">
            <NetherlandsMap />
          </div>
        </div>

        {/* Australia — map LEFT, text RIGHT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12">
          <div className="w-full max-w-xl mx-auto md:mx-0">
            <AustraliaMap />
          </div>
          <div className="md:pl-8">
            <p className={`text-[11px] font-mono tracking-widest ${j.australia.tagColor} uppercase mb-3`}>
              {j.australia.tag}
            </p>
            <h2 className="text-3xl font-bold mb-4">{j.australia.heading}</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              {j.australia.p1pre}
              <span className="text-zinc-200 font-medium">{j.australia.p1uni}</span>
              {j.australia.p1post}
            </p>
            <p className="text-zinc-400 leading-relaxed">{j.australia.p2}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
