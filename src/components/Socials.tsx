import { motion } from "framer-motion";
import { Youtube, Twitch, Instagram, Mail, Music2, MessageCircle } from "lucide-react";

const socials = [
  { name: "Instagram", handle: "@cartelclicks", stat: "Follow", color: "from-pink-500/30 to-primary/20", url: "https://www.instagram.com/cartelclicks/", Icon: Instagram },
  { name: "YouTube", handle: "@PurpleTyga", stat: "Subscribe", color: "from-red-500/30 to-primary/20", url: "https://www.youtube.com/@PurpleTyga", Icon: Youtube },
  { name: "Twitch", handle: "purpletygalive", stat: "Live Stream", color: "from-purple-600/30 to-primary/20", url: "https://www.twitch.tv/purpletygalive", Icon: Twitch },
  { name: "Spotify", handle: "PurpleTyga", stat: "Follow", color: "from-green-400/30 to-primary/20", url: "https://open.spotify.com/user/63dupxdjjke69qjlvm1ocyxfl?si=58817928af42432a", Icon: Music2 },
  { name: "Discord", handle: "Join The Cartel", stat: "Join Now", color: "from-indigo-500/30 to-primary/20", url: "https://discord.gg/vAfpggXVn", Icon: MessageCircle },
  { name: "Email", handle: "purpletyga97@gmail.com", stat: "Inquiries", color: "from-primary/30 to-primary/10", url: "mailto:purpletyga97@gmail.com", Icon: Mail },
];

export function Socials() {
  return (
    <section id="socials" className="relative overflow-hidden bg-black py-32">
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-primary/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[400px] w-[400px] rounded-full bg-primary-glow/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <div className="font-display text-[10px] uppercase tracking-[0.5em] text-primary-glow">
            / 02 — The Network
          </div>
          <h2 className="mt-4 text-5xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white" style={{ fontFamily: '"Road Rage", sans-serif' }}>
            Follow The <span className="text-glow text-primary-glow">Movement</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s, i) => (
            <motion.a
              key={s.name}
              href={s.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-sm border border-white/10 bg-gradient-to-br ${s.color} p-6 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-primary/60 hover:shadow-[0_20px_40px_-10px_rgba(166,32,208,0.5)]`}
            >
              <div className="absolute inset-0 bg-black/60 transition-colors duration-500 group-hover:bg-black/40" />

              {/* shimmer */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

              <div className="relative z-10 flex h-40 flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-sm border border-primary/40 bg-black/60 text-primary-glow transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(166,32,208,0.7)]">
                    <s.Icon size={20} />
                  </div>
                  <span className="rounded-sm border border-white/10 bg-black/60 px-2 py-1 font-display text-[9px] uppercase tracking-[0.2em] text-white/60">
                    {s.stat}
                  </span>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold uppercase tracking-tight text-white">
                    {s.name}
                  </div>
                  <div className="mt-1 truncate text-xs text-white/60">{s.handle}</div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}