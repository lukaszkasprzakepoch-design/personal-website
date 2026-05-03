"use client";

import { useEffect, useRef, useState } from "react";

const roles = [
  "ML Engineer",
  "CS Student @ TU Delft",
  "Chess Player (2002 ELO)",
  "AI Researcher",
];

function useTypingRotator(items: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [idx, setIdx] = useState(0);
  const [phase, setPhase] = useState<"typing" | "pausing" | "erasing">("typing");
  const charRef = useRef(0);

  useEffect(() => {
    const target = items[idx];
    if (phase === "typing") {
      if (charRef.current < target.length) {
        const t = setTimeout(() => {
          charRef.current += 1;
          setDisplay(target.slice(0, charRef.current));
        }, speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setPhase("erasing"), pause);
        return () => clearTimeout(t);
      }
    }
    if (phase === "erasing") {
      if (charRef.current > 0) {
        const t = setTimeout(() => {
          charRef.current -= 1;
          setDisplay(target.slice(0, charRef.current));
        }, speed / 2);
        return () => clearTimeout(t);
      } else {
        setIdx((i) => (i + 1) % items.length);
        setPhase("typing");
      }
    }
  }, [display, phase, idx, items, speed, pause]);

  return display;
}

const stats = [
  { label: "GPA", value: "8.5 / 10", sub: "TU Delft" },
  { label: "ELO", value: "2002", sub: "FIDE rated" },
  { label: "TOEFL", value: "108", sub: "Bilingual EN" },
  { label: "Year", value: "2nd", sub: "Class of 2027" },
];

export default function Hero() {
  const typed = useTypingRotator(roles);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-20"
    >
      <p className="text-sm font-mono text-indigo-400 mb-4 tracking-widest uppercase">
        Hello, I&apos;m
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100 mb-4">
        Lukasz<br />Kasprzak
      </h1>

      <div className="h-8 mb-6">
        <span className="text-xl text-indigo-300 font-mono">
          {typed}
          <span className="animate-pulse">|</span>
        </span>
      </div>

      <p className="text-lg text-zinc-400 max-w-xl leading-relaxed mb-10">
        Student 2. roku informatyki na TU Delft z dużym doświadczeniem w programowaniu,
        specjalizujący się w sztucznej inteligencji i uczeniu maszynowym.
        Pasjonat budowania oprogramowania, które ma realny wpływ na świat.
      </p>

      {/* Stat badges */}
      <div className="flex flex-wrap gap-3 mb-10">
        {stats.map((s) => (
          <div
            key={s.label}
            className="flex flex-col items-center px-5 py-3 rounded-2xl border border-zinc-800 bg-zinc-900"
          >
            <span className="text-xs text-zinc-500 font-mono tracking-widest uppercase mb-0.5">
              {s.label}
            </span>
            <span className="text-lg font-bold text-zinc-100">{s.value}</span>
            <span className="text-xs text-zinc-500">{s.sub}</span>
          </div>
        ))}
      </div>

      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
        >
          View Projects
        </a>
        <a
          href="https://github.com/lukaszkasprzak"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-sm font-medium transition-colors"
        >
          GitHub
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-sm font-medium transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
