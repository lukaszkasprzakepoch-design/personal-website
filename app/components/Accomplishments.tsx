const awards = [
  {
    year: "2026",
    title: "UNSW Sydney Exchange Nomination",
    description:
      "Nominowany do wymiany studenckiej w 2027 roku na Uniwersytecie Nowej Południowej Walii w Sydney — jednej z najlepszych uczelni w Australii.",
  },
  {
    year: "2024",
    title: "Top 0.1% — Poland Matura Examination",
    description:
      "Wyróżnienie Krajowej Komisji Edukacji za wynik w czołowych 0,1% ogólnopolskiej matury.",
  },
  {
    year: "2024",
    title: "Finalist — Polish Technical Olympiad (OWT)",
    description:
      "Awans do finału ogólnopolskiej Olimpiady Wiedzy Technicznej — jednego z najbardziej prestiżowych konkursów STEM w Polsce.",
  },
  {
    year: "2024",
    title: "Distinction — Polish Informatics Olympiad",
    description:
      "Wyróżnienie ogólnopolskie w Olimpiadzie Informatycznej za wybitne wyniki w programowaniu konkursowym.",
  },
  {
    year: "2024",
    title: "Semi-finalist — Polish Mathematics Olympiad",
    description:
      "Awans do półfinału ogólnopolskiej Olimpiady Matematycznej.",
  },
  {
    year: "2024",
    title: "Top 10 — National Competitive Programming Contest",
    description:
      "Miejsce w top 10 ogólnopolskiego konkursu programowania.",
  },
  {
    year: "2023",
    title: "ZDOLNI Scholar",
    description:
      "Wybrany do programu ZDOLNI — ogólnopolskiej społeczności dla naukowo zaangażowanych uczniów szkół średnich.",
  },
  {
    year: "2022",
    title: "Queen Hedvig Scholarship Laureate",
    description:
      "Polskie stypendium im. Królowej Jadwigi dla najlepszych uczniów, połączone z wyjazdem naukowym do Stanford University.",
  },
  {
    year: "2021–2024",
    title: "PGE Scholar",
    description:
      "Trzykrotny stypendysta PGE (2021, 2022, 2024) za czołowe miejsce w klasie.",
  },
];

const skills: { category: string; items: string[] }[] = [
  {
    category: "Languages",
    items: ["Python", "C++", "Java", "Scala", "Assembly"],
  },
  {
    category: "ML / AI",
    items: ["PyTorch", "LLM Fine-tuning", "Machine Learning", "Spark"],
  },
  {
    category: "Algorithms",
    items: ["Data Structures", "Algorithm Design", "Competitive Programming"],
  },
  {
    category: "Other",
    items: ["Next.js", "TypeScript", "Git", "Embedded Systems"],
  },
];

export default function Accomplishments() {
  return (
    <section id="accomplishments" className="py-24 bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">Accomplishments</h2>
        <p className="text-zinc-500 mb-12 text-sm">
          Awards, olympiads, and recognition.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Timeline */}
          <ul className="flex flex-col gap-5">
            {awards.map((a, i) => (
              <li key={i} className="flex gap-4 group">
                <span className="font-mono text-xs text-indigo-400 pt-1 shrink-0 w-14 leading-tight">
                  {a.year}
                </span>
                <div className="border-l border-zinc-800 pl-4 group-hover:border-indigo-700 transition-colors">
                  <h3 className="font-semibold text-zinc-100 text-sm">{a.title}</h3>
                  <p className="text-xs text-zinc-400 mt-1 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Skills grid */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-5">
                Tech Stack
              </p>
              <div className="flex flex-col gap-5">
                {skills.map((group) => (
                  <div key={group.category}>
                    <p className="text-xs text-zinc-500 mb-2 font-mono">
                      {group.category}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-3 py-1 rounded-full bg-zinc-800 text-zinc-300 hover:bg-indigo-900/50 hover:text-indigo-300 transition-colors cursor-default"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience card */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-4">
                Experience
              </p>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-600/40 flex items-center justify-center text-indigo-400 font-bold text-sm shrink-0">
                  E
                </div>
                <div>
                  <p className="font-semibold text-zinc-100 text-sm">
                    Implementations Engineer
                  </p>
                  <p className="text-indigo-400 text-xs font-mono">
                    Epoch · TU Delft
                  </p>
                  <p className="text-zinc-500 text-xs mt-1">Oct 2025 – present</p>
                  <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                    Budowanie, wdrażanie i utrzymywanie infrastruktury ML
                    w studenckim centrum badań AI na TU Delft.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
