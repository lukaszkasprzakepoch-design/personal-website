// Fill in your real accomplishments. The ResultCard slot below is ready for
// charts, tables, or metric displays you can plug in later.

const accomplishments = [
  {
    year: "2024",
    title: "Accomplishment One",
    description:
      "Describe what you achieved, where, and why it was significant.",
  },
  {
    year: "2023",
    title: "Accomplishment Two",
    description: "Another achievement. Awards, publications, competitions, etc.",
  },
  {
    year: "2023",
    title: "Accomplishment Three",
    description: "Add as many as you need.",
  },
];

function ResultCard() {
  // TODO: Replace this placeholder with real results — charts, tables, metrics.
  // Suggested libraries: recharts, tremor, @visx/xychart
  return (
    <div className="rounded-2xl border border-dashed border-zinc-700 bg-zinc-900/50 p-8 flex items-center justify-center text-zinc-500 text-sm">
      📊 Results / Data Visualization — coming soon
    </div>
  );
}

export default function Accomplishments() {
  return (
    <section id="accomplishments" className="py-24 bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-zinc-100 mb-2">Accomplishments</h2>
        <p className="text-zinc-500 mb-12 text-sm">
          Recognition, milestones, and results.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Timeline */}
          <ul className="flex flex-col gap-6">
            {accomplishments.map((a, i) => (
              <li key={i} className="flex gap-4">
                <span className="font-mono text-xs text-indigo-400 pt-1 shrink-0 w-10">
                  {a.year}
                </span>
                <div>
                  <h3 className="font-semibold text-zinc-100">{a.title}</h3>
                  <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>

          {/* Results slot */}
          <ResultCard />
        </div>
      </div>
    </section>
  );
}
