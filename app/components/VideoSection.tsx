// TODO: Replace the placeholder below with a real video embed.
//
// Option A — YouTube embed:
//   <iframe
//     src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
//     className="w-full aspect-video rounded-2xl"
//     allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//     allowFullScreen
//   />
//
// Option B — Self-hosted with <video>:
//   <video src="/demo.mp4" controls className="w-full rounded-2xl" />
//
// Option C — Loom / Vimeo: replace the src above with their embed URL.

export default function VideoSection() {
  const hasVideo = false; // flip to true and add your src when ready

  return (
    <section id="demo" className="py-24 max-w-5xl mx-auto px-6">
      <h2 className="text-3xl font-bold text-zinc-100 mb-2">Demo</h2>
      <p className="text-zinc-500 mb-10 text-sm">
        Seeing is believing — a walkthrough of the work in action.
      </p>

      {hasVideo ? (
        <iframe
          src="https://www.youtube.com/embed/REPLACE_ME"
          className="w-full aspect-video rounded-2xl border border-zinc-800"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div className="w-full aspect-video rounded-2xl border border-dashed border-zinc-700 bg-zinc-900 flex items-center justify-center text-zinc-500 text-sm">
          🎬 Video demo — coming soon
        </div>
      )}
    </section>
  );
}
