"use client";

import { useState } from "react";
import { useLanguage } from "../contexts/LanguageContext";
import DiplomaModal from "./DiplomaModal";

const skillItems: string[][] = [
  ["Python", "C++", "Java", "Scala", "Assembly"],
  ["PyTorch", "LLM Fine-tuning", "Machine Learning", "Spark"],
  ["Data Structures", "Algorithm Design", "Competitive Programming"],
  ["Next.js", "TypeScript", "Git", "Embedded Systems"],
];

export default function Accomplishments() {
  const { t } = useLanguage();
  const [selectedDiploma, setSelectedDiploma] = useState<{ image: string; title: string } | null>(
    null
  );

  return (
    <>
      <section id="accomplishments" className="py-24 bg-zinc-900">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t.accomplishments.title}</h2>
          <p className="text-zinc-500 mb-12 text-sm">{t.accomplishments.subtitle}</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Timeline */}
            <ul className="flex flex-col gap-5">
              {t.accomplishments.awards.map((a, i) => {
                const hasInteraction = ("diploma" in a && a.diploma) || ("link" in a && a.link) || ("ref" in a && a.ref);
                const link = (("link" in a && a.link) || ("ref" in a && a.ref)) as string | undefined;

                return (
                  <li
                    key={i}
                    onClick={() => {
                      if ("diploma" in a && a.diploma) {
                        setSelectedDiploma({ image: a.diploma, title: a.title });
                      } else if (link && typeof link === "string") {
                        window.open(link, "_blank");
                      }
                    }}
                    className={`flex gap-4 group ${hasInteraction ? "cursor-pointer" : ""}`}
                  >
                    <span className="font-mono text-xs text-indigo-400 pt-1 shrink-0 w-14 leading-tight">
                      {a.year}
                    </span>
                    <div
                      className={`border-l pl-4 transition-colors ${
                        hasInteraction
                          ? "border-zinc-800 group-hover:border-indigo-700"
                          : "border-zinc-800"
                      }`}
                    >
                      <h3
                        className={`font-semibold text-sm ${
                          hasInteraction
                            ? "text-indigo-300 group-hover:text-indigo-200"
                            : "text-zinc-100"
                        }`}
                      >
                        {a.title}
                        {"diploma" in a && a.diploma && (
                          <span className="ml-2 text-xs text-indigo-400">📋</span>
                        )}
                        {link && (
                          <span className="ml-2 text-xs text-indigo-400">🔗</span>
                        )}
                      </h3>
                      <p className="text-xs text-zinc-400 mt-1 leading-relaxed">{a.description}</p>
                    </div>
                  </li>
                );
              })}
            </ul>

          {/* Skills grid */}
          <div className="flex flex-col gap-6">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
              <p className="text-xs font-mono text-zinc-500 tracking-widest uppercase mb-5">
                {t.accomplishments.techStack}
              </p>
              <div className="flex flex-col gap-5">
                {skillItems.map((items, i) => (
                  <div key={i}>
                    <p className="text-xs text-zinc-500 mb-2 font-mono">
                      {t.accomplishments.skillCategories[i]}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {items.map((item) => (
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
                {t.accomplishments.experience}
              </p>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-600/40 flex items-center justify-center text-indigo-400 font-bold text-sm shrink-0">
                  E
                </div>
                <div>
                  <p className="font-semibold text-zinc-100 text-sm">
                    {t.accomplishments.jobTitle}
                  </p>
                  <p className="text-indigo-400 text-xs font-mono">{t.accomplishments.company}</p>
                  <p className="text-zinc-500 text-xs mt-1">{t.accomplishments.jobPeriod}</p>
                  <p className="text-zinc-400 text-xs mt-2 leading-relaxed">
                    {t.accomplishments.jobDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <DiplomaModal
      isOpen={!!selectedDiploma}
      image={selectedDiploma?.image || ""}
      title={selectedDiploma?.title || ""}
      onClose={() => setSelectedDiploma(null)}
    />
    </>
  );
}
