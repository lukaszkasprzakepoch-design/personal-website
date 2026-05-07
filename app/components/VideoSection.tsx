"use client";

import { useLanguage } from "../contexts/LanguageContext";

export default function VideoSection() {
  const { t } = useLanguage();
  const hasVideo = true;

  return (
    <section id="demo" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-zinc-100 mb-2">{t.video.title}</h2>
      <p className="text-zinc-500 mb-10 text-sm">{t.video.subtitle}</p>

      {hasVideo ? (
        <iframe
          src="https://www.youtube.com/embed/p1-vPJxEEDE"
          className="w-full aspect-video rounded-2xl border border-zinc-800"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="w-full aspect-video rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-500 text-sm">
          {t.video.comingSoon}
        </div>
      )}
    </section>
  );
}
