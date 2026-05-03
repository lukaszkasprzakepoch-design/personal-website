"use client";

import { useLanguage } from "../contexts/LanguageContext";
import { PolandMap, NetherlandsMap, AustraliaMap } from "../journey/JourneyMap";

export default function Journey() {
  const { t } = useLanguage();
  const j = t.journey;

  return (
    <section id="journey" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">{j.title}</h2>
        <p className="text-zinc-500 mb-16 text-sm">{j.subtitle}</p>

        <div className="space-y-4">
          {/* Poland — map LEFT, text RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-zinc-800/50">
            <div className="w-full max-w-5xl mx-auto md:mx-0">
              <PolandMap />
            </div>
            <div className="md:pl-8">
              <p className={`text-[11px] font-mono tracking-widest ${j.poland.tagColor} uppercase mb-3`}>
                {j.poland.tag}
              </p>
              <h3 className="text-3xl font-bold text-zinc-100 mb-4">{j.poland.heading}</h3>
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
              <h3 className="text-3xl font-bold text-zinc-100 mb-4">{j.netherlands.heading}</h3>
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
              <h3 className="text-3xl font-bold text-zinc-100 mb-4">{j.australia.heading}</h3>
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
    </section>
  );
}
