"use client";

import { useLanguage } from "../contexts/LanguageContext";

const socials = [
  { label: "GitHub", href: "https://github.com/lukaszkasprzak", icon: "GH" },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/lukasz-kasprzak-0702a4275",
    icon: "in",
  },
  { label: "Email", href: "mailto:L.G.Kasprzak@student.tudelft.nl", icon: "@" },
  { label: "Phone", href: "tel:+48510956204", icon: "☎" },
];

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-zinc-100 mb-4">{t.contact.title}</h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
          {t.contact.subtitle}
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={
                s.href.startsWith("mailto") || s.href.startsWith("tel") ? undefined : "_blank"
              }
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm hover:border-indigo-500 hover:text-indigo-400 transition-colors"
            >
              <span className="font-mono text-xs text-zinc-500 group-hover:text-indigo-500 transition-colors">
                {s.icon}
              </span>
              {s.label}
            </a>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-center gap-2">
          <p className="text-zinc-600 text-xs font-mono">
            L.G.Kasprzak@student.tudelft.nl · +48 510 956 204
          </p>
          <p className="text-zinc-700 text-xs">
            © {new Date().getFullYear()} Lukasz Kasprzak · {t.contact.location}
          </p>
        </div>
      </div>
    </section>
  );
}
