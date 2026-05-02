"use client";

import { useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Accomplishments", href: "#accomplishments" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur border-b border-zinc-800">
      <nav className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#about" className="font-semibold text-zinc-100 tracking-tight">
          LK
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8 text-sm text-zinc-400">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover:text-zinc-100 transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

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
      </nav>

      {open && (
        <ul className="md:hidden flex flex-col px-6 pb-4 gap-4 text-sm text-zinc-400 bg-zinc-950">
          {links.map((l) => (
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
