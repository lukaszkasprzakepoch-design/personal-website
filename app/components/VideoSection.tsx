"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function VideoSection() {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t.video.title}</h2>
      <p className="text-zinc-500 mb-10 text-sm">{t.video.subtitle}</p>

      {t.video.items.length > 0 ? (
        <div className="flex flex-col gap-16">
          {t.video.items.map((v) => (
            <div key={v.youtubeId}>
              <div className="flex items-start justify-between gap-2 mb-1">
                <h3 className="font-semibold text-zinc-100">{v.title}</h3>
                <span className="font-mono text-xs text-zinc-500 shrink-0 pt-0.5">{v.year}</span>
              </div>
              <p className="text-sm text-zinc-400 mb-4">{v.caption}</p>
              <iframe
                src={`https://www.youtube.com/embed/${v.youtubeId}`}
                title={v.title}
                className="w-full aspect-video rounded-2xl border border-zinc-800"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full aspect-video rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-500 text-sm">
          {t.video.comingSoon}
        </div>
      )}
    </section>
  );
}
