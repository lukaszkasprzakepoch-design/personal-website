const socials = [
  // Add your real links below. Remove any you don't use.
  { label: "GitHub", href: "https://github.com/REPLACE_ME" },
  { label: "LinkedIn", href: "https://linkedin.com/in/REPLACE_ME" },
  { label: "Email", href: "mailto:L.G.Kasprzak@student.tudelft.nl" },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-zinc-100 mb-4">Get in Touch</h2>
        <p className="text-zinc-400 max-w-md mx-auto mb-10 leading-relaxed">
          Whether you have a question, want to collaborate, or just want to say
          hi — my inbox is open.
        </p>
        <div className="flex justify-center gap-6 flex-wrap">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="px-5 py-2.5 rounded-full border border-zinc-700 text-zinc-300 text-sm hover:border-indigo-500 hover:text-indigo-400 transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
      <p className="text-center text-zinc-700 text-xs mt-16">
        © {new Date().getFullYear()} Lukasz Kasprzak
      </p>
    </section>
  );
}
