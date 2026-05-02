export default function Hero() {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center max-w-5xl mx-auto px-6 pt-20"
    >
      <p className="text-sm font-mono text-indigo-400 mb-4 tracking-widest uppercase">
        Hello, I&apos;m
      </p>
      <h1 className="text-5xl sm:text-7xl font-bold tracking-tight text-zinc-100 mb-6">
        Lukasz<br />Kasprzak
      </h1>
      <p className="text-xl text-zinc-400 max-w-xl leading-relaxed mb-10">
        {/*
          TODO: Fill in your tagline / role / research focus.
          Example: "MSc student at TU Delft researching X."
        */}
        Student at TU Delft. Passionate about engineering, research, and building
        things that matter.
      </p>
      <div className="flex gap-4 flex-wrap">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium transition-colors"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full border border-zinc-700 hover:border-zinc-500 text-zinc-300 text-sm font-medium transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
}
