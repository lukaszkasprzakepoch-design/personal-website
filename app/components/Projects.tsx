// Add your real projects to this array. Each entry renders a card automatically.
const projects = [
  {
    title: "Project Alpha",
    description:
      "A short description of what this project does and why it matters. Replace with your real work.",
    tags: ["Python", "Machine Learning"],
    href: "#",
  },
  {
    title: "Project Beta",
    description:
      "Another project. You can link to a GitHub repo, paper, or live demo.",
    tags: ["React", "TypeScript"],
    href: "#",
  },
  {
    title: "Project Gamma",
    description:
      "Third project placeholder. Add as many entries as you need — the grid handles layout.",
    tags: ["C++", "Robotics"],
    href: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-zinc-100 mb-2">Projects</h2>
      <p className="text-zinc-500 mb-12 text-sm">
        Things I&apos;ve built, researched, or contributed to.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.href}
            className="group flex flex-col gap-3 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 hover:border-indigo-600 transition-colors"
          >
            <h3 className="font-semibold text-zinc-100 group-hover:text-indigo-400 transition-colors">
              {p.title}
            </h3>
            <p className="text-sm text-zinc-400 leading-relaxed flex-1">
              {p.description}
            </p>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 rounded-full bg-zinc-800 text-zinc-400"
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
