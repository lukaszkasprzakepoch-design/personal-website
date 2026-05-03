const projects = [
  {
    title: "Children's Speech Recognition",
    year: "2026",
    description:
      "Konkurs DrivenData — budowanie najlepszego modelu ML do rozpoznawania mowy dzieci w celu wczesnego wykrywania dysleksji i poprawy testów umiejętności czytania.",
    tags: ["Python", "PyTorch", "ASR", "ML"],
    href: "https://www.drivendata.org",
    accent: "indigo",
  },
  {
    title: "Policy Pipeline Simulator",
    year: "2025–2026",
    description:
      "Agentyczna AI dla holenderskiego Ministerstwa Spraw Wewnętrznych (BZK). Symuluje procesy legislacyjne za pomocą agentów AI; zbudowane według wymagań urzędników rządowych.",
    tags: ["Agentic AI", "Python", "Web App", "LLM"],
    href: "#",
    accent: "violet",
  },
  {
    title: "Cross-Platform Note-Taking App",
    year: "2025",
    description:
      "Projekt inżynierii oprogramowania — wieloplatformowa aplikacja desktopowa do notatek zbudowana w pięcioosobowym zespole.",
    tags: ["Java", "Teamwork", "Desktop"],
    href: "#",
    accent: "sky",
  },
  {
    title: "Online Shop — branco.pl",
    year: "2024",
    description:
      "Sklep internetowy dla polskiej marki odzieżowej. Zintegrowane modele AI do personalizacji rekomendacji produktów i zwiększenia sprzedaży online.",
    tags: ["Next.js", "AI", "E-commerce"],
    href: "https://branco.pl",
    accent: "emerald",
  },
  {
    title: "CanSat",
    year: "2023",
    description:
      "Konkurs licealny: budowa i programowanie satelity wielkości puszki — pełny stos oprogramowania wbudowanego do zbierania danych pokładowych.",
    tags: ["C++", "Embedded", "Hardware"],
    href: "#",
    accent: "amber",
  },
];

const accentMap: Record<string, string> = {
  indigo: "group-hover:border-indigo-600 group-hover:text-indigo-400 tag-indigo",
  violet: "group-hover:border-violet-600 group-hover:text-violet-400 tag-violet",
  sky: "group-hover:border-sky-600 group-hover:text-sky-400 tag-sky",
  emerald: "group-hover:border-emerald-600 group-hover:text-emerald-400 tag-emerald",
  amber: "group-hover:border-amber-600 group-hover:text-amber-400 tag-amber",
};

const tagAccentMap: Record<string, string> = {
  indigo: "bg-indigo-950/60 text-indigo-300 border border-indigo-800/50",
  violet: "bg-violet-950/60 text-violet-300 border border-violet-800/50",
  sky: "bg-sky-950/60 text-sky-300 border border-sky-800/50",
  emerald: "bg-emerald-950/60 text-emerald-300 border border-emerald-800/50",
  amber: "bg-amber-950/60 text-amber-300 border border-amber-800/50",
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-zinc-100 mb-2">Projects</h2>
      <p className="text-zinc-500 mb-12 text-sm">
        Things I&apos;ve built, researched, and shipped.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            target={p.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`group flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition-colors ${accentMap[p.accent]}`}
          >
            <div className="flex items-start justify-between gap-2">
              <h3 className="font-semibold text-zinc-100 transition-colors">
                {p.title}
              </h3>
              <span className="font-mono text-xs text-zinc-500 shrink-0 pt-0.5">
                {p.year}
              </span>
            </div>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className={`text-xs px-2 py-0.5 rounded-full ${tagAccentMap[p.accent]}`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
