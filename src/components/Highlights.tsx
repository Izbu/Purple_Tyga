import { motion } from "framer-motion";
import { Play, Youtube } from "lucide-react";
const clips = [
  { id: "D7rSiifQV-8", url: "https://www.youtube.com/watch?v=D7rSiifQV-8", title: "The Night We Met", category: "Stream Highlight" },
  { id: "SPeN-p1QObo", url: "https://www.youtube.com/watch?v=SPeN-p1QObo", title: "Well Aint That Interesting", category: "Zion City Live" },
  { id: "6SkX76DIXRA", url: "https://www.youtube.com/watch?v=6SkX76DIXRA", title: "Sunsets and Palms", category: "Zion City Live" },
  { id: "B7MTKPApdmg", url: "https://www.youtube.com/watch?v=B7MTKPApdmg", title: "Working Up An Appetite", category: "Zion City Live" },
  { id: "-qYS-x03zRU", url: "https://www.youtube.com/watch?v=-qYS-x03zRU", title: "It Is Time", category: "Zion City Live" },
  { id: "D7rSiifQV-8", url: "https://www.youtube.com/watch?v=D7rSiifQV-8&t=7s", title: "The Night We Met", category: "Stream Highlight" },
];


export function Highlights() {
  return (
    <section id="highlights" className="relative overflow-hidden bg-black py-32">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 flex flex-col items-center justify-center gap-4 text-center"
        >
          <div className="font-display text-[10px] uppercase tracking-[0.5em] text-primary-glow">
            / 01 — Media Vault
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white" style={{ fontFamily: '"Road Rage", sans-serif' }}>
            Stream <span className="text-glow text-primary-glow">Highlights</span>
          </h2>
          <a
            href="https://www.youtube.com/@PurpleTyga"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-3 font-display text-xs uppercase tracking-[0.3em] text-white/70 transition-colors hover:text-white"
          >
            View All <span className="text-primary-glow transition-transform group-hover:translate-x-1">→</span>
          </a>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {clips.map((clip, i) => (
            <motion.a
              key={i}
              href={clip.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative block aspect-video overflow-hidden rounded-sm border border-white/10 bg-card transition-all duration-500 hover:scale-[1.02] hover:border-primary/60 hover:shadow-[0_0_40px_rgba(166,32,208,0.4)]"
            >
              <img
                src={`https://img.youtube.com/vi/${clip.id}/maxresdefault.jpg`}
                alt={clip.title}
                loading="lazy"
                width={1280}
                height={720}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-primary/0 transition-colors duration-500 group-hover:bg-primary/20" />

              {/* Top row: YouTube badge */}
              <div className="absolute inset-x-0 top-0 flex items-center p-4">
                <span className="flex items-center gap-2 rounded-sm bg-black/70 px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.2em] text-white backdrop-blur">
                  <Youtube size={14} /> YouTube
                </span>
              </div>

              {/* Play button center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-primary-glow bg-primary/30 backdrop-blur-md shadow-[0_0_30px_rgba(166,32,208,0.6)]">
                  <Play size={20} fill="white" className="ml-0.5 text-white" />
                </div>
              </div>

              {/* Bottom: title + category */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="font-display text-[10px] uppercase tracking-[0.3em] text-primary-glow">
                  {clip.category}
                </div>
                <h3 className="mt-1 font-display text-xl font-bold uppercase tracking-tight text-white">
                  {clip.title}
                </h3>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}