"use client";

import dynamic from "next/dynamic";

const PolandMap = dynamic(() => import("../journey/JourneyMap").then((m) => m.PolandMap), { ssr: false });
const NetherlandsMap = dynamic(() => import("../journey/JourneyMap").then((m) => m.NetherlandsMap), { ssr: false });
const AustraliaMap = dynamic(() => import("../journey/JourneyMap").then((m) => m.AustraliaMap), { ssr: false });

export default function Journey() {
  return (
    <section id="journey" className="py-24 bg-zinc-950">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-zinc-100 mb-2">My Journey</h2>
        <p className="text-zinc-500 mb-16 text-sm">
          From a small town in Poland to the other side of the world — three chapters, one continuous path.
        </p>

        <div className="space-y-4">

          {/* 1 · Poland — map LEFT, text RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-zinc-800/50">
            <div className="w-full max-w-5xl mx-auto md:mx-0">
              <PolandMap />
            </div>
            <div className="md:pl-8">
              <p className="text-[11px] font-mono tracking-widest text-red-400 uppercase mb-3">
                🇵🇱 Polska · 2004 – 2024
              </p>
              <h3 className="text-3xl font-bold text-zinc-100 mb-4">Początki</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                Urodzony i wychowany w Bełchatowie — małym przemysłowym mieście w centralnej Polsce.
                Miejscu, które uczy ciężkiej pracy i myślenia z rozmachem.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Uczęszczałem do <span className="text-zinc-200 font-medium">Technikum Nowoczesnych Technologii</span> w
                pobliskim Kleszczowie, gdzie po raz pierwszy poważnie zainteresowałem się inżynierią i programowaniem.
                To była iskra, która zapoczątkowała wszystko.
              </p>
            </div>
          </div>

          {/* 2 · Netherlands — text LEFT, map RIGHT */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-12 border-b border-zinc-800/50">
            <div className="md:pr-8 order-2 md:order-1">
              <p className="text-[11px] font-mono tracking-widest text-green-400 uppercase mb-3">
                🇳🇱 Netherlands · 2024 – present
              </p>
              <h3 className="text-3xl font-bold text-zinc-100 mb-4">Current Chapter</h3>
              <p className="text-zinc-400 leading-relaxed mb-4">
                2nd year of a <span className="text-zinc-200 font-medium">BSc Computer Science & Engineering</span> at{" "}
                <span className="text-zinc-200 font-medium">TU Delft</span> — one of Europe&apos;s
                leading technical universities.
              </p>
              <p className="text-zinc-400 leading-relaxed">
                Specialising in AI and machine learning. Working at Epoch, TU Delft&apos;s
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
              <h3 className="text-3xl font-bold text-zinc-100 mb-4">Next Destination</h3>
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
    </section>
  );
}
