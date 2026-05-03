"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#about" className="font-semibold text-zinc-100 tracking-tight">
          LK
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {t.navbar.links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-zinc-100 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          {/* Language switcher */}
          <div className="flex items-center gap-0 text-xs font-mono border border-zinc-800 rounded-full overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-3 py-1.5 transition-colors ${
                lang === "en"
                  ? "bg-indigo-600 text-white"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang("pl")}
              className={`px-3 py-1.5 transition-colors ${
                lang === "pl"
                  ? "bg-indigo-600 text-white"
                  : "text-zinc-400 hover:text-zinc-100"
              }`}
            >
              PL
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-zinc-400 hover:text-zinc-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current mb-1" />
            <span className="block w-5 h-px bg-current" />
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col px-6 pb-4 gap-4 text-sm text-zinc-400 bg-zinc-950">
          {t.navbar.links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-zinc-100 transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
